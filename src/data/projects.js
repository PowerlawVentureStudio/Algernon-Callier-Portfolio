// ---------------------------------------------------------------------------
// Selected work — project inventory.
//
// PUBLIC DATA ONLY. Every field here ships in a public repository.
//
// Status labels are deliberately careful. Do not add confidential claim text,
// private repository names, internal architecture, or unverified metrics.
//
// `activity` (optional) holds a MANUALLY AUDITED aggregate snapshot from a
// private source repository. It exposes ONLY:
//   - commits:   aggregate integer commit count (or null if pending)
//   - scope:     human-readable scope label (e.g. "default branch, excludes merges")
//   - asOf:      the audit date (ISO string) the snapshot reflects
// It NEVER exposes commit messages, hashes, branches, authors, filenames, or
// repository identifiers. When `commits` is null, the UI renders a neutral
// "audited snapshot pending" state instead of a fabricated number.
// See README → Commit-snapshot methodology.
// ---------------------------------------------------------------------------

export const projects = [
  {
    id: 'draft-first',
    name: 'Draft First Technologies',
    tagline: 'DraftFirst.ai',
    status: 'Active · Reference implementation in development',
    role: 'Founder, inventor & product architect',
    description:
      'Pre-inference prompt optimization infrastructure — a layer that improves the input before a model runs, rather than post-processing the output. Founded, invented, and architected the product; 20 USPTO provisional applications filed to protect the approach.',
    tags: ['AI infrastructure', 'Strategic IP', 'Product architecture'],
    link: null,
    linkLabel: null,
    featured: true,
    activity: {
      commits: 35,
      scope: 'default branch, excludes merges',
      asOf: '2026-07-22',
    },
  },
  {
    id: 'my-data-privacy-coach',
    name: 'My Data Privacy Coach',
    tagline: 'Public prototype',
    status: 'Live prototype',
    role: 'Founder & product builder',
    description:
      'A web app that teaches and coaches everyday people through data-privacy decisions in plain language — turning dense policy and settings into guided, understandable steps.',
    tags: ['Consumer app', 'Privacy', 'Education'],
    link: 'https://my-data-privacy-coach.vercel.app/#/copilot',
    linkLabel: 'View live prototype',
    featured: true,
    activity: {
      commits: 114,
      scope: 'default branch, excludes merges',
      asOf: '2026-07-22',
    },
  },
  {
    id: 'gator-launchpad',
    name: 'The Gator Launchpad',
    tagline: 'MBA-to-FUTURE Launchpad',
    status: 'Deployed · Private',
    role: 'Founder & product builder',
    description:
      'A job and opportunity platform built for Warrington MBA users — connecting graduate talent to roles and pathways through a focused, user-tested workflow.',
    tags: ['Marketplace', 'Careers', 'Higher education'],
    link: null,
    linkLabel: null,
    featured: true,
    activity: {
      commits: 83,
      scope: 'default branch, excludes merges',
      asOf: '2026-07-22',
    },
  },
  {
    id: 'my-secret-job-coach',
    name: 'My Secret Job Coach',
    tagline: 'Career development platform',
    status: 'In development',
    role: 'Founder & product builder',
    description:
      'A job-mastery and career-development platform that coaches candidates through the full arc of landing and growing in a role — from search strategy to interview craft.',
    tags: ['Consumer app', 'Careers', 'Coaching'],
    link: null,
    linkLabel: null,
    featured: false,
    activity: {
      commits: 25,
      scope: 'default branch, excludes merges',
      asOf: '2026-07-22',
    },
  },
  {
    id: 'hazzard',
    name: 'HAZZARD',
    tagline: 'Dark-pattern awareness',
    status: 'Prototype',
    role: 'Founder & product builder',
    description:
      'A concept and application exploring dark-pattern awareness and detection — helping people recognize manipulative interface design and make clearer choices online.',
    tags: ['Consumer protection', 'UX research', 'Detection'],
    link: null,
    linkLabel: null,
    featured: false,
    activity: {
      commits: null,
      scope: 'default branch, excludes merges',
      asOf: null,
    },
  },
  {
    id: 'powerlaw-venture-studio',
    name: 'Powerlaw Venture Studio',
    tagline: 'Venture studio',
    status: 'Operating context',
    role: 'Founder',
    description:
      'The venture-building operating context behind multiple products — a studio structure for taking ideas from concept to deployed reference implementations.',
    tags: ['Venture studio', 'Product building'],
    link: null,
    linkLabel: null,
    featured: false,
    activity: null,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const additionalProjects = projects.filter((p) => !p.featured);

export default projects;
