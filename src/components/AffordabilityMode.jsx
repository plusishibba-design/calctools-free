import React, { useState, useMemo } from 'react';
import { useLanguage } from '../LanguageContext';
import { CURRENCIES, formatCurrency, calcAffordability } from '../utils/finance';
import FormattedInput from './inputs/FormattedInput';

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
          <FormattedInput id="a-income" prefix={cur.symbol}
            value={income} onChange={setIncome} />
        </div>
        <div className="calc-field">
          <label htmlFor="a-debts">{t('affordability.fieldDebts')}</label>
          <FormattedInput id="a-debts" prefix={cur.symbol}
            value={debts} onChange={setDebts} />
        </div>
        <div className="calc-field">
          <label htmlFor="a-down">{t('affordability.fieldDownPayment')}</label>
          <FormattedInput id="a-down" prefix={cur.symbol}
            value={downPayment} onChange={setDownPayment} />
        </div>
        <div className="calc-field">
          <label htmlFor="a-rate">{t('affordability.fieldRate')}</label>
          <FormattedInput id="a-rate" suffix="%" decimal
            value={rate} onChange={setRate} />
        </div>
        <div className="calc-field">
          <label htmlFor="a-years">{t('affordability.fieldTerm')}</label>
          <FormattedInput id="a-years" suffix={t('unit.year')}
            value={years} onChange={setYears} />
        </div>
        <div className="calc-field">
          <label htmlFor="a-taxIns">{t('affordability.fieldTaxIns')}</label>
          <FormattedInput id="a-taxIns" prefix={cur.symbol}
            value={taxIns} onChange={setTaxIns} />
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
