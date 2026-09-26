import { useLanguage } from '../i18n';

/* ─── Static System Diagram ─── */

const ACTIVE_NODES = new Set(['input', 'route', 'reason', 'act']);
const ACTIVE_EDGES = new Set(['ir', 'ar', 'rer', 'rea']);

function nStyle(node: string): React.CSSProperties {
  return { opacity: ACTIVE_NODES.has(node) ? 1 : 0.35 };
}

function nTextFill(node: string): string {
  return ACTIVE_NODES.has(node) ? '#C8903A' : '#ECE7DE';
}

function nBorderStroke(node: string): string {
  return ACTIVE_NODES.has(node) ? '#C8903A' : 'rgba(236,231,222,0.35)';
}

function eStyle(edge: string): React.CSSProperties {
  return {
    stroke: ACTIVE_EDGES.has(edge) ? '#C8903A' : 'rgba(236,231,222,0.2)',
    strokeWidth: ACTIVE_EDGES.has(edge) ? 0.8 : 0.4,
  };
}

function SystemDiagram() {
  return (
    <svg
      viewBox="0 0 360 300"
      className="w-full"
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
      aria-hidden="true"
    >
      {/* Edges */}
      <line x1="180" y1="32" x2="180" y2="66" style={eStyle('ir')} />
      <line x1="162" y1="83" x2="88"  y2="126" style={eStyle('ra')} />
      <line x1="198" y1="83" x2="272" y2="126" style={eStyle('rr')} />
      <line x1="88"  y1="146" x2="162" y2="186" style={eStyle('ar')} />
      <line x1="272" y1="146" x2="198" y2="186" style={eStyle('rer')} />
      <line x1="180" y1="204" x2="180" y2="246" style={eStyle('rea')} />

      {/* Node: INPUT */}
      <g style={nStyle('input')}>
        <rect x="142" y="10" width="76" height="22" fill="none" rx="1"
          stroke={nBorderStroke('input')} strokeWidth={0.8} />
        <text x="180" y="25" textAnchor="middle" fontSize="9" letterSpacing="0.12em"
          fill={nTextFill('input')}>INPUT</text>
      </g>

      {/* Node: ROUTE */}
      <g style={nStyle('route')}>
        <rect x="142" y="66" width="76" height="22" fill="none" rx="1"
          stroke={nBorderStroke('route')} strokeWidth={0.8} />
        <text x="180" y="81" textAnchor="middle" fontSize="9" letterSpacing="0.12em"
          fill={nTextFill('route')}>ROUTE</text>
      </g>

      {/* Node: AGENTS */}
      <g style={nStyle('agents')}>
        <rect x="42" y="126" width="91" height="22" fill="none" rx="1"
          stroke={nBorderStroke('agents')} strokeWidth={0.4} />
        <text x="87" y="141" textAnchor="middle" fontSize="9" letterSpacing="0.12em"
          fill={nTextFill('agents')}>AGENTS</text>
      </g>

      {/* Node: RETRIEVE */}
      <g style={nStyle('retrieve')}>
        <rect x="227" y="126" width="91" height="22" fill="none" rx="1"
          stroke={nBorderStroke('retrieve')} strokeWidth={0.4} />
        <text x="272" y="141" textAnchor="middle" fontSize="9" letterSpacing="0.12em"
          fill={nTextFill('retrieve')}>RETRIEVE</text>
      </g>

      {/* Node: REASON */}
      <g style={nStyle('reason')}>
        <rect x="138" y="186" width="84" height="22" fill="none" rx="1"
          stroke={nBorderStroke('reason')} strokeWidth={0.8} />
        <text x="180" y="201" textAnchor="middle" fontSize="9" letterSpacing="0.12em"
          fill={nTextFill('reason')}>REASON</text>
      </g>

      {/* Node: ACT */}
      <g style={nStyle('act')}>
        <rect x="151" y="246" width="58" height="22" fill="none" rx="1"
          stroke={nBorderStroke('act')} strokeWidth={0.8} />
        <text x="180" y="261" textAnchor="middle" fontSize="9" letterSpacing="0.12em"
          fill={nTextFill('act')}>ACT</text>
      </g>
    </svg>
  );
}

/* ─── Hero Section ─── */

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      className="relative min-h-[100dvh] flex flex-col bg-grid"
      id="hero"
    >
      {/* Main content */}
      <div className="flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-16 max-w-[1440px] mx-auto w-full pt-20 pb-16">

        {/* Metadata row */}
        <div className="mb-10 md:mb-14 flex items-center gap-6">
          <span className="font-mono text-[9px] tracking-[0.28em] text-signal">
            {t.hero.role}
          </span>
          <span className="h-px w-6 bg-ink/20" />
          <span className="font-mono text-[9px] tracking-[0.28em] text-ink/30">
            {t.hero.location}
          </span>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-20 items-center">

          {/* Statement */}
          <div>
            <h1
              className="font-serif text-ink leading-[0.88] tracking-tight"
              style={{ fontSize: 'clamp(48px, 7.2vw, 108px)' }}
            >
              {t.hero.headline[0]}<br />
              {t.hero.headline[1]}<br />
              <em className="not-italic text-ink/55">{t.hero.headline[2]}</em><br />
              {t.hero.headline[3]}<br />
              {t.hero.headline[4]}<br />
              <span className="text-signal">{t.hero.headline[5]}</span>
            </h1>
          </div>

          {/* Diagram column */}
          <div className="flex flex-col gap-4 lg:items-start">
            <p className="font-mono text-[8px] tracking-[0.22em] text-ink/25">
              {t.hero.archLabel}
            </p>
            <div className="max-w-[560px] w-full">
              <SystemDiagram />
            </div>
          </div>
        </div>
      </div>

      {/* Section divider */}
      <div
        className="h-px w-full"
        style={{ background: 'rgba(236,231,222,0.07)' }}
      />
    </section>
  );
}
