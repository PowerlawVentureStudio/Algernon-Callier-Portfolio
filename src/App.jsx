import { useEffect, useRef, useState } from 'react';
import Logo from './components/Logo.jsx';
import ProjectCard from './components/ProjectCard.jsx';
import {
  ArrowDown,
  ArrowUpRight,
  ChevronRight,
  Sun,
  Moon,
  LinkedIn,
  XMark,
  GitHub,
  Mail,
} from './components/icons.jsx';
import config from './data/config.js';
import { featuredProjects, additionalProjects } from './data/projects.js';
import { experience, education } from './data/experience.js';
import accomplishments from './data/accomplishments.js';
import thesis from './data/thesis.js';

const NAV = [
  ['Work', 'work'],
  ['Experience', 'experience'],
  ['Accomplishments', 'accomplishments'],
  ['Thesis', 'thesis'],
  ['About', 'about'],
];

function useTheme() {
  const [theme, setTheme] = useState(() =>
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  );
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  return [theme, () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))];
}

function useScrolled() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return scrolled;
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function Header({ theme, toggleTheme, scrolled }) {
  return (
    <header className="site-header" data-scrolled={scrolled}>
      <div className="shell">
        <a
          className="brand"
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <Logo />
          <span>Algernon Callier</span>
        </a>
        <nav className="nav" aria-label="Primary">
          <div className="nav-desktop">
            {NAV.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId(id);
                }}
              >
                {label}
              </a>
            ))}
          </div>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun /> : <Moon />}
          </button>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="shell">
        <div className="hero-grid">
          <div>
            <p className="hero-locale">{config.location} · Founder</p>
            <h1>
              Building software that
              <br />
              earns its place — from
              <br />
              <em>concept to reference</em>
              <br />
              implementation.
            </h1>
            <p className="hero-lede">
              I'm <strong>Al Callier</strong> — founder and CEO of{' '}
              <strong>Draft First Technologies</strong>. I turn corporate
              innovation experience into ventures that ship, backed by real
              architecture and strategic IP.
            </p>
            <div className="hero-actions">
              <a
                className="btn btn-primary"
                href="#work"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId('work');
                }}
              >
                Selected work <ArrowDown />
              </a>
              <a
                className="btn btn-ghost"
                href="#experience"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId('experience');
                }}
              >
                Experience
              </a>
            </div>
          </div>

          <div className="hero-side">
            <Motif />
            <dl className="hero-facts">
              <div className="hero-fact">
                <dt>Currently</dt>
                <dd>{config.currentRole}</dd>
              </div>
              <div className="hero-fact">
                <dt>Focus</dt>
                <dd>Pre-inference prompt optimization · AI-assisted product building</dd>
              </div>
              <div className="hero-fact">
                <dt>Studio</dt>
                <dd>Powerlaw Venture Studio</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

// Abstract technical motif — a converging line field suggesting inputs
// resolving into a single optimized path. No stock imagery, no gradients.
function Motif() {
  const lines = Array.from({ length: 9 });
  return (
    <svg
      className="hero-motif"
      viewBox="0 0 320 200"
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      {lines.map((_, i) => {
        const y = 12 + i * 22;
        return (
          <path
            key={i}
            d={`M4 ${y} C 120 ${y}, 150 100, 316 100`}
            stroke="currentColor"
            strokeWidth="1"
            opacity={0.35 + (i === 4 ? 0.5 : 0)}
          />
        );
      })}
      <circle cx="316" cy="100" r="3.5" fill="var(--color-accent)" stroke="none" />
    </svg>
  );
}

