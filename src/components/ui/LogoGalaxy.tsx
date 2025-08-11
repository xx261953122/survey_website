import React, { useMemo, useRef, useEffect, useState } from "react";

// 类型定义
type Pt = { x: number; y: number; a: number; sz: number };
type PlanetPoint = { x: number; y: number; r: number; delay: number };
type StarPoint = { x: number; y: number; r: number; opacity: number; duration: number; delay: number };

interface GalaxyLogoProps {
  size?: number;         // 尺寸(px)
  arms?: number;         // 螺旋臂数量
  starCount?: number;    // 星系盘内星点数量（主体）
  spin?: number;         // 盘自转一圈秒数
  core?: number;         // 盘核心半径(0-1)
  fade?: number;         // 盘外缘衰减(0-1)
  breathe?: boolean;     // 盘呼吸亮度
  tiltX?: number;        // 前后倾斜角
  tiltY?: number;        // 左右倾斜角
  planets?: PlanetPoint[]; // 行星点配置
  starPoints?: StarPoint[]; // 装饰星光配置
  label?: string;
  className?: string;
}

// 生成星系盘粒子的函数
function generateGalaxyParticles(
  stars: number,
  arms: number,
  core: number,
  fade: number,
  discRadius: number = 42,
  centerX: number = 50,
  centerY: number = 50
): Pt[] {
  const arr: Pt[] = [];
  for (let i = 0; i < stars; i++) {
    const t = i / Math.max(1, stars - 1);
    const r = core + (1 - core) * Math.pow(t, 0.9);
    const base = 6.2 * t;
    const armOffset = ((i % arms) / arms) * Math.PI * 2;
    const noise = (Math.random() - 0.5) * 0.22;
    const theta = base + armOffset + noise;

    const R = discRadius * r;
    const x = centerX + R * Math.cos(theta);
    const y = centerY + R * Math.sin(theta);

    const a = Math.min(1, (1 - t) * fade + 0.22);
    const sz = 0.55 + 1.9 * (1 - t) * (Math.random() * 0.9 + 0.1);
    arr.push({ x, y, a, sz });
  }
  return arr;
}

// 生成默认行星点的函数
function generateDefaultPlanets(): PlanetPoint[] {
  return [
    { x: 1, y: 48, r: 2, delay: 0 },
    { x: 4, y: 1, r: 2, delay: 0 },
    { x: 32, y: 48, r: 1.5, delay: 2 },
    { x: 48, y: 64, r: 1.8, delay: 4 },
    { x: 100, y: 80, r: 1.8, delay: 4 },
    { x: 80, y: 80, r: 1.8, delay: 4 },
    { x: 80, y: 80, r: 1.8, delay: 4 },
    { x: 80, y: 80, r: 3, delay: 4 },
  ];
}

// 生成默认装饰星光的函数
function generateDefaultStars(): StarPoint[] {
  return [
    { x: 56, y: 40, r: 0.8, opacity: 0.8, duration: 2, delay: 0 },
    { x: 56, y: 40, r: 0.8, opacity: 0.8, duration: 2, delay: 0 },
    { x: 56, y: 40, r: 0.8, opacity: 0.8, duration: 2, delay: 0 },
    { x: 56, y: 40, r: 0.8, opacity: 0.8, duration: 2, delay: 0 },
    { x: 56, y: 100, r: 0.8, opacity: 0.8, duration: 2, delay: 0 },
    { x: 70, y: 10, r: 3, opacity: 0.7, duration: 2.5, delay: 1 },
    { x: 70, y: 30, r: 0.5, opacity: 0.7, duration: 1.8, delay: 0.5 },
    { x: 30, y: 70, r: 0.7, opacity: 0.5, duration: 3, delay: 1.5 },
  ];
}

// 渲染行星点的函数
function renderPlanets(planets: PlanetPoint[]) {
  return planets.map((planet, index) => (
    <circle
      key={`planet-${index}`}
      cx={planet.x}
      cy={planet.y}
      r={planet.r}
      fill="url(#star-glow)"
      style={{ 
        animation: `planet-orbit 8s linear infinite ${planet.delay}s` 
      }}
    />
  ));
}

// 渲染装饰星光的函数
function renderStars(stars: StarPoint[]) {
  return stars.map((star, index) => (
    <circle
      key={`star-${index}`}
      cx={star.x}
      cy={star.y}
      r={star.r}
      fill="white"
      opacity={star.opacity}
      style={{ 
        animation: `star-twinkle ${star.duration}s ease-in-out infinite ${star.delay}s` 
      }}
    />
  ));
}

