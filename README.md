# CITIZEN Bangladesh — Civic Engagement Platform

A responsive React web app for empowering Bangladeshi citizens to participate in civic dialogue.

## 🚀 Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Install & Run Locally

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

Creates an optimized production build in the `build/` folder.

---

## 🌐 Deploy to GitHub Pages

1. Install the GitHub Pages package:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json`:
   ```json
   "homepage": "https://<your-username>.github.io/<repo-name>",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

---

## 🌐 Deploy to Vercel (Recommended)

1. Push this repo to GitHub.
2. Go to [vercel.com](https://vercel.com) → Import Project → Select your repo.
3. Vercel auto-detects React. Click **Deploy**.

---

## 🌐 Deploy to Netlify

1. Push to GitHub.
2. Go to [netlify.com](https://netlify.com) → New site from Git.
3. Build command: `npm run build` | Publish directory: `build`
4. Click **Deploy site**.

---

## 📁 Project Structure

```
citizen-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js / Navbar.css
│   │   ├── Hero.js  / Hero.css
│   │   ├── Stats.js / Stats.css
│   │   └── Footer.js / Footer.css
│   ├── App.js / App.css
│   ├── index.js
│   └── index.css
└── package.json
```

## ✨ Features

- Sticky responsive navbar with mobile hamburger menu
- Hero section with animated stat cards
- Animated count-up numbers on scroll (IntersectionObserver)
- Stats grid with hover effects
- Fully responsive down to 320px
- Accessible keyboard navigation & reduced-motion support
