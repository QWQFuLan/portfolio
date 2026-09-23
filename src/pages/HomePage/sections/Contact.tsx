import { EMAIL, GITHUB_URL, STR, type Lang } from '../data';

export default function Contact({ lang }: { lang: Lang }) {
  const t = STR[lang];
  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-24 text-center md:py-32">
      <p className="pixel-chip mb-4 inline-block">{t.contactChip}</p>
      <h2 className="font-pixel text-2xl md:text-3xl">{t.contactTitle}</h2>
      <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground md:text-base">{t.contactSub}</p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <a href={`mailto:${EMAIL}`} className="pixel-btn">
          {t.emailBtn}
        </a>
        <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="pixel-btn pixel-btn--ghost">
          GitHub ↗
        </a>
      </div>
    </section>
  );
}
