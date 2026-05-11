import React, { useState, useMemo } from 'react';
import { useLanguage } from '../LanguageContext';
import { CURRENCIES, formatCurrency, calcFutureValue } from '../utils/finance';
import FormattedInput from './inputs/FormattedInput';

function CompoundMode() {
  const { t } = useLanguage();
  const [principal, setPrincipal] = useState('10000');
  const [contribution, setContribution] = useState('500');
  const [rate, setRate] = useState('7.0');
  const [years, setYears] = useState('20');
  const [currency, setCurrency] = useState('USD');

  const result = useMemo(() => {
    const p = parseFloat(principal) || 0;
    const c = parseFloat(contribution) || 0;
    const r = parseFloat(rate) || 0;
    const y = parseFloat(years) || 0;
    const futureValue = calcFutureValue(p, r, y, c);
    const totalContrib = p + c * y * 12;
    const totalInterest = futureValue - totalContrib;
    return { futureValue, totalContrib, totalInterest };
  }, [principal, contribution, rate, years]);

  const cur = CURRENCIES.find(c => c.code === currency) || CURRENCIES[0];

  return (
    <div>
      <form className="calc-form" onSubmit={(e) => e.preventDefault()}>
        <div className="calc-field">
          <label htmlFor="c-principal">{t('compound.fieldPrincipal')}</label>
          <FormattedInput id="c-principal" prefix={cur.symbol}
            value={principal} onChange={setPrincipal} />
        </div>

        <div className="calc-field">
          <label htmlFor="c-contribution">{t('compound.fieldContribution')}</label>
          <FormattedInput id="c-contribution" prefix={cur.symbol}
            value={contribution} onChange={setContribution} />
        </div>

        <div className="calc-field">
          <label htmlFor="c-rate">{t('compound.fieldRate')}</label>
          <FormattedInput id="c-rate" suffix="%" decimal
            value={rate} onChange={setRate} />
        </div>

        <div className="calc-field">
          <label htmlFor="c-years">{t('compound.fieldYears')}</label>
          <FormattedInput id="c-years" suffix={t('unit.year')}
            value={years} onChange={setYears} />
        </div>

        <div className="calc-field">
          <label htmlFor="c-currency">{t('compound.fieldCurrency')}</label>
          <select
            id="c-currency"
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
          <span className="label">{t('compound.resultLabel')}</span>
          <span className="value">
            <em>{formatCurrency(result.futureValue, cur.code, cur.locale)}</em>
          </span>
        </div>

        <div className="calc-result-grid">
          <div className="item">
            <span className="label">{t('compound.totalContrib')}</span>
            <span className="value">{formatCurrency(result.totalContrib, cur.code, cur.locale)}</span>
          </div>
          <div className="item">
            <span className="label">{t('compound.totalInterest')}</span>
            <span className="value">{formatCurrency(result.totalInterest, cur.code, cur.locale)}</span>
          </div>
          <div className="item">
            <span className="label">{t('compound.years')}</span>
            <span className="value tabular">{years}</span>
          </div>
        </div>

        <p style={{
          marginTop: '1.25rem', marginBottom: 0,
          fontSize: '0.82rem', color: 'var(--color-ink-soft)',
          fontStyle: 'italic', lineHeight: 1.6,
          fontFamily: 'var(--font-serif)'
        }}>
          {t('compound.assumptions')}
        </p>
      </div>
    </div>
  );
}

export default CompoundMode;
