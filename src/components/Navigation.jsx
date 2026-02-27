import { Menu, X, Download } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#impact', label: 'Impact' },
    { href: '#experience', label: 'Experience' },
    { href: '#stack', label: 'Stack' },
    { href: '#beyond', label: 'Leadership' },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'shadow-[0_4px_30px_rgba(0,0,0,0.3)]' : ''
      }`}
      style={{
        background: '#121212cc',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid #2E2E2E',
      }}
    >
      <div className="flex items-center justify-between h-[72px] section-padding max-w-[1440px] mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="font-mono text-[20px] font-bold text-portfolio-accent">JS</span>
          <span className="w-[6px] h-[6px] rounded-[3px] bg-portfolio-accent" />
          <span className="font-mono text-[12px] font-medium text-portfolio-text-secondary" style={{ letterSpacing: '4px' }}>
            PORTFOLIO
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-[32px]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-mono text-[12px] font-medium text-portfolio-text-secondary hover:text-portfolio-accent transition-colors duration-300"
              style={{ letterSpacing: '0.5px' }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <a
            href="#"
            className="flex items-center gap-[6px] h-[36px] px-[16px] rounded-full border border-portfolio-accent font-mono text-[11px] font-bold text-portfolio-accent hover:bg-[#007AFF15] transition-colors duration-300"
            style={{ letterSpacing: '0.5px' }}
          >
            <Download className="w-[14px] h-[14px]" />
            Download CV
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-portfolio-surface text-portfolio-text"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="md:hidden absolute top-full left-0 right-0 border-t border-portfolio-border"
          style={{ background: '#121212ee', backdropFilter: 'blur(20px)' }}
        >
          <div className="flex flex-col p-5 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-mono text-sm text-portfolio-text-secondary py-3 px-4 rounded-lg hover:bg-portfolio-surface hover:text-portfolio-text transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 mt-3 h-10 rounded-full border border-portfolio-accent font-mono text-xs font-bold text-portfolio-accent"
            >
              <Download className="w-3.5 h-3.5" />
              Download CV
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
