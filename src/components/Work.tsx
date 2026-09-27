import { useState } from 'react';
import { useLanguage } from '../i18n';

/* ─── Small reusable architecture mini-diagram ─── */

interface ArchNode {
  label: string;
  y: number;
  x: number;
  to?: number[]; // indices of connected nodes
  side?: boolean; // right-side annotation
  sideLabel?: string;
}

interface MiniDiagramProps {
  nodes: ArchNode[];
  active: boolean;
}

function MiniDiagram({ nodes, active }: MiniDiagramProps) {
  const W = 220;
  const H = nodes.length * 44 + 20;
  const CX = 100;
  const NODE_W = 120;
  const NODE_H = 22;

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="w-full"
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        maxWidth: 240,
        transition: 'opacity 0.3s ease',
        opacity: active ? 1 : 0.55,
      }}
      aria-hidden="true"
    >
      {nodes.map((node, i) => {
        const nx = node.x ?? CX;
        const ny = node.y;
        // Draw edges
        return (
          <g key={i}>
            {(node.to ?? []).map((toIdx) => {
              const target = nodes[toIdx];
              const tx = target.x ?? CX;
              const ty = target.y;
              // branch line
              return (
                <line
                  key={toIdx}
                  x1={nx}
                  y1={ny + NODE_H}
                  x2={tx}
                  y2={ty}
                  stroke={active ? 'rgba(200,144,58,0.6)' : 'rgba(236,231,222,0.2)'}
                  strokeWidth="0.5"
                  style={{ transition: 'stroke 0.4s ease' }}
                />
              );
            })}
          </g>
        );
      })}
      {nodes.map((node, i) => {
        const nx = node.x ?? CX;
        const ny = node.y;
        return (
          <g key={`n${i}`}>
            <rect
              x={nx - NODE_W / 2}
              y={ny}
              width={NODE_W}
              height={NODE_H}
              fill="none"
              rx="1"
              stroke={active ? 'rgba(200,144,58,0.7)' : 'rgba(236,231,222,0.28)'}
              strokeWidth="0.5"
              style={{ transition: 'stroke 0.4s ease' }}
            />
            <text
              x={nx}
              y={ny + 14}
              textAnchor="middle"
              fontSize="8.5"
              letterSpacing="0.08em"
              fill={active ? '#C8903A' : 'rgba(236,231,222,0.75)'}
              style={{ transition: 'fill 0.4s ease' }}
            >
              {node.label}
            </text>
            {node.sideLabel && (
              <text
                x={nx + NODE_W / 2 + 6}
                y={ny + 14}
                fontSize="7.5"
                letterSpacing="0.06em"
                fill="rgba(200,144,58,0.5)"
              >
                → {node.sideLabel}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}

/* ─── Project 01 — Source Lens ─── */

const sourceLensNodes: ArchNode[] = [
  { label: 'Repository', x: 100, y: 10, to: [1] },
  { label: 'Parse', x: 100, y: 54, to: [2] },
  { label: 'Index', x: 100, y: 98, to: [3], sideLabel: 'pgvector' },
  { label: 'Retrieve', x: 100, y: 142, to: [4] },
  { label: 'Reason', x: 100, y: 186, to: [] },
];

/* ─── Project 02 — AI Sales Agent ─── */

const salesAgentNodes: ArchNode[] = [
  { label: 'DISCOVERY', x: 100, y: 10, to: [1] },
  { label: 'ASK_FOR_BUDGET', x: 100, y: 54, to: [2] },
  { label: 'PRODUCT_SEARCH', x: 100, y: 98, to: [3] },
  { label: 'RECOMMENDATION', x: 100, y: 142, to: [4] },
  { label: 'SELECT_PRODUCT', x: 100, y: 186, to: [5] },
  { label: 'ASK_WHICH_PRODUCT', x: 100, y: 230, to: [6] },
  { label: 'CHECKOUT', x: 100, y: 274, to: [] },
];

/* ─── Label component ─── */

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-[9px] tracking-[0.2em] text-ink/35 uppercase">
      {children}
    </span>
  );
}

type StatusVariant = 'comingSoon';

const STATUS_COLORS: Record<StatusVariant, string> = {
  comingSoon: 'text-ink/45',
};

function StatusBadge({ variant, label }: { variant: StatusVariant; label: string }) {
  return (
    <span className={`font-mono text-[9px] tracking-[0.22em] ${STATUS_COLORS[variant]}`}>
      ● {label}
    </span>
  );
}

/* ─── Work Section ─── */

export default function Work() {
  const { t } = useLanguage();
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="work"
      className="pt-16 md:pt-20 pb-[5px] px-6 md:px-12 lg:px-16 max-w-[1440px] mx-auto"
    >
      {/* Section header */}
      <div className="flex items-baseline gap-6 mb-16 md:mb-20">
        <span className="font-mono text-[10px] tracking-[0.22em] text-signal/70">05</span>
        <h2
          className="font-serif text-ink"
          style={{ fontSize: 'clamp(28px, 3.5vw, 52px)' }}
        >
          {t.work.title}
        </h2>
        <div className="flex-1 h-px bg-ink/8 ml-4 hidden md:block" />
      </div>

      {/* ── PROJECT 01: Source Lens ── */}
      <article
        className="mb-16 md:mb-20 group cursor-pointer"
        onMouseEnter={() => setHovered(1)}
        onMouseLeave={() => setHovered(null)}
      >
        {/* Top rule */}
        <div
          className="h-px mb-10 transition-all duration-500"
          style={{
            background: hovered === 1
              ? 'linear-gradient(90deg, rgba(200,144,58,0.7) 0%, rgba(236,231,222,0.06) 100%)'
              : 'rgba(236,231,222,0.08)',
          }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-20">
          {/* Left: content */}
          <div className="flex flex-col gap-6">
            <div className="flex items-baseline gap-4">
              <Label>{t.work.projectLabel} 01</Label>
            </div>

            <h3
              className="font-serif text-ink leading-[0.92]"
              style={{ fontSize: 'clamp(38px, 5.5vw, 86px)' }}
            >
              {t.work.sourceLens.name[0]}<br />
              <em className="not-italic text-ink/50">{t.work.sourceLens.name[1]}</em>
            </h3>

            <p
              className="text-ink/60 leading-relaxed max-w-md"
              style={{ fontSize: 'clamp(15px, 1.2vw, 18px)' }}
            >
              {t.work.sourceLens.tagline[0]}<br />
              {t.work.sourceLens.tagline[1]}
            </p>

            <div className="flex flex-col gap-2 mt-2">
              <Label>{t.work.technologies}</Label>
              <p className="font-mono text-[11px] tracking-[0.1em] text-ink/45">
                FastAPI / LangGraph / PostgreSQL + pgvector / Celery + Redis / React
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6 mt-4">
              <a
                href="https://github.com/joaquims45/source-lens-front"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[10px] tracking-[0.2em] text-ink/40 hover:text-signal transition-colors duration-200 flex items-center gap-1.5"
              >
                FRONTEND <span className="text-signal/70 text-[11px]">↗</span>
              </a>
              <a
                href="https://github.com/joaquims45/source-lens-back"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[10px] tracking-[0.2em] text-ink/40 hover:text-signal transition-colors duration-200 flex items-center gap-1.5"
              >
                BACKEND <span className="text-signal/70 text-[11px]">↗</span>
              </a>
            </div>
          </div>

          {/* Right: architecture */}
          <div className="flex flex-col gap-3 lg:items-end">
            <Label>{t.work.architecture}</Label>
            <MiniDiagram nodes={sourceLensNodes} active={hovered === 1} />
          </div>
        </div>
      </article>

      {/* ── PROJECT 02: AI Sales Agent ── */}
      <article
        className="group cursor-pointer"
        onMouseEnter={() => setHovered(2)}
        onMouseLeave={() => setHovered(null)}
      >
        <div
          className="h-px mb-10 transition-all duration-500"
          style={{
            background: hovered === 2
              ? 'linear-gradient(90deg, rgba(200,144,58,0.7) 0%, rgba(236,231,222,0.06) 100%)'
              : 'rgba(236,231,222,0.08)',
          }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-20">
          {/* Left: content */}
          <div className="flex flex-col gap-6">
            <Label>{t.work.projectLabel} 02</Label>

            <h3
              className="font-serif text-ink leading-[0.92]"
              style={{ fontSize: 'clamp(38px, 5.5vw, 86px)' }}
            >
              {t.work.salesAgent.name[0]}<br />
              <em className="not-italic text-ink/50">{t.work.salesAgent.name[1]}</em>
            </h3>

            <p
              className="text-ink/60 leading-relaxed max-w-md"
              style={{ fontSize: 'clamp(15px, 1.2vw, 18px)' }}
            >
              {t.work.salesAgent.tagline[0]}<br />
              {t.work.salesAgent.tagline[1]}<br />
              <span className="text-ink/35">{t.work.salesAgent.tagline[2]}<br />{t.work.salesAgent.tagline[3]}</span>
            </p>

            <div className="flex flex-col gap-2 mt-2">
              <Label>{t.work.technologies}</Label>
              <p className="font-mono text-[11px] tracking-[0.1em] text-ink/45">
                Django / LangGraph / RAG / FAISS / Redis / React / Mercado Pago
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6 mt-4">
              <a
                href="https://github.com/joaquims45/sales-workflow-front"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[10px] tracking-[0.2em] text-ink/40 hover:text-signal transition-colors duration-200 flex items-center gap-1.5"
              >
                FRONTEND <span className="text-signal/70 text-[11px]">↗</span>
              </a>
              <a
                href="https://github.com/joaquims45/sales-workflow-back"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[10px] tracking-[0.2em] text-ink/40 hover:text-signal transition-colors duration-200 flex items-center gap-1.5"
              >
                BACKEND <span className="text-signal/70 text-[11px]">↗</span>
              </a>
            </div>

            <div className="mt-2">
              <StatusBadge variant="comingSoon" label={t.work.status.comingSoon} />
            </div>
          </div>

          {/* Right: architecture */}
          <div className="flex flex-col gap-3 lg:items-end">
            <Label>{t.work.architecture}</Label>
            <MiniDiagram nodes={salesAgentNodes} active={hovered === 2} />
          </div>
        </div>

        {/* Bottom divider */}
        <div className="h-px mt-16 bg-ink/8" />
      </article>
    </section>
  );
}
