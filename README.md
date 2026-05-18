# Mahaboob Subhani Shaik — Personal Portfolio

Welcome to my personal developer portfolio website! This project is a fully responsive, highly animated, and modern single-page portfolio built from scratch. It features rich visual aesthetics, smooth scroll reveal animations, a custom parallax headshot wrapper, and glassmorphism design elements aligned with a professional dark red/coral theme.

## 🔗 Live Site
Live Deployed URL (HTTPS): **[subhani-portfolio.pages.dev](https://subhani-portfolio.pages.dev)**
*(Note: If you deploy to Vercel, this link will be `https://subhani-portfolio.vercel.app`)*

---

## 👤 Author
* **Name:** Mahaboob Subhani Shaik
* **Role:** Full Stack Developer & Competitive Programmer
* **Education:** B.Tech in Computer Science & Engineering (Aditya University)

---

## 🛠️ Technology Stack
This application is built with a modern, high-performance frontend architecture:
* **Core Framework:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
* **Router & Framework Engine:** [TanStack Start](https://tanstack.com/router/v1/docs/start/overview) (production-grade React Meta-Framework)
* **Styling System:** [Tailwind CSS v4.0](https://tailwindcss.com/) (using native CSS imports and lightning-fast compilation)
* **Icons:** [Lucide React](https://lucide.dev/)
* **Animations:** 
  * Custom `IntersectionObserver` scroll reveals (`src/components/Reveal.tsx`)
  * `requestAnimationFrame` hardware-accelerated parallax scrolling (`src/components/Parallax.tsx`)
  * Ambient floating 3D gradients and glowing borders (`src/styles.css`)
* **Validation:** [Zod](https://zod.dev/) (used for client-side contact form schema validation)

---

## ✨ Features
1. **Fully Responsive Layout:** Handcrafted breakpoints optimized for mobile (375px), tablet (768px), and desktop (1280px) viewports with no layout overflow.
2. **Smooth Parallax Effect:** Subtle, non-janky, hardware-accelerated parallax movement on the hero avatar section.
3. **On-Scroll Animations:** Beautiful fade-up reveals applied to sections, cards, and text content that trigger exactly when entering the viewport.
4. **Mobile Navigation Overlay:** An interactive hamburger menu that opens a sleek glassmorphic navigation overlay.
5. **Interactive Projects Grid:** Highlights real public project repositories with titles, taglines, description, tech badges, and clickable code & demo links:
   * 🩺 **Mediq** (Patient Appointment System) — [GitHub Repo](https://github.com/subhani12389/Mediq-project)
   * 🔧 **QuickFix** (Home Services Platform) — [GitHub Repo](https://github.com/subhani12389/QUICKFIX)
   * 💳 **Payment Gateway** (Integration Demo) — [GitHub Repo](https://github.com/subhani12389/payment-gateway-ready)
6. **Functional Contact System:** Includes validation using Zod and triggers a pre-filled `mailto` flow on submission, ensuring seamless communication.
7. **Accessibility-Ready:** Complete with `@media (prefers-reduced-motion: reduce)` block to instantly disable all animations for users with reduced motion preferences.
8. **Optimized Assets:** High-quality image assets compressed to high-efficiency WebP files (`profile.webp` and `bg-hero.webp`) under 150KB/300KB thresholds for near-instant page load times.

---

## 🚀 Local Setup Instructions

Follow these steps to run the portfolio on your local machine:

### 1. Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### 2. Install Dependencies
Clone the repository, navigate into the directory, and install all required packages:
```bash
npm install
```

### 3. Start Development Server
Run the local Vite development server:
```bash
npm run dev
```
Open your browser and navigate to **`http://localhost:8080`** (or the port specified in your terminal output) to view the live site.

### 4. Build for Production
To build a fully optimized production bundle:
```bash
npm run build
```
This compiles the TypeScript files, optimizes assets, and outputs a ready-to-deploy build split into `dist/client` and `dist/server`.

### 5. Preview Production Build Locally
Verify the production build locally before deploying:
```bash
npm run preview
```

---

## 🌐 Deployment Guidelines

This project is pre-configured and ready to be deployed on popular hosting platforms:

### Option A — Cloudflare Pages (Recommended)
This repository contains a `wrangler.jsonc` file for Cloudflare Pages.
1. Sign in to your [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. Navigate to **Workers & Pages** -> **Create Application** -> **Pages** -> **Connect to Git**.
3. Select your repository.
4. Set the build settings:
   * **Framework Preset:** `None`
   * **Build Command:** `npm run build`
   * **Build Output Directory:** `dist/client`
5. Click **Save and Deploy**.

### Option B — Vercel / Netlify
1. Connect your public GitHub repository to Vercel/Netlify.
2. The framework will automatically be detected as Vite/React.
3. Configure the build settings:
   * **Build Command:** `npm run build`
   * **Output Directory:** `dist/client` (or Vercel will auto-resolve the build outputs)
4. Click **Deploy**.
