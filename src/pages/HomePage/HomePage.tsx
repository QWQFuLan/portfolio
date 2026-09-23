import { useState } from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Portfolio from './sections/Portfolio';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import type { Lang } from './data';

export default function HomePage() {
  const [lang, setLang] = useState<Lang>('zh');
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar lang={lang} onToggleLang={() => setLang((l) => (l === 'zh' ? 'en' : 'zh'))} />
      <main>
        <Hero lang={lang} />
        <About lang={lang} />
        <Portfolio lang={lang} />
        <Skills lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}
