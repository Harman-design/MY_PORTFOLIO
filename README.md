# Harmanpreet Kaur — Portfolio

An Awwwards-level personal portfolio built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion, and GSAP.

---

## ✨ Features

- **Hero** — Typing animation, floating tech icons, parallax mouse effects, animated stats
- **About** — Glassmorphism profile card, education, traits, dynamic stats
- **Skills** — Animated progress bars by category, IntersectionObserver trigger
- **Experience** — Animated timeline with company cards, achievements, tech tags
- **Projects** — Interactive cards with hover overlay, modal detail view, GitHub stats
- **Achievements** — Categorized achievement grid with glow effects
- **GitHub Stats** — Animated contribution graph, language bars
- **Contact** — Validated form with toast feedback, contact link cards
- **HarmanGPT** — Claude-powered AI chatbot (FAB, suggestions, markdown rendering)
- **Custom Cursor** — Smooth lagging outer ring with hover & click states
- **Loading Screen** — Animated progress bar intro
- **Scroll Progress** — Top bar using Framer Motion `useScroll`
- **Dark / Light Mode** — `next-themes` with smooth transitions
- **Particle Field** — Canvas-based floating particles
- **Back to Top** — Smooth scroll FAB
- **SEO** — Full Open Graph, Twitter cards, JSON-LD ready, sitemap compatible
- **Performance** — Next.js font optimization, lazy sections, `passive` scroll listeners

---

## 🗂️ Folder Structure

```
harmanpreet-portfolio/
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts        ← Secure Anthropic API proxy (Edge runtime)
│   ├── globals.css             ← Design system, CSS variables, component classes
│   ├── layout.tsx              ← Root layout: fonts, metadata, providers
│   └── page.tsx                ← Home page: assembles all sections
│
├── components/
│   ├── ui/
│   │   ├── CustomCursor.tsx    ← Smooth lagging dual-ring cursor
│   │   ├── LoadingScreen.tsx   ← Animated intro splash screen
│   │   ├── ScrollProgress.tsx  ← Top progress bar (Framer Motion useScroll)
│   │   ├── BackToTop.tsx       ← Floating back-to-top button
│   │   ├── ParticleField.tsx   ← Canvas floating particles
│   │   ├── SectionWrapper.tsx  ← Consistent section layout wrapper
│   │   └── ThemeProvider.tsx   ← next-themes wrapper
│   │
│   ├── Navbar.tsx              ← Fixed nav, mobile drawer, active section, theme toggle
│   ├── Hero.tsx                ← Typing effect, floating icons, mouse parallax, stats
│   ├── About.tsx               ← Profile card, bio, education, traits, stats grid
│   ├── Skills.tsx              ← Animated skill bars by category, tech cloud
│   ├── Experience.tsx          ← Animated timeline, company cards, achievements
│   ├── Projects.tsx            ← Project cards with hover overlay + detail modal
│   ├── Achievements.tsx        ← Achievement grid with color-coded categories
│   ├── GithubStats.tsx         ← Contribution graph + language bars
│   ├── Contact.tsx             ← Validated form + contact link cards
│   ├── Footer.tsx              ← Links, social icons, copyright
│   └── HarmanGPT.tsx           ← AI chatbot (Claude API, suggestions, markdown)
│
├── hooks/
│   ├── useScrollProgress.ts
│   ├── useActiveSection.ts
│   ├── useIntersectionObserver.ts
│   ├── useMousePosition.ts
│   └── useTypingEffect.ts
│
├── lib/
│   ├── constants.ts            ← ALL portfolio data (personal, projects, skills…)
│   ├── animations.ts           ← All Framer Motion variants and transitions
│   └── utils.ts                ← cn(), clamp(), generateContribData(), etc.
│
├── public/
│   ├── resume.pdf              ← ⚠️ ADD YOUR RESUME HERE
│   ├── og-image.png            ← ⚠️ ADD OG IMAGE (1200×630px)
│   ├── favicon.ico
│   └── site.webmanifest
│
├── .env.local.example          ← Copy to .env.local and fill in keys
├── tailwind.config.ts
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
└── package.json
```

---

## 🚀 Quick Start

### 1. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 2. Set up environment variables

```bash
cp .env.local.example .env.local
```

Edit `.env.local`:
```env
ANTHROPIC_API_KEY=sk-ant-...   # Required for HarmanGPT
```

### 3. Add your assets

