import DepthCarousel from '@/components/reactbits/DepthCarousel';
import { GITHUB_URL, PROJECTS, type Project } from '../data';

function ProjectCard({ project }: { project: Project }) {
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
        <h3 className="mt-6 font-pixel text-sm leading-6 text-foreground">{project.name}</h3>
        <p className="mt-4 text-xs leading-6 text-muted-foreground">{project.desc}</p>
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

const CAROUSEL_ITEMS = PROJECTS.map((project) => ({
  content: <ProjectCard project={project} />,
  url: project.url,
  alt: project.name,
}));

export default function Portfolio() {
  return (
    <section id="portfolio" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="pixel-chip mb-4">PORTFOLIO · 作品集</p>
          <h2 className="font-pixel text-2xl md:text-3xl">我的方塊世界</h2>
          <p className="mt-4 max-w-xl text-sm text-muted-foreground md:text-base">
            一些親手蓋出來的小作品。點擊卡片會直接打開對應的 GitHub 倉庫。
          </p>
        </div>
        <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="pixel-btn pixel-btn--ghost">
          GitHub ↗
        </a>
      </div>

      <div className="mt-14 h-[480px] md:h-[520px]">
        <DepthCarousel
          items={CAROUSEL_ITEMS}
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
        />
      </div>

      <p className="mt-8 text-center font-pixel text-[0.58rem] tracking-widest text-muted-foreground">
        點擊卡片前往 GitHub · 拖曳 / 滾輪切換
      </p>
    </section>
  );
}
