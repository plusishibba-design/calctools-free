import React, { useState, useEffect, useRef, Suspense, lazy } from 'react';
import { LanguageProvider, useLanguage } from './LanguageContext';
import HomeHero from './components/HomeHero';
import ToolSeoExtras from './components/ToolSeoExtras';
import './App.css';

const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./components/TermsOfService'));
const ContactPage = lazy(() => import('./components/ContactPage'));
const AboutPage = lazy(() => import('./components/AboutPage'));

const MortgageMode = lazy(() => import('./components/MortgageMode'));
const LoanMode = lazy(() => import('./components/LoanMode'));
const CompoundMode = lazy(() => import('./components/CompoundMode'));
const RefinanceMode = lazy(() => import('./components/RefinanceMode'));
const AffordabilityMode = lazy(() => import('./components/AffordabilityMode'));
const AmortizationMode = lazy(() => import('./components/AmortizationMode'));
const ExtraPaymentMode = lazy(() => import('./components/ExtraPaymentMode'));
const BiweeklyMode = lazy(() => import('./components/BiweeklyMode'));
const CagrMode = lazy(() => import('./components/CagrMode'));
const SavingsGoalMode = lazy(() => import('./components/SavingsGoalMode'));

const LANGS = [
  { code: 'en', label: 'English' },
  { code: 'ja', label: '日本語' },
  { code: 'vi', label: 'Tiếng Việt' },
  { code: 'id', label: 'Bahasa Indonesia' },
  { code: 'zh', label: '中文' },
];

const TABS = [
  { key: 'mortgage', labelKey: 'tabs.mortgage', i18nKey: 'mortgage', category: 'finance' },
  { key: 'refinance', labelKey: 'tabs.refinance', i18nKey: 'refinance', category: 'finance' },
  { key: 'affordability', labelKey: 'tabs.affordability', i18nKey: 'affordability', category: 'finance' },
  { key: 'amortization', labelKey: 'tabs.amortization', i18nKey: 'amortization', category: 'finance' },
  { key: 'extra', labelKey: 'tabs.extra', i18nKey: 'extra', category: 'finance' },
  { key: 'biweekly', labelKey: 'tabs.biweekly', i18nKey: 'biweekly', category: 'finance' },
  { key: 'loan', labelKey: 'tabs.loan', i18nKey: 'loan', category: 'finance' },
  { key: 'compound', labelKey: 'tabs.compound', i18nKey: 'compound', category: 'finance' },
  { key: 'cagr', labelKey: 'tabs.cagr', i18nKey: 'cagr', category: 'finance' },
  { key: 'savings', labelKey: 'tabs.savings', i18nKey: 'savings', category: 'finance' },
  // Future categories: health (BMI/Body fat), date (age/diff), math (percent/tip)
];

