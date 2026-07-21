# 🥖 Sourdough Hydration Calculator

A free, fast, accurate sourdough hydration calculator built with **Next.js + Tailwind CSS**.

## 🌐 Live Site

https://sourdoughhydrationcalculator.com/

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router, static export)
- **Styling**: Tailwind CSS 3.4
- **Language**: JavaScript (JSX)
- **Hosting**: Cloudflare Pages
- **Source Control**: GitHub
- **Analytics**: Plausible.io (privacy-friendly)

## 📂 Project Structure

```
sourdough-calculator/
├── app/                          # Next.js App Router
│   ├── layout.jsx                # Root layout (Header + Footer)
│   ├── page.jsx                  # Homepage with Calculator + Chart
│   ├── globals.css               # Tailwind directives
│   ├── about/page.jsx            # About page
│   ├── contact/page.jsx          # Contact page
│   ├── privacy/page.jsx          # Privacy policy
│   └── blog/
│       ├── page.jsx              # Blog list
│       └── what-is-hydration/page.jsx
├── components/
│   ├── Header.jsx                # Site header (sticky nav)
│   ├── Footer.jsx                # Site footer
│   ├── Calculator.jsx            # Interactive calculator (client component)
│   └── HydrationChart.jsx        # Hydration level visual guide
├── public/                       # Static assets
│   ├── robots.txt
│   ├── sitemap.xml
│   └── _headers                  # Cloudflare caching rules
├── package.json
├── next.config.js                # Next.js config (static export)
├── tailwind.config.js            # Tailwind theme (brand colors)
├── postcss.config.js
└── jsconfig.json                 # Path aliases (@/*)
```

## 🚀 Local Development

### Prerequisites

- Node.js 18+ ([download](https://nodejs.org))
- npm / yarn / pnpm

### Setup

```bash
# Install dependencies
npm install

# Run dev server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Output is in `out/` directory
```

## 📦 Deployment

This site is deployed via **Cloudflare Pages**:

1. Push to GitHub `main` branch
2. Cloudflare Pages auto-deploys
3. Build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Node version**: 18+

## ✨ Features

- ✅ Free hydration calculator (instant, no signup)
- ✅ 6 recipe presets (Bagel, Sandwich, Classic, Country, Open Crumb, Ciabatta)
- ✅ Hydration chart (50%–100% visual guide)
- ✅ Mobile-first responsive design
- ✅ SEO-ready (sitemap, robots.txt, Open Graph)
- ✅ Privacy-friendly (no tracking, no cookies)
- ✅ Lightning fast (static export + CDN)

## 📝 License

© 2026 SourdoughCalc. All rights reserved.