function Work() {
  return (
    <section className="section" id="work">
      <div className="shell">
        <div className="section-head reveal">
          <p className="eyebrow">Selected work</p>
          <h2 className="section-title">Ventures and products, from prototype to protected infrastructure.</h2>
          <p>
            A focused sample of what I've built as founder and product architect.
            Status labels are deliberate; links appear only where a public
            surface exists.
          </p>
        </div>

        <div className="work-list reveal">
          {featuredProjects.map((p, i) => (
            <ProjectCard key={p.id} project={p} wide={i === 0} />
          ))}
        </div>

        <details className="disclosure reveal">
          <summary>
            <ChevronRight className="chev" width="14" height="14" />
            More ventures
          </summary>
          <div className="additional work-list">
            {additionalProjects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </details>

        <p className="activity-note reveal">
          Activity figures shown on cards are aggregate commit snapshots,
          manually audited from private source repositories. They report a
          single count and scope only — they expose no repository identity,
          commit messages, hashes, branches, authors, or filenames, and the
          site makes no runtime connection to any code host.
        </p>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section" id="experience">
      <div className="shell">
        <div className="section-head reveal">
          <p className="eyebrow">Experience &amp; education</p>
          <h2 className="section-title">A path through corporate innovation into independent building.</h2>
        </div>

        <div className="two-col">
          <div className="reveal">
            <p className="col-label">Experience</p>
            <div className="timeline">
              {experience.map((x) => (
                <div className="tl-item" key={x.id}>
                  <div className="tl-head">
                    <span className="tl-org">{x.org}</span>
                    <span className="tl-period">{x.period}</span>
                  </div>
                  <span className="tl-role">{x.role}</span>
                  <p className="tl-detail">{x.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal">
            <p className="col-label">Education</p>
            <div>
              {education.map((e) => (
                <div className="edu-item" key={e.id}>
                  <span className="edu-cred">{e.credential}</span>
                  <span className="edu-org">{e.org}</span>
                  <span className="edu-detail">{e.detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Accomplishments() {
  return (
    <section className="section" id="accomplishments">
      <div className="shell">
        <div className="section-head reveal">
          <p className="eyebrow">Accomplishments</p>
          <h2 className="section-title">High-agency stories, from park-scale eCommerce to first-of-kind technology.</h2>
          <p>
            A selection of outcomes led across two decades of corporate innovation
            and business development — verified, public-record highlights.
          </p>
        </div>
        <div className="accomplishments-grid reveal">
          {accomplishments.map((a) => (
            <div className="accomplishment-card" key={a.id}>
              <div className="accomplishment-top">
                <span className="accomplishment-stat">{a.stat}</span>
                <span className="accomplishment-label">{a.label}</span>
              </div>
              <h3 className="accomplishment-title">{a.title}</h3>
              <p className="accomplishment-body">{a.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Thesis() {
  return (
    <section className="section" id="thesis">
      <div className="shell">
        <div className="section-head reveal">
          <p className="eyebrow">Operating thesis</p>
          <h2 className="section-title">How the work actually gets done.</h2>
        </div>
        <div className="thesis-grid reveal">
          {thesis.map((t) => (
            <div className="thesis-item" key={t.id}>
              <span className="thesis-num">{t.label}</span>
              <h3 className="thesis-title">{t.title}</h3>
              <p className="thesis-body">{t.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section about" id="about">
      <div className="shell">
        <div className="about-grid">
          <div className="reveal">
            <p className="eyebrow">About</p>
            <h2>Al Callier</h2>
          </div>
          <div className="about-body reveal">
            <p>
              Al Callier is a founder and product builder based in{' '}
              <strong>Orlando, Florida</strong>. He founded and leads{' '}
              <strong>Draft First Technologies</strong>, where he is the
              inventor and product architect behind pre-inference prompt
              optimization infrastructure, and leads{' '}
              <strong>Powerlaw Venture Studio</strong>, the operating context
              behind several parallel ventures.
            </p>
            <p>
              Before building independently, he led{' '}
              <strong>Strategic Innovation &amp; Emerging Technology</strong>{' '}
              along with eCommerce, Digital, and Brand Marketing at NBCUniversal
              Parks &amp; Resorts for 17 years — propelling online sales into the
              company's #1 channel and piloting the first operational facial
              recognition system in theme park attraction operations. His public
              profile also records a business development and digital innovation
              role at JIFFY.ai, where he led international expansion across Latin
              America, Europe, Saudi Arabia, and Morocco. Earlier in his career he
              held brand and marketing roles at The Coca-Cola Company, Overture
              Services/GoTo.com, and The Pillsbury Company.
            </p>
            <p>
              He is a founding partner of <strong>Reaction Global</strong>, a
              consulting innovation partner at <strong>Platypus Labs</strong>,
              and has served on the Editorial Advisory Board of Innovation
              Leader, as an Industry Advisor to the Georgia Tech Create-X
              accelerator, and as a member of Stanford Angels &amp;
              Entrepreneurs.
            </p>
            <p>
              He studied Business Administration at the{' '}
              <strong>University of Florida</strong>, earned an MBA in Marketing
              and Finance from <strong>Clark Atlanta University</strong>, and is
              an alumnus of the <strong>Stanford Executive Program</strong> and
              a certificate holder of Stanford's Innovative Technology Leaders
              program.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const { links, email } = config;
  return (
    <footer className="site-footer" id="contact">
      <div className="shell">
        <div className="footer-grid">
          <p className="footer-cta">Open to serious conversations.</p>
          <div className="footer-links">
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
              <LinkedIn /> LinkedIn
            </a>
            <a href={links.x} target="_blank" rel="noopener noreferrer">
              <XMark /> @PowerLawVC
            </a>
            <a href={links.github} target="_blank" rel="noopener noreferrer">
              <GitHub /> GitHub
            </a>
            {email ? (
              <a href={`mailto:${email}`}>
                <Mail /> {email}
              </a>
            ) : null}
          </div>
        </div>
        <div className="footer-meta">
          <span>© {new Date().getFullYear()} Algernon Callier</span>
          <span>Orlando, Florida</span>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [theme, toggleTheme] = useTheme();
  const scrolled = useScrolled();
  useReveal();

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header theme={theme} toggleTheme={toggleTheme} scrolled={scrolled} />
      <main id="main">
        <Hero />
        <Work />
        <Experience />
        <Accomplishments />
        <Thesis />
        <About />
      </main>
      <Footer />
    </>
  );
}
