import { useState } from 'react';

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
  { label: 'Index', x: 100, y: 98, to: [3], sideLabel: 'FAISS' },
  { label: 'Retrieve', x: 100, y: 142, to: [4] },
  { label: 'Reason', x: 100, y: 186, to: [] },
];

/* ─── Project 02 — AI Sales Agent ─── */

const salesAgentNodes: ArchNode[] = [
  { label: 'Product Catalog', x: 110, y: 10, to: [1] },
  { label: 'RAG', x: 110, y: 54, to: [2] },
  { label: 'Agent', x: 110, y: 98, to: [3, 4] },
  { label: 'Customer', x: 60, y: 148, to: [] },
  { label: 'Tools', x: 160, y: 148, to: [5] },
  { label: 'Mercado Pago', x: 160, y: 192, to: [] },
];

/* ─── Project 03 — Abstract node graph placeholder ─── */

function AbstractNodeGraph({ active }: { active: boolean }) {
  const nodes = [
    { cx: 140, cy: 40 },
    { cx: 60, cy: 100 },
    { cx: 220, cy: 100 },
    { cx: 100, cy: 160 },
    { cx: 180, cy: 160 },
    { cx: 140, cy: 220 },
  ];
  const edges = [
    [0, 1], [0, 2], [1, 3], [2, 4], [3, 5], [4, 5], [1, 4], [2, 3],
  ];

  return (
    <svg
      viewBox="0 0 280 260"
      className="w-full"
      style={{ maxWidth: 260, opacity: active ? 1 : 0.4, transition: 'opacity 0.3s ease' }}
      aria-hidden="true"
    >
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].cx} y1={nodes[a].cy}
          x2={nodes[b].cx} y2={nodes[b].cy}
          stroke={active ? 'rgba(200,144,58,0.45)' : 'rgba(236,231,222,0.15)'}
          strokeWidth="0.6"
          style={{ transition: 'stroke 0.4s ease' }}
        />
      ))}
      {nodes.map((n, i) => (
        <g key={i}>
          <circle
            cx={n.cx} cy={n.cy} r="5"
            fill="none"
            stroke={active ? '#C8903A' : 'rgba(236,231,222,0.3)'}
            strokeWidth="0.6"
            style={{ transition: 'stroke 0.4s ease' }}
          />
          <circle
            cx={n.cx} cy={n.cy} r="1.5"
            fill={active ? '#C8903A' : 'rgba(236,231,222,0.4)'}
            style={{ transition: 'fill 0.4s ease' }}
          />
        </g>
      ))}
      <text x="14" y="250" fontSize="7.5" fill="rgba(200,144,58,0.35)"
        fontFamily="'JetBrains Mono', monospace" letterSpacing="0.1em">
        AGENT_WORKFLOW / RESEARCH
      </text>
    </svg>
  );
}

/* ─── Label component ─── */

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-[9px] tracking-[0.2em] text-ink/35 uppercase">
      {children}
    </span>
  );
}

function StatusBadge({ status }: { status: string }) {
  const colors: Record<string, string> = {
    'IN DEVELOPMENT': 'text-signal',
    'COMING SOON': 'text-ink/45',
    'RESEARCHING': 'text-ink/30',
  };
  return (
    <span className={`font-mono text-[9px] tracking-[0.22em] ${colors[status] ?? 'text-ink/40'}`}>
      ● {status}
    </span>
  );
}

/* ─── Work Section ─── */

