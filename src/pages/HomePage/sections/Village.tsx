import { Grazer } from './FarmAnimals';

/* Pixel-art Minecraft villager (16x24) */
function Villager({ robe = '#8a6a3a' }: { robe?: string }) {
  return (
    <svg viewBox="0 0 16 24" width="38" height="57" style={{ imageRendering: 'pixelated' }} aria-hidden="true">
      {/* head */}
      <rect x="4" y="2" width="8" height="7" fill="#c68e5e" />
      {/* purple brows */}
      <rect x="5" y="4" width="2" height="1" fill="#5a3a6a" />
      <rect x="9" y="4" width="2" height="1" fill="#5a3a6a" />
      {/* eyes */}
      <rect x="5" y="5" width="1" height="1" fill="#2b2b2b" />
      <rect x="10" y="5" width="1" height="1" fill="#2b2b2b" />
      {/* big nose (villager signature) */}
      <rect x="7" y="5" width="2" height="3" fill="#a87040" />
      {/* robe */}
      <rect x="3" y="9" width="10" height="11" fill={robe} />
      <rect x="2" y="11" width="12" height="2" fill={robe} />
      {/* belt */}
      <rect x="3" y="16" width="10" height="1" fill="#5a3d20" />
      {/* feet */}
      <rect x="5" y="20" width="2" height="2" fill="#3a2a18" />
      <rect x="9" y="20" width="2" height="2" fill="#3a2a18" />
    </svg>
  );
}

/* A small pixel house */
function House() {
  return (
    <svg viewBox="0 0 40 28" width="130" height="91" style={{ imageRendering: 'pixelated' }} aria-hidden="true">
      {/* roof */}
      <rect x="4" y="2" width="32" height="4" fill="#7a3a2a" />
      <rect x="8" y="0" width="24" height="2" fill="#8a4530" />
      {/* walls */}
      <rect x="6" y="6" width="28" height="16" fill="#c9a06a" />
      {/* door */}
      <rect x="17" y="14" width="6" height="8" fill="#5a3d20" />
      <rect x="19" y="17" width="1" height="1" fill="#d8c9a8" />
      {/* window */}
      <rect x="9" y="9" width="4" height="4" fill="#9fd3e8" />
      <rect x="27" y="9" width="4" height="4" fill="#9fd3e8" />
      {/* foundation */}
      <rect x="4" y="22" width="32" height="2" fill="#8a7a5a" />
    </svg>
  );
}

/* Tilled farmland with green crops */
function FarmPlot() {
  return (
    <svg viewBox="0 0 60 14" width="220" height="51" style={{ imageRendering: 'pixelated' }} aria-hidden="true">
      {/* tilled soil */}
      <rect x="0" y="4" width="60" height="10" fill="#6b4a2a" />
      <rect x="0" y="6" width="60" height="1" fill="#5a3d20" />
      <rect x="0" y="10" width="60" height="1" fill="#5a3d20" />
      {/* crop rows */}
      {[6, 18, 30, 42, 54].map(x => (
        <g key={x}>
          <rect x={x - 1} y="1" width="2" height="4" fill="#5fa647" />
          <rect x={x - 2} y="3" width="1" height="2" fill="#4a8a37" />
          <rect x={x + 1} y="3" width="1" height="2" fill="#4a8a37" />
        </g>
      ))}
    </svg>
  );
}

export default function Village() {
  return (
    <section className="relative h-[220px] w-full" aria-label="Village">
      {/* house — left side, sitting on the grass */}
      <div className="absolute" style={{ left: '8%', bottom: 14 }}>
        <House />
      </div>

      {/* farm plots — right side */}
      <div className="absolute flex flex-col gap-1" style={{ right: '6%', bottom: 14 }}>
        <FarmPlot />
        <FarmPlot />
      </div>

      {/* grass strip along the bottom — same look as the hero farm */}
      <div className="absolute inset-x-0 bottom-0 h-4" style={{ background: '#3a9e3a' }} />
      <div className="absolute inset-x-0 bottom-0 h-1" style={{ background: '#2d7a2d' }} />
      <div className="absolute inset-x-0 bottom-0 h-1" style={{ background: '#1f5a1f' }} />

      {/* villagers walking on the grass — grab & throw like the farm animals.
          High z-index so a thrown villager flies over the About card above. */}
      <div className="pointer-events-none absolute inset-0" style={{ zIndex: 30 }}>
        <div className="pointer-events-auto absolute inset-0">
          <Grazer initialLeft={28} walkBand={16} grazeMs={2000} bottom={16}>
            <Villager robe="#8a6a3a" />
          </Grazer>
          <Grazer initialLeft={55} walkBand={14} grazeMs={3200} bottom={16}>
            <Villager robe="#5a7a9a" />
          </Grazer>
          <Grazer initialLeft={42} walkBand={20} grazeMs={1200} bottom={14}>
            <Villager robe="#7a5a8a" />
          </Grazer>
        </div>
      </div>
    </section>
  );
}
