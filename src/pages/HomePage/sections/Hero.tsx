import DepthText from '@/components/reactbits/DepthText';

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pb-10">
      <div className="pixel-grid absolute inset-0" aria-hidden="true" />
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
        <p className="mt-8 max-w-md text-sm text-muted-foreground md:text-base">
          正在學習編程。用一個一個方塊，慢慢建造自己的世界。
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href="#portfolio" className="pixel-btn">
            See Works
          </a>
          <a href="#contact" className="pixel-btn pixel-btn--ghost">
            聯絡我
          </a>
        </div>
      </div>
      <div className="pixel-grass absolute inset-x-0 bottom-0" aria-hidden="true" />
    </section>
  );
}
