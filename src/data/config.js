// ---------------------------------------------------------------------------
// Site configuration — safe, public values only.
//
// This file is committed to a PUBLIC repository. Never place credentials,
// private tokens, private repository URLs, patent-sensitive claim text, or any
// internal architecture detail here. See SECURITY.md.
// ---------------------------------------------------------------------------

export const config = {
  name: 'Algernon Callier',
  shortName: 'Al',
  role: 'Founder & Product Builder',
  location: 'Orlando, Florida',

  // Primary current context. Phrased as a present-tense founder role.
  currentRole: 'Founder & CEO, Draft First Technologies Inc.',

  // Public social + code destinations.
  // Public founder-showcase repository. This repository contains only the
  // portfolio site and approved aggregate project-activity snapshots.
  links: {
    linkedin: 'https://www.linkedin.com/in/alcallier',
    x: 'https://x.com/PowerLawVC',
    github: 'https://github.com/PowerlawVentureStudio/Algernon-Callier-Portfolio',
  },

  // Contact email is OFF by default. Leave `email` null until a safe, public
  // address is confirmed. When set to a string, the footer will render a
  // "mailto:" link automatically. Do not expose a private inbox.
  email: null,

  // Feature flags.
  features: {
    // Show the aggregate commit-activity badge on project cards.
    // Even when true, individual cards only render a numeric badge if they
    // carry an audited `activity.commits` value (see projects.js).
    showActivitySnapshots: true,
  },
};

export default config;
