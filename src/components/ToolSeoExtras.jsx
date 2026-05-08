import React from 'react';
import { useLanguage } from '../LanguageContext';
import { TOOL_SEO_DATA } from '../data/toolSeoData';

function pick(obj, lang) {
  if (!obj) return '';
  return obj[lang] || obj.en || '';
}

function ToolSeoExtras({ toolKey }) {
  const { t, lang } = useLanguage();
  const data = TOOL_SEO_DATA[toolKey];
  if (!data) return null;

  return (
    <section className="tool-seo-extras">
      <div className="seo-block">
        <p className="eyebrow">{t('common.useCasesEyebrow')}</p>
        <h3>{t('common.useCasesTitle')}</h3>
        <div className="use-cases">
          {data.useCases.map((uc, i) => (
            <div key={i} className="use-case">
              <span className="num">{String(i + 1).padStart(2, '0')}</span>
              <h4>{pick(uc.title, lang)}</h4>
              <p>{pick(uc.body, lang)}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="seo-block">
        <p className="eyebrow">{t('common.faqsEyebrow')}</p>
        <h3>{t('common.faqsTitle')}</h3>
        <dl className="faqs">
          {data.faqs.map((faq, i) => (
            <React.Fragment key={i}>
              <dt>{pick(faq.q, lang)}</dt>
              <dd>{pick(faq.a, lang)}</dd>
            </React.Fragment>
          ))}
        </dl>
      </div>
    </section>
  );
}

export default ToolSeoExtras;
