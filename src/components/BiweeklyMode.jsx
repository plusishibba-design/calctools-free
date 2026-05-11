import React, { useState, useMemo } from 'react';
import { useLanguage } from '../LanguageContext';
import { CURRENCIES, formatCurrency, calcMonthlyPayment, calcPayoff } from '../utils/finance';
import FormattedInput from './inputs/FormattedInput';

function BiweeklyMode() {
  const { t } = useLanguage();
  const [principal, setPrincipal] = useState('300000');
  const [rate, setRate] = useState('6.5');
  const [years, setYears] = useState('30');
  const [currency, setCurrency] = useState('USD');

  const result = useMemo(() => {
    const p = parseFloat(principal) || 0;
    const r = parseFloat(rate) || 0;
    const y = parseFloat(years) || 0;
    const monthlyPayment = calcMonthlyPayment(p, r, y);
    const biweeklyPayment = monthlyPayment / 2;
    // Biweekly = 26 payments/yr = effectively 13 monthly payments/yr.
    // Approximate by simulating monthly equivalent: (26 * biweekly) / 12 = monthly * 13/12.
    const monthlyEquivalent = (biweeklyPayment * 26) / 12;
    const baseTotalInterest = monthlyPayment * y * 12 - p;
    const baseMonths = y * 12;
    const payoff = calcPayoff(p, r, monthlyEquivalent);
    const monthsSaved = isFinite(payoff.months) ? baseMonths - payoff.months : 0;
    const interestSaved = isFinite(payoff.totalInterest) ? baseTotalInterest - payoff.totalInterest : 0;
    return { monthlyPayment, biweeklyPayment, baseMonths, newMonths: payoff.months, monthsSaved, interestSaved };
  }, [principal, rate, years]);

  const cur = CURRENCIES.find(c => c.code === currency) || CURRENCIES[0];

  return (
    <div>
      <form className="calc-form" onSubmit={(e) => e.preventDefault()}>
        <div className="calc-field">
          <label htmlFor="bw-principal">{t('biweekly.fieldPrincipal')}</label>
          <FormattedInput id="bw-principal" prefix={cur.symbol}
            value={principal} onChange={setPrincipal} />
        </div>
        <div className="calc-field">
          <label htmlFor="bw-rate">{t('biweekly.fieldRate')}</label>
          <FormattedInput id="bw-rate" suffix="%" decimal
            value={rate} onChange={setRate} />
        </div>
        <div className="calc-field">
          <label htmlFor="bw-years">{t('biweekly.fieldTerm')}</label>
          <FormattedInput id="bw-years" suffix={t('unit.year')}
            value={years} onChange={setYears} />
        </div>
        <div className="calc-field">
          <label htmlFor="bw-currency">{t('biweekly.fieldCurrency')}</label>
          <select id="bw-currency" value={currency} onChange={(e) => setCurrency(e.target.value)}>
            {CURRENCIES.map(c => (<option key={c.code} value={c.code}>{c.code}</option>))}
          </select>
        </div>
      </form>

      <div className="calc-result" data-reveal>
        <div className="calc-result-primary">
          <span className="label">{t('biweekly.biweeklyPayment')}</span>
          <span className="value">
            <em>{formatCurrency(result.biweeklyPayment, cur.code, cur.locale)}</em>
          </span>
        </div>
        <div className="calc-result-grid">
          <div className="item">
            <span className="label">{t('biweekly.monthlyEquiv')}</span>
            <span className="value">{formatCurrency(result.monthlyPayment, cur.code, cur.locale)}</span>
          </div>
          <div className="item">
            <span className="label">{t('biweekly.monthsSaved')}</span>
            <span className="value tabular">{result.monthsSaved}</span>
          </div>
          <div className="item">
            <span className="label">{t('biweekly.interestSaved')}</span>
            <span className="value">{formatCurrency(result.interestSaved, cur.code, cur.locale)}</span>
          </div>
        </div>
        <p style={{ marginTop: '1.25rem', marginBottom: 0, fontSize: '0.82rem', color: 'var(--color-ink-soft)', fontStyle: 'italic', lineHeight: 1.6, fontFamily: 'var(--font-serif)' }}>
          {t('biweekly.assumptions')}
        </p>
      </div>
    </div>
  );
}

export default BiweeklyMode;
