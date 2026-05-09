import React, { useState, useMemo } from 'react';
import { useLanguage } from '../LanguageContext';
import { CURRENCIES, formatCurrency, calcMonthlyPayment } from '../utils/finance';

function RefinanceMode() {
  const { t } = useLanguage();
  const [currentBalance, setCurrentBalance] = useState('250000');
  const [currentRate, setCurrentRate] = useState('7.0');
  const [currentRemainYears, setCurrentRemainYears] = useState('25');
  const [newRate, setNewRate] = useState('5.5');
  const [newYears, setNewYears] = useState('30');
  const [closingCosts, setClosingCosts] = useState('5000');
  const [currency, setCurrency] = useState('USD');

  const result = useMemo(() => {
    const balance = parseFloat(currentBalance) || 0;
    const cRate = parseFloat(currentRate) || 0;
    const cYears = parseFloat(currentRemainYears) || 0;
    const nRate = parseFloat(newRate) || 0;
    const nYears = parseFloat(newYears) || 0;
    const fees = parseFloat(closingCosts) || 0;

    const currentPayment = calcMonthlyPayment(balance, cRate, cYears);
    const newPayment = calcMonthlyPayment(balance, nRate, nYears);
    const monthlySavings = currentPayment - newPayment;
    const breakEvenMonths = monthlySavings > 0 ? Math.ceil(fees / monthlySavings) : Infinity;
    const oldTotalInterest = currentPayment * cYears * 12 - balance;
    const newTotalInterest = newPayment * nYears * 12 - balance;
    const lifetimeSavings = oldTotalInterest - newTotalInterest - fees;

    return { currentPayment, newPayment, monthlySavings, breakEvenMonths, lifetimeSavings };
  }, [currentBalance, currentRate, currentRemainYears, newRate, newYears, closingCosts]);

  const cur = CURRENCIES.find(c => c.code === currency) || CURRENCIES[0];

  return (
    <div>
      <form className="calc-form" onSubmit={(e) => e.preventDefault()}>
        <div className="calc-field">
          <label htmlFor="r-balance">{t('refinance.fieldBalance')}</label>
          <input id="r-balance" type="number" inputMode="decimal" min="0" step="1000"
            value={currentBalance} onChange={(e) => setCurrentBalance(e.target.value)} />
        </div>
        <div className="calc-field">
          <label htmlFor="r-currentRate">{t('refinance.fieldCurrentRate')}</label>
          <input id="r-currentRate" type="number" inputMode="decimal" min="0" max="30" step="0.05"
            value={currentRate} onChange={(e) => setCurrentRate(e.target.value)} />
        </div>
        <div className="calc-field">
          <label htmlFor="r-remain">{t('refinance.fieldRemainYears')}</label>
          <input id="r-remain" type="number" inputMode="numeric" min="1" max="50" step="1"
            value={currentRemainYears} onChange={(e) => setCurrentRemainYears(e.target.value)} />
        </div>
        <div className="calc-field">
          <label htmlFor="r-newRate">{t('refinance.fieldNewRate')}</label>
          <input id="r-newRate" type="number" inputMode="decimal" min="0" max="30" step="0.05"
            value={newRate} onChange={(e) => setNewRate(e.target.value)} />
        </div>
        <div className="calc-field">
          <label htmlFor="r-newYears">{t('refinance.fieldNewYears')}</label>
          <input id="r-newYears" type="number" inputMode="numeric" min="1" max="50" step="1"
            value={newYears} onChange={(e) => setNewYears(e.target.value)} />
        </div>
        <div className="calc-field">
          <label htmlFor="r-fees">{t('refinance.fieldClosingCosts')}</label>
          <input id="r-fees" type="number" inputMode="decimal" min="0" step="500"
            value={closingCosts} onChange={(e) => setClosingCosts(e.target.value)} />
        </div>
        <div className="calc-field">
          <label htmlFor="r-currency">{t('refinance.fieldCurrency')}</label>
          <select id="r-currency" value={currency} onChange={(e) => setCurrency(e.target.value)}>
            {CURRENCIES.map(c => (<option key={c.code} value={c.code}>{c.code}</option>))}
          </select>
        </div>
      </form>

      <div className="calc-result" data-reveal>
        <div className="calc-result-primary">
          <span className="label">{t('refinance.resultBreakEven')}</span>
          <span className="value">
            <em>{isFinite(result.breakEvenMonths) ? `${result.breakEvenMonths} ${t('refinance.months')}` : '—'}</em>
          </span>
        </div>

        <div className="calc-result-grid">
          <div className="item">
            <span className="label">{t('refinance.monthlySavings')}</span>
            <span className="value">{formatCurrency(result.monthlySavings, cur.code, cur.locale)}</span>
          </div>
          <div className="item">
            <span className="label">{t('refinance.newPayment')}</span>
            <span className="value">{formatCurrency(result.newPayment, cur.code, cur.locale)}</span>
          </div>
          <div className="item">
            <span className="label">{t('refinance.lifetimeSavings')}</span>
            <span className="value">{formatCurrency(result.lifetimeSavings, cur.code, cur.locale)}</span>
          </div>
        </div>

        <p style={{ marginTop: '1.25rem', marginBottom: 0, fontSize: '0.82rem', color: 'var(--color-ink-soft)', fontStyle: 'italic', lineHeight: 1.6, fontFamily: 'var(--font-serif)' }}>
          {t('refinance.assumptions')}
        </p>
      </div>
    </div>
  );
}

export default RefinanceMode;
