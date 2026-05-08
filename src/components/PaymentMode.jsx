import React, { useState, useMemo } from 'react';
import { useLanguage } from '../LanguageContext';

const CURRENCIES = [
  { code: 'USD', symbol: '$', locale: 'en-US' },
  { code: 'JPY', symbol: '¥', locale: 'ja-JP' },
  { code: 'VND', symbol: '₫', locale: 'vi-VN' },
  { code: 'EUR', symbol: '€', locale: 'en-IE' },
  { code: 'GBP', symbol: '£', locale: 'en-GB' },
  { code: 'IDR', symbol: 'Rp', locale: 'id-ID' },
  { code: 'CNY', symbol: '¥', locale: 'zh-CN' },
];

function formatCurrency(value, currencyCode, locale) {
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

function calcMonthlyPayment(principal, annualRatePct, years) {
  const r = annualRatePct / 100 / 12;
  const n = years * 12;
  if (principal <= 0 || n <= 0) return 0;
  if (r === 0) return principal / n;
  // Standard PMT formula: P * r / (1 - (1+r)^-n)
  return principal * r / (1 - Math.pow(1 + r, -n));
}

function PaymentMode() {
  const { t } = useLanguage();
  const [principal, setPrincipal] = useState('300000');
  const [rate, setRate] = useState('6.5');
  const [years, setYears] = useState('30');
  const [currency, setCurrency] = useState('USD');

  const result = useMemo(() => {
    const p = parseFloat(principal) || 0;
    const r = parseFloat(rate) || 0;
    const y = parseFloat(years) || 0;
    const monthly = calcMonthlyPayment(p, r, y);
    const totalCost = monthly * y * 12;
    const totalInterest = totalCost - p;
    return { monthly, totalCost, totalInterest, months: y * 12 };
  }, [principal, rate, years]);

  const cur = CURRENCIES.find(c => c.code === currency) || CURRENCIES[0];

  return (
    <div>
      <form className="calc-form" onSubmit={(e) => e.preventDefault()}>
        <div className="calc-field">
          <label htmlFor="principal">{t('payment.fieldPrincipal')}</label>
          <input
            id="principal"
            type="number"
            inputMode="decimal"
            min="0"
            step="1000"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
          />
        </div>

        <div className="calc-field">
          <label htmlFor="rate">{t('payment.fieldRate')}</label>
          <input
            id="rate"
            type="number"
            inputMode="decimal"
            min="0"
            max="30"
            step="0.05"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
        </div>

        <div className="calc-field">
          <label htmlFor="years">{t('payment.fieldTerm')}</label>
          <input
            id="years"
            type="number"
            inputMode="numeric"
            min="1"
            max="50"
            step="1"
            value={years}
            onChange={(e) => setYears(e.target.value)}
          />
        </div>

        <div className="calc-field">
          <label htmlFor="currency">{t('payment.fieldCurrency')}</label>
          <select
            id="currency"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            {CURRENCIES.map(c => (
              <option key={c.code} value={c.code}>{c.code}</option>
            ))}
          </select>
        </div>
      </form>

      <div className="calc-result" data-reveal>
        <div className="calc-result-primary">
          <span className="label">{t('payment.resultLabel')}</span>
          <span className="value">
            <em>{formatCurrency(result.monthly, cur.code, cur.locale)}</em>
          </span>
        </div>

        <div className="calc-result-grid">
          <div className="item">
            <span className="label">{t('payment.totalInterest')}</span>
            <span className="value">{formatCurrency(result.totalInterest, cur.code, cur.locale)}</span>
          </div>
          <div className="item">
            <span className="label">{t('payment.totalCost')}</span>
            <span className="value">{formatCurrency(result.totalCost, cur.code, cur.locale)}</span>
          </div>
          <div className="item">
            <span className="label">{t('payment.payoffDate')}</span>
            <span className="value tabular">{result.months}</span>
          </div>
        </div>

        <p style={{
          marginTop: '1.25rem', marginBottom: 0,
          fontSize: '0.82rem', color: 'var(--color-ink-soft)',
          fontStyle: 'italic', lineHeight: 1.6,
          fontFamily: 'var(--font-serif)'
        }}>
          {t('payment.assumptions')}
        </p>
      </div>
    </div>
  );
}

export default PaymentMode;
