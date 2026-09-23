import { GITHUB_URL, STR, type Lang } from '../data';

const NAV_IDS = ['home', 'about', 'portfolio', 'skills', 'contact'] as const;

export default function Navbar({ lang, onToggleLang }: { lang: Lang; onToggleLang: () => void }) {
  const labels = STR[lang].nav;
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav className="flex max-w-full items-center gap-1 rounded-sm border-2 border-black bg-card px-2 py-1.5 shadow-[4px_4px_0_0_rgba(0,0,0,0.45)]">
        <a
          href="#home"
          aria-label="回到首頁"
          className="grid h-8 w-8 shrink-0 place-items-center border-2 border-black bg-primary font-pixel text-xs text-black shadow-[2px_2px_0_0_rgba(0,0,0,0.5)] transition-transform hover:scale-105"
        >
          F
        </a>
        <span className="mx-1 h-5 w-[3px] shrink-0 bg-black/40" aria-hidden="true" />
        <div className="flex items-center gap-0.5 overflow-x-auto">
          {NAV_IDS.map((id, i) => (
            <a
              key={id}
              href={`#${id}`}
              className="shrink-0 rounded-sm px-2.5 py-1.5 text-xs text-muted-foreground transition-colors hover:bg-card-border hover:text-foreground"
            >
              {labels[i]}
            </a>
          ))}
        </div>
        <span className="mx-1 h-5 w-[3px] shrink-0 bg-black/40" aria-hidden="true" />
        <button
          type="button"
          onClick={onToggleLang}
          title={lang === 'zh' ? 'Switch to English' : '切換中文'}
          className="shrink-0 rounded-sm border-2 border-black bg-primary px-2 py-1 font-pixel text-[0.55rem] text-black shadow-[2px_2px_0_0_rgba(0,0,0,0.5)] transition-transform hover:scale-105"
        >
          {lang === 'zh' ? 'EN' : '中'}
        </button>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noreferrer"
          className="shrink-0 rounded-sm border-2 border-black bg-primary px-2.5 py-1 font-pixel text-[0.55rem] text-black shadow-[2px_2px_0_0_rgba(0,0,0,0.5)] transition-transform hover:scale-105"
        >
          GitHub
        </a>
      </nav>
    </header>
  );
}
