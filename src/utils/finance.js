// Shared finance formulas used by multiple calculator modes.

export const CURRENCIES = [
  { code: 'USD', symbol: '$', locale: 'en-US' },
  { code: 'JPY', symbol: '¥', locale: 'ja-JP' },
  { code: 'VND', symbol: '₫', locale: 'vi-VN' },
  { code: 'EUR', symbol: '€', locale: 'en-IE' },
  { code: 'GBP', symbol: '£', locale: 'en-GB' },
  { code: 'IDR', symbol: 'Rp', locale: 'id-ID' },
  { code: 'CNY', symbol: '¥', locale: 'zh-CN' },
];

export function formatCurrency(value, currencyCode, locale) {
  if (!isFinite(value)) return '—';
  try {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currencyCode,
      maximumFractionDigits: currencyCode === 'JPY' || currencyCode === 'VND' || currencyCode === 'IDR' ? 0 : 2,
    }).format(value);
  } catch {
    return value.toFixed(2);
  }
}

export function formatPercent(value, locale = 'en-US', digits = 2) {
  if (!isFinite(value)) return '—';
  try {
    return new Intl.NumberFormat(locale, {
      style: 'percent',
      minimumFractionDigits: digits,
      maximumFractionDigits: digits,
    }).format(value);
  } catch {
    return (value * 100).toFixed(digits) + '%';
  }
}

// Standard PMT formula — fully amortizing fixed-rate loan.
// Returns the monthly payment.
export function calcMonthlyPayment(principal, annualRatePct, years) {
  const r = annualRatePct / 100 / 12;
  const n = years * 12;
  if (principal <= 0 || n <= 0) return 0;
  if (r === 0) return principal / n;
  return principal * r / (1 - Math.pow(1 + r, -n));
}

// Compound interest with optional periodic contributions (deposited at end of period).
// Returns future value.
export function calcFutureValue(principal, annualRatePct, years, monthlyContribution = 0) {
  const r = annualRatePct / 100;
  const n = 12;
  const t = years;
  if (t <= 0) return principal;
  if (r === 0) return principal + monthlyContribution * n * t;
  const nt = n * t;
  const periodic = r / n;
  const fvPrincipal = principal * Math.pow(1 + periodic, nt);
  const fvContrib = monthlyContribution * (Math.pow(1 + periodic, nt) - 1) / periodic;
  return fvPrincipal + fvContrib;
}

// Build an amortization schedule.
// Returns: array of { month, payment, principal, interest, balance } from month 1 .. n.
export function calcAmortization(principal, annualRatePct, years) {
  const r = annualRatePct / 100 / 12;
  const n = years * 12;
  if (principal <= 0 || n <= 0) return [];
  const payment = calcMonthlyPayment(principal, annualRatePct, years);
  const schedule = [];
  let balance = principal;
  for (let m = 1; m <= n; m++) {
    const interest = balance * r;
    let principalPart = payment - interest;
    if (m === n) principalPart = balance;
    balance -= principalPart;
    if (balance < 0) balance = 0;
    schedule.push({
      month: m,
      payment,
      principal: principalPart,
      interest,
      balance,
    });
  }
  return schedule;
}

// Months to pay off a loan with a fixed monthly payment that may include extra principal.
// Returns { months, totalInterest, totalPaid }
export function calcPayoff(principal, annualRatePct, monthlyPayment) {
  const r = annualRatePct / 100 / 12;
  if (principal <= 0) return { months: 0, totalInterest: 0, totalPaid: 0 };
  if (monthlyPayment <= principal * r) {
    // Payment doesn't even cover interest; effectively never pays off.
    return { months: Infinity, totalInterest: Infinity, totalPaid: Infinity };
  }
  if (r === 0) {
    const months = Math.ceil(principal / monthlyPayment);
    return { months, totalInterest: 0, totalPaid: principal };
  }
  // n = -log(1 - P*r/PMT) / log(1+r)
  const n = -Math.log(1 - (principal * r) / monthlyPayment) / Math.log(1 + r);
  const months = Math.ceil(n);
  let balance = principal;
  let totalInterest = 0;
  let totalPaid = 0;
  for (let m = 1; m <= months; m++) {
    const interest = balance * r;
    let principalPart = monthlyPayment - interest;
    if (m === months) principalPart = balance;
    const actualPayment = Math.min(monthlyPayment, balance + interest);
    balance -= principalPart;
    if (balance < 0) balance = 0;
    totalInterest += interest;
    totalPaid += actualPayment;
  }
  return { months, totalInterest, totalPaid };
}

