import React, { useState, useMemo } from 'react';
import { useLanguage } from '../LanguageContext';
import { CURRENCIES, formatCurrency, calcAmortization } from '../utils/finance';

function AmortizationMode() {
  const { t } = useLanguage();
  const [principal, setPrincipal] = useState('300000');
  const [rate, setRate] = useState('6.5');
  const [years, setYears] = useState('30');
  const [currency, setCurrency] = useState('USD');
  const [view, setView] = useState('yearly'); // 'yearly' or 'monthly'

  const schedule = useMemo(() => calcAmortization(
    parseFloat(principal) || 0,
    parseFloat(rate) || 0,
    parseFloat(years) || 0,
  ), [principal, rate, years]);

  const yearlySummary = useMemo(() => {
    if (schedule.length === 0) return [];
    const summary = [];
    for (let y = 0; y < schedule.length / 12; y++) {
      const slice = schedule.slice(y * 12, (y + 1) * 12);
      if (slice.length === 0) continue;
      const totalPayment = slice.reduce((s, r) => s + r.payment, 0);
      const totalPrincipal = slice.reduce((s, r) => s + r.principal, 0);
      const totalInterest = slice.reduce((s, r) => s + r.interest, 0);
      const endBalance = slice[slice.length - 1].balance;
      summary.push({
        year: y + 1,
        payment: totalPayment,
        principal: totalPrincipal,
        interest: totalInterest,
        balance: endBalance,
      });
    }
    return summary;
  }, [schedule]);

  const cur = CURRENCIES.find(c => c.code === currency) || CURRENCIES[0];
  const monthly = schedule[0]?.payment || 0;
  const totalInterest = schedule.reduce((sum, row) => sum + row.interest, 0);

  const cellHeader = {
    textAlign: 'right', padding: '0.5rem 0.75rem',
    color: 'var(--color-ink-soft)', fontWeight: 500,
    letterSpacing: '0.1em', textTransform: 'uppercase',
    fontSize: '0.7rem',
  };
  const cellHeaderLeft = { ...cellHeader, textAlign: 'left' };
  const cellBody = { textAlign: 'right', padding: '0.4rem 0.75rem' };

  const toggleBtn = (active) => ({
    padding: '0.5rem 1rem',
    fontFamily: 'var(--font-mono)',
    fontSize: 11,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    border: '1px solid var(--color-rule)',
    borderRadius: 4,
    background: active ? 'var(--color-ink)' : 'var(--color-paper)',
    color: active ? 'var(--color-paper)' : 'var(--color-ink-soft)',
    cursor: 'pointer',
    transition: 'all 0.22s ease',
  });

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
        <div style={{ marginTop: '1.5rem', borderTop: '1px solid var(--color-rule-soft)', paddingTop: '1rem' }} data-reveal>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <p className="eyebrow" style={{ marginBottom: 0 }}>{t('amortization.scheduleTitle')}</p>
            <div style={{ display: 'flex', gap: '0.25rem' }}>
              <button
                type="button"
                style={toggleBtn(view === 'yearly')}
                onClick={() => setView('yearly')}
              >
                {t('amortization.viewYearly')}
              </button>
              <button
                type="button"
                style={toggleBtn(view === 'monthly')}
                onClick={() => setView('monthly')}
              >
                {t('amortization.viewMonthly')}
              </button>
            </div>
          </div>

          <div style={{ overflowX: 'auto', maxHeight: view === 'monthly' ? '480px' : 'none', overflowY: view === 'monthly' ? 'auto' : 'visible', border: view === 'monthly' ? '1px solid var(--color-rule-soft)' : 'none', borderRadius: 4 }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', fontVariantNumeric: 'tabular-nums' }}>
              <thead style={{ position: view === 'monthly' ? 'sticky' : 'static', top: 0, background: 'var(--color-paper)', zIndex: 1 }}>
                <tr style={{ borderBottom: '1px solid var(--color-rule)' }}>
                  <th style={cellHeaderLeft}>{view === 'yearly' ? t('amortization.colYear') : '#'}</th>
                  <th style={cellHeader}>{t('amortization.colPrincipal')}</th>
                  <th style={cellHeader}>{t('amortization.colInterest')}</th>
                  <th style={cellHeader}>{t('amortization.colBalance')}</th>
                </tr>
              </thead>
              <tbody>
                {view === 'yearly' && yearlySummary.map((row) => (
                  <tr key={row.year} style={{ borderBottom: '1px solid var(--color-rule-soft)' }}>
                    <td style={{ padding: '0.5rem 0.75rem', color: 'var(--color-clay-deep)' }}>{row.year}</td>
                    <td style={cellBody}>{formatCurrency(row.principal, cur.code, cur.locale)}</td>
                    <td style={cellBody}>{formatCurrency(row.interest, cur.code, cur.locale)}</td>
                    <td style={{ ...cellBody, color: 'var(--color-ink-soft)' }}>{formatCurrency(row.balance, cur.code, cur.locale)}</td>
                  </tr>
                ))}
                {view === 'monthly' && schedule.map((row) => (
                  <tr key={row.month} style={{ borderBottom: '1px solid var(--color-rule-soft)' }}>
                    <td style={{ padding: '0.4rem 0.75rem', color: 'var(--color-clay-deep)' }}>{row.month}</td>
                    <td style={cellBody}>{formatCurrency(row.principal, cur.code, cur.locale)}</td>
                    <td style={cellBody}>{formatCurrency(row.interest, cur.code, cur.locale)}</td>
                    <td style={{ ...cellBody, color: 'var(--color-ink-soft)' }}>{formatCurrency(row.balance, cur.code, cur.locale)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {view === 'yearly' && (
            <p style={{ marginTop: '0.75rem', marginBottom: 0, fontSize: '0.78rem', color: 'var(--color-ink-soft)', fontStyle: 'italic', fontFamily: 'var(--font-serif)' }}>
              {t('amortization.yearlyNote')}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default AmortizationMode;
