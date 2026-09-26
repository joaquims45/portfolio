import { useState } from 'react';

/* ─── Node and Edge data ─── */

interface SysNode {
  id: string;
  label: string;
  desc: string;
  group: 'ai' | 'core' | 'backend' | 'frontend' | 'data' | 'infra';
  x: number; // 0-100 % of SVG width (800)
  y: number; // 0-100 % of SVG height (600)
}

interface SysEdge {
  from: string;
  to: string;
}

const SVG_W = 800;
const SVG_H = 580;

const px = (pct: number, total: number) => (pct / 100) * total;

const NODES: SysNode[] = [
  // AI Reasoning layer (top)
  { id: 'llms',      label: 'LLMs',       desc: 'GPT-4, Claude, Gemini — foundation models powering reasoning',      group: 'ai',      x: 50,  y: 6  },
  { id: 'langgraph', label: 'LangGraph',  desc: 'Stateful multi-agent orchestration with cyclical graph execution',  group: 'ai',      x: 22,  y: 17 },
  { id: 'langchain', label: 'LangChain',  desc: 'LLM application framework for chains and tool-calling patterns',   group: 'ai',      x: 78,  y: 17 },
  { id: 'rag',       label: 'RAG',        desc: 'Retrieval-Augmented Generation — ground LLMs in your data',        group: 'ai',      x: 50,  y: 28 },
  { id: 'faiss',     label: 'FAISS',      desc: 'High-performance vector similarity search for semantic retrieval',  group: 'ai',      x: 72,  y: 36 },

  // Core
  { id: 'core',      label: 'AI APPLICATION', desc: 'Production AI systems — the synthesis of reasoning and infrastructure', group: 'core', x: 50, y: 50 },

  // Backend
  { id: 'django',    label: 'Django',     desc: 'Python web framework for rapid, production-grade API development',  group: 'backend', x: 18,  y: 64 },
  { id: 'drf',       label: 'DRF',        desc: 'Django REST Framework — typed, validated REST & WebSocket APIs',    group: 'backend', x: 6,   y: 74 },
  { id: 'nestjs',    label: 'NestJS',     desc: 'Enterprise Node.js framework with DI, modules and decorators',     group: 'backend', x: 45,  y: 66 },
  { id: 'typescript',label: 'TypeScript', desc: 'Strict typed JavaScript for reliable large-scale codebases',       group: 'backend', x: 35,  y: 76 },

  // Frontend
  { id: 'react',     label: 'React',      desc: 'Component-driven UI layer for AI-powered product interfaces',      group: 'frontend', x: 76, y: 64 },

  // Data
  { id: 'postgres',  label: 'PostgreSQL', desc: 'Primary relational data store for structured production data',      group: 'data',    x: 28,  y: 84 },
  { id: 'redis',     label: 'Redis',      desc: 'In-memory store for caching, pub/sub and session management',      group: 'data',    x: 58,  y: 84 },

  // Infra
  { id: 'sqs',       label: 'SQS',        desc: 'AWS managed queue for decoupled async processing at scale',        group: 'infra',   x: 16,  y: 94 },
  { id: 'docker',    label: 'Docker',     desc: 'Containerized deployments — consistent across dev and production', group: 'infra',   x: 42,  y: 94 },
  { id: 'gcp',       label: 'GCP',        desc: 'Cloud infrastructure — compute, storage, managed Kubernetes',      group: 'infra',   x: 66,  y: 94 },
];

const EDGES: SysEdge[] = [
  { from: 'llms',      to: 'langgraph' },
  { from: 'llms',      to: 'langchain' },
  { from: 'llms',      to: 'rag' },
  { from: 'faiss',     to: 'rag' },
  { from: 'langgraph', to: 'core' },
  { from: 'langchain', to: 'core' },
  { from: 'rag',       to: 'core' },
  { from: 'core',      to: 'django' },
  { from: 'core',      to: 'nestjs' },
  { from: 'core',      to: 'react' },
  { from: 'django',    to: 'drf' },
  { from: 'nestjs',    to: 'typescript' },
  { from: 'django',    to: 'postgres' },
  { from: 'nestjs',    to: 'postgres' },
  { from: 'nestjs',    to: 'redis' },
  { from: 'nestjs',    to: 'sqs' },
  { from: 'postgres',  to: 'docker' },
  { from: 'redis',     to: 'docker' },
  { from: 'docker',    to: 'gcp' },
];

