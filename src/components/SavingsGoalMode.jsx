import React, { useState, useMemo } from 'react';
import { useLanguage } from '../LanguageContext';
import { CURRENCIES, formatCurrency, calcSavingsGoal } from '../utils/finance';

function SavingsGoalMode() {
  const { t } = useLanguage();
  const [target, setTarget] = useState('1000000');
  const [principal, setPrincipal] = useState('20000');
  const [contribution, setContribution] = useState('1000');
  const [rate, setRate] = useState('6.0');
  const [currency, setCurrency] = useState('USD');

  const result = useMemo(() => {
    return calcSavingsGoal(
      parseFloat(target) || 0,
      parseFloat(principal) || 0,
      parseFloat(contribution) || 0,
      parseFloat(rate) || 0,
    );
  }, [target, principal, contribution, rate]);

  const cur = CURRENCIES.find(c => c.code === currency) || CURRENCIES[0];

  const monthsLabel = result == null ? '—' : `${result.months}`;
  const yearsLabel = result == null ? '—' : (result.months / 12).toFixed(1);

  return (
    <div>
      <form className="calc-form" onSubmit={(e) => e.preventDefault()}>
        <div className="calc-field">
          <label htmlFor="sg-target">{t('savings.fieldTarget')}</label>
          <input id="sg-target" type="number" inputMode="decimal" min="0" step="1000"
            value={target} onChange={(e) => setTarget(e.target.value)} />
        </div>
        <div className="calc-field">
          <label htmlFor="sg-principal">{t('savings.fieldPrincipal')}</label>
          <input id="sg-principal" type="number" inputMode="decimal" min="0" step="500"
            value={principal} onChange={(e) => setPrincipal(e.target.value)} />
        </div>
        <div className="calc-field">
          <label htmlFor="sg-contribution">{t('savings.fieldContribution')}</label>
          <input id="sg-contribution" type="number" inputMode="decimal" min="0" step="50"
            value={contribution} onChange={(e) => setContribution(e.target.value)} />
        </div>
        <div className="calc-field">
          <label htmlFor="sg-rate">{t('savings.fieldRate')}</label>
          <input id="sg-rate" type="number" inputMode="decimal" min="0" max="30" step="0.1"
            value={rate} onChange={(e) => setRate(e.target.value)} />
        </div>
        <div className="calc-field full">
          <label htmlFor="sg-currency">{t('savings.fieldCurrency')}</label>
          <select id="sg-currency" value={currency} onChange={(e) => setCurrency(e.target.value)}>
            {CURRENCIES.map(c => (<option key={c.code} value={c.code}>{c.code}</option>))}
          </select>
        </div>
      </form>

      <div className="calc-result" data-reveal>
        <div className="calc-result-primary">
          <span className="label">{t('savings.resultYears')}</span>
          <span className="value">
            <em>{yearsLabel} {t('savings.years')}</em>
          </span>
        </div>
        <div className="calc-result-grid">
          <div className="item">
            <span className="label">{t('savings.resultMonths')}</span>
            <span className="value tabular">{monthsLabel}</span>
          </div>
          <div className="item">
            <span className="label">{t('savings.totalContrib')}</span>
            <span className="value">{result ? formatCurrency(result.totalContrib, cur.code, cur.locale) : '—'}</span>
          </div>
          <div className="item">
            <span className="label">{t('savings.totalInterest')}</span>
            <span className="value">{result ? formatCurrency(result.totalInterest, cur.code, cur.locale) : '—'}</span>
          </div>
        </div>
        {result == null && (
          <p style={{ marginTop: '1rem', color: 'var(--color-danger)', fontSize: '0.85rem', fontFamily: 'var(--font-mono)' }}>
            {t('savings.unreachable')}
          </p>
        )}
        <p style={{ marginTop: '1.25rem', marginBottom: 0, fontSize: '0.82rem', color: 'var(--color-ink-soft)', fontStyle: 'italic', lineHeight: 1.6, fontFamily: 'var(--font-serif)' }}>
          {t('savings.assumptions')}
        </p>
      </div>
    </div>
  );
}

export default SavingsGoalMode;
