import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  BriefcaseBusiness,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Trophy
} from 'lucide-react';
import { portfolioData } from './data/portfolio';

const themeOptions = [
  { key: 'default', label: 'Default' },
  { key: 'matrix', label: 'Matrix' },
  { key: 'holographic', label: 'Holo' }
];

const profileOptions = [
  { key: 'backend', label: 'Backend' },
  { key: 'dotnet', label: '.NET' },
  { key: 'database', label: 'Database' }
];

// ─── animation constants ─────────────────────────────────────────────────────
const EASE = [0.25, 0.1, 0.25, 1];
const SPRING = { type: 'spring', stiffness: 380, damping: 30 };

/** Fade + slide up for scroll-reveal (whileInView) */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.38, ease: EASE, delay }
});

/** Cross-fade when profile switches — used inside AnimatePresence */
const SWITCH = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -6 },
  transition: { duration: 0.24, ease: EASE }
};

// ─────────────────────────────────────────────────────────────────────────────

function App() {
  const { personal, featuredProjects, experience, education, awards } = portfolioData;
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'default';
    const saved = window.localStorage.getItem('portfolio-theme');
    return themeOptions.some((t) => t.key === saved) ? saved : 'default';
  });
  const [profileFocus, setProfileFocus] = useState(() => {
    if (typeof window === 'undefined') return 'backend';
    const saved = window.localStorage.getItem('portfolio-focus');
    return profileOptions.some((t) => t.key === saved) ? saved : 'backend';
  });

  const navItems = [
    { href: '#work', label: 'Work' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' }
  ];

  const profileModes = {
    backend: {
      title: 'Software engineer focused on scalable backend platforms.',
      subtitle: 'I build production-ready APIs and enterprise systems that stay fast, observable, and maintainable as complexity grows.',
      stats: [
        { value: '4+ yrs', label: 'Enterprise backend engineering' },
        { value: '20s', label: 'SSRS report latency target achieved' },
        { value: '500K+', label: 'Records processed in migration' }
      ],
      projectOrder: ['api-framework', 'ssrs-reporting', 'data-migration'],
      topSkills: ['C# & .NET Core', 'ASP.NET Core', 'Entity Framework', 'REST APIs', 'Azure DevOps'],
      secondaryLabel: 'Architecture focus',
      secondaryText: 'API contracts · Integration reliability · Error handling · Observability',
      exploringLabel: 'Next upgrades',
      exploringText: '.NET 8 patterns · Clean architecture · AI-assisted development'
    },
    dotnet: {
      title: '.NET engineer building high-performance enterprise applications.',
      subtitle: 'From API modules to data-intensive workloads, I optimize .NET systems for speed, maintainability, and long-term product evolution.',
      stats: [
        { value: 'C#', label: 'Primary language for production systems' },
        { value: '.NET Core', label: 'Core framework for backend modules' },
        { value: '89%', label: 'Performance gain in reporting stack' }
      ],
      projectOrder: ['ssrs-reporting', 'api-framework', 'data-migration'],
      topSkills: ['C# & .NET Core', 'ASP.NET Core', 'Entity Framework', 'SSRS & SSIS', 'JavaScript & jQuery'],
      secondaryLabel: '.NET ecosystem',
      secondaryText: 'ASP.NET APIs · Entity Framework optimization · Dependency patterns · Modular services',
      exploringLabel: 'Current learning',
      exploringText: '.NET 8 features · Azure Functions · Advanced profiling'
    },
    database: {
      title: 'Data and SQL-focused engineer for high-volume enterprise workloads.',
      subtitle: 'I design efficient data flows, optimize SQL-heavy modules, and deliver reliable migration/reporting pipelines at scale.',
      stats: [
        { value: '500K+', label: 'Records migrated with integrity checks' },
        { value: '70%', label: 'Faster migration load time' },
        { value: '3m → 20s', label: 'Report execution optimization' }
      ],
      projectOrder: ['data-migration', 'ssrs-reporting', 'api-framework'],
      topSkills: ['SQL Server', 'SSRS & SSIS', 'Entity Framework', 'C# & .NET Core', 'REST APIs'],
      secondaryLabel: 'Data focus',
      secondaryText: 'Query tuning · Index strategy · ETL design · Data validation automation',
      exploringLabel: 'Next upgrades',
      exploringText: 'Advanced SQL optimization · Pipeline observability · Azure data services'
    }
  };

  const activeProfile = profileModes[profileFocus];
  const orderedProjects = [...featuredProjects].sort(
    (a, b) => activeProfile.projectOrder.indexOf(a.slug) - activeProfile.projectOrder.indexOf(b.slug)
  );

  useEffect(() => {
    window.localStorage.setItem('portfolio-theme', theme);
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    window.localStorage.setItem('portfolio-focus', profileFocus);
    document.body.setAttribute('data-focus', profileFocus);
  }, [profileFocus]);

  return (
    <div className={`app-root theme-${theme} focus-${profileFocus}`}>
      <div className="site-shell">
        <div className="fx-grid" aria-hidden="true" />
        <div className="fx-glow fx-glow-a" aria-hidden="true" />
        <div className="fx-glow fx-glow-b" aria-hidden="true" />

        {/* ── HEADER (untouched) ── */}
        <header className="top-nav">
          <a href="#top" className="logo-pill">{personal.name}</a>
          <nav className="main-links">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>{item.label}</a>
            ))}
          </nav>
          <div className="theme-switcher" role="group" aria-label="Style selector">
            {themeOptions.map((item) => (
              <button
                key={item.key}
                type="button"
                className={`theme-btn ${theme === item.key ? 'active' : ''}`}
                onClick={() => setTheme(item.key)}
                aria-label={item.label}
                title={item.label}
              >
                <span className={`theme-icon theme-icon-${item.key}`} aria-hidden="true" />
              </button>
            ))}
          </div>
        </header>

        {/* ── PROFILE SWITCHER with spring pill ── */}
        <div className="profile-switcher" role="group" aria-label="Profile focus selector">
          {profileOptions.map((item) => (
            <motion.button
              key={item.key}
              type="button"
              className={`profile-btn ${profileFocus === item.key ? 'active' : ''}`}
              onClick={() => setProfileFocus(item.key)}
              whileTap={{ scale: 0.94 }}
            >
              {profileFocus === item.key && (
                <motion.span
                  layoutId="profile-pill"
                  className="profile-pill-bg"
                  transition={SPRING}
                />
              )}
              <span className="profile-btn-label">{item.label}</span>
            </motion.button>
          ))}
        </div>

        <main id="top" className="content-wrap">

          {/* ── HERO: fade in on load; h1 + subtitle cross-fade on switch ── */}
          <motion.section
            className="hero-block"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: EASE }}
          >
            <div className="hero-layout">
              <div className="hero-main">
                <p className="eyebrow">{personal.title}</p>

                <AnimatePresence mode="wait">
                  <motion.h1 key={activeProfile.title} {...SWITCH}>
                    {activeProfile.title}
                  </motion.h1>
                </AnimatePresence>

                <AnimatePresence mode="wait">
                  <motion.p
                    key={activeProfile.subtitle}
                    className="hero-copy"
                    {...SWITCH}
                    transition={{ duration: 0.24, ease: EASE, delay: 0.05 }}
                  >
                    {activeProfile.subtitle}
                  </motion.p>
                </AnimatePresence>

                <div className="hero-meta">
                  <p><MapPin size={16} /> {personal.location}</p>
                  <p><BriefcaseBusiness size={16} /> {experience[0]?.company}</p>
                </div>
                <div className="cta-row">
                  <a href="#work" className="btn-primary">View Work</a>
                  <a href="#contact" className="btn-secondary">Contact</a>
                </div>
              </div>

              <div className="hero-visual" aria-hidden="true">
                <img src="/profile.jpg" alt={`${personal.name} profile`} className="profile-image" />
              </div>
            </div>
          </motion.section>

          {/* ── METRICS STRIP
               Container stays in DOM. Each item re-mounts (via key) on switch,
               staggering via delay. No AnimatePresence = no layout disruption. ── */}
          <section className="metrics-strip">
            {activeProfile.stats.map((item, i) => (
              <motion.div
                key={item.value + profileFocus}
                className="metric-item"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: EASE, delay: i * 0.07 }}
              >
                <p className="metric-value">{item.value}</p>
                <p className="metric-label">{item.label}</p>
              </motion.div>
            ))}
          </section>

          {/* ── SELECTED WORK
               Container stays in DOM. Cards re-mount on switch via key,
               stagger via delay. No AnimatePresence = no layout disruption. ── */}
          <section id="work" className="section-block">
            <motion.div className="section-head" {...fadeUp()}>
              <h2>Selected Work</h2>
            </motion.div>

            <div className="grid grid-3">
              {orderedProjects.map((project, i) => (
                <motion.article
                  key={project.slug + profileFocus}
                  className="card project-card"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, ease: EASE, delay: i * 0.09 }}
                >
                  <div className="project-body">
                    <p className="project-role">{project.role}</p>
                    <h3>{project.title}</h3>
                    <p className="project-outcome">{project.bullets[0]}</p>
                    <ul>
                      {project.bullets.slice(1, 3).map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="project-footer">
                    <div className="tag-row">
                      {project.stack.slice(0, 4).map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    <a href={`#${project.slug}`} className="project-link">
                      Case study <ArrowUpRight size={13} />
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>

          {/* ── EXPERIENCE + SKILLS
               Cards scroll-reveal. Timeline rows slide in from left.
               Skills content cross-fades on switch (small div, safe for AP). ── */}
          <section id="experience" className="section-block split">
            <motion.article className="card" {...fadeUp()}>
              <div className="section-head">
                <h2>Experience</h2>
              </div>
              <div className="stack">
                {experience.map((item, i) => (
                  <motion.div
                    key={`${item.company}-${item.dates}`}
                    className="timeline-row"
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, ease: EASE, delay: i * 0.12 }}
                  >
                    <p className="timeline-date">{item.dates}</p>
                    <div className="timeline-content">
                      <h3>{item.role}</h3>
                      <p className="company-name">{item.company}</p>
                      <ul>
                        {item.bullets.slice(0, 3).map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.article>

            <motion.article id="skills" className="card" {...fadeUp(0.1)}>
              <div className="section-head">
                <h2>{profileOptions.find((item) => item.key === profileFocus)?.label} Focus</h2>
              </div>
              {/* Skills div is small + inside a fixed card → AnimatePresence is safe here */}
              <AnimatePresence mode="wait">
                <motion.div key={profileFocus} className="skill-groups" {...SWITCH}>
                  <div>
                    <p className="skill-group-label">Core</p>
                    <p className="skill-group-list">{activeProfile.topSkills.join(' · ')}</p>
                  </div>
                  <div>
                    <p className="skill-group-label">{activeProfile.secondaryLabel}</p>
                    <p className="skill-group-list">{activeProfile.secondaryText}</p>
                  </div>
                  <div>
                    <p className="skill-group-label">{activeProfile.exploringLabel}</p>
                    <p className="skill-group-list">{activeProfile.exploringText}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.article>
          </section>

          {/* ── EDUCATION + AWARDS: scroll reveal ── */}
          <section id="about" className="section-block split">
            <motion.article className="card" {...fadeUp()}>
              <div className="section-head">
                <h2>Education</h2>
              </div>
              <p className="line-with-icon"><GraduationCap size={15} /> {education.degree}</p>
              <p style={{ marginTop: '0.4rem' }}>{education.institution}</p>
              <p className="chip" style={{ marginTop: '0.6rem' }}>{education.period}</p>
            </motion.article>

            <motion.article className="card" {...fadeUp(0.1)}>
              <div className="section-head">
                <h2>Awards</h2>
              </div>
              <div className="stack">
                {awards.map((award) => (
                  <div key={award.title} className="entry-line">
                    <p className="line-with-icon"><Trophy size={14} /> {award.title}</p>
                    <p className="chip">{award.period}</p>
                    <p>{award.description}</p>
                  </div>
                ))}
              </div>
            </motion.article>
          </section>

          {/* ── CONTACT: scroll reveal ── */}
          <section id="contact" className="section-block">
            <motion.article className="card contact-card" {...fadeUp()}>
              <h2>Let's build something useful.</h2>
              <p style={{ marginTop: '0.4rem' }}>Open to backend engineering, data-intensive systems, and performance-focused roles.</p>
              <div className="contact-grid">
                <a href={`mailto:${personal.email}`} className="contact-link">
                  <Mail size={16} />
                  {personal.email}
                </a>
                <a href={`tel:${personal.phone.replace(/\s+/g, '')}`} className="contact-link">
                  <Phone size={16} />
                  {personal.phone}
                </a>
                <a href={personal.linkedin} className="contact-link" target="_blank" rel="noreferrer">
                  LinkedIn
                  <ArrowUpRight size={15} />
                </a>
                <a href={personal.github} className="contact-link" target="_blank" rel="noreferrer">
                  GitHub
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </motion.article>
          </section>

        </main>

        <footer className="page-footer">
          <p>© {new Date().getFullYear()} {personal.name}</p>
          <p>{personal.title}</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
