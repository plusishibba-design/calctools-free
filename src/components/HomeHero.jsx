import React from 'react';
import { useLanguage } from '../LanguageContext';

const TOOLS = [
  { key: 'mortgage', nameKey: 'tabs.mortgage', descKey: 'about.toolMortgage' },
  { key: 'refinance', nameKey: 'tabs.refinance', descKey: 'about.toolRefinance' },
  { key: 'affordability', nameKey: 'tabs.affordability', descKey: 'about.toolAffordability' },
  { key: 'amortization', nameKey: 'tabs.amortization', descKey: 'about.toolAmortization' },
  { key: 'extra', nameKey: 'tabs.extra', descKey: 'about.toolExtra' },
  { key: 'biweekly', nameKey: 'tabs.biweekly', descKey: 'about.toolBiweekly' },
  { key: 'loan', nameKey: 'tabs.loan', descKey: 'about.toolLoan' },
  { key: 'compound', nameKey: 'tabs.compound', descKey: 'about.toolCompound' },
  { key: 'cagr', nameKey: 'tabs.cagr', descKey: 'about.toolCagr' },
  { key: 'savings', nameKey: 'tabs.savings', descKey: 'about.toolSavings' },
];

const STRENGTHS = [
  { titleKey: 'home.strength1Title', bodyKey: 'home.strength1Body' },
  { titleKey: 'home.strength2Title', bodyKey: 'home.strength2Body' },
  { titleKey: 'home.strength3Title', bodyKey: 'home.strength3Body' },
];

function HomeHero({ onToolSelect, onAboutClick }) {
  const { t } = useLanguage();
  return (
    <section className="home-hero">
      {/* Studio meta-stamp */}
      <p className="meta-stamp" style={{ marginBottom: '1.5rem' }} data-reveal>
        <span>STUDIO T. ISHI</span>
        <span className="sep">·</span>
        <span>CALC TOOLS</span>
        <span className="sep">·</span>
        <span>SAIGON</span>
      </p>

      <div className="home-hero-layout">
        <div className="home-hero-text" data-reveal>
          <p className="eyebrow">{t('home.eyebrow')}</p>
          <h2 className="editorial-title">
            {t('home.titleSerif')}
            <br />
            <em>{t('home.titleEm')}</em>
          </h2>
          <p className="editorial-lede">{t('home.lede')}</p>
          <div className="home-cta">
            <button className="cta-primary" onClick={() => onToolSelect('mortgage')}>
              {t('home.startCta')}
            </button>
            <button className="cta-ghost" onClick={onAboutClick}>
              {t('home.learnCta')}
            </button>
          </div>
        </div>

        <div className="home-hero-grid" data-reveal>
          {/* Category header — Finance */}
          <p className="eyebrow" style={{ marginBottom: '0.5rem' }}>{t('home.categoryFinance')}</p>
          <p style={{
            fontFamily: 'var(--font-serif)', fontStyle: 'italic',
            fontSize: '0.95rem', color: 'var(--color-ink-soft)',
            marginBottom: '1rem', maxWidth: '40ch'
          }}>
            {t('home.categoryFinanceBody')}
          </p>
          <div className="tool-grid">
            {TOOLS.map((tool, i) => (
              <button
                key={tool.key}
                type="button"
                className="tool-card"
                onClick={() => onToolSelect(tool.key)}
                aria-label={t(tool.nameKey)}
              >
                <span className="tool-num">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="tool-name">{t(tool.nameKey)}</h3>
                <p className="tool-desc">{t(tool.descKey)}</p>
                <span className="tool-arrow" aria-hidden="true">→</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="hero-strengths" data-reveal>
        {STRENGTHS.map((s, i) => (
          <div key={i} className="item">
            <h4>{t(s.titleKey)}</h4>
            <p>{t(s.bodyKey)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HomeHero;
