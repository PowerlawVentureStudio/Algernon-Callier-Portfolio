import { GitCommit } from './icons.jsx';

// Renders an aggregate, manually audited commit snapshot for a project.
//
// Privacy contract (see README + SECURITY.md):
//   - Reads ONLY public fields: commits (int|null), scope (label), asOf (date).
//   - Exposes NO commit messages, hashes, branches, authors, filenames, or
//     repository identifiers. There is no runtime call to any Git host.
//   - When `commits` is null, renders a neutral "audited snapshot pending"
//     state rather than a fabricated number.
//
// `activity` may be null (project opts out entirely) — then nothing renders.
export default function ActivitySnapshot({ activity }) {
  if (!activity) return null;

  const { commits, scope, asOf } = activity;

  if (commits == null) {
    return (
      <span className="activity activity--pending" title="Aggregate snapshot from a private source repository">
        <GitCommit />
        Private source · audited snapshot pending
      </span>
    );
  }

  const formatted = Number(commits).toLocaleString('en-US');
  const asOfLabel = asOf
    ? new Date(asOf).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
    : null;

  return (
    <span
      className="activity"
      title={`Aggregate commit count — ${scope}. Manually audited snapshot from a private source repository.`}
    >
      <GitCommit />
      <span className="commits">{formatted}</span>
      commits
      {asOfLabel ? <span aria-hidden="true"> · {asOfLabel}</span> : null}
    </span>
  );
}
