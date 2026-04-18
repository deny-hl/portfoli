# Denys — Portfolio

Single-page portfolio site. Maritime-to-tech narrative, signal-teal accent, dark-first.

Ported from a Claude Design prototype (`Portfolio.html` + `app.jsx`) to a production Vite + React + TypeScript project.

## Stack

- **Vite 5** + **React 18** + **TypeScript 5** (strict)
- No UI framework — inline styles + CSS variables (driven by the original design)
- Zero runtime dependencies beyond React + ReactDOM

## Commands

```bash
npm install        # install deps
npm run dev        # start dev server on http://localhost:5173
npm run build      # typecheck + production build to dist/
npm run preview    # serve the production build locally
npm run typecheck  # tsc --noEmit
```

## Structure

```
src/
  App.tsx                    root component, wires sections + hotkey
  main.tsx                   React root
  data/me.ts                 all real content (bio, projects, skills, facts)
  types/                     Tweaks, content types
  hooks/                     useTheme, useTweaks, useScrollSpy,
                             useReveal, useWarsawTime, useHotkey
  components/
    Nav.tsx                  sticky header, time, theme toggle
    Hero.tsx                 headline, coord bar, side card, stat strip
    About.tsx                bio + facts card + now panel
    Projects.tsx             project rows
    Skills.tsx               skill groups
    Contact.tsx              email, github, linkedin cards
    Footer.tsx
    SectionHeader.tsx
    Reveal.tsx               scroll-reveal wrapper
    TweaksPanel.tsx          design tweaks (hidden by default)
    hero/                    InstrumentGrid, SideCard, LogRow, StatStrip
    primitives/              Btn, Seg, Toggle
  styles/global.css          CSS variables, themes, reveal, responsive
public/
  CV_Denys_Bulakh.docx       main CV
  CV_Denys_Bulakh_ManualQA.docx
  CV_Denys_Bulakh_TechSupport.docx
  favicon.svg
```

## Tweaks

The site ships with a hidden tweaks panel — press **Ctrl + ,** (Windows/Linux) or **⌘ + ,** (macOS) to toggle. Exposes:

- Headline variant (3 options)
- Hero layout (asymmetric / single-column)
- Stat strip variant (ticker / minimal)
- Accent hue slider (teal → cyan → blue)
- Coord bar on/off
- Section §-numbering on/off
- Now panel on/off

All choices persist to `localStorage`. Hit **Reset** in the panel header to restore defaults.

Theme (dark/light) toggles from the nav; also persists.

## Accessibility

- Respects `prefers-reduced-motion` — disables reveal-on-scroll animation
- Skip-to-content link (first tab stop)
- Visible focus rings on all interactive elements
- Theme toggle and tweaks panel exposed via ARIA labels + roles
- Color contrast verified against both themes

## Deploy

Any static host. The build output is in `dist/`:

- **Netlify**: drag-drop `dist/` or wire the repo with `npm run build` + publish `dist/`
- **Vercel**: framework preset = Vite, no config needed
- **GitHub Pages**: publish `dist/` from an action

No server-side requirements, no env vars.

## Content updates

All copy lives in [`src/data/me.ts`](src/data/me.ts). Changing bio, projects, skills, facts, etc. only touches that file.

To swap the CV, drop a new file in `public/` and update `ME.cv` to match.
