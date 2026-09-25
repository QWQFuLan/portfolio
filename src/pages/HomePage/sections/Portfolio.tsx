import DepthCarousel from '@/components/reactbits/DepthCarousel';
import Cave from './Cave';
import { GITHUB_URL, PROJECTS, STR, type Lang, type Project } from '../data';

function ProjectCard({ project, lang }: { project: Project; lang: Lang }) {
  return (
    <div className="flex h-full flex-col justify-between bg-[#16202e] p-6 text-left">
      <div>
        <div className="flex items-center justify-between">
          <span
            className="grid h-10 w-10 place-items-center border-2 border-black font-pixel text-[0.55rem] text-black shadow-[3px_3px_0_0_rgba(0,0,0,0.45)]"
            style={{ background: project.color }}
          >
            {project.tech}
          </span>
          <span className="font-pixel text-[0.5rem] tracking-widest" style={{ color: project.color }}>
            REPO
          </span>
        </div>
        <h3 className="mt-6 font-pixel text-sm leading-6 text-foreground">
          {lang === 'zh' ? project.name : project.nameEn}
        </h3>
        <p className="mt-4 text-xs leading-6 text-muted-foreground">
          {lang === 'zh' ? project.desc : project.descEn}
        </p>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <span className="font-pixel text-[0.5rem] tracking-widest text-muted-foreground">GITHUB</span>
        <span
          className="border-2 border-black px-2 py-1 font-pixel text-[0.55rem] text-black shadow-[2px_2px_0_0_rgba(0,0,0,0.45)]"
          style={{ background: project.color }}
        >
          ↗
        </span>
      </div>
    </div>
  );
}

export default function Portfolio({ lang }: { lang: Lang }) {
  const t = STR[lang];
  const items = PROJECTS.map((project) => ({
    content: <ProjectCard project={project} lang={lang} />,
    url: project.url,
    alt: project.name,
  }));
  return (
    // Transparent background on purpose: the fixed PixelTrail layer (z-index: 0)
    // lives below the app content (z-index: 1), so an opaque section background
    // would cover the mouse trail. Keep this section transparent like the rest.
    <section id="portfolio" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="pixel-chip mb-4">{t.portfolioChip}</p>
          <h2 className="font-pixel text-2xl md:text-3xl">{t.portfolioTitle}</h2>
          <p className="mt-4 max-w-xl text-sm text-muted-foreground md:text-base">{t.portfolioSub}</p>
        </div>
        <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="pixel-btn pixel-btn--ghost">
          GitHub ↗
        </a>
      </div>

      <div className="mt-14 h-[480px] md:h-[520px]">
        <DepthCarousel
          items={items}
          cardWidth={340}
          cardHeight={420}
          radius={10}
          depth={200}
          spread={84}
          tilt={20}
          tiltDirection="right"
          perspective={1400}
          visibleCards={3}
          falloff={0.2}
          blur={5}
          autoplay
          autoplayDelay={3200}
          loop
          wheelEnabled={false}
        />
      </div>

      <p className="mt-8 text-center font-pixel text-[0.58rem] tracking-widest text-muted-foreground">
        {t.portfolioHint}
      </p>
      </div>

      {/* cave scene spans full width below the content */}
      <div className="mt-14">
        <Cave />
      </div>
    </section>
  );
}
