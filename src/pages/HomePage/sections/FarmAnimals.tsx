import { useEffect, useRef, useState, type ReactNode } from 'react';
import { motion, useAnimationControls } from 'framer-motion';

/* Pixel-art side-view animals drawn on a 24x24 grid */

function Cow() {
  return (
    <svg viewBox="0 0 24 24" width="56" height="56" style={{ imageRendering: 'pixelated' }} aria-hidden="true">
      <rect x="4" y="8" width="14" height="8" fill="#f5f0e6" />
      <rect x="6" y="9" width="4" height="3" fill="#2b2b2b" />
      <rect x="12" y="11" width="3" height="3" fill="#2b2b2b" />
      <rect x="3" y="15" width="2" height="5" fill="#3a2a1a" />
      <rect x="15" y="15" width="2" height="5" fill="#3a2a1a" />
      <rect x="1" y="11" width="5" height="6" fill="#c9a06a" />
      <rect x="0" y="10" width="2" height="2" fill="#e8dcc8" />
      <rect x="1" y="13" width="2" height="2" fill="#2b2b2b" />
    </svg>
  );
}

function Sheep() {
  return (
    <svg viewBox="0 0 24 24" width="52" height="52" style={{ imageRendering: 'pixelated' }} aria-hidden="true">
      <rect x="5" y="6" width="13" height="9" fill="#e9e4d8" />
      <rect x="4" y="8" width="2" height="5" fill="#e9e4d8" />
      <rect x="17" y="8" width="2" height="5" fill="#e9e4d8" />
      <rect x="6" y="15" width="2" height="4" fill="#3a2a1a" />
      <rect x="14" y="15" width="2" height="4" fill="#3a2a1a" />
      <rect x="2" y="9" width="4" height="5" fill="#4a3826" />
      <rect x="2" y="10" width="1" height="1" fill="#ffffff" />
    </svg>
  );
}

function PinkSheepSprite() {
  return (
    <svg viewBox="0 0 24 24" width="56" height="56" style={{ imageRendering: 'pixelated' }} aria-hidden="true">
      <rect x="5" y="6" width="13" height="9" fill="#ffb3d1" />
      <rect x="4" y="8" width="2" height="5" fill="#ffb3d1" />
      <rect x="17" y="8" width="2" height="5" fill="#ffb3d1" />
      <rect x="6" y="15" width="2" height="4" fill="#c96a94" />
      <rect x="14" y="15" width="2" height="4" fill="#c96a94" />
      <rect x="2" y="9" width="4" height="5" fill="#e87ba8" />
      <rect x="2" y="10" width="1" height="1" fill="#ffffff" />
    </svg>
  );
}

function Pig() {
  return (
    <svg viewBox="0 0 24 24" width="46" height="46" style={{ imageRendering: 'pixelated' }} aria-hidden="true">
      <rect x="5" y="8" width="13" height="7" fill="#f2a0a8" />
      <rect x="3" y="9" width="4" height="5" fill="#f2a0a8" />
      <rect x="2" y="10" width="2" height="3" fill="#e88b95" />
      <rect x="3" y="9" width="2" height="2" fill="#e88b95" />
      <rect x="6" y="15" width="2" height="4" fill="#d97f8a" />
      <rect x="14" y="15" width="2" height="4" fill="#d97f8a" />
      <rect x="6" y="8" width="2" height="2" fill="#2b2b2b" />
      <rect x="18" y="10" width="2" height="3" fill="#f2a0a8" />
    </svg>
  );
}

function Trader() {
  return (
    <svg viewBox="0 0 24 32" width="44" height="58" style={{ imageRendering: 'pixelated' }} aria-hidden="true">
      <rect x="7" y="10" width="10" height="16" fill="#3fa39c" />
      <rect x="6" y="12" width="12" height="4" fill="#3fa39c" />
      <rect x="8" y="4" width="8" height="6" fill="#c68e5e" />
      <rect x="7" y="2" width="10" height="3" fill="#2f7d78" />
      <rect x="5" y="4" width="14" height="1" fill="#2f7d78" />
      <rect x="9" y="26" width="2" height="4" fill="#5a3d28" />
      <rect x="13" y="26" width="2" height="4" fill="#5a3d28" />
      <rect x="17" y="12" width="6" height="9" fill="#d8c9a8" />
      <rect x="19" y="8" width="3" height="5" fill="#d8c9a8" />
      <rect x="18" y="14" width="2" height="2" fill="#8a7a5a" />
      <rect x="18" y="21" width="1.5" height="4" fill="#8a7a5a" />
      <rect x="21" y="21" width="1.5" height="4" fill="#8a7a5a" />
    </svg>
  );
}

const wait = (ms: number) => new Promise<void>(r => setTimeout(r, ms));
const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));

