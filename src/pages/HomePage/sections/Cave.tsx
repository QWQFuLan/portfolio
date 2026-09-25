import { Grazer } from './FarmAnimals';

/* --- Pixel-art Minecraft mobs (side view) --- */

function Creeper() {
  return (
    <svg viewBox="0 0 16 22" width="40" height="55" style={{ imageRendering: 'pixelated' }} aria-hidden="true">
      {/* head */}
      <rect x="3" y="0" width="10" height="8" fill="#4f9f2f" />
      <rect x="3" y="0" width="1" height="8" fill="#3d7a23" />
      {/* face */}
      <rect x="5" y="2" width="2" height="3" fill="#1a1a1a" />
      <rect x="9" y="2" width="2" height="3" fill="#1a1a1a" />
      <rect x="6" y="5" width="4" height="1" fill="#1a1a1a" />
      <rect x="7" y="6" width="2" height="2" fill="#1a1a1a" />
      {/* body */}
      <rect x="4" y="8" width="8" height="8" fill="#4f9f2f" />
      <rect x="4" y="8" width="1" height="8" fill="#3d7a23" />
      <rect x="11" y="8" width="1" height="8" fill="#3d7a23" />
      {/* feet */}
      <rect x="4" y="16" width="3" height="4" fill="#2d5a18" />
      <rect x="9" y="16" width="3" height="4" fill="#2d5a18" />
    </svg>
  );
}

function Zombie() {
  return (
    <svg viewBox="0 0 16 24" width="40" height="60" style={{ imageRendering: 'pixelated' }} aria-hidden="true">
      {/* head */}
      <rect x="5" y="1" width="7" height="6" fill="#3fa39c" />
      {/* eyes */}
      <rect x="6" y="3" width="1" height="1" fill="#2a1a3a" />
      <rect x="9" y="3" width="1" height="1" fill="#2a1a3a" />
      {/* shirt */}
      <rect x="4" y="7" width="9" height="9" fill="#3a3a5a" />
      {/* outstretched arms */}
      <rect x="0" y="8" width="4" height="2" fill="#3fa39c" />
      <rect x="13" y="8" width="4" height="2" fill="#3fa39c" />
      {/* pants */}
      <rect x="5" y="16" width="3" height="5" fill="#3a3a5a" />
      <rect x="9" y="16" width="3" height="5" fill="#3a3a5a" />
      {/* feet */}
      <rect x="5" y="21" width="3" height="2" fill="#2a2a2a" />
      <rect x="9" y="21" width="3" height="2" fill="#2a2a2a" />
    </svg>
  );
}

function Skeleton() {
  return (
    <svg viewBox="0 0 16 24" width="40" height="60" style={{ imageRendering: 'pixelated' }} aria-hidden="true">
      {/* skull */}
      <rect x="5" y="1" width="7" height="6" fill="#e8e8e8" />
      {/* eyes (black) */}
      <rect x="6" y="3" width="2" height="2" fill="#1a1a1a" />
      <rect x="9" y="3" width="2" height="2" fill="#1a1a1a" />
      {/* nose */}
      <rect x="8" y="5" width="1" height="1" fill="#1a1a1a" />
      {/* ribcage */}
      <rect x="5" y="7" width="7" height="9" fill="#d8d8d8" />
      <rect x="6" y="9" width="5" height="1" fill="#a8a8a8" />
      <rect x="6" y="11" width="5" height="1" fill="#a8a8a8" />
      {/* arms */}
      <rect x="1" y="8" width="4" height="2" fill="#e8e8e8" />
      <rect x="12" y="8" width="4" height="2" fill="#e8e8e8" />
      {/* legs */}
      <rect x="5" y="16" width="3" height="6" fill="#c8c8c8" />
      <rect x="9" y="16" width="3" height="6" fill="#c8c8c8" />
    </svg>
  );
}

function Enderman() {
  return (
    <svg viewBox="0 0 16 32" width="32" height="64" style={{ imageRendering: 'pixelated' }} aria-hidden="true">
      {/* head */}
      <rect x="6" y="0" width="5" height="5" fill="#1a1a1a" />
      {/* purple eyes */}
      <rect x="7" y="2" width="1" height="1" fill="#b04aff" />
      <rect x="10" y="2" width="1" height="1" fill="#b04aff" />
      {/* long body */}
      <rect x="5" y="5" width="7" height="16" fill="#1a1a1a" />
      <rect x="5" y="5" width="1" height="16" fill="#2a2a2a" />
      {/* long arms */}
      <rect x="2" y="6" width="3" height="14" fill="#1a1a1a" />
      <rect x="12" y="6" width="3" height="14" fill="#1a1a1a" />
      {/* long legs */}
      <rect x="6" y="21" width="2" height="10" fill="#1a1a1a" />
      <rect x="9" y="21" width="2" height="10" fill="#1a1a1a" />
    </svg>
  );
}

function NetherPortal() {
  return (
    <svg viewBox="0 0 24 32" width="90" height="120" style={{ imageRendering: 'pixelated' }} aria-hidden="true">
      {/* obsidian frame */}
      <rect x="2" y="0" width="20" height="2" fill="#1a0a1a" />
      <rect x="2" y="30" width="20" height="2" fill="#1a0a1a" />
      <rect x="2" y="0" width="2" height="32" fill="#1a0a1a" />
      <rect x="20" y="0" width="2" height="32" fill="#1a0a1a" />
      {/* purple swirl interior */}
      <rect x="4" y="2" width="16" height="28" fill="#4a0082" />
      <rect x="5" y="3" width="5" height="26" fill="#6a1ab0" />
      <rect x="12" y="3" width="6" height="26" fill="#8a2be2" />
      <rect x="8" y="6" width="4" height="20" fill="#b04aff" />
      <rect x="10" y="10" width="3" height="12" fill="#d88aff" />
    </svg>
  );
}

export default function Cave() {
  return (
    <section className="relative h-[260px] w-full" aria-label="Cave">
      {/* cave floor — dirt/stone */}
      <div className="absolute inset-x-0 bottom-0 h-5" style={{ background: '#3a2a1a' }} />
      <div className="absolute inset-x-0 bottom-0 h-1.5" style={{ background: '#2a1d10' }} />

      {/* nether portal — right side, glowing */}
      <div className="absolute" style={{ right: '6%', bottom: 20 }}>
        <NetherPortal />
      </div>
      {/* purple glow under portal */}
      <div
        className="absolute"
        style={{ right: '5%', bottom: 18, width: 110, height: 20, background: 'radial-gradient(ellipse, rgba(176,74,255,0.45), transparent 70%)', filter: 'blur(4px)' }}
      />

      {/* mobs walking on the cave floor — grab & throw */}
      <div className="pointer-events-none absolute inset-0" style={{ zIndex: 30 }}>
        <div className="pointer-events-auto absolute inset-0">
          <Grazer initialLeft={15} walkBand={12} grazeMs={2400} bottom={20}>
            <Creeper />
          </Grazer>
          <Grazer initialLeft={38} walkBand={16} grazeMs={3600} bottom={20}>
            <Zombie />
          </Grazer>
          <Grazer initialLeft={55} walkBand={14} grazeMs={1800} bottom={20}>
            <Skeleton />
          </Grazer>
          <Grazer initialLeft={30} walkBand={20} grazeMs={5000} bottom={18}>
            <Enderman />
          </Grazer>
        </div>
      </div>
    </section>
  );
}
