import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

/* --- Pixel-art Minecraft End dimension scene (side view) --- */

/* End crystal — pale glass diamond with a glowing core */
function EndCrystalSprite() {
  return (
    <svg viewBox="0 0 14 20" width="34" height="48" style={{ imageRendering: 'pixelated' }} aria-hidden="true">
      {/* outline */}
      <rect x="5" y="1" width="4" height="2" fill="#6f9cc6" />
      <rect x="4" y="3" width="6" height="2" fill="#6f9cc6" />
      <rect x="3" y="5" width="8" height="3" fill="#6f9cc6" />
      <rect x="2" y="8" width="10" height="4" fill="#6f9cc6" />
      <rect x="3" y="12" width="8" height="3" fill="#6f9cc6" />
      <rect x="4" y="15" width="6" height="2" fill="#6f9cc6" />
      <rect x="6" y="17" width="2" height="2" fill="#6f9cc6" />
      {/* glass fill */}
      <rect x="5" y="2" width="2" height="2" fill="#dcecfc" />
      <rect x="4" y="4" width="4" height="2" fill="#dcecfc" />
      <rect x="3" y="6" width="6" height="2" fill="#eaf4ff" />
      <rect x="2" y="9" width="8" height="2" fill="#f2f9ff" />
      <rect x="3" y="11" width="6" height="2" fill="#dcecfc" />
      <rect x="4" y="14" width="4" height="2" fill="#dcecfc" />
      <rect x="6" y="16" width="2" height="1" fill="#dcecfc" />
      {/* glowing core */}
      <rect x="5" y="4" width="2" height="6" fill="#8fd8ff" />
      <rect x="4" y="8" width="4" height="3" fill="#bfe6ff" />
      <rect x="6" y="6" width="2" height="8" fill="#ffffff" />
    </svg>
  );
}

/* Crystal that explodes into particles when clicked, then regrows after 10s */
const PARTICLE_COLORS = ['#eaf6ff', '#9fe0ff', '#c9b4ff', '#ffffff'];

function ExplodableCrystal() {
  const [phase, setPhase] = useState<'idle' | 'boom' | 'gone'>('idle');
  const [parts, setParts] = useState<{ id: number; dx: number; dy: number; color: string }[]>([]);
  const timers = useRef<number[]>([]);

  const explode = () => {
    if (phase !== 'idle') return;
    setPhase('boom');
    setParts(
      Array.from({ length: 18 }, (_, i) => ({
        id: Date.now() + i,
        dx: Math.cos((i / 18) * Math.PI * 2) * (36 + Math.random() * 52),
        dy: Math.sin((i / 18) * Math.PI * 2) * (36 + Math.random() * 52) - 28,
        color: PARTICLE_COLORS[i % PARTICLE_COLORS.length],
      })),
    );
    const t1 = window.setTimeout(() => setPhase('gone'), 650);
    const t2 = window.setTimeout(() => {
      setPhase('idle');
      setParts([]);
    }, 10000);
    timers.current = [t1, t2];
  };

  return (
    <div
      className="pointer-events-auto relative"
      style={{ cursor: 'pointer', width: 34, height: 48, zIndex: 8 }}
      onClick={explode}
      role="button"
      aria-label="End crystal"
    >
      {/* soft idle glow under the crystal */}
      {phase === 'idle' && (
        <div
          className="end-glow pointer-events-none absolute"
          style={{
            left: '50%',
            top: '50%',
            width: 64,
            height: 64,
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle, rgba(159,224,255,0.5), transparent 70%)',
            filter: 'blur(3px)',
          }}
        />
      )}
      {phase !== 'gone' && (
        <div className={phase === 'boom' ? 'crystal-shatter' : undefined}>
          <EndCrystalSprite />
        </div>
      )}
      {/* explosion flash */}
      {phase === 'boom' && (
        <div
          className="crystal-flash pointer-events-none absolute"
          style={{
            left: '50%',
            top: '50%',
            width: 60,
            height: 60,
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle, rgba(255,255,255,0.95), rgba(159,224,255,0.5) 45%, transparent 70%)',
          }}
        />
      )}
      {/* flying shards */}
      {phase === 'boom' &&
        parts.map((p) => (
          <span
            key={p.id}
            className="crystal-particle pointer-events-none absolute"
            style={{
              left: '50%',
              top: '50%',
              background: p.color,
              boxShadow: `0 0 0 1px ${p.color === '#ffffff' ? '#9fd4ff' : '#5a7aa8'}`,
              ['--dx' as string]: `${p.dx}px`,
              ['--dy' as string]: `${p.dy}px`,
            }}
          />
        ))}
    </div>
  );
}

