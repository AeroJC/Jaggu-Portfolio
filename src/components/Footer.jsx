import { Linkedin, Github, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer style={{ background: '#0A0A0A' }}>
      {/* Gradient accent line */}
      <div className="gradient-accent-line" />

      {/* Footer content: padding [60, 80, 48, 80], gap 32 */}
      <div
        className="section-padding max-w-[1440px] mx-auto flex flex-col"
        style={{ paddingTop: '60px', paddingBottom: '48px', gap: '32px' }}
      >
        {/* Top Row: horizontal, space-between */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between" style={{ gap: '24px' }}>
          {/* Brand: gap 10 */}
          <div className="flex flex-col" style={{ gap: '10px' }}>
            {/* Logo row: gap 8 */}
            <div className="flex items-center" style={{ gap: '8px' }}>
              <span className="font-display" style={{ fontSize: '22px', fontWeight: 700, color: '#007AFF' }}>
                JS
              </span>
              <span style={{ width: '6px', height: '6px', borderRadius: '2px', background: '#007AFF', flexShrink: 0 }} />
              <span className="font-display" style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '3px', color: '#A1A1A1' }}>
                JAGADEESH SURA
              </span>
            </div>
            <p className="font-mono" style={{ fontSize: '12px', color: '#666666' }}>
              Senior Backend Engineer at Aurigo Software Technologies
            </p>
          </div>

          {/* Social Icons: gap 12 */}
          <div className="flex items-center" style={{ gap: '12px' }}>
            <a
              href="https://linkedin.com/in/jagadeesh-sura"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center hover:border-[#007AFF80] transition-all duration-300"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: '#1A1A1A',
                border: '1px solid #2E2E2E',
              }}
              aria-label="LinkedIn"
            >
              <Linkedin style={{ width: '18px', height: '18px', color: '#A1A1A1' }} />
            </a>
            <a
              href="https://github.com/jagadeesh-sura"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center hover:border-[#007AFF80] transition-all duration-300"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: '#1A1A1A',
                border: '1px solid #2E2E2E',
              }}
              aria-label="GitHub"
            >
              <Github style={{ width: '18px', height: '18px', color: '#A1A1A1' }} />
            </a>
            <a
              href="mailto:jagadeesh.sura1997@gmail.com"
              className="flex items-center justify-center hover:border-[#007AFF80] transition-all duration-300"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: '#1A1A1A',
                border: '1px solid #2E2E2E',
              }}
              aria-label="Email"
            >
              <Mail style={{ width: '18px', height: '18px', color: '#A1A1A1' }} />
            </a>
          </div>
        </div>

        {/* Divider: 1px solid #2E2E2E */}
        <div style={{ height: '1px', background: '#2E2E2E' }} />

        {/* Bottom Row: horizontal, space-between */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between" style={{ gap: '16px' }}>
          <span className="font-mono" style={{ fontSize: '11px', letterSpacing: '0.5px', color: '#666666' }}>
            // built_with_passion_and_precision
          </span>
          <span className="font-mono" style={{ fontSize: '11px', letterSpacing: '0.5px', color: '#666666' }}>
            &copy; 2025 Jagadeesh Sura. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