// CAGR (Compound Annual Growth Rate) = (end/begin)^(1/years) - 1
export function calcCAGR(beginValue, endValue, years) {
  if (beginValue <= 0 || years <= 0) return 0;
  return Math.pow(endValue / beginValue, 1 / years) - 1;
}

// Years (fractional) to reach a savings target with monthly contributions and compound interest.
//   FV = P(1+r/n)^(nt) + C * [((1+r/n)^(nt) - 1) / (r/n)]
//   Solve for t given target FV.
// Returns { months, totalContrib, totalInterest } or null if unreachable.
export function calcSavingsGoal(target, principal, monthlyContribution, annualRatePct) {
  if (target <= principal) return { months: 0, totalContrib: principal, totalInterest: 0 };
  const r = annualRatePct / 100 / 12;
  const C = monthlyContribution;
  const P = principal;
  if (r === 0) {
    if (C <= 0) return null;
    const months = Math.ceil((target - P) / C);
    return {
      months,
      totalContrib: P + C * months,
      totalInterest: 0,
    };
  }
  if (C === 0) {
    if (P <= 0) return null;
    const months = Math.log(target / P) / Math.log(1 + r);
    if (!isFinite(months) || months < 0) return null;
    const m = Math.ceil(months);
    return {
      months: m,
      totalContrib: P,
      totalInterest: target - P,
    };
  }
  // Solve: P(1+r)^m + C*((1+r)^m - 1)/r = target
  // (1+r)^m * (P + C/r) = target + C/r
  // m = log((target + C/r) / (P + C/r)) / log(1+r)
  const numerator = Math.log((target + C / r) / (P + C / r));
  const denominator = Math.log(1 + r);
  const monthsExact = numerator / denominator;
  if (!isFinite(monthsExact) || monthsExact < 0) return null;
  const months = Math.ceil(monthsExact);
  const totalContrib = P + C * months;
  const fv = calcFutureValue(P, annualRatePct, months / 12, C);
  const totalInterest = fv - totalContrib;
  return { months, totalContrib, totalInterest };
}

// Affordability — 28/36 DTI rule
//   Front-end: monthly housing (PITI) <= 28% of gross monthly income
//   Back-end:  monthly housing + other debts <= 36% of gross monthly income
// Use the more constraining of the two.
// Returns the maximum loan amount (principal) you qualify for at given rate/term.
export function calcAffordability({
  annualIncome,
  monthlyDebts = 0,
  downPayment = 0,
  annualRatePct,
  years,
  taxInsuranceMonthly = 0,
  frontEnd = 0.28,
  backEnd = 0.36,
}) {
  const monthlyIncome = annualIncome / 12;
  const maxFrontPI = monthlyIncome * frontEnd - taxInsuranceMonthly;
  const maxBackPI = monthlyIncome * backEnd - monthlyDebts - taxInsuranceMonthly;
  const maxPI = Math.max(0, Math.min(maxFrontPI, maxBackPI));
  // Reverse PMT: P = PMT * (1 - (1+r)^-n) / r
  const r = annualRatePct / 100 / 12;
  const n = years * 12;
  let maxLoan;
  if (r === 0) {
    maxLoan = maxPI * n;
  } else {
    maxLoan = maxPI * (1 - Math.pow(1 + r, -n)) / r;
  }
  const maxHomePrice = maxLoan + downPayment;
  return {
    maxLoan: Math.max(0, maxLoan),
    maxHomePrice: Math.max(0, maxHomePrice),
    maxMonthlyPayment: maxPI + taxInsuranceMonthly,
    constraint: maxFrontPI <= maxBackPI ? 'front' : 'back',
  };
}
