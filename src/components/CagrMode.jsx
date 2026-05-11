import React, { useState, useMemo } from 'react';
import { useLanguage } from '../LanguageContext';
import { CURRENCIES, formatCurrency, formatPercent, calcCAGR } from '../utils/finance';
import FormattedInput from './inputs/FormattedInput';

function CagrMode() {
  const { t, lang } = useLanguage();
  const [beginValue, setBeginValue] = useState('10000');
  const [endValue, setEndValue] = useState('25000');
  const [years, setYears] = useState('10');
  const [currency, setCurrency] = useState('USD');

  const result = useMemo(() => {
    const b = parseFloat(beginValue) || 0;
    const e = parseFloat(endValue) || 0;
    const y = parseFloat(years) || 0;
    const cagr = calcCAGR(b, e, y);
    const totalReturn = b > 0 ? (e - b) / b : 0;
    return { cagr, totalReturn, gain: e - b };
  }, [beginValue, endValue, years]);

  const cur = CURRENCIES.find(c => c.code === currency) || CURRENCIES[0];
  const localeMap = { en: 'en-US', ja: 'ja-JP', vi: 'vi-VN', id: 'id-ID', zh: 'zh-CN' };
  const numLocale = localeMap[lang] || 'en-US';

  return (
    <div>
      <form className="calc-form" onSubmit={(e) => e.preventDefault()}>
        <div className="calc-field">
          <label htmlFor="cg-begin">{t('cagr.fieldBegin')}</label>
          <FormattedInput id="cg-begin" prefix={cur.symbol}
            value={beginValue} onChange={setBeginValue} />
        </div>
        <div className="calc-field">
          <label htmlFor="cg-end">{t('cagr.fieldEnd')}</label>
          <FormattedInput id="cg-end" prefix={cur.symbol}
            value={endValue} onChange={setEndValue} />
        </div>
        <div className="calc-field">
          <label htmlFor="cg-years">{t('cagr.fieldYears')}</label>
          <FormattedInput id="cg-years" suffix={t('unit.year')} decimal
            value={years} onChange={setYears} />
        </div>
        <div className="calc-field">
          <label htmlFor="cg-currency">{t('cagr.fieldCurrency')}</label>
          <select id="cg-currency" value={currency} onChange={(e) => setCurrency(e.target.value)}>
            {CURRENCIES.map(c => (<option key={c.code} value={c.code}>{c.code}</option>))}
          </select>
        </div>
      </form>

      <div className="calc-result" data-reveal>
        <div className="calc-result-primary">
          <span className="label">{t('cagr.resultLabel')}</span>
          <span className="value">
            <em>{formatPercent(result.cagr, numLocale, 2)}</em>
          </span>
        </div>
        <div className="calc-result-grid">
          <div className="item">
            <span className="label">{t('cagr.totalReturn')}</span>
            <span className="value">{formatPercent(result.totalReturn, numLocale, 2)}</span>
          </div>
          <div className="item">
            <span className="label">{t('cagr.absoluteGain')}</span>
            <span className="value">{formatCurrency(result.gain, cur.code, cur.locale)}</span>
          </div>
          <div className="item">
            <span className="label">{t('cagr.years')}</span>
            <span className="value tabular">{years}</span>
          </div>
        </div>
        <p style={{ marginTop: '1.25rem', marginBottom: 0, fontSize: '0.82rem', color: 'var(--color-ink-soft)', fontStyle: 'italic', lineHeight: 1.6, fontFamily: 'var(--font-serif)' }}>
          {t('cagr.assumptions')}
        </p>
      </div>
    </div>
  );
}

export default CagrMode;
