/* eslint-disable react/no-unknown-property */
import { useEffect, useMemo, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { shaderMaterial, useTrailTexture } from '@react-three/drei';
import * as THREE from 'three';
import './PixelTrail.css';

const GooeyFilter = ({ id = 'goo-filter', strength = 10 }) => {
  return (
    <svg className="goo-filter-container">
      <defs>
        <filter id={id}>
          <feGaussianBlur in="SourceGraphic" stdDeviation={strength} result="blur" />
          <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
          <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>
      </defs>
    </svg>
  );
};

const DotMaterial = shaderMaterial(
  {
    resolution: new THREE.Vector2(),
    mouseTrail: null,
    gridSize: 100,
    pixelColor: new THREE.Color('#ffffff'),
    grassColor: new THREE.Color('#5fa647')
  },
  `
    varying vec2 vUv;
    void main() {
      gl_Position = vec4(position.xy, 0.0, 1.0);
    }
  `,
  `
    uniform vec2 resolution;
    uniform sampler2D mouseTrail;
    uniform float gridSize;
    uniform vec3 pixelColor;
    uniform vec3 grassColor;
    void main() {
      // Guard against 0/NaN resolution (a 0-sized frame during resize / tab
      // switch before the backing buffer is ready). Sampling the trail
      // framebuffer in this state reads uninitialized memory (often 1.0) and
      // paints the whole screen green. Drop the fragment entirely instead of
      // falling back to a bogus UV that still samples the texture.
      if (!(resolution.x > 0.0) || !(resolution.y > 0.0)) discard;

      vec2 screenUv = gl_FragCoord.xy / resolution;
      float m = max(resolution.x, resolution.y);
      vec2 s = resolution.xy / m;
      vec2 uv = (screenUv - 0.5) * s + 0.5;
      if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) discard;
      uv = clamp(uv, 0.0, 1.0);

      vec2 gridUv = fract(uv * gridSize);
      vec2 gridUvCenter = (floor(uv * gridSize) + 0.5) / gridSize;
      float trail = texture2D(mouseTrail, gridUvCenter).r;

      // Minecraft dirt block: brown body with a thin green grass layer on top.
      // gridUv.y runs 0 (bottom) -> 1 (top); grass in the top ~22%.
      float grass = smoothstep(0.76, 0.80, gridUv.y);
      vec3 color = mix(pixelColor, grassColor, grass);

      gl_FragColor = vec4(color, trail);
    }
  `
);

const identityEase = x => x;

function Scene({ gridSize, trailSize, maxAge, interpolate, easingFunction, pixelColor }) {
  const gl = useThree(s => s.gl);
  const viewport = useThree(s => s.viewport);
  const dotMaterial = useMemo(() => {
    const m = new DotMaterial();
    // This material draws alpha-blended pixel dots: trail=0 must stay fully
    // transparent so the page background shows through. Without transparent=true
    // three.js renders it as opaque, writes the green RGB even when trail=0,
    // and those pixels leak / smear across frames (the whole-screen-green bug).
    m.transparent = true;
    m.depthWrite = false;
    return m;
  }, []);
  useEffect(() => () => dotMaterial.dispose(), [dotMaterial]);
  // TEMP DEBUG — expose internals for in-browser diagnosis
  const scene = useThree(s => s.scene);
  const camera = useThree(s => s.camera);
  useEffect(() => {
    window.__trailDebug = { material: dotMaterial, gl, scene, camera };
    return () => {
      delete window.__trailDebug;
    };
  }, [dotMaterial, gl, scene, camera]);
  useEffect(() => {
    dotMaterial.uniforms.pixelColor.value.set(pixelColor);
  }, [dotMaterial, pixelColor]);
  const [trail, onMove] = useTrailTexture({
    size: 512,
    radius: trailSize,
    maxAge: maxAge,
    interpolate: interpolate || 0.1,
    // Trail strength: 1.0 was too loud and read as a green-tinted background;
    // 0.55 keeps the pixel trail clearly visible but light on the dark page.
    intensity: 0.55,
    ease: easingFunction || identityEase
  });
  // Keep the latest onMove so the window listener always feeds the current trail.
  const onMoveRef = useRef(onMove);
  useEffect(() => {
    onMoveRef.current = onMove;
  }, [onMove]);
  // The overlay sits BELOW every page layer with pointer-events: none, so it
  // never receives its own pointer events — track the cursor on window instead.
  useEffect(() => {
    const onPointerMove = e => {
      onMoveRef.current?.({
        uv: {
          x: e.clientX / window.innerWidth,
          y: 1 - e.clientY / window.innerHeight
        }
      });
    };
    window.addEventListener('pointermove', onPointerMove);
    return () => window.removeEventListener('pointermove', onPointerMove);
  }, []);
  useEffect(() => {
    if (!trail) return;
    trail.minFilter = THREE.NearestFilter;
    trail.magFilter = THREE.NearestFilter;
    trail.wrapS = THREE.ClampToEdgeWrapping;
    trail.wrapT = THREE.ClampToEdgeWrapping;
  }, [trail]);
  // Keep resolution in lockstep with the real backing-buffer size every frame.
  // size * viewport.dpr can collapse to 0/NaN during resize or tab switches,
  // which made the shader sample garbage and paint the screen green.
  useFrame(() => {
    dotMaterial.uniforms.resolution.value.set(
      Math.max(gl.domElement.width, 1),
      Math.max(gl.domElement.height, 1)
    );
  });
  const scale = Math.max(viewport.width, viewport.height) / 2;
  return (
    <mesh scale={[scale, scale, 1]}>
      <planeGeometry args={[2, 2]} />
      <primitive
        object={dotMaterial}
        attach="material"
        gridSize={gridSize}
        mouseTrail={trail}
      />
    </mesh>
  );
}

export default function PixelTrail({
  gridSize = 40,
  trailSize = 0.1,
  maxAge = 250,
  interpolate = 5,
  easingFunction = identityEase,
  canvasProps = {},
  glProps = {
    antialias: false,
    powerPreference: 'high-performance',
    alpha: true
  },
  gooeyFilter = null,
  color = '#ffffff',
  className = ''
}) {
  return (
    <>
      {gooeyFilter && <GooeyFilter id={gooeyFilter.id} strength={gooeyFilter.strength} />}
      <Canvas
        {...canvasProps}
        dpr={canvasProps.dpr ?? [1, 1.25]}
        gl={glProps}
        className={`pixel-canvas ${className}`.trim()}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
          ...(gooeyFilter ? { filter: `url(#${gooeyFilter.id})` } : null)
        }}
      >
        <Scene
          gridSize={gridSize}
          trailSize={trailSize}
          maxAge={maxAge}
          interpolate={interpolate}
          easingFunction={easingFunction}
          pixelColor={color}
        />
      </Canvas>
    </>
  );
}
