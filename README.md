# Sreerag E G — Personal Portfolio Website

A modern, production-ready developer portfolio website built with React 19, TypeScript, Vite, and modern Glassmorphism CSS design tokens. Optimized for speed, accessibility, and zero-configuration deployment to GitHub Pages.

---

## 🌟 Highlights & Features

- **Strict Source of Truth**: Built directly from verified career accomplishments and technical systems from Sreerag's resume.
- **Glassmorphism Design System**: Tailored frosted glass cards, subtle luminous borders, ambient radial mesh lighting, and fluid micro-animations.
- **Automatic System Theme Detection**:
  - Automatically matches `prefers-color-scheme` on first visit.
  - Dynamically updates when the OS theme toggles.
  - Interactive 3-way toggle (System, Light, Dark) with persistent `localStorage` preference.
  - Inline head script preventing theme flicker (FOUC).
- **Interactive Engineering Showcase**:
  - **Hero Terminal**: Switch between the AWS SQS/ECS pipeline, in-house LLM Agent Tooling (2,100 LoC), and the Typed Error Resilience Registry.
  - **Healthcare Workload Pipeline Flow**: Interactive click-through architecture breakdown from FastAPI gateway to PHI-masked CloudWatch logs.
  - **Embedded Resume Modal**: Direct in-browser PDF preview and instant download (`public/resume.pdf`).
  - **Native Contact Message Composer**: Pre-populates native email clients via `mailto:` with one-click clipboard copying (zero fake server endpoints).

---

## 📁 Project Structure

```text
├── .github/workflows/
│   └── deploy.yml              # Automated GitHub Pages CI/CD workflow
├── public/
│   ├── favicon.svg             # Custom glowing monogram favicon
│   └── resume.pdf              # Real resume PDF for preview and download
├── src/
│   ├── components/             # Modular UI components
│   │   ├── About.tsx           # Narrative introduction and engineering pillars
│   │   ├── ArchitectureDeepDive.tsx # Interactive distributed pipeline flow
│   │   ├── Contact.tsx         # Verified contact links & mailto composer
│   │   ├── Education.tsx       # B.Tech degree, CGPA, and engineering principles
│   │   ├── Experience.tsx      # Master-detail timeline of career positions
│   │   ├── Footer.tsx          # Copyright year, links, and back-to-top
│   │   ├── Hero.tsx            # Headline, verified metrics, and live code terminal
│   │   ├── Icons.tsx           # Clean vector SVG icons (GitHub, LinkedIn)
│   │   ├── Navbar.tsx          # Floating translucent navbar with active scroll spy
│   │   ├── ResumeModal.tsx     # In-app PDF viewer modal with download action
│   │   ├── Skills.tsx          # Grouped tech stack with real-time search
│   │   └── ThemeToggle.tsx     # Segmented System/Light/Dark pill control
│   ├── context/
│   │   └── ThemeContext.tsx    # Theme state management and system listeners
│   ├── data/
│   │   └── portfolioData.ts    # Centralized single source of truth for all content
│   ├── styles/
│   │   ├── glassmorphism.css   # Frosted glass utilities, mesh lighting, buttons
│   │   └── tokens.css          # Central CSS custom properties for light/dark modes
│   ├── App.tsx                 # Root layout assembling all sections
│   ├── index.css               # Base reset, typography, and container utilities
│   └── main.tsx                # App entry point
├── index.html                  # SEO metadata, Google fonts, and inline theme script
├── vite.config.ts              # Vite configuration with relative base './' for GitHub Pages
└── package.json                # Dependencies and scripts
```

---

## 🛠️ How to Edit Portfolio Information

All personal information, work experience, metrics, skills, projects, and contact details are organized in a single configuration file:

👉 **[`src/data/portfolioData.ts`](file:///c:/Users/sreer/Documents/webpage/src/data/portfolioData.ts)**

To update your resume PDF:
- Replace `public/resume.pdf` with your new PDF file.

---

## 💻 Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run local dev server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

3. **Build production bundle**:
   ```bash
   npm run build
   ```
   Outputs the static distribution into the `dist/` directory.

4. **Preview production build locally**:
   ```bash
   npm run preview
   ```

---

## 🚀 Deploying to GitHub Pages

This repository includes a preconfigured GitHub Actions workflow at [`.github/workflows/deploy.yml`](file:///c:/Users/sreer/Documents/webpage/.github/workflows/deploy.yml).

### Steps to activate:
1. Commit and push your code to your repository:
   ```bash
   git add .
   git commit -m "feat: complete portfolio website"
   git push origin main
   ```
2. In your GitHub repository:
   - Go to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.
3. Every time you push to `main` (or `master`), GitHub Actions will automatically build the site and deploy it to your GitHub Pages URL!