/* Obsidian pillar with an end crystal mounted on top */
function PillarWithCrystal({ side }: { side: 'left' | 'right' }) {
  const pillarH = 128;
  return (
    <div
      className="pointer-events-none absolute"
      style={{ [side === 'left' ? 'left' : 'right']: '15%', bottom: 24, zIndex: 6 }}
    >
      <div style={{ position: 'relative', width: 40 }}>
        {/* obsidian column */}
        <div
          style={{
            width: 40,
            height: pillarH,
            background:
              'repeating-linear-gradient(90deg, #160b22 0 6px, #241236 6px 12px, #1c0f2c 12px 18px, #2a1840 18px 24px)',
            border: '3px solid #0d0616',
            borderBottom: 'none',
            boxShadow: 'inset -8px 0 0 rgba(0,0,0,0.3)',
          }}
        />
        {/* top cap */}
        <div
          style={{
            position: 'absolute',
            top: -7,
            left: -5,
            width: 50,
            height: 12,
            background: 'repeating-linear-gradient(90deg, #241236 0 8px, #2a1840 8px 16px)',
            border: '3px solid #0d0616',
          }}
        />
        {/* crystal floating above the cap */}
        <div style={{ position: 'absolute', top: -54, left: '50%', transform: 'translateX(-50%)' }}>
          <ExplodableCrystal />
        </div>
      </div>
    </div>
  );
}

/* Dragon egg — black block with purple speckles */
function DragonEgg() {
  return (
    <svg viewBox="0 0 14 14" width="36" height="36" style={{ imageRendering: 'pixelated' }} aria-hidden="true">
      <rect x="1" y="1" width="12" height="12" fill="#14101e" />
      <rect x="1" y="1" width="1" height="12" fill="#2a1c42" />
      <rect x="2" y="1" width="10" height="1" fill="#2a1c42" />
      <rect x="2" y="12" width="10" height="1" fill="#0c0814" />
      <rect x="12" y="2" width="1" height="10" fill="#0c0814" />
      {/* purple speckles */}
      <rect x="3" y="3" width="2" height="2" fill="#5a2a9a" />
      <rect x="8" y="5" width="2" height="2" fill="#7a3ac0" />
      <rect x="5" y="8" width="2" height="2" fill="#6a32b0" />
      <rect x="2" y="9" width="2" height="2" fill="#4a227a" />
      <rect x="9" y="2" width="2" height="2" fill="#4a227a" />
      <rect x="10" y="9" width="2" height="2" fill="#5a2a9a" />
    </svg>
  );
}

/* Central pedestal holding the dragon egg */
function EggPedestal() {
  return (
    <div className="pointer-events-none absolute" style={{ left: '50%', transform: 'translateX(-50%)', bottom: 24, zIndex: 6 }}>
      <div style={{ position: 'relative', width: 66, height: 52 }}>
        {/* pedestal body — obsidian */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 44,
            height: 40,
            background:
              'repeating-linear-gradient(0deg, #160b22 0 6px, #241236 6px 12px, #1c0f2c 12px 18px, #2a1840 18px 24px), repeating-linear-gradient(90deg, #160b22 0 8px, #241236 8px 16px, #2a1840 16px 24px)',
            border: '3px solid #0d0616',
            boxShadow: 'inset -6px 0 0 rgba(0,0,0,0.3)',
          }}
        />
        {/* obsidian trim ring at the base */}
        <div
          style={{
            position: 'absolute',
            bottom: -2,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 54,
            height: 10,
            background: 'repeating-linear-gradient(90deg, #1c0f2c 0 9px, #2a1840 9px 18px)',
            border: '3px solid #0d0616',
          }}
        />
        {/* top slab — obsidian */}
        <div
          style={{
            position: 'absolute',
            bottom: 38,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 58,
            height: 12,
            background: 'repeating-linear-gradient(90deg, #241236 0 8px, #2a1840 8px 16px, #1c0f2c 16px 24px)',
            border: '3px solid #0d0616',
          }}
        />
        {/* the egg sits on the slab */}
        <div style={{ position: 'absolute', bottom: 52, left: '50%', transform: 'translateX(-50%)' }}>
          <DragonEgg />
        </div>
      </div>
    </div>
  );
}

