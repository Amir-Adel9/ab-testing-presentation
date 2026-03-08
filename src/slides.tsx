import type { FC } from 'react'

const ChevronDeco = ({ className = '' }: { className?: string }) => (
  <svg className={`chevron-deco ${className}`} width="220" height="220" viewBox="0 0 220 220" fill="currentColor">
    <path d="M40 10 L120 110 L40 210" stroke="currentColor" strokeWidth="18" fill="none" opacity="0.5" />
    <path d="M100 10 L180 110 L100 210" stroke="currentColor" strokeWidth="18" fill="none" opacity="0.3" />
  </svg>
)

const Arrow = () => (
  <div className="flow-arrow">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" y1="12" x2="20" y2="12" />
      <polyline points="14 6 20 12 14 18" />
    </svg>
  </div>
)

const Icon = ({ d }: { d: string }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />
  </svg>
)

/* ──────────────────────────────────────────
   SLIDE 1 – Title
   ────────────────────────────────────────── */
const Slide1: FC = () => (
  <div className="slide slide-title">
    <ChevronDeco className="top-right" />
    <ChevronDeco className="bottom-left" />
    <div className="logo-mark">
      <svg width="56" height="56" viewBox="0 0 56 56">
        <rect width="56" height="56" rx="14" fill="#00539f" />
        <text x="28" y="37" textAnchor="middle" fontFamily="Poppins, sans-serif" fontWeight="700" fontSize="28" fill="white">C</text>
      </svg>
    </div>
    <h1>A/B Testing &amp; <span className="accent">Feature Flags</span></h1>
    <p className="subtitle">Data-Driven Product Development</p>
    <div className="presenter">
      <strong>Amir Adel</strong> &middot; Creiden
    </div>
    <svg style={{ position: 'absolute', bottom: 40, opacity: 0.06, left: '50%', transform: 'translateX(-50%)' }} width="400" height="60" viewBox="0 0 400 60">
      <rect x="0" y="10" width="180" height="40" rx="8" fill="#00539f" />
      <text x="90" y="36" textAnchor="middle" fill="white" fontSize="13" fontWeight="600" fontFamily="Poppins">Variant A</text>
      <rect x="220" y="10" width="180" height="40" rx="8" fill="#00b27d" />
      <text x="310" y="36" textAnchor="middle" fill="white" fontSize="13" fontWeight="600" fontFamily="Poppins">Variant B</text>
      <line x1="190" y1="30" x2="210" y2="30" stroke="#36454f" strokeWidth="2" strokeDasharray="4 3" />
    </svg>
  </div>
)

/* ──────────────────────────────────────────
   SLIDE 2 – The Problem
   ────────────────────────────────────────── */
