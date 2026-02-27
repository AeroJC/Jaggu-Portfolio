import { GraduationCap, Trophy } from 'lucide-react';

const leadershipItems = [
  {
    title: 'Captain, Kho-Kho Team',
    description: 'Led the college Kho-Kho team to inter-college championships. Built discipline, strategy, and team coordination under pressure.',
  },
  {
    title: 'Head of Public Relations',
    description: 'Managed communications and event coordination for the college. Developed stakeholder engagement and public speaking skills.',
  },
];

export function Beyond() {
  return (
    <section id="beyond" className="bg-portfolio-surface">
      {/* padding: [80, 80, 100, 80], gap: 56 */}
      <div
        className="section-padding max-w-[1440px] mx-auto flex flex-col"
        style={{ paddingTop: '80px', paddingBottom: '100px', gap: '56px' }}
      >
        {/* Header: centered, gap 16 */}
        <div className="flex flex-col items-center text-center" style={{ gap: '16px' }}>
          <span className="font-mono font-semibold text-portfolio-accent" style={{ fontSize: '11px', letterSpacing: '2px' }}>
            // BEYOND_THE_CODE
          </span>
          <h2 className="font-mono font-bold text-portfolio-text" style={{ fontSize: 'clamp(28px, 4vw, 44px)', letterSpacing: '-1px' }}>
            BEYOND THE CODE
          </h2>
          <p className="font-mono text-portfolio-text-secondary" style={{ fontSize: '15px', lineHeight: 1.6 }}>
            Education, leadership, and what drives me beyond the terminal.
          </p>
        </div>

        {/* Cards Grid: horizontal, gap 28 */}
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '28px' }}>
          {/* Education Card: cornerRadius 16, bg elevated, border, padding 32, gap 24 */}
          <div
            className="flex flex-col hover:border-[#007AFF4D] transition-colors duration-300"
            style={{
              gap: '24px',
              padding: '32px',
              borderRadius: '16px',
              background: '#242424',
              border: '1px solid #2E2E2E',
              boxShadow: '0 4px 30px #007AFF08',
            }}
          >
            {/* Icon: 44x44, cornerRadius 10, bg #007AFF1A */}
            <div
              className="flex items-center justify-center"
              style={{ width: '44px', height: '44px', borderRadius: '10px', background: '#007AFF1A' }}
            >
              <GraduationCap style={{ width: '20px', height: '20px', color: '#007AFF' }} />
            </div>
            {/* Label: Oswald 18px, bold, letterSpacing 0.5 */}
            <h3 className="font-display font-bold text-portfolio-text" style={{ fontSize: '18px', letterSpacing: '0.5px' }}>
              EDUCATION
            </h3>
            {/* School details: gap 8 */}
            <div className="flex flex-col" style={{ gap: '8px' }}>
              <p className="font-mono font-semibold text-portfolio-text" style={{ fontSize: '15px', lineHeight: 1.4 }}>
                National Institute of Technology, Trichy
              </p>
              <p className="font-mono text-portfolio-text-secondary" style={{ fontSize: '13px' }}>
                B.Tech in Engineering
              </p>
              <p className="font-mono text-portfolio-text-muted" style={{ fontSize: '12px', lineHeight: 1.7, marginTop: '4px' }}>
                One of India's premier engineering institutions. Rigorous curriculum covering algorithms, systems, and software architecture.
              </p>
            </div>
          </div>

          {/* Leadership Card: cornerRadius 16, bg elevated, border, padding 32, gap 24 */}
          <div
            className="flex flex-col hover:border-[#FF6B354D] transition-colors duration-300"
            style={{
              gap: '24px',
              padding: '32px',
              borderRadius: '16px',
              background: '#242424',
              border: '1px solid #2E2E2E',
              boxShadow: '0 4px 30px #FF6B3508',
            }}
          >
            {/* Icon: 44x44, cornerRadius 10, bg #FF6B351A */}
            <div
              className="flex items-center justify-center"
              style={{ width: '44px', height: '44px', borderRadius: '10px', background: '#FF6B351A' }}
            >
              <Trophy style={{ width: '20px', height: '20px', color: '#FF6B35' }} />
            </div>
            {/* Label: Oswald 18px, bold */}
            <h3 className="font-display font-bold text-portfolio-text" style={{ fontSize: '18px', letterSpacing: '0.5px' }}>
              LEADERSHIP
            </h3>
            {/* Items: gap 20 */}
            <div className="flex flex-col" style={{ gap: '20px' }}>
              {leadershipItems.map((item, i) => (
                <div key={i} className="flex" style={{ gap: '10px' }}>
                  <span
                    className="flex-shrink-0"
                    style={{ width: '8px', height: '8px', borderRadius: '4px', background: '#FF6B35', marginTop: '6px' }}
                  />
                  <div className="flex flex-col" style={{ gap: '4px' }}>
                    <span className="font-mono font-bold text-portfolio-text" style={{ fontSize: '14px' }}>
                      {item.title}
                    </span>
                    <p className="font-mono text-portfolio-text-muted" style={{ fontSize: '12px', lineHeight: 1.7 }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
