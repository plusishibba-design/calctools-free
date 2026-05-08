import React from 'react';

function PrivacyPolicy() {
  return (
    <div className="editorial-page">
      <div className="editorial-page-inner">
        <p className="meta-stamp" style={{ marginBottom: '1rem' }} data-reveal>
          <span>STUDIO T. ISHI</span>
          <span className="sep">·</span>
          <span>PRIVACY</span>
        </p>
        <h1 className="editorial-title" data-reveal>
          Privacy <em>Policy</em>
        </h1>
        <p className="editorial-meta" data-reveal>Last updated: 2026-05-08</p>

        <article className="prose" data-reveal style={{ marginTop: '2rem' }}>
          <p>
            Mortgage Calc is built around a single principle: the numbers you enter never leave your
            device. This page describes what we do and do not collect.
          </p>

          <h2>Calculator inputs are never sent to a server</h2>
          <p>
            Loan amounts, interest rates, terms, and any other figures you type into a calculator are
            processed entirely in your browser using JavaScript. We have no API to receive them, no
            database to store them, and no logs that capture them.
          </p>

          <h2>What we do collect</h2>
          <p>
            We use Google Analytics for standard page-view metrics: pages visited, language, country,
            device class, and similar aggregated signals. This helps us understand which calculators
            people use and where bugs are happening. It does not include calculator inputs.
          </p>

          <h2>Cookies and ads</h2>
          <p>
            We use Google AdSense to show advertising. Google may use cookies and similar technologies
            to serve relevant ads. You can control or opt out of personalized advertising at{' '}
            <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer">Google Ads Settings</a>.
            We do not set our own tracking cookies beyond a small language preference cookie that
            remembers your selected interface language.
          </p>

          <h2>Email contact</h2>
          <p>
            If you email us via the contact page, your message arrives in a personal inbox at the
            studio. We do not share, sell, or add it to any marketing list.
          </p>

          <h2>Children</h2>
          <p>
            Mortgage Calc is not directed at children under 13. We do not knowingly collect any data
            that could identify a child.
          </p>

          <h2>Changes</h2>
          <p>
            If this policy changes materially, we will update the "Last updated" date at the top.
            Continued use of the site after a change indicates acceptance of the revised policy.
          </p>

          <h2>Contact</h2>
          <p>
            For questions about this policy, write to{' '}
            <a href="mailto:aamujou1@gmail.com">aamujou1@gmail.com</a>.
          </p>
        </article>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
