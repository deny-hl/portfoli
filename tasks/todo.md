# Portfolio build — 4-part plan

Source: Claude Design handoff (`Portfolio.html` + `app.jsx`). Target: Vite + React + TypeScript production site.

## Part 1 — Scaffold + global styles  ✅
- [x] Vite + React + TS project at repo root (package.json + tsconfigs + vite.config.ts)
- [x] `.gitignore`
- [x] `index.html` with OG/Twitter/JSON-LD Person/favicon/fonts preconnect
- [x] `src/main.tsx` + `src/App.tsx` shell
- [x] `src/styles/global.css` — vars, light override, reset, `.mono`, `.reveal`, noise, scrollbar, `.sr-only`, responsive helpers
- [x] `public/CV_Denys_Bulakh.docx` + ManualQA + TechSupport variants
- [x] `public/favicon.svg` — signal-teal dot
- [x] `src/vite-env.d.ts`
- [x] `npm install` → 68 packages, no errors
- [x] `npx vite build` → 142.72 KB / 45.89 KB gzipped — clean
- [ ] Commit (awaiting user signal)

## Part 2 — Data + hooks + primitives  ✅
- [x] `src/data/me.ts` — ME object typed via `Me`, real email `denys3xd@gmail.com`, CV link `/CV_Denys_Bulakh.docx`
- [x] `src/types/tweaks.ts` (+ `DEFAULT_TWEAKS`), `src/types/content.ts`
- [x] `src/hooks/useReveal.ts` — IntersectionObserver + reduced-motion guard
- [x] `src/hooks/useTheme.ts` — dark/light, localStorage, toggleTheme
- [x] `src/hooks/useTweaks.ts` — localStorage-persisted, mirrors `--accent-h`
- [x] `src/hooks/useScrollSpy.ts`
- [x] `src/hooks/useWarsawTime.ts` — 30s interval
- [x] `src/components/Reveal.tsx`
- [x] `src/components/SectionHeader.tsx` — uses responsive `--label-col` var
- [x] `src/components/primitives/Btn.tsx` — includes `rel="noopener noreferrer"`
- [x] `npx tsc -b --noEmit` clean
- [ ] Commit (awaiting user signal)

## Part 3 — Main sections  ✅
- [x] `src/components/Nav.tsx` (+ inline `ThemeIcon`)
- [x] `src/components/Hero.tsx` + `hero/InstrumentGrid.tsx`, `hero/SideCard.tsx`, `hero/LogRow.tsx`, `hero/StatStrip.tsx`
- [x] `src/components/About.tsx`
- [x] `src/components/Projects.tsx` (+ inline `ProjectRow`)
- [x] `src/components/Skills.tsx`
- [x] `src/components/Contact.tsx` (+ inline `ContactCard`)
- [x] `src/components/Footer.tsx`
- [x] Wired into `App.tsx`
- [x] Responsive: CSS vars (`--label-col`, `--label-indent`) + `.hero-grid`, `.stats-ticker`, `.skills-grid`, `.contact-grid`, `.project-row-grid` break at ≤900 / ≤640
- [x] `rel="noopener noreferrer"` on all external `target="_blank"`
- [x] `npx vite build` → 168.16 KB / 53.68 KB gzipped
- [ ] Commit (awaiting user signal)

## Part 4 — Tweaks panel + polish + ship  ✅
- [x] `src/components/TweaksPanel.tsx` — headline/layout/stat-strip/hue/toggles, Reset button
- [x] `src/components/primitives/Seg.tsx`, `Toggle.tsx` — typed, ARIA radiogroup/switch
- [x] `src/hooks/useHotkey.ts` — Ctrl+,/⌘+, ignores input fields
- [x] `.sr-only` util defined + skip-link first tab stop
- [x] `README.md` — project description, commands, structure, tweaks, a11y, deploy notes
- [x] Final `npm run build` → 172.94 KB / 54.89 KB gzipped
- [x] `npm run preview` smoke test → HTTP 200, meta tags intact, CV serves at `/CV_Denys_Bulakh.docx`, favicon OK
- [ ] Commit (awaiting user signal)

## Review
- **Final bundle**: 172.94 KB JS / 54.89 KB gzip · 3.92 KB CSS / 1.55 KB gzip · 2.42 KB HTML / 1.01 KB gzip
- **Modules**: 56 · **Build time**: 2.88s
- **Lighthouse**: not run (preview server killed after smoke test; user can `npm run preview` + run Lighthouse locally)
- **Known TODOs**:
  - Project repo links all point to `https://github.com/deny-hl` (user confirmed keep as-is until specific repos are public)
  - CVs served as `.docx` (user provided docx; could convert to PDF if desired)
- **Out-of-repo paths**: CVs originals in `C:/Users/denys/OneDrive/Documents/CV/`; memory in `~/.claude/projects/...portfoli/memory/`; design handoff bundle in `C:/Users/denys/AppData/Local/Temp/design/extracted/portfolio/`
