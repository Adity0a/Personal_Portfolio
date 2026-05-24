# Shubham Bagwe — 3D Portfolio

A personal 3D portfolio showcasing projects, experience, and a visually rich interactive canvas made with React, Three.js, and Tailwind CSS.

This repository contains a Vite + React site with 3D canvas components, a responsive layout, and small animations. Use this README for quick setup and deployment.

## Features
- Interactive 3D sections (Earth, Computers, Stars) using @react-three/fiber
- Clean responsive UI with Tailwind CSS
- Animated elements using Framer Motion
- Contact form using EmailJS (configured in `src/components/Contact.jsx`)
- Easy-to-extend components and assets

## Prerequisites
- Node.js 18+ (recommended)
- npm (or pnpm / yarn) — this project uses npm scripts in examples

Confirm Node is installed:

```bash
node -v
```

## Install & Run (Dev)
1. Clone the repo:

```bash
git clone https://github.com/suhas1711/Shubham-Bagwe-Portfolio.git
cd Shubham-Bagwe-Portfolio
```

2. Install dependencies:

```bash
npm install --legacy-peer-deps
```

3. Run in development mode:

```bash
npm run dev
```

Open http://localhost:5173 to view the site.

## Build & Preview (Production)
Build the app:

```bash
npm run build
```

Preview locally:

```bash
npm run preview
```

## Deployment
- Vercel: Most convenient — connect your GitHub and use `npm run build` automatically. Add the build output directory `dist` to Vercel.
- Netlify: Drag-and-drop `dist/`, or configure build command `npm run build` and publish directory `dist`.
- Static host: Upload the `dist` folder to any static hosting provider.

## Environment & Secrets
- Add any keys (e.g., EmailJS) in a `.env` file; do NOT commit `.env`. Example in `.gitignore` prevents accidental checks in.

## Favicon
- `index.html` references `src/assets/logo-bg.svg` as the favicon. To use a stable publicly served favicon, add a file to `public/` and update `index.html` to `/favicon.svg`.

## Project Structure
```
src/
  components/  # React components (Footer, Header, canvas, sections)
  assets/      # Images and icons
  constants/   # Reusable constants (socialLinks, nav)
  styles.js    # Component styling
  main.jsx     # Entry point
public/        # Static assets for 3D models (desktop_pc, planet)
```

## Tips & Debugging
- If icons or images don't load, verify path in `src/assets` and `src/constants`.
- To test Email form, ensure your EmailJS keys are configured and `emailjs` package is installed.
- For icons missing in socialLinks, there is onError fallback to the logo in the Footer.

## Contributing
PRs welcome — please open an issue first if you're working on a large feature.

