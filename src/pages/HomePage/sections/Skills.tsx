import FlipCard from '@/components/reactbits/FlipCard';
import { SKILLS } from '../data';

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

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="text-center">
        <p className="pixel-chip mb-4 inline-block">SKILLS · 技能</p>
        <h2 className="font-pixel text-2xl md:text-3xl">技能卡片 · 點擊翻面</h2>
        <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground md:text-base">
          每一張卡片都可以翻過來，看看我正在學什麼。
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 justify-items-center gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {SKILLS.map((skill) => (
          <FlipCard
            key={skill.id}
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
                <span className="font-pixel text-base">{skill.name}</span>
                <span className="text-xs text-muted-foreground">{skill.tagline}</span>
                <span className="font-pixel text-[0.5rem] tracking-widest text-muted-foreground">
                  CLICK TO FLIP
                </span>
              </div>
            }
            back={
              <div className="flex h-full flex-col items-center justify-center gap-5 p-6 text-center">
                <span className="font-pixel text-base" style={{ color: skill.color }}>
                  {skill.name}
                </span>
                <p className="text-xs leading-6 text-foreground">{skill.detail}</p>
                <ProgressBlocks level={skill.progress} color={skill.color} />
                <span className="font-pixel text-[0.5rem] tracking-widest text-muted-foreground">
                  LEARNING
                </span>
              </div>
            }
          />
        ))}
      </div>
    </section>
  );
}
