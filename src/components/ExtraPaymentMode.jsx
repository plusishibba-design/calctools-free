import React, { useState, useMemo } from 'react';
import { useLanguage } from '../LanguageContext';
import { CURRENCIES, formatCurrency, calcMonthlyPayment, calcPayoff } from '../utils/finance';
import FormattedInput from './inputs/FormattedInput';

function ExtraPaymentMode() {
  const { t } = useLanguage();
  const [principal, setPrincipal] = useState('300000');
  const [rate, setRate] = useState('6.5');
  const [years, setYears] = useState('30');
  const [extra, setExtra] = useState('200');
  const [currency, setCurrency] = useState('USD');

  const result = useMemo(() => {
    const p = parseFloat(principal) || 0;
    const r = parseFloat(rate) || 0;
    const y = parseFloat(years) || 0;
    const e = parseFloat(extra) || 0;
    const baseMonthly = calcMonthlyPayment(p, r, y);
    const baseTotalInterest = baseMonthly * y * 12 - p;
    const baseMonths = y * 12;

    const newMonthly = baseMonthly + e;
    const payoff = calcPayoff(p, r, newMonthly);
    const monthsSaved = isFinite(payoff.months) ? baseMonths - payoff.months : 0;
    const interestSaved = isFinite(payoff.totalInterest) ? baseTotalInterest - payoff.totalInterest : 0;

    return { baseMonthly, newMonthly, baseMonths, newMonths: payoff.months, monthsSaved, interestSaved };
  }, [principal, rate, years, extra]);

  const cur = CURRENCIES.find(c => c.code === currency) || CURRENCIES[0];

  return (
    <div>
      <form className="calc-form" onSubmit={(e) => e.preventDefault()}>
        <div className="calc-field">
          <label htmlFor="ex-principal">{t('extra.fieldPrincipal')}</label>
          <FormattedInput id="ex-principal" prefix={cur.symbol}
            value={principal} onChange={setPrincipal} />
        </div>
        <div className="calc-field">
          <label htmlFor="ex-rate">{t('extra.fieldRate')}</label>
          <FormattedInput id="ex-rate" suffix="%" decimal
            value={rate} onChange={setRate} />
        </div>
        <div className="calc-field">
          <label htmlFor="ex-years">{t('extra.fieldTerm')}</label>
          <FormattedInput id="ex-years" suffix={t('unit.year')}
            value={years} onChange={setYears} />
        </div>
        <div className="calc-field">
          <label htmlFor="ex-extra">{t('extra.fieldExtra')}</label>
          <FormattedInput id="ex-extra" prefix={cur.symbol}
            value={extra} onChange={setExtra} />
        </div>
        <div className="calc-field full">
          <label htmlFor="ex-currency">{t('extra.fieldCurrency')}</label>
          <select id="ex-currency" value={currency} onChange={(e) => setCurrency(e.target.value)}>
            {CURRENCIES.map(c => (<option key={c.code} value={c.code}>{c.code}</option>))}
          </select>
        </div>
      </form>

      <div className="calc-result" data-reveal>
        <div className="calc-result-primary">
          <span className="label">{t('extra.monthsSaved')}</span>
          <span className="value">
            <em>{result.monthsSaved} {t('extra.months')}</em>
          </span>
        </div>
        <div className="calc-result-grid">
          <div className="item">
            <span className="label">{t('extra.interestSaved')}</span>
            <span className="value">{formatCurrency(result.interestSaved, cur.code, cur.locale)}</span>
          </div>
          <div className="item">
            <span className="label">{t('extra.newPayoff')}</span>
            <span className="value tabular">{result.newMonths}</span>
          </div>
          <div className="item">
            <span className="label">{t('extra.newMonthly')}</span>
            <span className="value">{formatCurrency(result.newMonthly, cur.code, cur.locale)}</span>
          </div>
        </div>
        <p style={{ marginTop: '1.25rem', marginBottom: 0, fontSize: '0.82rem', color: 'var(--color-ink-soft)', fontStyle: 'italic', lineHeight: 1.6, fontFamily: 'var(--font-serif)' }}>
          {t('extra.assumptions')}
        </p>
      </div>
    </div>
  );
}

export default ExtraPaymentMode;