const GROUP_COLORS: Record<string, string> = {
  ai:       '#C8903A',
  core:     '#ECE7DE',
  backend:  'rgba(236,231,222,0.8)',
  frontend: 'rgba(236,231,222,0.7)',
  data:     'rgba(236,231,222,0.65)',
  infra:    'rgba(236,231,222,0.5)',
};

function getConnectedIds(id: string): Set<string> {
  const connected = new Set<string>();
  EDGES.forEach(({ from, to }) => {
    if (from === id) connected.add(to);
    if (to === id) connected.add(from);
  });
  return connected;
}

/* ─── Group layer labels ─── */

const LAYERS = [
  { label: 'REASONING',      y: 2 },
  { label: 'APPLICATION',    y: 46 },
  { label: 'BACKEND',        y: 61 },
  { label: 'DATA',           y: 80 },
  { label: 'INFRASTRUCTURE', y: 90 },
];

/* ─── Mobile list view ─── */

const GROUP_ORDER = ['ai', 'core', 'backend', 'frontend', 'data', 'infra'];
const GROUP_LABELS: Record<string, string> = {
  ai: 'REASONING', core: 'APPLICATION', backend: 'BACKEND', frontend: 'FRONTEND', data: 'DATA', infra: 'INFRASTRUCTURE',
};

/* ─── Systems Section ─── */

