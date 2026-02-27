import { Code, Hash, Database, Workflow, BarChart3, Layers, Cloud, GitBranch, Repeat } from 'lucide-react';

const categories = [
  {
    label: 'CORE',
    dotColor: '#007AFF',
    iconColor: '#007AFF',
    items: [
      { icon: Code, label: '.NET Core' },
      { icon: Hash, label: 'C#' },
      { icon: Database, label: 'SQL Server' },
    ],
  },
  {
    label: 'DATA / REPORTING',
    dotColor: '#00D4AA',
    iconColor: '#00D4AA',
    items: [
      { icon: Workflow, label: 'SSIS' },
      { icon: BarChart3, label: 'SSRS' },
      { icon: Layers, label: 'Entity Framework' },
    ],
  },
  {
    label: 'TOOLS / WORKFLOW',
    dotColor: '#FF6B35',
    iconColor: '#FF6B35',
    items: [
      { icon: Cloud, label: 'Azure DevOps' },
      { icon: GitBranch, label: 'Git' },
      { icon: Repeat, label: 'Agile' },
    ],
  },
];

export function TechStack() {
  return (
    <section id="stack" className="bg-portfolio-bg">
      {/* padding: [80, 80, 100, 80], gap: 56 */}
      <div
        className="section-padding max-w-[1440px] mx-auto flex flex-col"
        style={{ paddingTop: '80px', paddingBottom: '100px', gap: '56px' }}
      >
        {/* Header: centered, gap 16 */}
        <div className="flex flex-col items-center text-center" style={{ gap: '16px' }}>
          <span className="font-mono font-semibold text-portfolio-accent" style={{ fontSize: '11px', letterSpacing: '2px' }}>
            // TECHNICAL_STACK
          </span>
          <h2 className="font-mono font-bold text-portfolio-text" style={{ fontSize: 'clamp(28px, 4vw, 44px)', letterSpacing: '-1px' }}>
            TECHNICAL ARSENAL
          </h2>
          <p className="font-mono text-portfolio-text-secondary" style={{ fontSize: '15px', lineHeight: 1.6 }}>
            Tools and technologies I use to build high-performance systems.
          </p>
        </div>

        {/* Stack Grid: vertical, gap 40 */}
        <div className="flex flex-col" style={{ gap: '40px' }}>
          {categories.map((cat, i) => (
            <div
              key={i}
              className="flex flex-col"
              style={{
                gap: '16px',
                padding: '24px 0',
                borderBottom: i < categories.length - 1 ? '1px solid #2E2E2E' : 'none',
              }}
            >
              {/* Category label: gap 8, dot 8x8 + Oswald 14px bold letterSpacing 1 */}
              <div className="flex items-center" style={{ gap: '8px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '4px', background: cat.dotColor, flexShrink: 0 }} />
                <span className="font-display font-bold text-portfolio-text" style={{ fontSize: '14px', letterSpacing: '1px' }}>
                  {cat.label}
                </span>
              </div>

              {/* Pills: gap 12 */}
              <div className="flex flex-wrap" style={{ gap: '12px' }}>
                {cat.items.map((item, j) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={j}
                      className="flex items-center hover:border-[#007AFF4D] transition-colors duration-300"
                      style={{
                        gap: '10px',
                        padding: '10px 18px',
                        borderRadius: '10px',
                        background: '#1A1A1A',
                        border: '1px solid #2E2E2E',
                      }}
                    >
                      <Icon style={{ width: '16px', height: '16px', color: cat.iconColor }} />
                      <span className="font-mono font-medium text-portfolio-text" style={{ fontSize: '13px' }}>
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
