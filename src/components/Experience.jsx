const timelineItems = [
  {
    date: '2024 - Present',
    role: 'Senior Software Engineer',
    dateColor: '#007AFF',
    roleColor: '#A1A1A1',
    dotSize: 14,
    dotColor: '#007AFF',
    showLine: true,
    title: 'System Design & Architecture',
    description: 'Led the implementation of Strategy and Hooks design patterns to create flexible, maintainable architecture. Designed RESTful APIs integrated with third-party systems for seamless data exchange.',
    pills: ['C#', 'Strategy Pattern', 'REST APIs'],
  },
  {
    date: '2022 - 2024',
    role: 'Software Engineer',
    dateColor: '#A1A1A1',
    roleColor: '#666666',
    dotSize: 12,
    dotColor: '#A1A1A1',
    showLine: true,
    title: 'SSRS Optimization & Reporting',
    description: 'Engineered high-performance SSRS reports with complex stored procedures. Reduced report generation time by 70% through SSIS pipeline optimization.',
    pills: ['SSIS', 'SSRS', 'SQL Server'],
  },
  {
    date: '2021 - 2022',
    role: 'Software Intern',
    dateColor: '#666666',
    roleColor: '#666666',
    dotSize: 10,
    dotColor: '#666666',
    showLine: false,
    title: 'Foundation & Learning',
    description: 'Built foundational skills in .NET Core development, database management, and agile practices. Contributed to production codebases from day one.',
    pills: ['.NET Core', 'Entity Framework', 'Agile'],
  },
];

export function Experience() {
  return (
    <section id="experience" className="bg-portfolio-surface">
      {/* padding: [80, 80, 100, 80], gap: 56 */}
      <div
        className="section-padding max-w-[1440px] mx-auto flex flex-col"
        style={{ paddingTop: '80px', paddingBottom: '100px', gap: '56px' }}
      >
        {/* Header: centered, gap 16 */}
        <div className="flex flex-col items-center text-center" style={{ gap: '16px' }}>
          <span className="font-mono font-semibold text-portfolio-accent" style={{ fontSize: '11px', letterSpacing: '2px' }}>
            // CAREER_TIMELINE
          </span>
          <h2 className="font-mono font-bold text-portfolio-text" style={{ fontSize: 'clamp(28px, 4vw, 44px)', letterSpacing: '-1px' }}>
            EXPERIENCE
          </h2>
          <p className="font-mono text-portfolio-text-secondary" style={{ fontSize: '15px', lineHeight: 1.6 }}>
            Aurigo Software Technologies
          </p>
        </div>

        {/* Timeline: vertical, items centered, gap 0 */}
        <div className="flex flex-col items-center">
          {timelineItems.map((item, i) => (
            <div key={i} className="flex w-full max-w-[900px]" style={{ gap: '24px' }}>
              {/* Left: width 180, gap 6, alignItems end */}
              <div
                className="hidden md:flex flex-col items-end flex-shrink-0 pt-1"
                style={{ width: '180px', gap: '6px' }}
              >
                <span className="font-mono text-right" style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.5px', color: item.dateColor }}>
                  {item.date}
                </span>
                <span className="font-mono text-right" style={{ fontSize: '11px', letterSpacing: '0.3px', color: item.roleColor }}>
                  {item.role}
                </span>
              </div>

              {/* Center: width 20, vertical, dot + line */}
              <div className="hidden md:flex flex-col items-center flex-shrink-0" style={{ width: '20px' }}>
                <div
                  className="flex-shrink-0"
                  style={{
                    width: `${item.dotSize}px`,
                    height: `${item.dotSize}px`,
                    borderRadius: `${item.dotSize / 2}px`,
                    background: item.dotColor,
                  }}
                />
                {item.showLine && (
                  <div className="flex-1 mt-1" style={{ width: '1px', background: '#2E2E2E' }} />
                )}
              </div>

              {/* Right: flex 1, paddingBottom 24 */}
              <div className="flex-1" style={{ paddingBottom: i < timelineItems.length - 1 ? '24px' : '0' }}>
                {/* Mobile date */}
                <div className="md:hidden flex items-center gap-2 mb-3">
                  <span className="font-mono text-xs font-bold" style={{ color: item.dateColor }}>{item.date}</span>
                  <span className="text-portfolio-text-muted">-</span>
                  <span className="font-mono text-[11px]" style={{ color: item.roleColor }}>{item.role}</span>
                </div>

                {/* Card: cornerRadius 16, bg elevated, border, padding 28, gap 16 */}
                <div
                  className="flex flex-col"
                  style={{
                    gap: '16px',
                    padding: '28px',
                    borderRadius: '16px',
                    background: '#242424',
                    border: '1px solid #2E2E2E',
                  }}
                >
                  {/* Title: Oswald 17px, bold */}
                  <h3 className="font-display" style={{ fontSize: '17px', fontWeight: 700, color: '#FFFFFF' }}>
                    {item.title}
                  </h3>
                  {/* Description: 13px, lineHeight 1.8 */}
                  <p className="font-mono text-portfolio-text-secondary" style={{ fontSize: '13px', lineHeight: 1.8 }}>
                    {item.description}
                  </p>
                  {/* Pills: gap 6 */}
                  <div className="flex flex-wrap" style={{ gap: '6px' }}>
                    {item.pills.map((pill, j) => (
                      <span
                        key={j}
                        className="font-mono text-portfolio-accent"
                        style={{
                          padding: '5px 12px',
                          borderRadius: '999px',
                          background: '#007AFF1A',
                          fontSize: '10px',
                        }}
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
