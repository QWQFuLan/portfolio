import { GITHUB_URL, STR, type Lang } from '../data';

export default function Footer({ lang }: { lang: Lang }) {
  return (
    <footer className="border-t-4 border-black px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <p className="font-pixel text-[0.6rem] text-muted-foreground">© 2026 FULAN</p>
        <p className="text-xs text-muted-foreground">{STR[lang].footerLine}</p>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noreferrer"
          className="text-xs text-muted-foreground transition-colors hover:text-foreground"
        >
          GitHub ↗
        </a>
      </div>
    </footer>
  );
}