| File | Notes |
|------|-------|
| `public/resume.pdf` | Your resume — linked from Resume button |
| `public/og-image.png` | 1200×630px Open Graph image |
| `public/favicon.ico` | Your favicon |

### 4. Personalize your data

All portfolio content is centralized in **`lib/constants.ts`**. Update:

- `PERSONAL` — name, email, GitHub, LinkedIn, university details
- `TYPING_ROLES` — hero typing effect words
- `SKILL_CATEGORIES` — skills with levels
- `EXPERIENCES` — internship details and achievements
- `PROJECTS` — project descriptions, links, tech stacks
- `ACHIEVEMENTS` — certifications, awards, leadership
- `GITHUB_STATS` / `GITHUB_LANGUAGES` — your actual stats
- `CONTACT_LINKS` — your real email, LinkedIn, GitHub URLs

### 5. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 6. Build for production

```bash
npm run build
npm start
```

---

## 🤖 HarmanGPT Setup (AI Chatbot)

The chatbot is powered by Claude (Anthropic). There are two modes:

### Development (direct API call)
The component calls `https://api.anthropic.com/v1/messages` directly from the browser. This is fine for local testing but **exposes your API key in the network tab**.

### Production (recommended — secure proxy)
Update `HarmanGPT.tsx` to call your own API route instead:

```typescript
// In components/HarmanGPT.tsx, change the fetch URL:
const response = await fetch("/api/chat", {   // ← use your proxy
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    model: "claude-sonnet-4-6",
    max_tokens: 1000,
    system: HARMANGPT_SYSTEM,
    messages: history,
  }),
});
```

The API route at `app/api/chat/route.ts` is already built and ready — it reads `ANTHROPIC_API_KEY` from your environment server-side, keeping it secure.

---

## 📦 Tech Stack

| Category | Technology | Version |
|----------|-----------|---------|
| Framework | Next.js | 15.x |
| Language | TypeScript | 5.x |
| Styling | Tailwind CSS | 3.4 |
| Animations | Framer Motion | 11.x |
| Icons | Lucide React | 0.468 |
| Theme | next-themes | 0.4 |
| Toasts | Sonner | 1.7 |
| UI primitives | Radix UI | latest |
| AI | Claude (Anthropic) | claude-sonnet-4-6 |
| Deployment | Vercel | — |

---

## 🎨 Design Tokens

### Colors
| Token | Value | Usage |
|-------|-------|-------|
| `--color-purple` | `#7c3aed` | Primary CTAs, active states |
| `--color-purple-light` | `#a78bfa` | Text accents, highlights |
| `--color-cyan` | `#06b6d4` | Secondary accent |
| `--color-cyan-light` | `#67e8f9` | Tech tags |
| `--color-amber` | `#f59e0b` | Tertiary accent |
| `--color-bg` | `#060612` | Page background |
| `--color-bg-2` | `#0d0d1f` | Alternate section bg |
| `--color-text` | `#f1f5f9` | Primary text |
| `--color-text-muted` | `#94a3b8` | Secondary text |

### Fonts
| Variable | Family | Usage |
|----------|--------|-------|
| `--font-inter` | Inter | Body text |
| `--font-space-grotesk` | Space Grotesk | Headings, display |
| `--font-jetbrains-mono` | JetBrains Mono | Code, percentages |

---

## 🌐 Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

Or connect your GitHub repository to [vercel.com](https://vercel.com) for automatic deployments.

**Environment Variables to set in Vercel dashboard:**
- `ANTHROPIC_API_KEY` — your Claude API key

---

## ✅ Pre-deployment Checklist

- [ ] Replace placeholder email in `lib/constants.ts`
- [ ] Update LinkedIn, GitHub URLs in `lib/constants.ts`
- [ ] Add `public/resume.pdf`
- [ ] Add `public/og-image.png` (1200×630px)
- [ ] Update domain in `app/layout.tsx` metadata
- [ ] Set `ANTHROPIC_API_KEY` in `.env.local` (and Vercel)
- [ ] Update HarmanGPT to use `/api/chat` instead of direct API call
- [ ] Update project GitHub and demo links in `lib/constants.ts`
- [ ] Add real GitHub statistics to `GITHUB_STATS` and `GITHUB_LANGUAGES`
- [ ] Test dark/light mode
- [ ] Test on mobile (320px+)
- [ ] Run `npm run build` and verify 0 errors

---

Built with 💜 by Harmanpreet Kaur · SRM Institute of Science and Technology, Chennai
