import { useEffect, useState } from 'react';
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
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

function App() {
  const { personal, featuredProjects, experience, education, awards } = portfolioData;
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') {
      return 'default';
    }

    const savedTheme = window.localStorage.getItem('portfolio-theme');
    return themeOptions.some((item) => item.key === savedTheme) ? savedTheme : 'default';
  });
  const [profileFocus, setProfileFocus] = useState(() => {
    if (typeof window === 'undefined') {
      return 'backend';
    }

    const savedFocus = window.localStorage.getItem('portfolio-focus');
    return profileOptions.some((item) => item.key === savedFocus) ? savedFocus : 'backend';
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

      <div className="profile-switcher" role="group" aria-label="Profile focus selector">
        {profileOptions.map((item) => (
          <button
            key={item.key}
            type="button"
            className={`profile-btn ${profileFocus === item.key ? 'active' : ''}`}
            onClick={() => setProfileFocus(item.key)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <main id="top" className="content-wrap">
        <section className="hero-block">
          <div className="hero-layout">
            <div className="hero-main">
              <p className="eyebrow">{personal.title}</p>
              <h1>{activeProfile.title}</h1>
              <p className="hero-copy">{activeProfile.subtitle}</p>
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
        </section>

        <section className="grid grid-3 metrics">
          {activeProfile.stats.map((item) => (
            <article key={item.value} className="card metric-card">
              <p className="metric-value">{item.value}</p>
              <p>{item.label}</p>
            </article>
          ))}
        </section>

        <section id="work" className="section-block">
          <div className="section-head">
            <h2>Selected Work</h2>
          </div>
          <div className="grid grid-3">
            {orderedProjects.map((project) => (
              <article key={project.slug} className="card project-card">
                <p className="chip">{project.role}</p>
                <h3>{project.title}</h3>
                <p>{project.bullets[0]}</p>
                <ul>
                  {project.bullets.slice(1).map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
                <div className="tag-row">
                  {project.stack.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section-block split">
          <article className="card">
            <div className="section-head">
              <h2>Experience</h2>
            </div>
            <div className="stack">
              {experience.map((item) => (
                <div key={`${item.company}-${item.dates}`} className="entry-line">
                  <p className="chip">{item.dates}</p>
                  <h3>{item.role}</h3>
                  <p>{item.company}</p>
                  <ul>
                    {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </article>

          <article id="skills" className="card">
            <div className="section-head">
              <h2>{profileOptions.find((item) => item.key === profileFocus)?.label} Focus</h2>
            </div>
            <div className="tag-cloud">
              {activeProfile.topSkills.map((skill) => (
                <span key={skill}>
                  <Check size={13} />
                  {skill}
                </span>
              ))}
            </div>
            <div className="skill-groups">
              <p><strong>{activeProfile.secondaryLabel}:</strong> {activeProfile.secondaryText}</p>
              <p><strong>{activeProfile.exploringLabel}:</strong> {activeProfile.exploringText}</p>
            </div>
          </article>
        </section>

        <section id="about" className="section-block split">
          <article className="card">
            <div className="section-head">
              <h2>Education</h2>
            </div>
            <p className="line-with-icon"><GraduationCap size={15} /> {education.degree}</p>
            <p>{education.institution}</p>
            <p className="chip">{education.period}</p>
          </article>

          <article className="card">
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
          </article>
        </section>

        <section id="contact" className="section-block">
          <article className="card contact-card">
            <h2>Let’s build something useful.</h2>
            <p>Open to backend engineering, data-intensive systems, and performance-focused roles.</p>
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
          </article>
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
