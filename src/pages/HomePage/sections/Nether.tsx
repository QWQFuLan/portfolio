import { useEffect, useState, type CSSProperties } from 'react';
import { motion } from 'framer-motion';
import { Grazer } from './FarmAnimals';

/* --- Pixel-art Minecraft nether mobs (side view) --- */

function WitherSkeleton() {
  return (
    <svg viewBox="0 0 16 30" width="40" height="75" style={{ imageRendering: 'pixelated' }} aria-hidden="true">
      {/* head */}
      <rect x="5" y="0" width="7" height="7" fill="#1a1a1a" />
      <rect x="5" y="0" width="1" height="7" fill="#2a2a2a" />
      {/* eyes */}
      <rect x="6" y="2" width="1" height="1" fill="#c8c8c8" />
      <rect x="10" y="2" width="1" height="1" fill="#c8c8c8" />
      {/* body */}
      <rect x="4" y="7" width="9" height="10" fill="#1a1a1a" />
      <rect x="4" y="7" width="1" height="10" fill="#2a2a2a" />
      <rect x="11" y="7" width="1" height="10" fill="#2a2a2a" />
      {/* arms */}
      <rect x="1" y="9" width="4" height="2" fill="#1a1a1a" />
      <rect x="12" y="9" width="4" height="2" fill="#1a1a1a" />
      {/* stone sword */}
      <rect x="14" y="7" width="1" height="4" fill="#5a4a2a" />
      <rect x="13" y="7" width="2" height="1" fill="#4a4a4a" />
      <rect x="15" y="5" width="1" height="8" fill="#9a9a9a" />
      {/* legs */}
      <rect x="5" y="17" width="3" height="9" fill="#1a1a1a" />
      <rect x="9" y="17" width="3" height="9" fill="#1a1a1a" />
      {/* feet */}
      <rect x="5" y="26" width="3" height="2" fill="#111111" />
      <rect x="9" y="26" width="3" height="2" fill="#111111" />
    </svg>
  );
}

function Blaze() {
  return (
    <div className="relative" style={{ width: 48, height: 48 }}>
      {/* blaze rods — vertical sticks orbiting around the core */}
      <svg
        className="blaze-rods"
        viewBox="0 0 20 20"
        width="48"
        height="48"
        style={{ position: 'absolute', inset: 0, imageRendering: 'pixelated' }}
        aria-hidden="true"
      >
        <rect x="9" y="0" width="2" height="4" fill="#c98a20" />
        <rect x="3" y="2" width="2" height="4" fill="#c98a20" />
        <rect x="1" y="8" width="2" height="4" fill="#c98a20" />
        <rect x="9" y="16" width="2" height="4" fill="#c98a20" />
        <rect x="15" y="13" width="2" height="4" fill="#c98a20" />
        <rect x="17" y="8" width="2" height="4" fill="#c98a20" />
      </svg>
      {/* static core with face */}
      <svg
        viewBox="0 0 20 20"
        width="48"
        height="48"
        style={{ position: 'absolute', inset: 0, imageRendering: 'pixelated' }}
        aria-hidden="true"
      >
        <rect x="5" y="5" width="10" height="10" fill="#f2c94c" />
        <rect x="5" y="5" width="1" height="10" fill="#d9a32b" />
        <rect x="14" y="5" width="1" height="10" fill="#d9a32b" />
        <rect x="7" y="7" width="6" height="6" fill="#f7e08a" />
        <rect x="7" y="8" width="1" height="1" fill="#1a1a1a" />
        <rect x="12" y="8" width="1" height="1" fill="#1a1a1a" />
        <rect x="8" y="11" width="4" height="1" fill="#1a1a1a" />
      </svg>
    </div>
  );
}

function Piglin() {
  return (
    <svg viewBox="0 0 24 28" width="44" height="52" style={{ imageRendering: 'pixelated' }} aria-hidden="true">
      {/* ears */}
      <rect x="4" y="1" width="3" height="3" fill="#e8a98a" />
      <rect x="17" y="1" width="3" height="3" fill="#e8a98a" />
      {/* head */}
      <rect x="7" y="2" width="10" height="8" fill="#e8a98a" />
      <rect x="7" y="2" width="1" height="8" fill="#d98a5e" />
      {/* eyes */}
      <rect x="9" y="4" width="1" height="1" fill="#1a1a1a" />
      <rect x="14" y="4" width="1" height="1" fill="#1a1a1a" />
      {/* snout */}
      <rect x="10" y="6" width="4" height="3" fill="#d98a5e" />
      <rect x="11" y="7" width="1" height="1" fill="#6a3a1a" />
      <rect x="13" y="7" width="1" height="1" fill="#6a3a1a" />
      {/* body */}
      <rect x="6" y="10" width="12" height="10" fill="#e8a98a" />
      <rect x="6" y="10" width="1" height="10" fill="#d98a5e" />
      {/* left arm */}
      <rect x="2" y="11" width="4" height="2" fill="#e8a98a" />
      {/* gold sword in right hand */}
      <rect x="18" y="11" width="4" height="2" fill="#e8a98a" />
      <rect x="20" y="10" width="1" height="4" fill="#8a6a2a" />
      <rect x="19" y="10" width="2" height="1" fill="#d9a32b" />
      <rect x="21" y="8" width="1" height="8" fill="#f2c94c" />
      {/* legs */}
      <rect x="7" y="20" width="3" height="6" fill="#c87f52" />
      <rect x="14" y="20" width="3" height="6" fill="#c87f52" />
      {/* feet */}
      <rect x="7" y="26" width="3" height="2" fill="#9a5f3a" />
      <rect x="14" y="26" width="3" height="2" fill="#9a5f3a" />
    </svg>
  );
}

