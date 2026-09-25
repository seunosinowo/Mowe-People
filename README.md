# MOWE Global Website

The website is a React single-page app built with Vite. The React files in `src/` are the source of truth; `index.html` is Vite's app entry point.

## Run locally

Install the dependencies and start the Vite development server:

```sh
npm install
npm run dev
```

Open the URL printed by Vite (usually `http://localhost:5173`).

## Build

```sh
npm run build
npm run preview
```

The production build is written to `dist/`.

## Project structure

- `src/pages/` contains the Home, Services, Fred Rabbi, and Contact pages.
- `src/components/` contains the shared header and footer.
- `src/data/` contains the page content and programme data.
- `src/styles/` contains the global, page, motion, and site chrome styles.
- `assets/` contains the local photos, partner logos, and other image assets.
- `vite.config.js` configures Vite and serves/copies the root `assets/` directory.

The app routes are `/`, `/services`, `/fred-rabbi`, and `/contact`.

## Forms

Programme calendar and Future of Work Summit registrations are submitted to `/api/event-registration`, saved in the Neon `event_registrations` table, and emailed to `REGISTRATION_EMAIL_TO` (defaults to `moweglobaloffice@gmail.com`) through Gmail SMTP. Configure `DATABASE_URL`, `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `SMTP_SECURE`, and `REGISTRATION_EMAIL_TO` in `.env` for local use and as Vercel project environment variables for production. SMTP credentials must be stored only in server environment variables; `.env` is ignored by Git.

The API creates the `event_registrations` table on its first successful request. `.env` is ignored by Git; use `.env.example` as a template and configure the same variable in Vercel for production.

For local development, restart `npm run dev` after changing `.env`. Vite serves `/api/event-registration` through the local API middleware. Submitting a form sends a real email and writes to the configured Neon database.