/* Pixel-art Ender Dragon (side view) */
function EnderDragonSprite() {
  return (
    <svg viewBox="0 0 56 26" width="104" height="48" style={{ imageRendering: 'pixelated' }} aria-hidden="true">
      {/* horns */}
      <rect x="2" y="4" width="2" height="3" fill="#1c1230" />
      <rect x="6" y="3" width="2" height="4" fill="#241840" />
      {/* head */}
      <rect x="0" y="7" width="12" height="7" fill="#2a1a4a" />
      <rect x="0" y="7" width="3" height="1" fill="#402a7a" />
      <rect x="0" y="14" width="8" height="3" fill="#1c1230" />
      {/* jaw */}
      <rect x="8" y="13" width="4" height="2" fill="#2a1a4a" />
      {/* eye */}
      <rect x="3" y="9" width="2" height="2" fill="#c86aff" />
      {/* body */}
      <rect x="12" y="8" width="30" height="8" fill="#241840" />
      <rect x="12" y="8" width="30" height="2" fill="#38246a" />
      <rect x="14" y="12" width="22" height="2" fill="#32265a" />
      <rect x="14" y="16" width="26" height="4" fill="#1c1230" />
      {/* wings */}
      <rect x="14" y="1" width="4" height="3" fill="#241840" />
      <rect x="16" y="4" width="6" height="2" fill="#452a86" />
      <rect x="20" y="1" width="8" height="5" fill="#452a86" />
      <rect x="26" y="4" width="8" height="4" fill="#5a36a0" />
      <rect x="32" y="1" width="6" height="6" fill="#452a86" />
      <rect x="16" y="5" width="2" height="1" fill="#241840" />
      <rect x="24" y="4" width="2" height="1" fill="#241840" />
      <rect x="32" y="5" width="2" height="1" fill="#241840" />
      {/* tail */}
      <rect x="42" y="9" width="6" height="4" fill="#241840" />
      <rect x="46" y="7" width="4" height="3" fill="#1c1230" />
      <rect x="50" y="9" width="3" height="2" fill="#241840" />
      <rect x="52" y="10" width="3" height="1" fill="#1c1230" />
      <rect x="48" y="12" width="5" height="2" fill="#1c1230" />
      {/* feet */}
      <rect x="14" y="20" width="2" height="4" fill="#1c1230" />
      <rect x="30" y="20" width="2" height="4" fill="#1c1230" />
    </svg>
  );
}

/* Ender Dragon circles the central area between the two pillars */
const ORBIT_LEFT = ['13%', '50%', '87%', '50%', '13%'];
const ORBIT_TOP = ['26%', '9%', '26%', '48%', '26%'];
const ORBIT_TIMES = [0, 0.25, 0.5, 0.75, 1];

function DragonCircler() {
  return (
    <div className="pointer-events-none absolute inset-0" style={{ zIndex: 8 }}>
      <motion.div
        className="absolute"
        style={{ left: ORBIT_LEFT[0], top: ORBIT_TOP[0] }}
        animate={{
          left: ORBIT_LEFT,
          top: ORBIT_TOP,
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'linear',
          times: ORBIT_TIMES,
        }}
      >
        {/* .dragon-face flips the sprite so its head always leads the flight
            direction: head-right (scaleX -1) on the outbound half, head-left
            (scaleX 1) on the return half. The flip is instant via CSS keyframes
            (framer-motion would interpolate it gradually and fly backwards). */}
        <div className="dragon-face">
          <div className="dragon-wing">
            <EnderDragonSprite />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function End() {
  return (
    <section
      className="relative h-[340px] w-full"
      aria-label="The End"
      // No overflow-hidden: keep the scene open like the nether one.
    >
      {/* end stone ground */}
      <div
        className="absolute inset-x-0 bottom-0 h-7"
        style={{
          background:
            'repeating-linear-gradient(0deg, #c6bf8f 0 3px, #d8d2a6 3px 10px, #c6bf8f 10px 13px), repeating-linear-gradient(90deg, #d8d2a6 0 24px, #bdb586 24px 26px)',
          borderTop: '3px solid #8f885f',
        }}
      />
      <div className="absolute inset-x-0 bottom-0 h-2" style={{ background: '#a8a077' }} />
      <div className="absolute inset-x-0 bottom-0 h-1" style={{ background: '#837c55' }} />

      {/* obsidian pillars with clickable end crystals — one per side */}
      <PillarWithCrystal side="left" />
      <PillarWithCrystal side="right" />

      {/* central pedestal holding the dragon egg */}
      <EggPedestal />

      {/* the ender dragon circles the area between the pillars */}
      <DragonCircler />
    </section>
  );
}
