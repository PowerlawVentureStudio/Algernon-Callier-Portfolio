import { ArrowUpRight } from './icons.jsx';
import ActivitySnapshot from './ActivitySnapshot.jsx';
import config from '../data/config.js';

function statusTone(status) {
  const s = status.toLowerCase();
  if (s.startsWith('active')) return 'active';
  if (s.includes('live')) return 'live';
  return 'neutral';
}

export default function ProjectCard({ project, wide = false }) {
  const { name, tagline, status, role, description, tags, link, linkLabel, activity } = project;
  const tone = statusTone(status);

  return (
    <article className={`project-card${wide ? ' project-card--wide' : ''}`}>
      <div className="project-top">
        <div>
          <h3 className="project-name">{name}</h3>
          {tagline ? <p className="project-tagline">{tagline}</p> : null}
        </div>
        <span className="status-pill" data-tone={tone}>
          <span className="dot" aria-hidden="true" />
          {status}
        </span>
      </div>

      <p className="project-role">{role}</p>
      <p className="project-desc">{description}</p>

      {tags?.length ? (
        <ul className="project-tags" role="list">
          {tags.map((t) => (
            <li key={t} className="project-tag">
              {t}
            </li>
          ))}
        </ul>
      ) : null}

      <div className="project-foot">
        {config.features.showActivitySnapshots ? (
          <ActivitySnapshot activity={activity} />
        ) : (
          <span />
        )}

        {link ? (
          <a className="project-link" href={link} target="_blank" rel="noopener noreferrer">
            {linkLabel || 'View'}
            <ArrowUpRight />
          </a>
        ) : (
          <span className="project-link project-link--muted">No public link</span>
        )}
      </div>
    </article>
  );
}
