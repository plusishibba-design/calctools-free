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
//   FV = P(1+r/n)^(nt) + C * [((1+r/n)^(nt) - 1) / (r/n)]
// Where:
//   P = principal, r = annual rate (decimal), n = compounding periods/year,
//   t = years, C = contribution per period
export function calcFutureValue(principal, annualRatePct, years, monthlyContribution = 0) {
  const r = annualRatePct / 100;
  const n = 12; // monthly compounding
  const t = years;
  if (t <= 0) return principal;
  if (r === 0) return principal + monthlyContribution * n * t;
  const nt = n * t;
  const periodic = r / n;
  const fvPrincipal = principal * Math.pow(1 + periodic, nt);
  const fvContrib = monthlyContribution * (Math.pow(1 + periodic, nt) - 1) / periodic;
  return fvPrincipal + fvContrib;
}