const Slide2: FC = () => (
  <div className="slide">
    <ChevronDeco className="top-right" />
    <div className="slide-badge">The Problem</div>
    <h2>How do we know a change is <span className="accent">actually better</span>?</h2>
    <div className="section-line" />
    <p style={{ marginBottom: 8, opacity: 0, animation: 'fadeUp 0.5s 0.25s forwards', maxWidth: 640 }}>
      We build and ship constantly — but without measurement, we're guessing whether our work actually moves the needle.
    </p>
    <div className="bullet-list">
      <div className="bullet-item">
        <div className="bullet-icon">
          <Icon d="M13 17l5-5-5-5M6 17l5-5-5-5" />
        </div>
        <div className="bullet-text">
          <strong>Continuous delivery</strong><br/>
          We frequently ship new features and improvements for clients.
        </div>
      </div>
      <div className="bullet-item">
        <div className="bullet-icon" style={{ background: 'rgba(254,102,37,0.1)', color: 'var(--creiden-orange)' }}>
          <Icon d="M12 9v2m0 4h.01M5.07 19H19a2 2 0 0 0 1.75-2.97L13.04 4.18a2 2 0 0 0-3.5 0L1.68 16.03A2 2 0 0 0 3.43 19z" />
        </div>
        <div className="bullet-text">
          <strong>Unclear impact</strong><br/>
          It is not always clear whether a change actually improves user behavior or outcomes.
        </div>
      </div>
      <div className="bullet-item">
        <div className="bullet-icon" style={{ background: 'rgba(0,83,159,0.1)', color: 'var(--creiden-blue)' }}>
          <Icon d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </div>
        <div className="bullet-text">
          <strong>Decisions driven by opinion</strong><br/>
          Without data, teams default to gut feeling, the loudest voice, or the highest-paid person's opinion.
        </div>
      </div>
    </div>
    <div className="problem-callout" style={{ marginTop: 'auto', padding: '18px 28px', background: 'rgba(0,178,125,0.08)', borderRadius: 12, borderLeft: '4px solid var(--creiden-green)', display: 'flex', alignItems: 'center', gap: 14, opacity: 0, animation: 'fadeUp 0.5s 0.7s forwards' }}>
      <div style={{ flexShrink: 0, width: 36, height: 36, borderRadius: 10, background: 'var(--creiden-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4 12 14.01l-3-3" /></svg>
      </div>
      <div style={{ fontSize: 16, fontWeight: 600, color: 'var(--text-primary)' }}>
        We need data from real users to validate that changes are truly better.
      </div>
    </div>
  </div>
)

/* ──────────────────────────────────────────
   SLIDE 3 – What is A/B Testing?
   ────────────────────────────────────────── */
const Slide3: FC = () => (
  <div className="slide">
    <ChevronDeco className="top-right" />
    <div className="slide-badge">Core Concept</div>
    <h2>What is <span className="accent">A/B Testing</span>?</h2>
    <div className="section-line" />
    <div className="bullet-list">
      <div className="bullet-item">
        <div className="bullet-icon">
          <Icon d="M9.5 14.5L3 21M14.5 9.5L21 3M14.828 9.172a4 4 0 0 1 0 5.656M9.172 14.828a4 4 0 0 1 0-5.656" />
        </div>
        <div className="bullet-text">A controlled experiment used to evaluate product or feature changes</div>
      </div>
      <div className="bullet-item">
        <div className="bullet-icon" style={{ background: 'rgba(0,192,243,0.1)', color: 'var(--creiden-light-blue)' }}>
          <Icon d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </div>
        <div className="bullet-text">Users are randomly divided into multiple groups</div>
      </div>
      <div className="bullet-item">
        <div className="bullet-icon" style={{ background: 'rgba(254,102,37,0.1)', color: 'var(--creiden-orange)' }}>
          <Icon d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM12 4v16M2 12h20" />
        </div>
        <div className="bullet-text">Each group is exposed to a different version of the same feature or experience</div>
      </div>
      <div className="bullet-item">
        <div className="bullet-icon" style={{ background: 'rgba(0,178,125,0.1)', color: 'var(--creiden-green)' }}>
          <Icon d="M18 20V10M12 20V4M6 20v-6" />
        </div>
        <div className="bullet-text">The performance of each version is measured using predefined metrics</div>
      </div>
      <div className="bullet-item">
        <div className="bullet-icon" style={{ background: 'rgba(0,83,159,0.1)', color: 'var(--creiden-blue)' }}>
          <Icon d="M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4 12 14.01l-3-3" />
        </div>
        <div className="bullet-text">The version that performs better is used to guide decisions</div>
      </div>
    </div>
  </div>
)

/* ──────────────────────────────────────────
   SLIDE 4 – How A/B Testing Works (Diagram)
   ────────────────────────────────────────── */
const Slide4: FC = () => (
  <div className="slide">
    <ChevronDeco className="top-right" />
    <div className="slide-badge">Workflow</div>
    <h2>How A/B Testing <span className="accent">Works</span></h2>
    <div className="section-line" />
    <div className="flow-diagram" style={{ flexDirection: 'column', gap: 20, marginTop: 24 }}>
      <svg width="100%" height="280" viewBox="0 0 800 280" style={{ maxWidth: 800 }}>
        {/* Users node */}
        <rect x="20" y="110" width="120" height="50" rx="12" fill="#36454f" />
        <text x="80" y="141" textAnchor="middle" fill="white" fontSize="15" fontWeight="600" fontFamily="Poppins">Users</text>

        {/* Arrow 1 */}
        <line x1="150" y1="135" x2="200" y2="135" stroke="#00539f" strokeWidth="2.5" markerEnd="url(#arrowhead)" />

        {/* Allocator */}
        <rect x="210" y="100" width="140" height="70" rx="14" fill="#00539f" />
        <text x="280" y="130" textAnchor="middle" fill="white" fontSize="13" fontWeight="600" fontFamily="Poppins">Experiment</text>
        <text x="280" y="150" textAnchor="middle" fill="white" fontSize="13" fontWeight="600" fontFamily="Poppins">Allocator</text>

        {/* Split arrows */}
        <path d="M360 120 L420 60" stroke="#00b27d" strokeWidth="2.5" fill="none" markerEnd="url(#arrowG)" />
        <path d="M360 150 L420 210" stroke="#fe6625" strokeWidth="2.5" fill="none" markerEnd="url(#arrowO)" />

        {/* Group A */}
        <rect x="430" y="30" width="120" height="55" rx="12" fill="#00b27d" />
        <text x="490" y="52" textAnchor="middle" fill="white" fontSize="12" fontWeight="600" fontFamily="Poppins">Group A</text>
        <text x="490" y="70" textAnchor="middle" fill="white" fontSize="11" fontWeight="400" fontFamily="Poppins">Variant A</text>

        {/* Group B */}
        <rect x="430" y="190" width="120" height="55" rx="12" fill="#fe6625" />
        <text x="490" y="212" textAnchor="middle" fill="white" fontSize="12" fontWeight="600" fontFamily="Poppins">Group B</text>
        <text x="490" y="230" textAnchor="middle" fill="white" fontSize="11" fontWeight="400" fontFamily="Poppins">Variant B</text>

        {/* Arrows to metrics */}
        <line x1="560" y1="57" x2="620" y2="100" stroke="#00b27d" strokeWidth="2" markerEnd="url(#arrowG)" />
        <line x1="560" y1="217" x2="620" y2="175" stroke="#fe6625" strokeWidth="2" markerEnd="url(#arrowO)" />

        {/* Compare box */}
        <rect x="630" y="100" width="140" height="70" rx="14" fill="#00539f" opacity="0.9" />
        <text x="700" y="130" textAnchor="middle" fill="white" fontSize="13" fontWeight="600" fontFamily="Poppins">Compare</text>
        <text x="700" y="150" textAnchor="middle" fill="white" fontSize="13" fontWeight="600" fontFamily="Poppins">Results</text>

        <defs>
          <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="#00539f" />
          </marker>
          <marker id="arrowG" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="#00b27d" />
          </marker>
          <marker id="arrowO" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="#fe6625" />
          </marker>
        </defs>
      </svg>
    </div>
  </div>
)

/* ──────────────────────────────────────────
   SLIDE 5 – What Can We A/B Test?
   ────────────────────────────────────────── */
const Slide5: FC = () => (
  <div className="slide">
    <ChevronDeco className="top-right" />
    <div className="slide-badge">Applications</div>
    <h2>What Can We <span className="accent">A/B Test</span>?</h2>
    <div className="section-line" />
    <div className="icon-cards cols-3">
      <div className="icon-card">
        <div className="icon-card-header">
          <div className="icon-card-icon" style={{ background: 'var(--creiden-blue)' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></svg>
          </div>
          <div className="icon-card-title">User Interface</div>
        </div>
        <div className="icon-card-body">
          <ul><li>Page layouts &amp; component placement</li><li>Button styles, labels &amp; CTAs</li><li>Navigation structure &amp; menus</li></ul>
        </div>
      </div>
      <div className="icon-card">
        <div className="icon-card-header">
          <div className="icon-card-icon" style={{ background: 'var(--creiden-green)' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>
          </div>
          <div className="icon-card-title">User Experience Flows</div>
        </div>
        <div className="icon-card-body">
          <ul><li>Signup &amp; registration steps</li><li>Onboarding sequences</li><li>Checkout &amp; payment flows</li></ul>
        </div>
      </div>
      <div className="icon-card">
        <div className="icon-card-header">
          <div className="icon-card-icon" style={{ background: 'var(--creiden-light-blue)' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
          </div>
          <div className="icon-card-title">Feature Behavior</div>
        </div>
        <div className="icon-card-body">
          <ul><li>Feature configuration &amp; defaults</li><li>Business rule variations</li><li>Conditional logic &amp; gating</li></ul>
        </div>
      </div>
      <div className="icon-card">
        <div className="icon-card-header">
          <div className="icon-card-icon" style={{ background: 'var(--creiden-orange)' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 14.5L3 21M14.5 9.5L21 3" /><path d="M14.828 9.172a4 4 0 0 1 0 5.656M9.172 14.828a4 4 0 0 1 0-5.656" /></svg>
          </div>
          <div className="icon-card-title">Algorithms &amp; Logic</div>
        </div>
        <div className="icon-card-body">
          <ul><li>Recommendation &amp; ranking engines</li><li>Search relevance tuning</li><li>ML model versions &amp; thresholds</li></ul>
        </div>
      </div>
      <div className="icon-card">
        <div className="icon-card-header">
          <div className="icon-card-icon" style={{ background: 'var(--creiden-teal)' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
          </div>
          <div className="icon-card-title">Performance</div>
        </div>
        <div className="icon-card-body">
          <ul><li>Caching &amp; loading strategies</li><li>Infrastructure optimizations</li><li>Bundle size &amp; delivery methods</li></ul>
        </div>
      </div>
    </div>
  </div>
)

/* ──────────────────────────────────────────
   SLIDE 6 – Metrics That Matter
   ────────────────────────────────────────── */
const Slide6: FC = () => (
  <div className="slide">
    <ChevronDeco className="top-right" />
    <div className="slide-badge">Measurement</div>
    <h2>Metrics That <span className="accent">Matter</span></h2>
    <div className="section-line" />
    <p style={{ marginBottom: 8, opacity: 0, animation: 'fadeUp 0.5s 0.25s forwards' }}>
      Experiments require clear, <strong>measurable success metrics</strong> to determine which variant wins.
    </p>
    <div className="icon-cards cols-2">
      <div className="icon-card">
        <div className="icon-card-header">
          <div className="icon-card-icon" style={{ background: 'var(--creiden-blue)' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="M22 4 12 14.01l-3-3" /></svg>
          </div>
          <div className="icon-card-title">Conversion &amp; Acquisition</div>
        </div>
        <div className="icon-card-body">
          <ul>
            <li><strong>Conversion rate</strong> — % of users completing a target action</li>
            <li><strong>Click-through rate</strong> — % of users clicking a specific element</li>
            <li><strong>Funnel completion</strong> — how far users progress through a flow</li>
          </ul>
        </div>
      </div>
      <div className="icon-card">
        <div className="icon-card-header">
          <div className="icon-card-icon" style={{ background: 'var(--creiden-green)' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>
          </div>
          <div className="icon-card-title">Engagement &amp; Retention</div>
        </div>
        <div className="icon-card-body">
          <ul>
            <li><strong>Session duration</strong> — time users spend actively in the product</li>
            <li><strong>Return rate</strong> — how often users come back over days or weeks</li>
            <li><strong>Feature adoption</strong> — % of users engaging with a specific feature</li>
          </ul>
        </div>
      </div>
      <div className="icon-card">
        <div className="icon-card-header">
          <div className="icon-card-icon" style={{ background: 'var(--creiden-orange)' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
          </div>
          <div className="icon-card-title">Revenue &amp; Business</div>
        </div>
        <div className="icon-card-body">
          <ul>
            <li><strong>Revenue per user</strong> — average income generated per active user</li>
            <li><strong>Order value</strong> — average transaction or purchase size</li>
            <li><strong>LTV impact</strong> — projected shift in customer lifetime value</li>
          </ul>
        </div>
      </div>
      <div className="icon-card">
        <div className="icon-card-header">
          <div className="icon-card-icon" style={{ background: 'var(--creiden-teal)' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
          </div>
          <div className="icon-card-title">Technical &amp; Performance</div>
        </div>
        <div className="icon-card-body">
          <ul>
            <li><strong>Latency (p50 / p99)</strong> — response time at median and tail</li>
            <li><strong>Error rate</strong> — % of requests resulting in failures</li>
            <li><strong>Load time</strong> — how fast pages render for the end user</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)

/* ──────────────────────────────────────────
   SLIDE 7 – When NOT to A/B Test
   ────────────────────────────────────────── */
const Slide7: FC = () => (
  <div className="slide">
    <ChevronDeco className="top-right" />
    <div className="slide-badge">Boundaries</div>
    <h2>When <span className="accent">NOT</span> to A/B Test</h2>
    <div className="section-line" />
    <div className="warning-list">
      <div className="warning-item">
        <div className="warning-icon">
          <Icon d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
        </div>
        <div className="warning-text"><strong>Critical bug fixes or outages</strong> — ship the fix immediately, don't experiment with broken things.</div>
      </div>
      <div className="warning-item">
        <div className="warning-icon">
          <Icon d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </div>
        <div className="warning-text"><strong>Security or privacy issues</strong> — no user should be left on a vulnerable version.</div>
      </div>
      <div className="warning-item">
        <div className="warning-icon">
          <Icon d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M16 13H8M16 17H8M10 9H8" />
        </div>
        <div className="warning-text"><strong>Legal / compliance requirements</strong> — regulations aren't optional for a subset of users.</div>
      </div>
      <div className="warning-item">
        <div className="warning-icon">
          <Icon d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
        </div>
        <div className="warning-text"><strong>Extremely low traffic</strong> — without enough users, there is no statistical power to detect differences.</div>
      </div>
    </div>
  </div>
)

/* ──────────────────────────────────────────
   SLIDE 8 – What Are Feature Flags?
   ────────────────────────────────────────── */
const Slide8: FC = () => (
  <div className="slide">
    <ChevronDeco className="top-right" />
    <div className="slide-badge">Infrastructure</div>
    <h2>What Are <span className="accent">Feature Flags</span>?</h2>
    <div className="section-line" />
    <p style={{ marginBottom: 24, opacity: 0, animation: 'fadeUp 0.5s 0.25s forwards', maxWidth: 600 }}>
      Runtime configuration switches that let you <strong>enable or disable features</strong> without redeploying code. Evaluated per request or per user context.
    </p>
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: 8, opacity: 0, animation: 'fadeUp 0.6s 0.35s forwards' }}>
      <svg width="600" height="200" viewBox="0 0 600 200">
        {/* Code block */}
        <rect x="20" y="55" width="140" height="90" rx="12" fill="#36454f" />
        <text x="90" y="95" textAnchor="middle" fill="#8cd" fontSize="12" fontWeight="500" fontFamily="Poppins">Your Code</text>
        <text x="90" y="115" textAnchor="middle" fill="#6a8" fontSize="10" fontFamily="monospace">if (flag.enabled)</text>

        {/* Arrow */}
        <line x1="170" y1="100" x2="230" y2="100" stroke="#00539f" strokeWidth="2.5" markerEnd="url(#ah2)" />

        {/* Toggle */}
        <rect x="240" y="55" width="140" height="90" rx="12" fill="#00539f" />
        <text x="310" y="90" textAnchor="middle" fill="white" fontSize="13" fontWeight="600" fontFamily="Poppins">Feature Flag</text>
        {/* Toggle switch visual */}
        <rect x="275" y="105" width="70" height="28" rx="14" fill="rgba(255,255,255,0.2)" />
        <circle cx="331" cy="119" r="11" fill="#00b27d" />
        <text x="310" y="124" textAnchor="middle" fill="white" fontSize="9" fontWeight="600" fontFamily="Poppins">ON</text>

        {/* Arrow to features */}
        <line x1="390" y1="80" x2="440" y2="60" stroke="#00b27d" strokeWidth="2" markerEnd="url(#ahg2)" />
        <line x1="390" y1="120" x2="440" y2="140" stroke="#fe6625" strokeWidth="2" markerEnd="url(#aho2)" />

        {/* Feature ON */}
        <rect x="450" y="30" width="130" height="50" rx="10" fill="#00b27d" />
        <text x="515" y="60" textAnchor="middle" fill="white" fontSize="13" fontWeight="600" fontFamily="Poppins">Feature ON</text>

        {/* Feature OFF */}
        <rect x="450" y="120" width="130" height="50" rx="10" fill="rgba(254,102,37,0.15)" stroke="#fe6625" strokeWidth="1.5" />
        <text x="515" y="150" textAnchor="middle" fill="#fe6625" fontSize="13" fontWeight="600" fontFamily="Poppins">Feature OFF</text>

        <defs>
          <marker id="ah2" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#00539f" /></marker>
          <marker id="ahg2" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#00b27d" /></marker>
          <marker id="aho2" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#fe6625" /></marker>
        </defs>
      </svg>
    </div>
  </div>
)

/* ──────────────────────────────────────────
   SLIDE 9 – Why Feature Flags Matter
   ────────────────────────────────────────── */
const Slide9: FC = () => (
  <div className="slide">
    <ChevronDeco className="top-right" />
    <div className="slide-badge">Benefits</div>
    <h2>Why Feature Flags <span className="accent">Matter</span></h2>
    <div className="section-line" />
    <div className="bullet-list">
      <div className="bullet-item">
        <div className="bullet-icon">
          <Icon d="M13 17l5-5-5-5M6 17l5-5-5-5" />
        </div>
        <div className="bullet-text"><strong>Gradual rollouts</strong><br/>Progressively increase exposure from 1% to 100% while monitoring metrics.</div>
      </div>
      <div className="bullet-item">
        <div className="bullet-icon" style={{ background: 'rgba(0,192,243,0.1)', color: 'var(--creiden-light-blue)' }}>
          <Icon d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </div>
        <div className="bullet-text"><strong>Targeted exposure</strong><br/>Beta users, specific markets, internal teams, or device types.</div>
      </div>
      <div className="bullet-item">
        <div className="bullet-icon" style={{ background: 'rgba(254,102,37,0.1)', color: 'var(--creiden-orange)' }}>
          <Icon d="M1 4v6h6M23 20v-6h-6M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" />
        </div>
        <div className="bullet-text"><strong>Instant rollback</strong><br/>If metrics regress, disable the flag in seconds — no deploy needed.</div>
      </div>
      <div className="bullet-item">
        <div className="bullet-icon" style={{ background: 'rgba(0,178,125,0.1)', color: 'var(--creiden-green)' }}>
          <Icon d="M9.5 14.5L3 21M14.5 9.5L21 3M14.828 9.172a4 4 0 0 1 0 5.656M9.172 14.828a4 4 0 0 1 0-5.656" />
        </div>
        <div className="bullet-text"><strong>Experimentation engine</strong><br/>Flags become the runtime layer powering A/B/n tests.</div>
      </div>
    </div>
    <div className="rollout-timeline">
      {['1%', '10%', '50%', '100%'].map((pct, i) => (
        <div className="rollout-step" key={i}>
          <div className="rollout-circle">{pct}</div>
          <div className="rollout-label">{['Canary', 'Beta', 'Broad', 'GA'][i]}</div>
        </div>
      ))}
    </div>
  </div>
)

/* ──────────────────────────────────────────
   SLIDE 10 – Feature Flags + A/B Testing
   ────────────────────────────────────────── */
const Slide10: FC = () => (
  <div className="slide">
    <ChevronDeco className="top-right" />
    <div className="slide-badge">Integration</div>
    <h2>Feature Flags <span className="accent">+ A/B Testing</span></h2>
    <div className="section-line" />
    <p style={{ marginBottom: 12, opacity: 0, animation: 'fadeUp 0.5s 0.25s forwards', maxWidth: 620 }}>
      Feature flags are the <strong>control plane</strong> for experiments. They decide which variant a user sees while the experiment platform logs exposures and outcomes.
    </p>
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: 16, opacity: 0, animation: 'fadeUp 0.6s 0.35s forwards' }}>
      <svg width="100%" height="220" viewBox="0 0 780 220" style={{ maxWidth: 780 }}>
        <rect x="20" y="80" width="130" height="60" rx="12" fill="#36454f" />
        <text x="85" y="115" textAnchor="middle" fill="white" fontSize="14" fontWeight="600" fontFamily="Poppins">Request</text>

        <line x1="160" y1="110" x2="220" y2="110" stroke="#00539f" strokeWidth="2.5" markerEnd="url(#ah3)" />

        <rect x="230" y="70" width="170" height="80" rx="14" fill="#00539f" />
        <text x="315" y="103" textAnchor="middle" fill="white" fontSize="13" fontWeight="600" fontFamily="Poppins">Flag Service</text>
        <text x="315" y="123" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="11" fontFamily="Poppins">Experiment Rules</text>

        <path d="M410 95 L470 65" stroke="#00b27d" strokeWidth="2" markerEnd="url(#ahg3)" />
        <path d="M410 125 L470 155" stroke="#fe6625" strokeWidth="2" markerEnd="url(#aho3)" />

        <rect x="480" y="40" width="110" height="45" rx="10" fill="#00b27d" />
        <text x="535" y="67" textAnchor="middle" fill="white" fontSize="13" fontWeight="600" fontFamily="Poppins">Variant A</text>

        <rect x="480" y="135" width="110" height="45" rx="10" fill="#fe6625" />
        <text x="535" y="162" textAnchor="middle" fill="white" fontSize="13" fontWeight="600" fontFamily="Poppins">Variant B</text>

        <line x1="600" y1="62" x2="640" y2="100" stroke="#00b27d" strokeWidth="1.5" />
        <line x1="600" y1="157" x2="640" y2="120" stroke="#fe6625" strokeWidth="1.5" />

        <rect x="640" y="80" width="120" height="60" rx="12" fill="rgba(0,83,159,0.08)" stroke="#00539f" strokeWidth="1.5" />
        <text x="700" y="107" textAnchor="middle" fill="#00539f" fontSize="12" fontWeight="600" fontFamily="Poppins">Analytics</text>
        <text x="700" y="125" textAnchor="middle" fill="#00539f" fontSize="11" fontFamily="Poppins">Engine</text>

        <defs>
          <marker id="ah3" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#00539f" /></marker>
          <marker id="ahg3" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#00b27d" /></marker>
          <marker id="aho3" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#fe6625" /></marker>
        </defs>
      </svg>
    </div>
    <div className="bullet-list" style={{ marginTop: 4 }}>
      <div className="bullet-item">
        <div className="bullet-icon" style={{ width: 28, height: 28, borderRadius: 8 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
        </div>
        <div className="bullet-text" style={{ fontSize: 14 }}>Same mechanism supports <strong>A/B/n tests, rollouts, and kill-switches</strong>.</div>
      </div>
    </div>
  </div>
)

/* ──────────────────────────────────────────
   SLIDE 11 – Example Experiment
   ────────────────────────────────────────── */
const Slide11: FC = () => (
  <div className="slide">
    <ChevronDeco className="top-right" />
    <div className="slide-badge">Example</div>
    <h2>Checkout Button <span className="accent">Variant Test</span></h2>
    <div className="section-line" />
    <div className="comparison">
      <div className="comparison-side variant-a">
        <div className="variant-label">Variant A — Control</div>
        <div style={{ background: '#fff', borderRadius: 10, padding: 20, textAlign: 'center', border: '1px solid #e2e8f0' }}>
          <div style={{ fontSize: 13, color: '#999', marginBottom: 8 }}>Cart Total: $89.00</div>
          <div className="mock-button default">Checkout</div>
        </div>
        <div className="metric-big">35%</div>
        <div className="metric-label">Conversion Rate</div>
      </div>
      <div className="comparison-vs">VS</div>
      <div className="comparison-side variant-b">
        <div className="variant-label">Variant B — Treatment</div>
        <div style={{ background: '#fff', borderRadius: 10, padding: 20, textAlign: 'center', border: '1px solid #e2e8f0' }}>
          <div style={{ fontSize: 13, color: '#999', marginBottom: 8 }}>Cart Total: $89.00</div>
          <div className="mock-button primary">Complete Purchase</div>
        </div>
        <div className="metric-big">40%</div>
        <div className="metric-label">Conversion Rate</div>
      </div>
    </div>
    <div style={{ textAlign: 'center', marginTop: 16, opacity: 0, animation: 'fadeUp 0.5s 0.6s forwards' }}>
      <span style={{ display: 'inline-block', background: 'rgba(0,178,125,0.1)', color: 'var(--creiden-green)', padding: '8px 20px', borderRadius: 8, fontSize: 14, fontWeight: 600 }}>
        +5 pts absolute lift &middot; Statistically Significant (p &lt; 0.05)
      </span>
    </div>
  </div>
)

/* ──────────────────────────────────────────
   SLIDE 12 – Key Takeaways
   ────────────────────────────────────────── */
const Slide12: FC = () => (
  <div className="slide" style={{ background: 'linear-gradient(160deg, #ffffff 0%, #f0f5fa 100%)' }}>
    <ChevronDeco className="top-right" />
    <div className="slide-badge">Summary</div>
    <h2>Key <span className="accent">Takeaways</span></h2>
    <div className="section-line" />
    <div className="takeaway-grid">
      <div className="takeaway-item">
        <div className="takeaway-icon" style={{ background: 'var(--creiden-blue)' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 20V10M12 20V4M6 20v-6" /></svg>
        </div>
        <div className="takeaway-text">
          <strong>Data over opinions</strong>
          A/B testing moves product decisions from gut feeling to measurable evidence.
        </div>
      </div>
      <div className="takeaway-item">
        <div className="takeaway-icon" style={{ background: 'var(--creiden-green)' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
        </div>
        <div className="takeaway-text">
          <strong>Safe experimentation</strong>
          Feature flags make rollouts and experiments safe, reversible, and controlled.
        </div>
      </div>
      <div className="takeaway-item">
        <div className="takeaway-icon" style={{ background: 'var(--creiden-orange)' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4 12 14.01l-3-3" /></svg>
        </div>
        <div className="takeaway-text">
          <strong>Small changes, large impact</strong>
          Minor UX and behavior changes can drive significant improvements in key metrics.
        </div>
      </div>
      <div className="takeaway-item">
        <div className="takeaway-icon" style={{ background: 'var(--creiden-teal)' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
        </div>
        <div className="takeaway-text">
          <strong>Ship with confidence</strong>
          A culture of experimentation helps teams iterate faster and deliver better products.
        </div>
      </div>
    </div>
    <div style={{ textAlign: 'center', marginTop: 'auto', paddingTop: 20, opacity: 0, animation: 'fadeUp 0.5s 0.7s forwards' }}>
      <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--text-muted)' }}>
        <strong style={{ color: 'var(--creiden-blue)' }}>Amir Adel</strong> &middot; Creiden
      </div>
    </div>
  </div>
)

/* ──────────────────────────────────────────
   SLIDE 13 – Thank You
   ────────────────────────────────────────── */
const Slide13: FC = () => (
  <div className="slide slide-title" style={{ background: 'linear-gradient(160deg, #ffffff 0%, #f0f5fa 100%)' }}>
    <ChevronDeco className="top-right" />
    <ChevronDeco className="bottom-left" />
    <div className="logo-mark">
      <svg width="56" height="56" viewBox="0 0 56 56">
        <rect width="56" height="56" rx="14" fill="#00539f" />
        <text x="28" y="37" textAnchor="middle" fontFamily="Poppins, sans-serif" fontWeight="700" fontSize="28" fill="white">C</text>
      </svg>
    </div>
    <h1>Thank <span className="accent">You</span></h1>
    <p className="subtitle">Questions &amp; Discussion</p>
    <div className="presenter" style={{ marginTop: 24 }}>
      <strong>Amir Adel</strong> &middot; Creiden
    </div>
    <svg style={{ position: 'absolute', bottom: 40, opacity: 0.06, left: '50%', transform: 'translateX(-50%)' }} width="400" height="60" viewBox="0 0 400 60">
      <rect x="0" y="10" width="180" height="40" rx="8" fill="#00539f" />
      <text x="90" y="36" textAnchor="middle" fill="white" fontSize="13" fontWeight="600" fontFamily="Poppins">Variant A</text>
      <rect x="220" y="10" width="180" height="40" rx="8" fill="#00b27d" />
      <text x="310" y="36" textAnchor="middle" fill="white" fontSize="13" fontWeight="600" fontFamily="Poppins">Variant B</text>
      <line x1="190" y1="30" x2="210" y2="30" stroke="#36454f" strokeWidth="2" strokeDasharray="4 3" />
    </svg>
  </div>
)

export const slides: FC[] = [
  Slide2, Slide1, Slide3, Slide4, Slide5, Slide6,
  Slide7, Slide8, Slide9, Slide10, Slide11, Slide12, Slide13,
]
