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

function App() {
  const { personal, featuredProjects, experience, skills, education, awards } = portfolioData;

  const navItems = [
    { href: '#work', label: 'Work' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' }
  ];

  const topSkills = skills.primary.slice(0, 5).map((item) => item.name);

  const impactStats = [
    { value: '4+ yrs', label: 'Enterprise backend engineering' },
    { value: '500K+', label: 'Records migrated via SSIS' },
    { value: '89%', label: 'Report latency reduced' }
  ];

  return (
    <div className="site-shell">
      <header className="top-nav">
        <a href="#top" className="logo-pill">{personal.name}</a>
        <nav>
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>
      </header>

      <main id="top" className="content-wrap">
        <section className="hero-block">
          <div className="hero-layout">
            <div className="hero-main">
              <p className="eyebrow">{personal.title}</p>
              <h1>Software engineer focused on scalable .NET and data systems.</h1>
              <p className="hero-copy">
                I build backend platforms that are fast under load, reliable in production, and easy for teams to evolve.
              </p>
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
          {impactStats.map((item) => (
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
            {featuredProjects.map((project) => (
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
              <h2>Skills</h2>
            </div>
            <div className="tag-cloud">
              {topSkills.map((skill) => (
                <span key={skill}>
                  <Check size={13} />
                  {skill}
                </span>
              ))}
            </div>
            <div className="skill-groups">
              <p><strong>Secondary:</strong> {skills.secondary.map((skill) => skill.name).join(' · ')}</p>
              <p><strong>Exploring:</strong> {skills.emerging.map((skill) => skill.name).join(' · ')}</p>
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
  );
}

export default App;
