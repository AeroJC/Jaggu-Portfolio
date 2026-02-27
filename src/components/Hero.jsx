export function Hero() {
  const codeLines = [
    { text: 'public class QueryOptimizer', color: '#569CD6' },
    { text: '{', color: '#A1A1A1' },
    { text: '    // Reduced execution time by 90%', color: '#6A9955' },
    { text: '    public async Task<Result> OptimizeAsync()', color: '#DCDCAA' },
    { text: '    {', color: '#A1A1A1' },
    { text: '        var pipeline = BuildPipeline()', color: '#9CDCFE' },
    { text: '            .WithCaching()', color: '#9CDCFE' },
    { text: '            .WithParallelExecution()', color: '#9CDCFE' },
    { text: '            .WithIndexOptimization();', color: '#9CDCFE' },
    { text: '        return await pipeline.ExecuteAsync();', color: '#CE9178' },
    { text: '    }', color: '#A1A1A1' },
    { text: '}', color: '#A1A1A1' },
  ];

  return (
    <section className="bg-portfolio-bg">
      {/* Gradient accent line */}
      <div className="gradient-accent-line" />

      {/* Hero content: padding [120, 80, 100, 80], gap 80 */}
      <div
        className="flex flex-col lg:flex-row items-center section-padding max-w-[1440px] mx-auto"
        style={{ paddingTop: '100px', paddingBottom: '80px', gap: '64px' }}
      >
        {/* Left - Hero Text: gap 28 */}
        <div className="flex flex-col w-full lg:flex-1" style={{ gap: '28px' }}>
          {/* Tag pill: padding [8,16], gap 10, bg #007AFF15, border #007AFF40 */}
          <div className="animate-fade-in animate-delay-1">
            <span
              className="inline-flex items-center rounded-full font-mono font-semibold text-portfolio-accent"
              style={{
                gap: '10px',
                padding: '8px 16px',
                fontSize: '11px',
                letterSpacing: '1.5px',
                background: '#007AFF15',
                border: '1px solid #007AFF40',
              }}
            >
              <span className="w-[6px] h-[6px] rounded-[3px] bg-portfolio-accent flex-shrink-0" />
              // SENIOR_BACKEND_ENGINEER
            </span>
          </div>

          {/* H1: fontSize 56, fontWeight 700, lineHeight 1.05, letterSpacing -1 */}
          <h1
            className="font-mono text-portfolio-text animate-fade-in animate-delay-2"
            style={{
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: '-1px',
            }}
          >
            Jagadeesh Sura
          </h1>

          {/* Subtitle: fontSize 16, lineHeight 1.7 */}
          <p
            className="font-mono text-portfolio-text-secondary animate-fade-in animate-delay-3"
            style={{ fontSize: '16px', lineHeight: 1.7 }}
          >
            Architecting high-performance systems and scalable data pipelines.
          </p>

          {/* CTAs: gap 12 */}
          <div className="flex items-center animate-fade-in animate-delay-4" style={{ gap: '12px' }}>
            {/* Primary: h44, px 24, cornerRadius 8, bg accent, shadow */}
            <a
              href="#impact"
              className="flex items-center justify-center font-mono text-white hover:-translate-y-0.5 transition-all duration-300"
              style={{
                height: '44px',
                padding: '0 24px',
                borderRadius: '8px',
                background: '#007AFF',
                fontSize: '13px',
                fontWeight: 600,
                boxShadow: '0 4px 20px #007AFF33',
              }}
            >
              View My Work
            </a>
            {/* Secondary: h44, px 24, cornerRadius 8, border */}
            <a
              href="mailto:jagadeesh.sura1997@gmail.com"
              className="flex items-center justify-center font-mono text-portfolio-text-secondary hover:text-portfolio-text hover:border-[#007AFF80] transition-all duration-300"
              style={{
                height: '44px',
                padding: '0 24px',
                borderRadius: '8px',
                border: '1px solid #2E2E2E',
                fontSize: '13px',
              }}
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Right - Terminal Window: width 520, cornerRadius 16, shadow glow */}
        <div className="w-full lg:w-[520px] flex-shrink-0 animate-fade-in animate-delay-3">
          <div
            style={{
              borderRadius: '16px',
              background: '#1A1A1A',
              border: '1px solid #2E2E2E',
              overflow: 'hidden',
              boxShadow: '0 8px 40px #007AFF15',
            }}
          >
            {/* Title Bar: h44, px 20, bg #161616, dots 10x10 */}
            <div
              className="flex items-center"
              style={{ gap: '8px', height: '44px', padding: '0 20px', background: '#161616' }}
            >
              <span className="w-[10px] h-[10px] rounded-full bg-[#FF5F57]" />
              <span className="w-[10px] h-[10px] rounded-full bg-[#FEBC2E]" />
              <span className="w-[10px] h-[10px] rounded-full bg-[#28C840]" />
              <span className="font-mono text-[11px] text-portfolio-text-muted ml-2">
                performance_optimizer.cs
              </span>
            </div>
            {/* Code Body: padding 24, gap 6 */}
            <div className="flex flex-col" style={{ padding: '24px', gap: '6px' }}>
              {codeLines.map((line, i) => (
                <code
                  key={i}
                  className="font-mono"
                  style={{ fontSize: '12px', color: line.color, lineHeight: 1.6 }}
                >
                  {line.text}
                </code>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
