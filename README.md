## Khaled Tarek — Personal Portfolio

A modern, fast, and responsive personal portfolio built with React, Vite, Tailwind CSS, and React Router. It showcases featured projects, skills, and contact information.

### Tech Stack
- React 19 + Vite 7
- Tailwind CSS 4
- React Router 7
- Font Awesome

### Getting Started
Prerequisites: Node.js >= 18

Install dependencies:
```bash
npm install
```

Run dev server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

Preview local production build:
```bash
npm run preview
```

### Deploying to Netlify
1) Create a new site on Netlify and connect this GitHub repo, or drag-and-drop the `dist` folder after building.
2) Build command: `npm run build`
3) Publish directory: `dist`
4) SPA routing: a `_redirects` file is included at `public/_redirects` with `/* /index.html 200` to enable client-side routing.

### Project Structure
- `src/` — application code, components, pages, and assets
- `public/` — static assets (also contains Netlify `_redirects`)

### Scripts
- `npm run dev` — start development server
- `npm run build` — build production bundle to `dist`
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint

### License
This project is available under your chosen license. If you want MIT, create a `LICENSE` file and paste the MIT text.

### Author
Created by Khaled Tarek.
