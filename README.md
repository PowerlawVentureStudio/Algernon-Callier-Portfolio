# Algernon Callier — Founder Portfolio

A concise, production-ready personal founder portfolio for **Algernon Callier**.
It presents a public record of education, work history, accomplishments, and
things built — for Y Combinator reviewers, investors, technical collaborators,
prospective counsel, and professional peers.

Static **React + Vite** single-page site. No backend, no database, no
authentication, no analytics, no cookies, and no secret environment variables.

---

## Quick start

```bash
npm install      # install dependencies
npm run dev      # local dev server (http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview the production build locally
```

Requires Node 18+.

---

## Deployment

The build is a fully static bundle in `dist/`. `vite.config.js` sets
`base: './'` so the bundle works from any host path (project subpaths,
previews, custom domains).

**GitHub Pages**

1. `npm run build`
2. Publish the contents of `dist/` (e.g. via GitHub Actions or by pushing
   `dist/` to a `gh-pages` branch). Because `base` is relative, no extra
   configuration is needed for a project-page subpath.

**Vercel / Netlify**

- Framework preset: **Vite**
- Build command: `npm run build`
- Output directory: `dist`

**Any static host / S3**

- Upload the contents of `dist/` to the bucket or web root.

---

## Content update instructions

All content lives in plain data files under `src/data/`. Editing these does not
require touching any component code.

| File                 | What it controls                                                        |
| -------------------- | ----------------------------------------------------------------------- |
| `src/data/config.js` | Name, role, location, social links, GitHub URL, contact email, flags.   |
| `src/data/projects.js` | Selected-work cards: name, status, role, description, tags, link, activity. |
| `src/data/experience.js` | Experience timeline and education list.                             |
| `src/data/thesis.js` | Operating-thesis items.                                                 |

### Common edits

- **Update the GitHub URL:** set `config.links.github` in `src/data/config.js`.
  It ships as a placeholder (`PowerlawVentureStudio`) until the new public
  showcase repository exists.
- **Add a contact email:** set `config.email` to a safe, public address. It is
  `null` by default and the footer hides the email row until a value is set.
- **Feature a project on the homepage:** set `featured: true` on the project in
  `src/data/projects.js`. Non-featured projects appear under the "More
  ventures" disclosure.
- **Hide all activity badges:** set `config.features.showActivitySnapshots` to
  `false`.

---

## Project-data schema

Each entry in `src/data/projects.js`:

```js
{
  id: 'string',            // stable unique key
  name: 'string',          // project name
  tagline: 'string|null',  // short subtitle (e.g. product URL, one phrase)
  status: 'string',        // careful status label, e.g. "Active · …", "Live prototype",
                           // "Deployed · Private", "In development", "Prototype"
  role: 'string',          // your role, e.g. "Founder & product builder"
  description: 'string',   // 1–2 sentence public description (no confidential detail)
  tags: ['string'],        // short topical tags
  link: 'string|null',     // public evidence URL, or null if none is public
  linkLabel: 'string|null',// label for the link
  featured: true|false,    // show on homepage vs. under disclosure
  activity: {              // optional aggregate commit snapshot, or null to omit
    commits: number|null,  // aggregate count; null → "audited snapshot pending"
    scope: 'string',       // scope label, e.g. "default branch, excludes merges"
    asOf: 'YYYY-MM-DD'|null // audit date the snapshot reflects
  }
}
```

Status tone (the colored dot) is derived automatically from the `status`
string: `Active …` → accent, `Live …` → green, everything else → neutral.

---

## Commit-snapshot methodology

Some project cards can display an **aggregate commit count** as a lightweight
credibility signal. This feature is intentionally built to reveal nothing about
the underlying private repositories.

**What it is**

- A single, manually audited integer per project (`activity.commits`).
- A human-readable scope label (`activity.scope`), e.g.
  `default branch, excludes merges`.
- An as-of date (`activity.asOf`) indicating when the count was taken.

**How to produce a count (done manually, off-site)**

1. In the private source repository, run a count against the intended scope, for
   example:
   ```bash
   git rev-list --count --no-merges HEAD
   ```
2. Record only the resulting integer, the scope description, and the date.
3. Enter those three values into the project's `activity` object in
   `src/data/projects.js`. Commit nothing else.

**Hard boundaries (never enter into this repo)**

- No repository names, URLs, or identifiers.
- No commit messages, hashes, branches, authors, or filenames.
- No private tokens and no runtime connection to any code host — the site
  performs zero network calls to GitHub or any Git provider.

**Pending state**

Until a verified count is provided, leave `commits: null`. The UI then renders
`Private source · audited snapshot pending` rather than any invented number.
Do not fabricate counts.

---

## Privacy boundary

This repository is **public**. It contains only information intended for public
disclosure. See [`SECURITY.md`](./SECURITY.md) for the full list of what must
never be committed. In short: no private source code, no credentials, no
internal architecture, no patent-sensitive claim text, and no raw private Git
metadata.

---

## License

No open-source license is granted. See [`NOTICE.md`](./NOTICE.md) — all rights
reserved.

---

## Structure

```
├─ index.html            # document head, meta, fonts, JSON-LD
├─ vite.config.js
├─ public/
│  └─ favicon.svg
└─ src/
   ├─ main.jsx           # entry
   ├─ App.jsx            # page composition + sections
   ├─ components/        # Logo, ProjectCard, ActivitySnapshot, icons
   ├─ data/              # config + content (edit these to update the site)
   └─ styles/            # base.css (tokens) + app.css (components)
```
