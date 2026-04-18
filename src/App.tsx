import { useCallback, useState } from 'react';
import { useTheme } from './hooks/useTheme';
import { useTweaks } from './hooks/useTweaks';
import { useScrollSpy } from './hooks/useScrollSpy';
import { useHotkey } from './hooks/useHotkey';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { TweaksPanel } from './components/TweaksPanel';

const SECTION_IDS = ['top', 'about', 'projects', 'skills', 'contact'] as const;

export function App() {
  const { theme, toggleTheme } = useTheme();
  const { tweaks, setTweak, resetTweaks } = useTweaks();
  const active = useScrollSpy(SECTION_IDS, 'top');
  const [tweaksOpen, setTweaksOpen] = useState(false);

  const toggleTweaks = useCallback(() => setTweaksOpen((v) => !v), []);
  const closeTweaks = useCallback(() => setTweaksOpen(false), []);

  useHotkey({ key: ',', ctrlOrMeta: true, onFire: toggleTweaks });

  return (
    <>
      <a className="sr-only" href="#main">Skip to content</a>
      <Nav theme={theme} onToggleTheme={toggleTheme} active={active} />
      <main id="main">
        <Hero tweaks={tweaks} />
        <About tweaks={tweaks} />
        <Projects tweaks={tweaks} />
        <Skills tweaks={tweaks} />
        <Contact tweaks={tweaks} />
      </main>
      <Footer />
      <TweaksPanel
        tweaks={tweaks}
        setTweak={setTweak}
        resetTweaks={resetTweaks}
        open={tweaksOpen}
        onClose={closeTweaks}
      />
    </>
  );
}