export default function Systems() {
  const [hovered, setHovered] = useState<string | null>(null);

  const connected = hovered ? getConnectedIds(hovered) : new Set<string>();

  const nodeOpacity = (id: string): number => {
    if (!hovered) return 1;
    if (id === hovered) return 1;
    if (connected.has(id)) return 0.85;
    return 0.12;
  };

  const edgeOpacity = (from: string, to: string): number => {
    if (!hovered) return 0.18;
    if (from === hovered || to === hovered) return 1;
    return 0.04;
  };

  const edgeStroke = (from: string, to: string): string => {
    if (!hovered) return 'rgba(236,231,222,1)';
    if (from === hovered || to === hovered) return '#C8903A';
    return 'rgba(236,231,222,1)';
  };

  const nodeTextFill = (node: SysNode): string => {
    if (!hovered) return GROUP_COLORS[node.group] ?? '#ECE7DE';
    if (node.id === hovered) return '#C8903A';
    if (connected.has(node.id)) return GROUP_COLORS[node.group] ?? '#ECE7DE';
    return 'rgba(236,231,222,0.2)';
  };

  const activeNode = NODES.find((n) => n.id === hovered);

  return (
    <section
      id="systems"
      className="py-28 md:py-36"
      style={{ borderTop: '1px solid rgba(236,231,222,0.07)' }}
    >
      <div className="px-6 md:px-12 lg:px-16 max-w-[1440px] mx-auto">

        {/* Section header */}
        <div className="flex items-baseline gap-6 mb-16 md:mb-24">
          <span className="font-mono text-[10px] tracking-[0.22em] text-signal/70">02</span>
          <h2
            className="font-serif text-ink"
            style={{ fontSize: 'clamp(28px, 3.5vw, 52px)' }}
          >
            Systems
          </h2>
          <div className="flex-1 h-px bg-ink/8 ml-4 hidden md:block" />
        </div>

        <p className="font-mono text-[10px] tracking-[0.2em] text-ink/30 mb-12 max-w-md">
          TECHNICAL ECOSYSTEM — HOVER NODES TO INSPECT
        </p>

        {/* ── Desktop SVG node map ── */}
        <div className="hidden md:block relative">
          <svg
            viewBox={`0 0 ${SVG_W} ${SVG_H}`}
            className="w-full"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              maxHeight: '70vh',
            }}
          >
            {/* Layer labels */}
            {LAYERS.map((layer) => (
              <text
                key={layer.label}
                x="8"
                y={px(layer.y, SVG_H) + 10}
                fontSize="7"
                letterSpacing="0.18em"
                fill="rgba(236,231,222,0.15)"
              >
                {layer.label}
              </text>
            ))}

            {/* Horizontal layer lines */}
            {LAYERS.slice(1).map((layer) => (
              <line
                key={`line-${layer.label}`}
                x1="0" y1={px(layer.y, SVG_H) - 6}
                x2={SVG_W} y2={px(layer.y, SVG_H) - 6}
                stroke="rgba(236,231,222,0.04)"
                strokeWidth="0.5"
              />
            ))}

            {/* Edges */}
            {EDGES.map(({ from, to }) => {
              const a = NODES.find((n) => n.id === from)!;
              const b = NODES.find((n) => n.id === to)!;
              return (
                <line
                  key={`${from}-${to}`}
                  x1={px(a.x, SVG_W)} y1={px(a.y, SVG_H)}
                  x2={px(b.x, SVG_W)} y2={px(b.y, SVG_H)}
                  stroke={edgeStroke(from, to)}
                  strokeOpacity={edgeOpacity(from, to)}
                  strokeWidth={from === hovered || to === hovered ? 0.8 : 0.4}
                  style={{ transition: 'stroke-opacity 0.25s ease, stroke 0.25s ease, stroke-width 0.25s ease' }}
                />
              );
            })}

            {/* Nodes */}
            {NODES.map((node) => {
              const nx = px(node.x, SVG_W);
              const ny = px(node.y, SVG_H);
              const isCurrent = node.id === hovered;
              const isCore = node.group === 'core';

              return (
                <g
                  key={node.id}
                  style={{ cursor: 'pointer', opacity: nodeOpacity(node.id), transition: 'opacity 0.25s ease' }}
                  onMouseEnter={() => setHovered(node.id)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* Hit area */}
                  <circle cx={nx} cy={ny} r={isCore ? 60 : 40} fill="transparent" />

                  {/* Node dot */}
                  <circle
                    cx={nx} cy={ny} r={isCore ? 3.5 : isCurrent ? 3 : 2}
                    fill={isCurrent ? '#C8903A' : nodeTextFill(node)}
                    style={{ transition: 'fill 0.25s ease, r 0.25s ease' }}
                  />

                  {/* Outer ring for hover */}
                  {isCurrent && (
                    <circle cx={nx} cy={ny} r="7" fill="none" stroke="#C8903A" strokeWidth="0.5" opacity="0.5" />
                  )}

                  {/* Label */}
                  <text
                    x={nx + (isCore ? 0 : 8)}
                    y={ny + (isCore ? -10 : 4)}
                    fontSize={isCore ? 10 : 8.5}
                    letterSpacing={isCore ? '0.14em' : '0.1em'}
                    fill={nodeTextFill(node)}
                    textAnchor={isCore ? 'middle' : 'start'}
                    fontWeight={isCore ? '500' : '400'}
                    style={{ transition: 'fill 0.25s ease' }}
                  >
                    {node.label}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Description panel */}
          <div
            className="mt-6 h-12 flex items-center"
            style={{ borderTop: '1px solid rgba(236,231,222,0.07)' }}
          >
            {activeNode ? (
              <div className="flex items-baseline gap-6">
                <span className="font-mono text-[9px] tracking-[0.2em] text-signal">
                  {activeNode.label}
                </span>
                <span
                  className="h-px w-6"
                  style={{ background: 'rgba(236,231,222,0.15)' }}
                />
                <span className="font-mono text-[10px] text-ink/45 tracking-[0.04em]">
                  {activeNode.desc}
                </span>
              </div>
            ) : (
              <span className="font-mono text-[9px] tracking-[0.2em] text-ink/20">
                HOVER A NODE TO INSPECT —
              </span>
            )}
          </div>
        </div>

        {/* ── Mobile list view ── */}
        <div className="md:hidden flex flex-col gap-6">
          {GROUP_ORDER.map((group) => {
            const groupNodes = NODES.filter((n) => n.group === group);
            return (
              <div key={group}>
                <p className="font-mono text-[8px] tracking-[0.25em] text-ink/25 mb-3">
                  {GROUP_LABELS[group]}
                </p>
                <div className="flex flex-wrap gap-3">
                  {groupNodes.map((node) => (
                    <span
                      key={node.id}
                      className="font-mono text-[10px] tracking-[0.1em]"
                      style={{ color: GROUP_COLORS[node.group] ?? '#ECE7DE' }}
                    >
                      {node.label}
                    </span>
                  ))}
                </div>
                <div className="h-px mt-4 bg-ink/7" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
