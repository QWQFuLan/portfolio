import DepthText from '@/components/reactbits/DepthText';
import { STR, type Lang } from '../data';

/* Pixel-art night sky for the About section: CSS gradient sky + SVG pixel
   moon, stars and clouds — same approach as the hero (no image assets). */

const STARS = [
  { left: 6, top: 10, size: 3 },
  { left: 13, top: 22, size: 4 },
  { left: 19, top: 7, size: 3 },
  { left: 28, top: 15, size: 4 },
  { left: 34, top: 4, size: 3 },
  { left: 42, top: 26, size: 3 },
  { left: 49, top: 9, size: 4 },
  { left: 56, top: 18, size: 3 },
  { left: 63, top: 5, size: 4 },
  { left: 71, top: 24, size: 3 },
  { left: 78, top: 12, size: 4 },
  { left: 86, top: 20, size: 3 },
  { left: 92, top: 8, size: 4 },
  { left: 95, top: 27, size: 3 },
  { left: 11, top: 34, size: 3 },
  { left: 58, top: 33, size: 3 },
];

/* 12x12 pixel square moon: white square face, two grey crater pixels, soft glow */
function PixelMoon({ size = 80, className }: { size?: number; className?: string }) {
  return (
    <svg
      viewBox="0 0 12 12"
      width={size}
      height={size}
      className={className}
      style={{
        imageRendering: 'pixelated',
        filter:
          'drop-shadow(0 0 8px rgba(215, 226, 255, 0.9)) drop-shadow(0 0 22px rgba(215, 226, 255, 0.5))',
      }}
      aria-hidden="true"
    >
      <rect x="1" y="1" width="10" height="10" fill="#f0f3ff" />
      {/* two crater pixels */}
      <rect x="3" y="3" width="2" height="2" fill="#d8def0" />
      <rect x="7" y="6" width="2" height="2" fill="#d8def0" />
    </svg>
  );
}

/* Night clouds on the same 64x32 grid as the hero day clouds, tinted for night.
   `drift` (seconds) enables a slow back-and-forth cloud drift animation. */
function NightCloud({
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
      <rect x="6" y="18" width="52" height="10" fill="#2a3465" />
      <rect x="14" y="11" width="18" height="9" fill="#2a3465" />
      <rect x="32" y="15" width="14" height="5" fill="#2a3465" />
      <rect x="2" y="22" width="10" height="6" fill="#202a52" />
    </svg>
  );
}

function NightScene() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      {STARS.map((s, i) => (
        <span
          key={i}
          className="absolute bg-[#e9edff]"
          style={{ left: `${s.left}%`, top: `${s.top}%`, width: s.size, height: s.size }}
        />
      ))}
      <PixelMoon size={80} className="absolute right-[10%] top-[7%]" />
      <NightCloud width={250} drift={40} className="cloud-drift absolute left-[5%] top-[13%]" />
      <NightCloud width={190} drift={27} className="cloud-drift absolute right-[24%] top-[5%]" />
      <NightCloud width={170} drift={45} className="cloud-drift absolute left-[21%] top-[25%]" />
      <NightCloud width={220} drift={33} className="cloud-drift absolute right-[4%] top-[21%]" />
    </div>
  );
}

export default function About({ lang }: { lang: Lang }) {
  const t = STR[lang];
  return (
    <section id="about" className="relative overflow-hidden px-6 py-24 md:py-32">
      {/* Night sky background: CSS gradient only, no image asset */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to bottom, #0a0e2a 0%, #131a3f 45%, #1c2650 100%)' }}
        aria-hidden="true"
      />
      <NightScene />
      <div className="relative z-10 mx-auto max-w-4xl">
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

          {/* pixel-art journey timeline */}
          <div className="mt-12">
            <p className="pixel-chip mb-7">{t.timelineChip}</p>
            <ol className="relative ml-1 space-y-6 border-l-4 border-[#2b3a63] pl-6">
              {t.timeline.map((item, i) => (
                <li key={i} className="relative">
                  {/* pixel node on the line */}
                  <span
                    className="absolute -left-[31px] top-1 h-3.5 w-3.5"
                    style={{ background: i % 2 ? '#6bb5ff' : '#5dba4a' }}
                    aria-hidden="true"
                  />
                  <span className="font-pixel text-xs text-[#8fd0ff]">{item.year}</span>
                  <p className="mt-1.5 text-sm leading-6 text-muted-foreground">{item.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