/* Throw physics: inherit the drag velocity, fly a real parabolic arc, then skid on the ground */
const GRAVITY = 2200; // px/s² downward
const THROW_SCALE = 0.8; // drag velocity → launch velocity
const MAX_SPEED = 1200; // px/s launch speed cap
const SKID_FRICTION = 2.4; // 1/s ground deceleration while skidding
const SKID_STOP_SPEED = 30; // px/s below which the skid ends
const MAX_THROW_MS = 3500; // safety cap on the whole throw

export function settleAfterThrow(
  el: HTMLElement,
  controls: ReturnType<typeof useAnimationControls>,
  dragRef: { current: boolean },
  setLeft: (v: number) => void,
  setDragging: (v: boolean) => void,
  velocityX: number,
  velocityY: number,
  offsetX: number,
  offsetY: number,
  extra?: (offScreen: boolean, viewportX: number) => void,
  wrapperEl?: HTMLElement | null,
) {
  // Launch velocity comes purely from the drag gesture; screen y points down.
  let vx = clamp(velocityX * THROW_SCALE, -MAX_SPEED, MAX_SPEED);
  let vy = clamp(velocityY * THROW_SCALE, -MAX_SPEED, MAX_SPEED);
  let px = offsetX; // start exactly where the player released
  let py = offsetY;
  let airborne = true;
  let last = performance.now();
  const start = last;

  const finish = (offScreen: boolean) => {
    const r = el.getBoundingClientRect();
    const off =
      offScreen ||
      r.left < -60 ||
      r.right > window.innerWidth + 60 ||
      r.top < -window.innerHeight * 0.4;
    const nl = off ? 4 + Math.random() * 80 : clamp((r.left / window.innerWidth) * 100, 2, 96);
    if (wrapperEl) {
      // Pin the wrapper to the landing spot instantly so there is no snap-back
      // or 2.4s walk-transition glide after the throw.
      wrapperEl.style.transition = 'none';
      wrapperEl.style.left = `${nl}%`;
      void wrapperEl.offsetWidth;
      wrapperEl.style.transition = '';
    }
    controls.set({ x: 0, y: 0 });
    setLeft(nl);
    dragRef.current = false;
    setDragging(false);
    extra?.(off, r.left);
  };

  const step = (now: number) => {
    const dt = Math.min((now - last) / 1000, 1 / 30);
    last = now;
    if (airborne) {
      vy += GRAVITY * dt;
      px += vx * dt;
      py += vy * dt;
      if (py >= 0 && vy > 0) {
        py = 0;
        airborne = false;
      }
    } else {
      // Skid along the grass with friction until it naturally stops.
      px += vx * dt;
      vx -= vx * SKID_FRICTION * dt;
      if (Math.abs(vx) < SKID_STOP_SPEED) {
        finish(false);
        return;
      }
    }
    controls.set({ x: px, y: py });

    const r = el.getBoundingClientRect();
    if (r.right < 0 || r.left > window.innerWidth || r.top < -window.innerHeight * 0.4) {
      finish(true);
      return;
    }
    if (now - start > MAX_THROW_MS) {
      finish(false);
      return;
    }
    requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
}

/* A grazer that walks, squats to eat, repeats — and can be grabbed & flung with inertia */
export function Grazer({
  children,
  initialLeft,
  walkBand,
  grazeMs,
  bottom,
}: {
  children: ReactNode;
  initialLeft: number;
  walkBand: number;
  grazeMs: number;
  bottom: number;
}) {
  const [left, setLeft] = useState(initialLeft);
  const [walking, setWalking] = useState(false);
  const [squat, setSquat] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [flip, setFlip] = useState(1);
  const dragRef = useRef(false);
  const dirRef = useRef(1);
  const innerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();

  useEffect(() => {
    let alive = true;
    const loop = async () => {
      while (alive) {
        if (dragRef.current) {
          await wait(500);
          continue;
        }
        setWalking(false);
        setSquat(true);
        await wait(grazeMs);
        if (!alive || dragRef.current) continue;
        dirRef.current = -dirRef.current;
        setFlip(-dirRef.current);
        setSquat(false);
        setWalking(true);
        setLeft(l =>
          clamp(l + dirRef.current * walkBand * (0.6 + Math.random() * 0.5), 4, 90),
        );
        await wait(2400);
      }
    };
    loop();
    return () => {
      alive = false;
    };
  }, [grazeMs, walkBand]);

  return (
    <div
      ref={wrapperRef}
      className="absolute"
      style={{
        left: `${left}%`,
        bottom,
        transition: dragging ? 'none' : 'left 2.4s linear',
      }}
    >
      <motion.div
        ref={innerRef}
        drag
        dragMomentum={false}
        dragElastic={0.25}
        dragSnapToOrigin={false}
        animate={controls}
        onDragStart={() => {
          dragRef.current = true;
          setDragging(true);
          setSquat(false);
          setWalking(false);
        }}
        onDragEnd={(_, info) => {
          if (!innerRef.current) return;
          settleAfterThrow(
            innerRef.current,
            controls,
            dragRef,
            setLeft,
            setDragging,
            info.velocity.x,
            info.velocity.y,
            info.offset.x,
            info.offset.y,
            undefined,
            wrapperRef.current,
          );
        }}
        style={{ cursor: dragging ? 'grabbing' : 'grab' }}
      >
        <div style={{ display: 'inline-block', transform: flip < 0 ? 'scaleX(-1)' : undefined }}>
          <div className={`animal-body ${walking ? 'animal-walking' : ''} ${squat ? 'animal-squat' : ''}`}>
            {children}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* Pink sheep that falls from the sky; bursts into wool if flung off-screen */
function PinkSheep({ onBurst, onDone }: { onBurst: (x: number, y: number) => void; onDone: () => void }) {
  const innerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();
  const dragRef = useRef(false);
  const [left] = useState(45);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    const expire = window.setTimeout(onDone, 30000);
    return () => window.clearTimeout(expire);
  }, [onDone]);

  return (
    <div className="absolute pink-fall" style={{ left: `${left}%`, bottom: 22 }}>
      <motion.div
        ref={innerRef}
        drag
        dragMomentum={false}
        dragElastic={0.25}
        animate={controls}
        onDragStart={() => {
          dragRef.current = true;
          setDragging(true);
        }}
        onDragEnd={(_, info) => {
          if (!innerRef.current) return;
          settleAfterThrow(
            innerRef.current,
            controls,
            dragRef,
            () => {},
            setDragging,
            info.velocity.x,
            info.velocity.y,
            info.offset.x,
            info.offset.y,
            (offScreen) => {
              if (offScreen) {
                const r = innerRef.current!.getBoundingClientRect();
                onBurst(r.left + r.width / 2, r.top + r.height / 2);
                onDone();
              }
            },
          );
        }}
        style={{ cursor: dragging ? 'grabbing' : 'grab' }}
      >
        <PinkSheepSprite />
      </motion.div>
    </div>
  );
}

type Burst = { id: number; x: number; y: number };

export default function FarmAnimals() {
  const [cycle, setCycle] = useState(0);
  const [pinkKey, setPinkKey] = useState(0);
  const [bursts, setBursts] = useState<Burst[]>([]);

  useEffect(() => {
    const t = window.setInterval(() => setCycle(c => c + 1), 16000);
    return () => window.clearInterval(t);
  }, []);

  useEffect(() => {
    const spawn = () => setPinkKey(k => k + 1);
    window.addEventListener('spawn-pink-sheep', spawn);
    return () => window.removeEventListener('spawn-pink-sheep', spawn);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20" aria-hidden="true">
      <div className="pointer-events-auto">
        <Grazer initialLeft={10} walkBand={12} grazeMs={2600} bottom={22}>
          <Cow />
        </Grazer>
        <Grazer initialLeft={68} walkBand={10} grazeMs={3400} bottom={22}>
          <Sheep />
        </Grazer>
        <Grazer initialLeft={30} walkBand={16} grazeMs={1400} bottom={20}>
          <Pig />
        </Grazer>
      </div>

      {pinkKey > 0 && (
        <div className="pointer-events-auto">
          <PinkSheep
            key={pinkKey}
            onDone={() => setPinkKey(0)}
            onBurst={(x, y) => {
              const id = Date.now();
              setBursts(b => [...b, { id, x, y }]);
              window.setTimeout(() => setBursts(b => b.filter(bb => bb.id !== id)), 5000);
            }}
          />
        </div>
      )}

      {bursts.map(b => (
        <div key={b.id} className="pointer-events-none absolute" style={{ left: b.x, top: b.y }}>
          {Array.from({ length: 12 }).map((_, i) => (
            <span
              key={i}
              className="wool-particle"
              style={{
                ['--dx' as string]: `${Math.cos((i / 12) * Math.PI * 2) * (30 + Math.random() * 40)}px`,
                ['--dy' as string]: `${Math.sin((i / 12) * Math.PI * 2) * (30 + Math.random() * 40) - 20}px`,
              }}
            />
          ))}
        </div>
      ))}

      {cycle > 0 && (
        <div key={cycle} className="absolute inset-x-0" style={{ bottom: 20 }}>
          <div className="trader-walk" style={{ animationDuration: '11s' }}>
            <Trader />
          </div>
        </div>
      )}
    </div>
  );
}
