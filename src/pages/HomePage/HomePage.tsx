import { useState } from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Village from './sections/Village';
import Portfolio from './sections/Portfolio';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import End from './sections/End';
import Footer from './sections/Footer';
import type { Lang } from './data';

export default function HomePage() {
  const [lang, setLang] = useState<Lang>('zh');
  return (
    // The dark page background lives on <body>; this root stays transparent so
    // the page background shows through the content sections.
    <div className="min-h-screen text-foreground">
      <Navbar lang={lang} onToggleLang={() => setLang((l) => (l === 'zh' ? 'en' : 'zh'))} />
      <main>
        <Hero lang={lang} />
        <About lang={lang} />
        <Village />
        <Portfolio lang={lang} />
        <Skills lang={lang} />
        <Contact lang={lang} />
      </main>
      <End />
      <Footer lang={lang} />
    </div>
  );
}
