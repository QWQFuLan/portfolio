import { EMAIL, GITHUB_URL } from '../data';

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-24 text-center md:py-32">
      <p className="pixel-chip mb-4 inline-block">CONTACT · 聯絡我</p>
      <h2 className="font-pixel text-2xl md:text-3xl">一起建造點什麼吧</h2>
      <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground md:text-base">
        想聊聊程式、Minecraft，或是任何有趣的想法，都可以透過下面方式找到我。
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <a href={`mailto:${EMAIL}`} className="pixel-btn">
          Email 聯絡
        </a>
        <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="pixel-btn pixel-btn--ghost">
          GitHub ↗
        </a>
      </div>
    </section>
  );
}
