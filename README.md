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

The programme calendar, contact form, and newsletter currently use front-end placeholder submissions; they are not connected to a server. The Future of Work Summit form prepares an email to MOWE Global so the visitor can send their registration request.
