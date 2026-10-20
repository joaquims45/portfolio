import type { CSSProperties } from 'react';

/* Hero agent graph — INPUT → ROUTE → (AGENTS | RETRIEVE) → REASON → ACT.
   The active path (input, route, reason, act) lights up in sequence. */

interface GNode {
  id: string;
  label: string;
  x: number;
  y: number;
  w: number;
  active: boolean;
}

const NODES: GNode[] = [
  { id: 'input', label: 'INPUT', x: 180, y: 10, w: 76, active: true },
  { id: 'route', label: 'ROUTE', x: 180, y: 66, w: 76, active: true },
  { id: 'agents', label: 'AGENTS', x: 87, y: 126, w: 91, active: false },
  { id: 'retrieve', label: 'RETRIEVE', x: 272, y: 126, w: 91, active: false },
  { id: 'reason', label: 'REASON', x: 180, y: 186, w: 84, active: true },
  { id: 'act', label: 'ACT', x: 180, y: 246, w: 58, active: true },
];

const EDGES: { d: string; active: boolean }[] = [
  { d: 'M180 32V66', active: true },
  { d: 'M162 83L88 126', active: false },
  { d: 'M198 83L272 126', active: false },
  { d: 'M88 148L162 186', active: false },
  { d: 'M272 148L198 186', active: false },
  { d: 'M180 208V246', active: true },
];

export function HeroGraph({ label }: { label: string }) {
  return (
    <svg viewBox="0 0 360 280" role="img" aria-label={label} className="w-full font-mono">
      {EDGES.map((e) => (
        <path
          key={e.d}
          d={e.d}
          fill="none"
          strokeWidth={e.active ? 1 : 0.6}
          className={e.active ? 'stroke-signal' : 'stroke-ink/30'}
        />
      ))}
      {NODES.map((n, i) => (
        <g key={n.id} className="node-seq" style={{ '--seq-delay': `${600 + i * 260}ms` } as CSSProperties}>
          <rect
            x={n.x - n.w / 2}
            y={n.y}
            width={n.w}
            height={22}
            rx={1}
            fill="none"
            strokeWidth={n.active ? 1 : 0.6}
            className={n.active ? 'stroke-signal' : 'stroke-ink/40'}
          />
          <text
            x={n.x}
            y={n.y + 15}
            textAnchor="middle"
            fontSize="9.5"
            letterSpacing="0.12em"
            className={n.active ? 'fill-signal' : 'fill-ink/70'}
          >
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

/* Vertical flow used for project architecture. Highlights via group-hover/focus-within of `.group/project`. */
export function FlowGraph({ nodes, label }: { nodes: { label: string; note?: string }[]; label: string }) {
  const STEP = 44;
  const H = nodes.length * STEP + 12;
  const CX = 100;
  const lit = 'transition-colors duration-500';
  return (
    <svg viewBox={`0 0 260 ${H}`} role="img" aria-label={label} className="w-full max-w-[280px] font-mono">
      {nodes.map((n, i) => {
        const y = 6 + i * STEP;
        return (
          <g key={n.label}>
            {i < nodes.length - 1 && (
              <line
                x1={CX}
                y1={y + 22}
                x2={CX}
                y2={y + STEP}
                strokeWidth={0.8}
                className={`stroke-ink/30 group-hover/project:stroke-signal group-focus-within/project:stroke-signal ${lit}`}
              />
            )}
            <rect
              x={CX - 70}
              y={y}
              width={140}
              height={22}
              rx={1}
              fill="none"
              strokeWidth={0.8}
              className={`stroke-ink/40 group-hover/project:stroke-signal group-focus-within/project:stroke-signal ${lit}`}
            />
            <text
              x={CX}
              y={y + 15}
              textAnchor="middle"
              fontSize="9"
              letterSpacing="0.08em"
              className={`fill-ink/80 group-hover/project:fill-signal group-focus-within/project:fill-signal ${lit}`}
            >
              {n.label}
            </text>
            {n.note && (
              <text x={CX + 78} y={y + 15} fontSize="8.5" letterSpacing="0.06em" className="fill-signal">
                → {n.note}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}