function GhastSprite({ angry }: { angry: boolean }) {
  return (
    <svg viewBox="0 0 28 26" width="84" height="78" style={{ imageRendering: 'pixelated' }} aria-hidden="true">
      {/* body */}
      <rect x="4" y="2" width="20" height="16" fill="#f2f2f2" />
      <rect x="4" y="2" width="2" height="16" fill="#d8d8d8" />
      <rect x="22" y="2" width="2" height="16" fill="#d8d8d8" />
      {angry ? (
        <>
          {/* eyes open — black bar whose inner tip arches up & turns red */}
          <rect x="8" y="7" width="3" height="1" fill="#1a1a1a" />
          <rect x="8" y="8" width="2" height="1" fill="#1a1a1a" />
          <rect x="11" y="7" width="1" height="1" fill="#ec3225" />
          <rect x="10" y="8" width="2" height="1" fill="#ec3225" />
          <rect x="17" y="7" width="1" height="1" fill="#ec3225" />
          <rect x="17" y="8" width="2" height="1" fill="#ec3225" />
          <rect x="18" y="7" width="3" height="1" fill="#1a1a1a" />
          <rect x="19" y="8" width="2" height="1" fill="#1a1a1a" />
          {/* open mouth — small round, red with black outline, no inner details */}
          <rect x="13" y="12" width="4" height="1" fill="#1a1a1a" />
          <rect x="12" y="13" width="1" height="3" fill="#1a1a1a" />
          <rect x="17" y="13" width="1" height="3" fill="#1a1a1a" />
          <rect x="13" y="16" width="4" height="1" fill="#1a1a1a" />
          <rect x="13" y="13" width="4" height="3" fill="#ec3225" />
        </>
      ) : (
        <>
          {/* calm slit eyes — single lines */}
          <rect x="8" y="8" width="4" height="1" fill="#1a1a1a" />
          <rect x="17" y="8" width="4" height="1" fill="#1a1a1a" />
          {/* short mouth — single line */}
          <rect x="11" y="13" width="6" height="1" fill="#1a1a1a" />
        </>
      )}
      {/* tentacles */}
      <rect x="6" y="18" width="2" height="6" fill="#f2f2f2" />
      <rect x="9" y="18" width="2" height="7" fill="#e0e0e0" />
      <rect x="12" y="18" width="2" height="5" fill="#f2f2f2" />
      <rect x="15" y="18" width="2" height="7" fill="#e0e0e0" />
      <rect x="18" y="18" width="2" height="6" fill="#f2f2f2" />
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

/* --- Small nether-brick fortress --- */

const BRICK: CSSProperties = {
  backgroundColor: '#4a1414',
  backgroundImage:
    'repeating-linear-gradient(0deg, #2a0a0a 0 2px, transparent 2px 8px), repeating-linear-gradient(90deg, #2a0a0a 0 2px, transparent 2px 16px)',
  border: '3px solid #160606',
};

function Battlement({ width }: { width: number }) {
  return (
    <div
      style={{
        position: 'absolute',
        top: -12,
        left: -3,
        width,
        height: 12,
        background: 'repeating-linear-gradient(90deg, #4a1414 0 12px, #160606 12px 16px)',
        border: '3px solid #160606',
        borderBottom: 'none',
      }}
    />
  );
}

function Tower({ width, height }: { width: number; height: number }) {
  return (
    <div style={{ position: 'relative', width, height, ...BRICK }}>
      <Battlement width={width + 6} />
      {/* window slits */}
      <div
        style={{
          position: 'absolute',
          top: '32%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 8,
          height: 18,
          background: '#120608',
          border: '2px solid #2a0a0a',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '55%',
          left: 10,
          width: 8,
          height: 14,
          background: '#120608',
          border: '2px solid #2a0a0a',
        }}
      />
    </div>
  );
}

function GatewayWall({ width, height }: { width: number; height: number }) {
  return (
    <div style={{ position: 'relative', width, height, ...BRICK, borderLeft: 'none', borderRight: 'none' }}>
      <Battlement width={width + 6} />
      {/* arched gateway */}
      <div
        style={{
          position: 'absolute',
          bottom: -3,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 36,
          height: Math.min(height - 10, 52),
          background: '#120608',
          border: '3px solid #2a0a0a',
          borderBottom: 'none',
          borderTopLeftRadius: 18,
          borderTopRightRadius: 18,
        }}
      />
    </div>
  );
}

function NetherFortress() {
  return (
    <div
      className="pointer-events-none absolute"
      style={{ right: '7%', bottom: 26, display: 'flex', alignItems: 'flex-end', zIndex: 5 }}
    >
      <Tower width={76} height={124} />
      <GatewayWall width={132} height={74} />
      <Tower width={62} height={98} />
    </div>
  );
}

/* --- Ghast: appears from a random side every 30s, drifts across --- */

function GhastSpinner() {
  const [ghast, setGhast] = useState<{
    id: number;
    from: 'left' | 'right';
    top: number;
    angryChance: boolean;
  } | null>(null);
  const [angry, setAngry] = useState(false);

  useEffect(() => {
    const spawn = () =>
      setGhast({
        id: Date.now() + Math.random(),
        from: Math.random() < 0.5 ? 'left' : 'right',
        top: 12 + Math.random() * 24,
        // sometimes it flares up in the middle of the crossing
        angryChance: Math.random() < 0.6,
      });
    const first = window.setTimeout(spawn, 2000);
    const t = window.setInterval(spawn, 30000);
    return () => {
      window.clearTimeout(first);
      window.clearInterval(t);
    };
  }, []);

  // Reach the middle of the crossing (~5s in) → red eyes + open mouth for ~3s
  useEffect(() => {
    if (!ghast || !ghast.angryChance) {
      setAngry(false);
      return;
    }
    const on = window.setTimeout(() => setAngry(true), 5200);
    const off = window.setTimeout(() => setAngry(false), 8200);
    return () => {
      window.clearTimeout(on);
      window.clearTimeout(off);
    };
  }, [ghast]);

  useEffect(() => {
    if (!ghast) return;
    const done = window.setTimeout(() => setGhast(null), 13000);
    return () => window.clearTimeout(done);
  }, [ghast]);

  if (!ghast) return null;

  const fromLeft = ghast.from === 'left';
  const xs = fromLeft ? [-14, 16, 40, 64, 88, 114] : [114, 84, 60, 36, 12, -14];

  return (
    // Clipped to the scene: the ghast only appears within the skills area
    <div className="pointer-events-none absolute inset-0 overflow-hidden" style={{ zIndex: 40 }}>
      <motion.div
        key={ghast.id}
        className="absolute"
        style={{ top: `${ghast.top}%` }}
        initial={{ left: `${xs[0]}%`, opacity: 0 }}
        animate={{ left: xs.map((v) => `${v}%`), opacity: [0, 1, 1, 1, 1, 0] }}
        transition={{ duration: 12, times: [0, 0.15, 0.35, 0.55, 0.75, 1], ease: 'easeInOut' }}
      >
        <div className="ghast-bob">
          <GhastSprite angry={angry} />
        </div>
      </motion.div>
    </div>
  );
}

export default function Nether() {
  return (
    <section
      className="relative h-[300px] w-full"
      aria-label="Nether"
      // No overflow-hidden here: thrown mobs must be able to fly OUT of the
      // scene and over the skill cards (mobs z-30 > cards z-10). Only the ghast
      // gets clipped, by its own wrapper, so it stays inside the skills area.
    >
      {/* netherrack ground */}
      <div className="absolute inset-x-0 bottom-0 h-6" style={{ background: '#8a2a22' }} />
      <div className="absolute inset-x-0 bottom-0 h-2" style={{ background: '#6a1d16' }} />
      <div className="absolute inset-x-0 bottom-0 h-1" style={{ background: '#47110d' }} />

      {/* reversed nether portal — left side, mirrored like the cave one */}
      <div className="pointer-events-none absolute" style={{ left: '6%', bottom: 24, zIndex: 5 }}>
        <div style={{ transform: 'scaleX(-1)' }}>
          <NetherPortal />
        </div>
      </div>
      {/* purple glow under portal */}
      <div
        className="pointer-events-none absolute"
        style={{
          left: '5%',
          bottom: 22,
          width: 110,
          height: 20,
          background: 'radial-gradient(ellipse, rgba(176,74,255,0.45), transparent 70%)',
          filter: 'blur(4px)',
          zIndex: 4,
        }}
      />

      {/* small nether fortress — right side */}
      <NetherFortress />

      {/* mobs on the netherrack — grab & throw */}
      <div className="pointer-events-none absolute inset-0" style={{ zIndex: 30 }}>
        <div className="pointer-events-auto absolute inset-0">
          <Grazer initialLeft={24} walkBand={12} grazeMs={2600} bottom={24}>
            <Piglin />
          </Grazer>
          <Grazer initialLeft={55} walkBand={10} grazeMs={3400} bottom={24}>
            <WitherSkeleton />
          </Grazer>
        </div>
      </div>

      {/* hovering blaze — patrols left & right, bobbing */}
      <div className="pointer-events-none absolute blaze-drift" style={{ left: '45%', bottom: 78, zIndex: 30 }}>
        <div className="blaze-bob">
          <Blaze />
        </div>
      </div>

      {/* ghast — floats by every 30s */}
      <GhastSpinner />
    </section>
  );
}
