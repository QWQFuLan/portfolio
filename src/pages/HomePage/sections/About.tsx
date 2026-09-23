import DepthText from '@/components/reactbits/DepthText';
import { STR, type Lang } from '../data';

export default function About({ lang }: { lang: Lang }) {
  const t = STR[lang];
  return (
    <section id="about" className="mx-auto max-w-4xl px-6 py-24 md:py-32">
      <div className="pixel-frame p-8 md:p-12">
        <p className="pixel-chip mb-8">{t.aboutChip}</p>
        <h2 className="font-pixel leading-none">
          <DepthText
            text="HELLO"
            layers={24}
            depth={2}
            faceColor="#e8f4e0"
            depthColor="#6bb5ff"
            tilt={6}
            pointerTracking
            smoothing={0.14}
            perspective={900}
            autoOrbit
            orbitSpeed={0.28}
            fontSize="clamp(2.2rem, 8vw, 4.5rem)"
            fontWeight={400}
            shadow
          />
        </h2>
        <p className="mt-8 text-lg md:text-xl">{t.aboutLine1}</p>
        <p className="mt-4 text-sm leading-7 text-muted-foreground md:text-base">{t.aboutLine2}</p>
        <div className="mt-8 flex flex-wrap gap-2">
          {t.tags.map((tag) => (
            <span key={tag} className="pixel-chip">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