function AppInner() {
  const [activeTab, setActiveTab] = useState('mortgage');
  const [page, setPage] = useState(null);
  const [pathname, setPathname] = useState(() => (typeof window !== 'undefined' ? window.location.pathname : '/'));
  const { t, lang, setLang } = useLanguage();
  const tabsRef = useRef(null);

  const validTabs = TABS.map(tab => tab.key);
  const validPages = ['about', 'privacy', 'terms', 'contact'];

  function getRouteFromPath() {
    const path = window.location.pathname.replace(/^\//, '');
    if (validPages.includes(path)) return { page: path, tab: 'mortgage' };
    if (validTabs.includes(path)) return { page: null, tab: path };
    return { page: null, tab: 'mortgage' };
  }

  useEffect(() => {
    const route = getRouteFromPath();
    setPage(route.page);
    setActiveTab(route.tab);
    setPathname(window.location.pathname);
    updateCanonical();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const handlePopState = () => {
      const route = getRouteFromPath();
      setPage(route.page);
      setActiveTab(route.tab);
      setPathname(window.location.pathname);
      updateCanonical();
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Reveal-on-scroll observer (Studio T. Ishi signature)
  // Uses MutationObserver to also catch elements added by lazy-loaded routes.
  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          intersectionObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -10% 0px' });

    const observeAll = () => {
      document
        .querySelectorAll('[data-reveal]:not(.is-visible)')
        .forEach((el) => intersectionObserver.observe(el));
    };

    // Initial pass
    observeAll();

    // Watch for new data-reveal elements added by Suspense / lazy components
    const mutationObserver = new MutationObserver(() => observeAll());
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    // Safety net: ensure anything still hidden after 1.5s becomes visible
    const safety = setTimeout(() => {
      document
        .querySelectorAll('[data-reveal]:not(.is-visible)')
        .forEach((el) => el.classList.add('is-visible'));
    }, 1500);

    return () => {
      intersectionObserver.disconnect();
      mutationObserver.disconnect();
      clearTimeout(safety);
    };
  }, []);

  const isHomePath = pathname === '/' && page === null;

  function updateCanonical() {
    const canon = document.querySelector('link[rel="canonical"]');
    if (canon) canon.href = window.location.origin + window.location.pathname;
  }

  const navigateTo = (path) => {
    window.history.pushState(null, '', '/' + path);
    if (validPages.includes(path)) {
      setPage(path);
    } else if (validTabs.includes(path)) {
      setPage(null);
      setActiveTab(path);
    }
    setPathname('/' + path);
    updateCanonical();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goHome = () => {
    window.history.pushState(null, '', '/');
    setPage(null);
    setActiveTab('mortgage');
    setPathname('/');
    updateCanonical();
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'mortgage': return <MortgageMode />;
      case 'refinance': return <RefinanceMode />;
      case 'affordability': return <AffordabilityMode />;
      case 'amortization': return <AmortizationMode />;
      case 'extra': return <ExtraPaymentMode />;
      case 'biweekly': return <BiweeklyMode />;
      case 'loan': return <LoanMode />;
      case 'compound': return <CompoundMode />;
      case 'cagr': return <CagrMode />;
      case 'savings': return <SavingsGoalMode />;
      default: return <MortgageMode />;
    }
  };

  const renderPage = () => {
    switch (page) {
      case 'about': return <AboutPage />;
      case 'privacy': return <PrivacyPolicy />;
      case 'terms': return <TermsOfService />;
      case 'contact': return <ContactPage />;
      default: return null;
    }
  };

  return (
    <div className="app-container" style={{ padding: '10px 20px 20px', maxWidth: 1200, margin: '0 auto', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <header className="app-header">
        <div className="app-brand">
          <h1 onClick={goHome}>
            Calc <em>Tools</em>
          </h1>
          <p className="app-tagline">{t('app.subtitle')}</p>
        </div>
        <nav className="app-nav">
          <a href="/about" onClick={(e) => { e.preventDefault(); navigateTo('about'); }} className={page === 'about' ? 'active' : ''}>
            {t('nav.about')}
          </a>
          <a href="/contact" onClick={(e) => { e.preventDefault(); navigateTo('contact'); }} className={page === 'contact' ? 'active' : ''}>
            {t('nav.contact')}
          </a>
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            style={{
              padding: '6px 10px', borderRadius: 4, border: '1px solid var(--color-rule)',
              fontSize: 12, cursor: 'pointer', background: 'var(--color-paper)',
              fontFamily: 'var(--font-mono)', color: 'var(--color-ink-soft)',
              letterSpacing: '0.05em'
            }}
            aria-label="Language"
          >
            {LANGS.map(l => (
              <option key={l.code} value={l.code}>{l.label}</option>
            ))}
          </select>
        </nav>
      </header>

      {/* Main content */}
      <div style={{ flex: 1 }}>
        {page ? (
          <div>
            <button onClick={goHome}
              style={{
                marginBottom: 16, padding: '8px 16px',
                fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.18em',
                textTransform: 'uppercase',
                border: '1px solid var(--color-rule)', borderRadius: 4,
                background: 'var(--color-paper)', cursor: 'pointer',
                color: 'var(--color-ink-soft)'
              }}>
              {t('footer.backToTools')}
            </button>
            <Suspense fallback={<div style={{ padding: 40, textAlign: 'center', color: 'var(--color-ink-soft)' }}>{t('common.loading')}</div>}>
              {renderPage()}
            </Suspense>
          </div>
        ) : isHomePath ? (
          <HomeHero
            onToolSelect={(key) => navigateTo(key)}
            onAboutClick={() => navigateTo('about')}
          />
        ) : (
          (() => {
            const currentTab = TABS.find(tab => tab.key === activeTab);
            const i18nKey = currentTab?.i18nKey;
            return (
              <>
                {i18nKey && (
                  <div className="tool-page-header" data-reveal>
                    <p className="eyebrow">{`CALC TOOLS — ${t(currentTab.labelKey).toUpperCase()}`}</p>
                    <h2>{t(`${i18nKey}.title`)}</h2>
                    <p>{t(`${i18nKey}.seoDesc`)}</p>
                  </div>
                )}
                <div ref={tabsRef} className="editorial-tabs">
                  {TABS.map(tab => (
                    <button
                      key={tab.key}
                      onClick={() => {
                        const url = '/' + tab.key;
                        window.history.pushState(null, '', url);
                        setActiveTab(tab.key);
                        setPathname(url);
                        updateCanonical();
                      }}
                      className={`editorial-tab ${activeTab === tab.key ? 'is-active' : ''}`}
                    >
                      {t(tab.labelKey)}
                    </button>
                  ))}
                </div>

                <div className="editorial-tool-content" data-reveal>
                  <Suspense fallback={<div style={{ padding: 40, textAlign: 'center', color: 'var(--color-ink-soft)' }}>{t('common.loading')}</div>}>
                    {renderContent()}
                  </Suspense>
                </div>

                <ToolSeoExtras toolKey={i18nKey} />
              </>
            );
          })()
        )}
      </div>

      {/* Footer */}
      <footer className="app-footer">
        <div className="footer-links">
          <a href="/about" onClick={(e) => { e.preventDefault(); navigateTo('about'); }}>{t('footer.about')}</a>
          <a href="/privacy" onClick={(e) => { e.preventDefault(); navigateTo('privacy'); }}>{t('footer.privacy')}</a>
          <a href="/terms" onClick={(e) => { e.preventDefault(); navigateTo('terms'); }}>{t('footer.terms')}</a>
          <a href="/contact" onClick={(e) => { e.preventDefault(); navigateTo('contact'); }}>{t('footer.contact')}</a>
        </div>
        <p>{t('footer.tagline')}</p>
        <p>
          {t('footer.sister')}{' '}
          <a href="https://www.imagetools-free.com/" target="_blank" rel="noopener noreferrer">{t('footer.sisterImage')}</a>
          {' · '}
          <a href="https://www.pdftools-free.com/" target="_blank" rel="noopener noreferrer">{t('footer.sisterPdf')}</a>
          {' · '}
          <a href="https://tetsu-ishi-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer">{t('footer.portfolio')}</a>
        </p>
        <p>&copy; {t('footer.copyright')}</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppInner />
    </LanguageProvider>
  );
}

export default App;
