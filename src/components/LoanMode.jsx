import React, { useState, useMemo } from 'react';
import { useLanguage } from '../LanguageContext';
import { CURRENCIES, formatCurrency, calcMonthlyPayment } from '../utils/finance';

function LoanMode() {
  const { t } = useLanguage();
  const [principal, setPrincipal] = useState('25000');
  const [rate, setRate] = useState('7.5');
  const [years, setYears] = useState('5');
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
          <label htmlFor="l-principal">{t('loan.fieldPrincipal')}</label>
          <input
            id="l-principal"
            type="number"
            inputMode="decimal"
            min="0"
            step="500"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
          />
        </div>

        <div className="calc-field">
          <label htmlFor="l-rate">{t('loan.fieldRate')}</label>
          <input
            id="l-rate"
            type="number"
            inputMode="decimal"
            min="0"
            max="40"
            step="0.05"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
        </div>

        <div className="calc-field">
          <label htmlFor="l-years">{t('loan.fieldTerm')}</label>
          <input
            id="l-years"
            type="number"
            inputMode="numeric"
            min="1"
            max="30"
            step="1"
            value={years}
            onChange={(e) => setYears(e.target.value)}
          />
        </div>

        <div className="calc-field">
          <label htmlFor="l-currency">{t('loan.fieldCurrency')}</label>
          <select
            id="l-currency"
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
          <span className="label">{t('loan.resultLabel')}</span>
          <span className="value">
            <em>{formatCurrency(result.monthly, cur.code, cur.locale)}</em>
          </span>
        </div>

        <div className="calc-result-grid">
          <div className="item">
            <span className="label">{t('loan.totalInterest')}</span>
            <span className="value">{formatCurrency(result.totalInterest, cur.code, cur.locale)}</span>
          </div>
          <div className="item">
            <span className="label">{t('loan.totalCost')}</span>
            <span className="value">{formatCurrency(result.totalCost, cur.code, cur.locale)}</span>
          </div>
          <div className="item">
            <span className="label">{t('loan.payoffDate')}</span>
            <span className="value tabular">{result.months}</span>
          </div>
        </div>

        <p style={{
          marginTop: '1.25rem', marginBottom: 0,
          fontSize: '0.82rem', color: 'var(--color-ink-soft)',
          fontStyle: 'italic', lineHeight: 1.6,
          fontFamily: 'var(--font-serif)'
        }}>
          {t('loan.assumptions')}
        </p>
      </div>
    </div>
  );
}

export default LoanMode;
