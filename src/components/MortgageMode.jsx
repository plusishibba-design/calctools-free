import React, { useState, useMemo } from 'react';
import { useLanguage } from '../LanguageContext';
import { CURRENCIES, formatCurrency, calcMonthlyPayment } from '../utils/finance';
import FormattedInput from './inputs/FormattedInput';

function MortgageMode() {
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
          <label htmlFor="m-principal">{t('mortgage.fieldPrincipal')}</label>
          <FormattedInput id="m-principal" prefix={cur.symbol}
            value={principal} onChange={setPrincipal} />
        </div>

        <div className="calc-field">
          <label htmlFor="m-rate">{t('mortgage.fieldRate')}</label>
          <FormattedInput id="m-rate" suffix="%" decimal
            value={rate} onChange={setRate} />
        </div>

        <div className="calc-field">
          <label htmlFor="m-years">{t('mortgage.fieldTerm')}</label>
          <FormattedInput id="m-years" suffix={t('unit.year')}
            value={years} onChange={setYears} />
        </div>

        <div className="calc-field">
          <label htmlFor="m-currency">{t('mortgage.fieldCurrency')}</label>
          <select
            id="m-currency"
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
          <span className="label">{t('mortgage.resultLabel')}</span>
          <span className="value">
            <em>{formatCurrency(result.monthly, cur.code, cur.locale)}</em>
          </span>
        </div>

        <div className="calc-result-grid">
          <div className="item">
            <span className="label">{t('mortgage.totalInterest')}</span>
            <span className="value">{formatCurrency(result.totalInterest, cur.code, cur.locale)}</span>
          </div>
          <div className="item">
            <span className="label">{t('mortgage.totalCost')}</span>
            <span className="value">{formatCurrency(result.totalCost, cur.code, cur.locale)}</span>
          </div>
          <div className="item">
            <span className="label">{t('mortgage.payoffDate')}</span>
            <span className="value tabular">{result.months}</span>
          </div>
        </div>

        <p style={{
          marginTop: '1.25rem', marginBottom: 0,
          fontSize: '0.82rem', color: 'var(--color-ink-soft)',
          fontStyle: 'italic', lineHeight: 1.6,
          fontFamily: 'var(--font-serif)'
        }}>
          {t('mortgage.assumptions')}
        </p>
      </div>
    </div>
  );
}

export default MortgageMode;
