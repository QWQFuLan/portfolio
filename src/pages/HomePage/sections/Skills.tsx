import type { CSSProperties } from 'react';
import FlipCard from '@/components/reactbits/FlipCard';
import Nether from './Nether';
import { SKILLS, STR, type Lang } from '../data';

function ProgressBlocks({ level, color }: { level: number; color: string }) {
  return (
    <div className="flex gap-1.5" aria-label={`學習進度 ${level} / 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          className="h-2.5 w-2.5 border-2 border-black"
          style={{ background: i < level ? color : 'transparent' }}
        />
      ))}
    </div>
  );
}

export default function Skills({ lang }: { lang: Lang }) {
  const t = STR[lang];
  return (
    <section id="skills" className="relative overflow-hidden pt-24 md:pt-32">
      {/* Dark nether background: dark red & black gradient, no image asset */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to bottom, #140607 0%, #24100a 32%, #33120c 62%, #3d130d 100%)' }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="pixel-chip mb-4 inline-block">{t.skillsChip}</p>
          <h2 className="font-pixel text-2xl md:text-3xl">{t.skillsTitle}</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground md:text-base">{t.skillsSub}</p>
        </div>

        {/* cards sit above the nether scene (z-10) so creatures pass behind them */}
        <div className="relative z-10 mt-14 grid grid-cols-1 justify-items-center gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((skill) => (
            <FlipCard
              key={skill.id}
              className="cursor-target"
              axis="y"
              flipOnClick
              draggable
              tilt
              tiltMax={10}
              glare
              glareOpacity={0.18}
              hoverScale={1.03}
              perspective={1100}
              stiffness={170}
              damping={20}
              width={264}
              height={360}
              radius={10}
              background="#1e2a38"
              color="#e8f4e0"
              shadow
              shadowColor="#000000"
              shadowOpacity={0.5}
              ariaLabel={`技能卡片：${skill.name}`}
              front={
                <div className="flex h-full flex-col items-center justify-center gap-5 p-6 text-center">
                  <span
                    className="grid h-16 w-16 place-items-center border-2 border-black font-pixel text-2xl text-black shadow-[4px_4px_0_0_rgba(0,0,0,0.4)]"
                    style={{ background: skill.color }}
                  >
                    {skill.badge}
                  </span>
                  <span className="font-pixel text-base">{lang === 'zh' ? skill.name : skill.nameEn}</span>
                  <span className="text-xs text-muted-foreground">
                    {lang === 'zh' ? skill.tagline : skill.taglineEn}
                  </span>
                  <span className="font-pixel text-[0.5rem] tracking-widest text-muted-foreground">
                    CLICK TO FLIP
                  </span>
                </div>
              }
              back={
                <div className="flex h-full flex-col items-center justify-center gap-5 p-6 text-center">
                  <span className="font-pixel text-base" style={{ color: skill.color }}>
                    {lang === 'zh' ? skill.name : skill.nameEn}
                  </span>
                  <p className="text-xs leading-6 text-foreground">
                    {lang === 'zh' ? skill.detail : skill.detailEn}
                  </p>
                  <ProgressBlocks level={skill.progress} color={skill.color} />
                  <span className="font-pixel text-[0.5rem] tracking-widest text-muted-foreground">
                    LEARNING
                  </span>
                </div>
              }
            />
          ))}
        </div>
      </div>

      {/* nether biome spans full width below the skills content */}
      <div className="mt-14">
        <Nether />
      </div>
    </section>
  );
}
