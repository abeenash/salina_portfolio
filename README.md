# Salina Magar — Digital Marketing Portfolio

A personal portfolio site for Salina Magar, a Digital Marketing Executive.
Built with Next.js (App Router), TypeScript, Tailwind CSS, and Drizzle ORM
against Neon Postgres.

## Content status

Professional content (About, Education, Certifications, Skills) is sourced
from information supplied directly by the client, since Salina's LinkedIn
profile (https://www.linkedin.com/in/salina-magar-57aa1b3ab/) could not be
retrieved automatically. The six Projects categories are populated with the
client-supplied snapshots under `public/portfolio/`.

Still outstanding (marked as `TODO` in the code):

- Discrete work-experience entries — roles, employers, dates
  (`src/content/about.ts` — the About paragraphs describe her experience in
  general terms only)
- Instagram and Facebook contact links (`src/content/contact.ts` — email,
  phone, and LinkedIn are verified)
- Categorization of any additional snapshots beyond the 16 currently
  organized under `public/portfolio/` (see `assets/source-snapshots/`)

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4
- Drizzle ORM + `@neondatabase/serverless` against Neon Postgres
- All project images are local files shipped with the app — no remote
  object storage
- Deployed as a Node.js web service (e.g. on Render) — no serverless/edge
  assumptions, no persistent local filesystem for uploads

## Prerequisites

- Node.js 20.9+ and npm
- A [Neon](https://neon.tech) Postgres project (only required once you want
  project data managed from the database — the site runs and builds without
  it, using the static content in `src/content/`)

## Local installation

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000. The site works with an empty database (or no
`DATABASE_URL` at all) — each project category falls back to the real,
client-supplied content in `src/content/projects.ts`.

## Environment variables

See [.env.example](.env.example). Never commit `.env` or `.env.local`.

| Variable | Purpose |
| --- | --- |
| `DATABASE_URL` | Pooled Neon connection string, used by the running app. |
| `DATABASE_URL_UNPOOLED` | Direct Neon connection string, used only for running Drizzle migrations. |

`DATABASE_URL` is a server-only value — it is never sent to the browser (the
database client lives under `src/db/` and is only imported from server
code).

## Neon setup

1. Create a Neon project and database.
2. Copy the pooled connection string into `DATABASE_URL` and the direct
   (unpooled) connection string into `DATABASE_URL_UNPOOLED`.

## Database schema and migrations

Schema lives in [src/db/schema.ts](src/db/schema.ts): a `projects` table and
a `project_images` table (see [src/db/index.ts](src/db/index.ts) for the
client, and [src/lib/projects.ts](src/lib/projects.ts) for how the app reads
them). Both tables only ever store local, site-relative image paths — there
is no remote image source.

```bash
npm run db:generate   # generate SQL migrations from schema.ts
npm run db:migrate     # apply migrations to DATABASE_URL_UNPOOLED
npm run db:studio      # optional: browse the database in Drizzle Studio
```

### Adding or updating a project

Each of the six categories in [src/lib/categories.ts](src/lib/categories.ts)
always renders. By default it shows the static seed in
[src/content/projects.ts](src/content/projects.ts). If a category has rows
in the `projects` table, those take precedence over the seed for that
category — so managing a category from the database is opt-in per category.

To add a project via the database: insert a row into `projects` with a
`category` matching one of the six slugs, then one or more rows into
`project_images` for it, with `src` set to a site-relative path such as
`/portfolio/graphic-design/example.jpg` (the file itself lives under
`public/portfolio/graphic-design/`).

### Local image folders

```
public/portfolio/graphic-design/
public/portfolio/content-campaigns/
public/portfolio/keyword-research/
public/portfolio/meta-ads/
public/portfolio/audience-research/
public/portfolio/brand-awareness/
```

The original, unorganized client-supplied snapshots are kept as a source
archive under `assets/source-snapshots/` (not served by the app) — the files
under `public/portfolio/` are descriptively renamed copies of those.

Dropping a new file into one of these folders does not display it by
itself — add it to the relevant category's seed entry in
`src/content/projects.ts` (or to the database, see above) with meaningful
alt text.

## Editing content

All static copy is centralized under `src/content/`:

- `site.ts` — name, title, tagline, site URL
- `about.ts` — About Me intro, portrait, experience, education,
  certifications, skills
- `services.ts` — the services list
- `contact.ts` — contact channels (only populated ones render)
- `projects.ts` — the static project/image seed used when a category has no
  database rows

Category titles/descriptions for Projects live in `src/lib/categories.ts`.

## Local development

```bash
npm run dev
```

## Production build

```bash
npm run build
npm run start
```

## Linting

```bash
npm run lint
```

## Deployment (Render)

1. Create a Render **Web Service** from this repository.
2. Build command: `npm run build`. Start command: `npm run start`.
3. Set environment variables in the Render dashboard: `DATABASE_URL` and
   `DATABASE_URL_UNPOOLED` (only needed once you want database-managed
   projects). Never put secrets in the repo or in `README.md`.
4. If using the database for any project category, run `npm run db:migrate`
   (locally or as a one-off Render job) against `DATABASE_URL_UNPOOLED`
   before or after the first deploy to create the schema.
5. The app has no persistent local filesystem assumptions at runtime — all
   project images ship in `public/` at build time.