export default function Work() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="work"
      className="py-28 md:py-36 px-6 md:px-12 lg:px-16 max-w-[1440px] mx-auto"
    >
      {/* Section header */}
      <div className="flex items-baseline gap-6 mb-20 md:mb-28">
        <span className="font-mono text-[10px] tracking-[0.22em] text-signal/70">03</span>
        <h2
          className="font-serif text-ink"
          style={{ fontSize: 'clamp(28px, 3.5vw, 52px)' }}
        >
          Selected Work
        </h2>
        <div className="flex-1 h-px bg-ink/8 ml-4 hidden md:block" />
      </div>

      {/* ── PROJECT 01: Source Lens ── */}
      <article
        className="mb-24 md:mb-32 group cursor-pointer"
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
              <Label>PROJECT 01</Label>
            </div>

            <h3
              className="font-serif text-ink leading-[0.92]"
              style={{ fontSize: 'clamp(38px, 5.5vw, 86px)' }}
            >
              Source<br />
              <em className="not-italic text-ink/50">Lens</em>
            </h3>

            <p
              className="text-ink/60 leading-relaxed max-w-md"
              style={{ fontSize: 'clamp(15px, 1.2vw, 18px)' }}
            >
              Understand a codebase<br />
              before touching it.
            </p>

            <div className="flex flex-col gap-2 mt-2">
              <Label>Technologies</Label>
              <p className="font-mono text-[11px] tracking-[0.1em] text-ink/45">
                Python / Django / React / FAISS / RAG
              </p>
            </div>

            <div className="flex items-center gap-6 mt-4">
              <StatusBadge status="IN DEVELOPMENT" />
              <a
                href="#"
                className="font-mono text-[10px] tracking-[0.2em] text-ink/40 hover:text-signal transition-colors duration-200 flex items-center gap-1.5"
              >
                CASE STUDY <span className="text-signal">→</span>
              </a>
            </div>
          </div>

          {/* Right: architecture */}
          <div className="flex flex-col gap-3 lg:items-end">
            <Label>Architecture</Label>
            <MiniDiagram nodes={sourceLensNodes} active={hovered === 1} />
          </div>
        </div>
      </article>

      {/* ── PROJECT 02: AI Sales Agent ── */}
      <article
        className="mb-24 md:mb-32 group cursor-pointer"
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

        {/* Different composition: centered text, arch on left */}
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-10 lg:gap-24 items-start">

          {/* Left: architecture */}
          <div className="flex flex-col gap-3 lg:min-w-[200px]">
            <Label>Architecture</Label>
            <MiniDiagram nodes={salesAgentNodes} active={hovered === 2} />
          </div>

          {/* Right: content */}
          <div className="flex flex-col gap-6">
            <Label>PROJECT 02</Label>

            <h3
              className="font-serif text-ink leading-[0.92]"
              style={{ fontSize: 'clamp(38px, 5.5vw, 86px)' }}
            >
              AI Sales<br />
              <em className="not-italic text-ink/50">Agent</em>
            </h3>

            <p
              className="text-ink/60 leading-relaxed max-w-md"
              style={{ fontSize: 'clamp(15px, 1.2vw, 18px)' }}
            >
              Products shouldn't<br />
              just be searchable.<br />
              <span className="text-ink/35">They should be able<br />to explain themselves.</span>
            </p>

            <div className="flex flex-col gap-2 mt-2">
              <Label>Technologies</Label>
              <p className="font-mono text-[11px] tracking-[0.1em] text-ink/45">
                LangGraph / LangChain / Django / React / Mercado Pago
              </p>
            </div>

            <div className="mt-4">
              <StatusBadge status="COMING SOON" />
            </div>
          </div>
        </div>
      </article>

      {/* ── PROJECT 03: Agent Workflow Experiment ── */}
      <article
        className="group cursor-pointer"
        onMouseEnter={() => setHovered(3)}
        onMouseLeave={() => setHovered(null)}
      >
        <div
          className="h-px mb-10 transition-all duration-500"
          style={{
            background: hovered === 3
              ? 'linear-gradient(90deg, rgba(200,144,58,0.7) 0%, rgba(236,231,222,0.06) 100%)'
              : 'rgba(236,231,222,0.08)',
          }}
        />

        {/* Full-width composition with abstract visual */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

          <div className="flex flex-col gap-6">
            <Label>PROJECT 03</Label>

            <h3
              className="font-serif text-ink leading-[0.92]"
              style={{ fontSize: 'clamp(38px, 5.5vw, 86px)' }}
            >
              Agent<br />
              Workflow<br />
              <em className="not-italic text-ink/30">Experiment</em>
            </h3>

            <p className="text-ink/35 leading-relaxed max-w-sm font-light"
              style={{ fontSize: 'clamp(14px, 1.1vw, 17px)' }}>
              Exploring multi-agent coordination patterns, routing strategies, and state machines for production agentic systems.
            </p>

            <div className="mt-4 flex flex-col gap-3">
              <StatusBadge status="RESEARCHING" />
              <p className="font-mono text-[9px] tracking-[0.18em] text-ink/20">
                LangGraph / Python / Custom Orchestration
              </p>
            </div>
          </div>

          {/* Abstract node graph */}
          <div className="flex flex-col gap-3 items-start lg:items-center">
            <Label>Topology</Label>
            <AbstractNodeGraph active={hovered === 3} />
          </div>
        </div>

        {/* Bottom divider */}
        <div className="h-px mt-16 bg-ink/8" />
      </article>
    </section>
  );
}