// 生成动画样式的函数
function generateAnimationStyles(spin: number) {
  return `
    @media (prefers-reduced-motion: reduce) {
      .galaxy-outer svg { animation: none !important; }
    }
    @keyframes galaxy-spin {
      0%   { transform: rotateZ(0deg); }
      100% { transform: rotateZ(360deg); }
    }
    @keyframes galaxy-breathe {
      0%, 100% { filter: brightness(1); }
      50%      { filter: brightness(1.08); }
    }
    @keyframes planet-orbit {
      0%   { transform: rotate(0deg) translateX(0px) rotate(0deg); }
      100% { transform: rotate(360deg) translateX(0px) rotate(-360deg); }
    }
            @keyframes star-twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50%      { opacity: 1; transform: scale(1.2); }
        }
        @keyframes core-pulse {
          0%, 100% { 
            opacity: 0.95; 
            filter: brightness(1);
          }
          25% { 
            opacity: 1; 
            filter: brightness(1.3);
          }
          50% { 
            opacity: 0.8; 
            filter: brightness(0.8);
          }
          75% { 
            opacity: 1; 
            filter: brightness(1.2);
          }
        }
    .galaxy-outer:hover svg[style*="galaxy-spin"] {
      animation-duration: ${Math.max(10, spin * 0.7)}s;
    }
  `;
}

export default function LogoGalaxy({
  size = 72,
  arms = 3,
  starCount = 280,
  spin = 28,
  core = 0.16,
  fade = 0.35,
  breathe = true,
  tiltX = 55,
  tiltY = 30,
  planets = generateDefaultPlanets(),
  starPoints = generateDefaultStars(),
  label = "Galaxy logo",
  className
}: GalaxyLogoProps) {
  const S = size;
  const Cx = 50, Cy = 50;
  const discRadius = 42;
  const spinAnim = `galaxy-spin ${spin}s linear infinite`;
  const breatheAnim = breathe ? `, galaxy-breathe 6.5s ease-in-out infinite` : "";

  // 使用函数生成星系盘粒子
  const pts: Pt[] = useMemo(() => 
    generateGalaxyParticles(starCount, arms, core, fade, discRadius, Cx, Cy),
    [starCount, arms, core, fade]
  );

  // raf 时钟
  const [t, setT] = useState(0);
  const rafRef = useRef<number | null>(null);
  useEffect(() => {
    const start = performance.now();
    const loop = (now: number) => {
      setT((now - start) / 1000);
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, []);

  return (
    <div
      aria-label={label}
      role="img"
      className={["galaxy-outer", className].filter(Boolean).join(" ")}
      style={{
        width: S,
        height: S,
        display: "inline-grid",
        placeItems: "center",
        perspective: 700,
        filter: "drop-shadow(0 2px 10px rgba(255,255,255,.28))",
      }}
    >
      <div
        style={{
          width: S,
          height: S,
          transformStyle: "preserve-3d",
          transform: `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
        }}
      >
        {/* 自转的星系"主体盘" */}
        <svg
          viewBox="0 0 100 100"
          width={S}
          height={S}
          style={{ transformOrigin: "50% 50%", animation: spinAnim + breatheAnim }}
        >
          <defs>
            <radialGradient id="g-core" cx="50%" cy="50%" r="62%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.95)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </radialGradient>
            <radialGradient id="star-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(255,255,255,1)" />
              <stop offset="70%" stopColor="rgba(255,255,255,0.8)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </radialGradient>
          </defs>

          {/* 核心白色晕光 */}
          <circle 
            cx="50" 
            cy="50" 
            r={12} 
            fill="url(#g-core)" 
            opacity={0.95}
            style={{ animation: "core-pulse 4s ease-in-out infinite" }}
          />

          {/* 主体星系盘粒子 */}
          {pts.map((p, i) => (
            <circle key={i} cx={p.x} cy={p.y} r={p.sz / 2} fill="#FFFFFF" opacity={p.a} />
          ))}

          {/* 使用函数渲染行星点 */}
          {renderPlanets(planets)}

          {/* 使用函数渲染装饰星光 */}
          {renderStars(starPoints)}
        </svg>
      </div>

      <style>{generateAnimationStyles(spin)}</style>
    </div>
  );
}
