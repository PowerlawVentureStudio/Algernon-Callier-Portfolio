# Security & Disclosure Policy

## This repository is public

Everything committed here is world-readable and world-forkable. Treat every
file as a public disclosure. This project is a personal founder portfolio; it is
intentionally a static, backend-free website with no secrets of any kind.

## Never commit any of the following

- **Private source code** from any other repository or product.
- **Credentials or secrets** — API keys, tokens, passwords, `.env` files,
  private keys, certificates, or connection strings.
- **Internal architecture** — system diagrams, infrastructure details, private
  design documents, or implementation specifics not intended for public view.
- **Patent-sensitive material** — provisional or non-public claim text, drawings,
  specifications, or any content that could affect the strategy or validity of
  pending intellectual property.
- **Raw private Git metadata** — commit messages, hashes, branches, author
  identities, filenames, or repository identifiers copied from private repos.
  The only permitted commit-related data is an aggregate count plus a scope
  label and date (see the commit-snapshot methodology in `README.md`).
- **Personal contact details** that are not intended to be public. The contact
  email is disabled by default and should be enabled only with a safe, public
  address.

## Runtime boundaries

- The site makes **no network calls** to GitHub or any code host at runtime.
- There is **no backend, database, authentication, analytics, or cookie use**.
- Commit-activity figures are **static, manually audited values** stored in a
  public data file — never fetched live from a private source.

## Before every commit

1. Confirm no file under `src/data/` contains anything beyond public,
   intended-for-disclosure content.
2. Confirm no repository names, hashes, or private URLs have crept into project
   descriptions or activity fields.
3. Confirm `.gitignore` still excludes `.env*`, keys, and build output.

## Reporting a concern

If you believe sensitive information has been committed, or you find a security
issue with the deployed site, please contact the site owner privately through
one of the professional links listed in the site footer before opening a public
issue. Sensitive disclosures should not be filed as public issues.
