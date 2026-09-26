import DepthText from '@/components/reactbits/DepthText';
import FarmAnimals from './FarmAnimals';
import { STR, type Lang } from '../data';

/* Pixel-art clouds drawn on a 64x32 grid, matching the farm-animal pixel style.
   `drift` (seconds) enables a slow back-and-forth cloud drift animation. */
function PixelCloud({
  width,
  className,
  drift,
}: {
  width: number;
  className?: string;
  drift?: number;
}) {
  return (
    <svg
      viewBox="0 0 64 32"
      width={width}
      height={Math.round(width / 2)}
      className={className}
      style={{
        imageRendering: 'pixelated',
        animationDuration: drift ? `${drift}s` : undefined,
        animationDelay: drift ? `${-drift / 3}s` : undefined,
      }}
      aria-hidden="true"
    >
      <rect x="6" y="18" width="52" height="10" fill="#ffffff" />
      <rect x="14" y="11" width="18" height="9" fill="#ffffff" />
      <rect x="32" y="15" width="14" height="5" fill="#ffffff" />
      <rect x="2" y="22" width="10" height="6" fill="#f4faff" />
    </svg>
  );
}

/* 12x12 pixel sun with corner rays */
function PixelSun({ size = 88, className }: { size?: number; className?: string }) {
  return (
    <svg
      viewBox="0 0 12 12"
      width={size}
      height={size}
      className={className}
      style={{ imageRendering: 'pixelated' }}
      aria-hidden="true"
    >
      <rect x="4" y="2" width="4" height="8" fill="#ffd75e" />
      <rect x="2" y="4" width="8" height="4" fill="#ffd75e" />
      <rect x="5" y="0" width="2" height="2" fill="#ffe9a8" />
      <rect x="5" y="10" width="2" height="2" fill="#ffe9a8" />
      <rect x="0" y="5" width="2" height="2" fill="#ffe9a8" />
      <rect x="10" y="5" width="2" height="2" fill="#ffe9a8" />
    </svg>
  );
}

function Clouds() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
      <PixelSun size={88} className="absolute left-[7%] top-[8%]" />
      <PixelCloud width={250} drift={38} className="cloud-drift absolute left-[31%] top-[9%]" />
      <PixelCloud width={210} drift={26} className="cloud-drift absolute right-[7%] top-[12%]" />
      <PixelCloud width={170} drift={44} className="cloud-drift absolute left-[24%] top-[21%]" />
      <PixelCloud width={240} drift={31} className="cloud-drift absolute right-[23%] top-[6%]" />
    </div>
  );
}

export default function Hero({ lang }: { lang: Lang }) {
  const t = STR[lang];
  return (
    <section id="home" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pb-10">
      {/* Sky background: CSS gradient only, no image asset (same approach as Cave) */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to bottom, #4a9ae8 0%, #8cc6f5 45%, #cdeafc 100%)' }}
        aria-hidden="true"
      />
      <Clouds />
      <div className="relative z-10 flex flex-col items-center text-center">
        <p className="pixel-chip mb-8">PERSONAL PORTFOLIO · 2026</p>
        <h1 className="font-pixel leading-none">
          <DepthText
            text="FULAN"
            layers={30}
            depth={2.2}
            faceColor="#e8f4e0"
            depthColor="#5dba4a"
            tilt={8}
            pointerTracking
            smoothing={0.14}
            perspective={900}
            autoOrbit
            orbitSpeed={0.3}
            fontSize="clamp(3rem, 14vw, 9rem)"
            fontWeight={400}
            shadow
          />
        </h1>
        <p className="mt-8 max-w-md text-sm text-muted-foreground md:text-base">{t.heroTagline}</p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href="#portfolio" className="pixel-btn">
            {t.seeWorks}
          </a>
          <a href="#contact" className="pixel-btn pixel-btn--ghost">
            {t.contactMe}
          </a>
        </div>
      </div>
      <div className="pixel-grass absolute inset-x-0 bottom-0" aria-hidden="true" />
      <FarmAnimals />
    </section>
  );
}
