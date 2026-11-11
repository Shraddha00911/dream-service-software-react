# Dream Service Software – React (Vite)

React rebuild of https://dreamservicesoftware.com/ (homepage + header/footer + routing).

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
```

## Structure

- `src/data/siteData.js` – all text, menu links, image URLs (edit content here)
- `src/components/Header.jsx`, `Footer.jsx` – mega menu, mobile menu, footer
- `src/pages/Home.jsx` – homepage sections
- `src/pages/Contact.jsx` – demo form (connect to your API in `onSubmit`)
- `src/pages/PlaceholderPage.jsx` – temporary page for every other route
- `src/styles.css` – all styling (colors in `:root`)

## Notes

- Logo/images are loaded from the live site URLs. To go fully local, download them into `src/assets/` or `public/` and update `images` in `siteData.js`.
- Other pages (Sales CRM, ERP, Pulse, About, FAQ, Blogs, etc.) show a placeholder; add real pages in `src/pages` and register routes in `src/App.jsx`.
