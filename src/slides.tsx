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
    <div className="slide-badge">The Challenge</div>
    <h2>Opinion-Driven <span className="accent">Decisions</span></h2>
    <div className="section-line" />
    <div className="bullet-list">
      <div className="bullet-item">
        <div className="bullet-icon">
          <Icon d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </div>
        <div className="bullet-text">
          <strong>Decisions driven by opinions</strong><br/>
          Teams ship features based on the loudest voice, gut feeling, or HiPPO (highest paid person's opinion).
        </div>
      </div>
      <div className="bullet-item">
        <div className="bullet-icon" style={{ background: 'rgba(254,102,37,0.1)', color: 'var(--creiden-orange)' }}>
          <Icon d="M12 9v2m0 4h.01M5.07 19H19a2 2 0 0 0 1.75-2.97L13.04 4.18a2 2 0 0 0-3.5 0L1.68 16.03A2 2 0 0 0 3.43 19z" />
        </div>
        <div className="bullet-text">
          <strong>No way to measure impact</strong><br/>
          Without controlled experiments, we cannot know which version actually improves user outcomes.
        </div>
      </div>
      <div className="bullet-item">
        <div className="bullet-icon" style={{ background: 'rgba(0,178,125,0.1)', color: 'var(--creiden-green)' }}>
          <Icon d="M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4 12 14.01l-3-3" />
        </div>
        <div className="bullet-text">
          <strong>We need a reliable signal</strong><br/>
          A repeatable method to measure real user impact before committing to a full rollout.
        </div>
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
    <p style={{ marginTop: 4, opacity: 0, animation: 'fadeUp 0.5s 0.25s forwards', maxWidth: 640 }}>
      A controlled experiment where users are <strong>randomly split</strong> into groups, each experiencing a different version of the product. Results are compared using measurable metrics.
    </p>
    <div className="bullet-list" style={{ marginTop: 28 }}>
      <div className="bullet-item">
        <div className="bullet-icon">
          <Icon d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </div>
        <div className="bullet-text"><strong>Split users into groups</strong> — randomly assign users to Group A or Group B (or more).</div>
      </div>
      <div className="bullet-item">
        <div className="bullet-icon" style={{ background: 'rgba(0,192,243,0.1)', color: 'var(--creiden-light-blue)' }}>
          <Icon d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM12 4v16M2 12h20" />
        </div>
        <div className="bullet-text"><strong>Each group sees a different variant</strong> — different UI, logic, copy, or flow.</div>
      </div>
      <div className="bullet-item">
        <div className="bullet-icon" style={{ background: 'rgba(0,178,125,0.1)', color: 'var(--creiden-green)' }}>
          <Icon d="M18 20V10M12 20V4M6 20v-6" />
        </div>
        <div className="bullet-text"><strong>Compare using metrics</strong> — conversion, engagement, latency, revenue.</div>
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
   SLIDE 5 – Common Use Cases
   ────────────────────────────────────────── */
const Slide5: FC = () => (
  <div className="slide">
    <ChevronDeco className="top-right" />
    <div className="slide-badge">Applications</div>
    <h2>Common <span className="accent">Use Cases</span></h2>
    <div className="section-line" />
    <div className="cards-grid cols-3" style={{ marginTop: 20 }}>
      <div className="card">
        <h3>UI Changes</h3>
        <ul><li>Button styles &amp; copy</li><li>Page layouts</li><li>Navigation redesigns</li></ul>
      </div>
      <div className="card" style={{ borderLeftColor: 'var(--creiden-green)' }}>
        <h3>Product Features</h3>
        <ul><li>New functionality</li><li>Pricing models</li><li>Content strategies</li></ul>
      </div>
      <div className="card" style={{ borderLeftColor: 'var(--creiden-light-blue)' }}>
        <h3>Algorithms</h3>
        <ul><li>Recommendation engines</li><li>Search ranking</li><li>ML model versions</li></ul>
      </div>
      <div className="card" style={{ borderLeftColor: 'var(--creiden-teal)' }}>
        <h3>Performance</h3>
        <ul><li>Caching strategies</li><li>CDN configs</li><li>Bundle optimizations</li></ul>
      </div>
      <div className="card" style={{ borderLeftColor: 'var(--creiden-orange)' }}>
        <h3>Onboarding</h3>
        <ul><li>Sign-up flows</li><li>Tutorial variants</li><li>Welcome experiences</li></ul>
      </div>
      <div className="card" style={{ borderLeftColor: 'var(--creiden-magenta)' }}>
        <h3>Messaging</h3>
        <ul><li>Email subject lines</li><li>Push notifications</li><li>In-app prompts</li></ul>
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
    <p style={{ marginBottom: 20, opacity: 0, animation: 'fadeUp 0.5s 0.25s forwards' }}>
      Experiments are only useful if we define what <strong>"better"</strong> means.
    </p>
    <div className="cards-grid cols-3">
      <div className="card">
        <h3>Acquisition &amp; Conversion</h3>
        <ul>
          <li>Sign-up rate</li>
          <li>Checkout completion</li>
          <li>Click-through rate</li>
        </ul>
      </div>
      <div className="card" style={{ borderLeftColor: 'var(--creiden-green)' }}>
        <h3>Engagement &amp; Retention</h3>
        <ul>
          <li>DAU / WAU</li>
          <li>Session length</li>
          <li>Feature usage &amp; churn</li>
        </ul>
      </div>
      <div className="card" style={{ borderLeftColor: 'var(--creiden-teal)' }}>
        <h3>Business &amp; Performance</h3>
        <ul>
          <li>Revenue per user</li>
          <li>Latency (p50/p99)</li>
          <li>Error rate</li>
        </ul>
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

export const slides: FC[] = [
  Slide1, Slide2, Slide3, Slide4, Slide5, Slide6,
  Slide7, Slide8, Slide9, Slide10, Slide11, Slide12,
]
