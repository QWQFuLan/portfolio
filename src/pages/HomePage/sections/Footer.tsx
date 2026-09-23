import { GITHUB_URL } from '../data';

export default function Footer() {
  return (
    <footer className="border-t-4 border-black px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <p className="font-pixel text-[0.6rem] text-muted-foreground">© 2026 FULAN</p>
        <p className="text-xs text-muted-foreground">以像素建造 · 用程式思考 · 靈感來自 Minecraft</p>
        <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
          GitHub ↗
        </a>
      </div>
    </footer>
  );
}
