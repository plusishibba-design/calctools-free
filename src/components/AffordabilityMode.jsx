import React, { useState, useMemo } from 'react';
import { useLanguage } from '../LanguageContext';
import { CURRENCIES, formatCurrency, calcAffordability } from '../utils/finance';

function AffordabilityMode() {
  const { t } = useLanguage();
  const [income, setIncome] = useState('80000');
  const [debts, setDebts] = useState('400');
  const [downPayment, setDownPayment] = useState('40000');
  const [rate, setRate] = useState('6.5');
  const [years, setYears] = useState('30');
  const [taxIns, setTaxIns] = useState('300');
  const [currency, setCurrency] = useState('USD');

  const result = useMemo(() => {
    return calcAffordability({
      annualIncome: parseFloat(income) || 0,
      monthlyDebts: parseFloat(debts) || 0,
      downPayment: parseFloat(downPayment) || 0,
      annualRatePct: parseFloat(rate) || 0,
      years: parseFloat(years) || 0,
      taxInsuranceMonthly: parseFloat(taxIns) || 0,
    });
  }, [income, debts, downPayment, rate, years, taxIns]);

  const cur = CURRENCIES.find(c => c.code === currency) || CURRENCIES[0];

  return (
    <div>
      <form className="calc-form" onSubmit={(e) => e.preventDefault()}>
        <div className="calc-field">
          <label htmlFor="a-income">{t('affordability.fieldIncome')}</label>
          <input id="a-income" type="number" inputMode="decimal" min="0" step="1000"
            value={income} onChange={(e) => setIncome(e.target.value)} />
        </div>
        <div className="calc-field">
          <label htmlFor="a-debts">{t('affordability.fieldDebts')}</label>
          <input id="a-debts" type="number" inputMode="decimal" min="0" step="50"
            value={debts} onChange={(e) => setDebts(e.target.value)} />
        </div>
        <div className="calc-field">
          <label htmlFor="a-down">{t('affordability.fieldDownPayment')}</label>
          <input id="a-down" type="number" inputMode="decimal" min="0" step="1000"
            value={downPayment} onChange={(e) => setDownPayment(e.target.value)} />
        </div>
        <div className="calc-field">
          <label htmlFor="a-rate">{t('affordability.fieldRate')}</label>
          <input id="a-rate" type="number" inputMode="decimal" min="0" max="30" step="0.05"
            value={rate} onChange={(e) => setRate(e.target.value)} />
        </div>
        <div className="calc-field">
          <label htmlFor="a-years">{t('affordability.fieldTerm')}</label>
          <input id="a-years" type="number" inputMode="numeric" min="1" max="50" step="1"
            value={years} onChange={(e) => setYears(e.target.value)} />
        </div>
        <div className="calc-field">
          <label htmlFor="a-taxIns">{t('affordability.fieldTaxIns')}</label>
          <input id="a-taxIns" type="number" inputMode="decimal" min="0" step="50"
            value={taxIns} onChange={(e) => setTaxIns(e.target.value)} />
        </div>
        <div className="calc-field">
          <label htmlFor="a-currency">{t('affordability.fieldCurrency')}</label>
          <select id="a-currency" value={currency} onChange={(e) => setCurrency(e.target.value)}>
            {CURRENCIES.map(c => (<option key={c.code} value={c.code}>{c.code}</option>))}
          </select>
        </div>
      </form>

      <div className="calc-result" data-reveal>
        <div className="calc-result-primary">
          <span className="label">{t('affordability.resultMaxHome')}</span>
          <span className="value">
            <em>{formatCurrency(result.maxHomePrice, cur.code, cur.locale)}</em>
          </span>
        </div>
        <div className="calc-result-grid">
          <div className="item">
            <span className="label">{t('affordability.maxLoan')}</span>
            <span className="value">{formatCurrency(result.maxLoan, cur.code, cur.locale)}</span>
          </div>
          <div className="item">
            <span className="label">{t('affordability.maxMonthly')}</span>
            <span className="value">{formatCurrency(result.maxMonthlyPayment, cur.code, cur.locale)}</span>
          </div>
          <div className="item">
            <span className="label">{t('affordability.constraint')}</span>
            <span className="value">{result.constraint === 'front' ? t('affordability.constraintFront') : t('affordability.constraintBack')}</span>
          </div>
        </div>

        <p style={{ marginTop: '1.25rem', marginBottom: 0, fontSize: '0.82rem', color: 'var(--color-ink-soft)', fontStyle: 'italic', lineHeight: 1.6, fontFamily: 'var(--font-serif)' }}>
          {t('affordability.assumptions')}
        </p>
      </div>
    </div>
  );
}

export default AffordabilityMode;
