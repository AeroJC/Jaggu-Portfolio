import { Zap, Database, Gauge } from 'lucide-react';

const metrics = [
  {
    icon: Zap,
    value: '90%',
    valueColor: '#007AFF',
    label: 'Reduction in Query Execution Time',
    description: 'Optimized critical SQL Server queries through indexing strategies and query plan analysis.',
  },
  {
    icon: Database,
    value: '500K+',
    valueColor: '#FFFFFF',
    label: 'Records Migrated (Zero Defects)',
    description: 'Seamless large-scale data migration with comprehensive validation and zero data loss.',
  },
  {
    icon: Gauge,
    value: '70%',
    valueColor: '#00D4AA',
    label: 'Faster Load Times via SSIS Pipelines',
    description: 'Built high-throughput SSIS pipelines that dramatically improved data processing speed.',
  },
];

export function Impact() {
  return (
    <section id="impact" className="bg-portfolio-bg">
      {/* padding: [80, 80, 100, 80], gap: 56 */}
      <div
        className="section-padding max-w-[1440px] mx-auto flex flex-col"
        style={{ paddingTop: '80px', paddingBottom: '100px', gap: '56px' }}
      >
        {/* Header: centered, gap 16 */}
        <div className="flex flex-col items-center text-center" style={{ gap: '16px' }}>
          <span
            className="font-mono font-semibold text-portfolio-accent"
            style={{ fontSize: '11px', letterSpacing: '2px' }}
          >
            // IMPACT_METRICS
          </span>
          <h2
            className="font-mono font-bold text-portfolio-text"
            style={{ fontSize: 'clamp(28px, 4vw, 44px)', letterSpacing: '-1px' }}
          >
            ENGINEERING IMPACT
          </h2>
          <p className="font-mono text-portfolio-text-secondary" style={{ fontSize: '15px', lineHeight: 1.6 }}>
            Numbers that tell the story of performance-driven engineering.
          </p>
        </div>

        {/* Bento Grid: horizontal, gap 20 */}
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '20px' }}>
          {metrics.map((metric, i) => {
            const Icon = metric.icon;
            return (
              <div
                key={i}
                className="flex flex-col hover:border-[#007AFF4D] transition-colors duration-300"
                style={{
                  gap: '20px',
                  padding: '28px',
                  borderRadius: '16px',
                  background: '#1A1A1A',
                  border: '1px solid #2E2E2E',
                  boxShadow: '0 4px 30px #007AFF08',
                }}
              >
                {/* Icon container: 44x44, cornerRadius 10, bg #007AFF1A */}
                <div
                  className="flex items-center justify-center"
                  style={{ width: '44px', height: '44px', borderRadius: '10px', background: '#007AFF1A' }}
                >
                  <Icon style={{ width: '20px', height: '20px', color: '#007AFF' }} />
                </div>
                {/* Metric: Oswald 52px, bold, letterSpacing -1 */}
                <span
                  className="font-display font-bold leading-none"
                  style={{ fontSize: '52px', letterSpacing: '-1px', color: metric.valueColor }}
                >
                  {metric.value}
                </span>
                {/* Label: 14px, lineHeight 1.4 */}
                <p className="font-mono text-portfolio-text-secondary" style={{ fontSize: '14px', lineHeight: 1.4 }}>
                  {metric.label}
                </p>
                {/* Description: 12px, lineHeight 1.7 */}
                <p className="font-mono text-portfolio-text-muted" style={{ fontSize: '12px', lineHeight: 1.7 }}>
                  {metric.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
