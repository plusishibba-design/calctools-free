import React, { useState, useMemo } from 'react';
import { useLanguage } from '../LanguageContext';
import { CURRENCIES, formatCurrency, calcAmortization } from '../utils/finance';

function AmortizationMode() {
  const { t } = useLanguage();
  const [principal, setPrincipal] = useState('300000');
  const [rate, setRate] = useState('6.5');
  const [years, setYears] = useState('30');
  const [currency, setCurrency] = useState('USD');

  const schedule = useMemo(() => calcAmortization(
    parseFloat(principal) || 0,
    parseFloat(rate) || 0,
    parseFloat(years) || 0,
  ), [principal, rate, years]);

  const cur = CURRENCIES.find(c => c.code === currency) || CURRENCIES[0];
  const monthly = schedule[0]?.payment || 0;
  const totalInterest = schedule.reduce((sum, row) => sum + row.interest, 0);

  return (
    <div>
      <form className="calc-form" onSubmit={(e) => e.preventDefault()}>
        <div className="calc-field">
          <label htmlFor="am-principal">{t('amortization.fieldPrincipal')}</label>
          <input id="am-principal" type="number" inputMode="decimal" min="0" step="1000"
            value={principal} onChange={(e) => setPrincipal(e.target.value)} />
        </div>
        <div className="calc-field">
          <label htmlFor="am-rate">{t('amortization.fieldRate')}</label>
          <input id="am-rate" type="number" inputMode="decimal" min="0" max="30" step="0.05"
            value={rate} onChange={(e) => setRate(e.target.value)} />
        </div>
        <div className="calc-field">
          <label htmlFor="am-years">{t('amortization.fieldTerm')}</label>
          <input id="am-years" type="number" inputMode="numeric" min="1" max="50" step="1"
            value={years} onChange={(e) => setYears(e.target.value)} />
        </div>
        <div className="calc-field">
          <label htmlFor="am-currency">{t('amortization.fieldCurrency')}</label>
          <select id="am-currency" value={currency} onChange={(e) => setCurrency(e.target.value)}>
            {CURRENCIES.map(c => (<option key={c.code} value={c.code}>{c.code}</option>))}
          </select>
        </div>
      </form>

      <div className="calc-result" data-reveal>
        <div className="calc-result-primary">
          <span className="label">{t('amortization.monthlyPayment')}</span>
          <span className="value">
            <em>{formatCurrency(monthly, cur.code, cur.locale)}</em>
          </span>
        </div>
        <div className="calc-result-grid">
          <div className="item">
            <span className="label">{t('amortization.totalInterest')}</span>
            <span className="value">{formatCurrency(totalInterest, cur.code, cur.locale)}</span>
          </div>
          <div className="item">
            <span className="label">{t('amortization.totalPayments')}</span>
            <span className="value tabular">{schedule.length}</span>
          </div>
        </div>
      </div>

      {schedule.length > 0 && (
        <div style={{ marginTop: '1.5rem', overflowX: 'auto', borderTop: '1px solid var(--color-rule-soft)', paddingTop: '1rem' }} data-reveal>
          <p className="eyebrow" style={{ marginBottom: '0.5rem' }}>{t('amortization.scheduleTitle')}</p>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', fontVariantNumeric: 'tabular-nums' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--color-rule)' }}>
                <th style={{ textAlign: 'left', padding: '0.5rem 0.75rem', color: 'var(--color-ink-soft)', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.7rem' }}>#</th>
                <th style={{ textAlign: 'right', padding: '0.5rem 0.75rem', color: 'var(--color-ink-soft)', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.7rem' }}>{t('amortization.colPrincipal')}</th>
                <th style={{ textAlign: 'right', padding: '0.5rem 0.75rem', color: 'var(--color-ink-soft)', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.7rem' }}>{t('amortization.colInterest')}</th>
                <th style={{ textAlign: 'right', padding: '0.5rem 0.75rem', color: 'var(--color-ink-soft)', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.7rem' }}>{t('amortization.colBalance')}</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((row) => (
                <tr key={row.month} style={{ borderBottom: '1px solid var(--color-rule-soft)' }}>
                  <td style={{ padding: '0.4rem 0.75rem', color: 'var(--color-clay-deep)' }}>{row.month}</td>
                  <td style={{ textAlign: 'right', padding: '0.4rem 0.75rem' }}>{formatCurrency(row.principal, cur.code, cur.locale)}</td>
                  <td style={{ textAlign: 'right', padding: '0.4rem 0.75rem' }}>{formatCurrency(row.interest, cur.code, cur.locale)}</td>
                  <td style={{ textAlign: 'right', padding: '0.4rem 0.75rem', color: 'var(--color-ink-soft)' }}>{formatCurrency(row.balance, cur.code, cur.locale)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default AmortizationMode;
