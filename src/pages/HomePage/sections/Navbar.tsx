import { GITHUB_URL } from '../data';

const NAV_ITEMS = [
  { id: 'home', label: '首頁' },
  { id: 'about', label: '關於我' },
  { id: 'portfolio', label: '作品集' },
  { id: 'skills', label: '技能' },
  { id: 'contact', label: '聯絡我' },
];

export default function Navbar() {
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
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="shrink-0 rounded-sm px-2.5 py-1.5 text-xs text-muted-foreground transition-colors hover:bg-card-border hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </div>
        <span className="mx-1 h-5 w-[3px] shrink-0 bg-black/40" aria-hidden="true" />
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
