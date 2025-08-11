import React from "react";

/**
 * 动画 Logo：Möbius / Infinity 风格（SVG）
 *
 * 用法：
 * <LogoMobius size={72} theme="interstellar" spin={14} />
 *
 * Props:
 * - size: 尺寸（px），默认 72
 * - theme: "interstellar" | "singularity" | 自定义 { from, mid, to }
 * - spin: 旋转一圈秒数（数值越大越慢），默认 16
 * - label: 无障碍可读名称，默认 "Mobius logo"
 */
interface LogoMobiusProps {
  size?: number;
  theme?: "interstellar" | "singularity" | { from: string; mid: string; to: string };
  spin?: number;
  label?: string;
}

export default function LogoMobius({
  size = 72,
  theme = "interstellar",
  spin = 16,
  label = "Mobius logo",
}: LogoMobiusProps) {
  // 颜色预设：冷蓝紫 / 冷白金
  const palette =
    theme === "interstellar"
      ? { from: "#7C83FF", mid: "#8AE1FF", to: "#E879F9" }
      : theme === "singularity"
      ? { from: "#C6D0FF", mid: "#FFFFFF", to: "#D9E2FF" }
      : theme; // 支持自定义 {from,mid,to}

  // Infinity 路径（平滑的 ∞ 形），作为莫比乌斯风格丝带基础
  // 说明：基于两个三次贝塞尔拼接，适合做 Logo（简洁、稳定）
  const pathD =
    "M 10,36 C 10,20 26,12 36,28 C 46,44 62,36 62,20"+
    " C 62,7 49,4 40,10"+
    " C 34,14 30,20 36,28"+
    " C 42,36 46,42 60,42"+
    " C 74,42 86,32 86,20"+
    " C 86,6 74,2 60,8"+
    " C 52,12 44,22 36,28"+
    " C 26,36 18,40 10,36 Z";

  // 为了更均衡：整体缩放&居中（viewBox 0 0 96 64）
  return (
    <div
      style={{
        width: size,
        height: size,
        display: "inline-grid",
        placeItems: "center",
      }}
      aria-label={label}
      role="img"
    >
      <svg
        viewBox="0 0 96 64"
        width={size}
        height={size}
        style={{
          // 轻微俯视 + 旋转，hover 微加速
          animation: `mobius-spin ${spin}s linear infinite`,
          transformOrigin: "50% 50%",
          filter: "drop-shadow(0 3px 12px rgba(124,131,255,.25))",
        }}
      >
        <defs>
          {/* 主渐变（沿路径流动的高光） */}
          <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={palette.from} />
            <stop offset="50%" stopColor={palette.mid} />
            <stop offset="100%" stopColor={palette.to} />
          </linearGradient>

          {/* 流光效果：用重复的虚线+动画制造沿线流动的高光 */}
          <linearGradient id="g2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="40%" stopColor="rgba(255,255,255,.8)" />
            <stop offset="60%" stopColor="rgba(255,255,255,.8)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>

          {/* 轻微内阴影的 mask，让"丝带"更有厚度层次 */}
          <radialGradient id="shade" cx="50%" cy="50%" r="65%">
            <stop offset="60%" stopColor="white" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.65)" />
          </radialGradient>
          <mask id="m1">
            <rect width="100%" height="100%" fill="url(#shade)" />
          </mask>
        </defs>

        {/* 丝带主体（底层柔和光泽） */}
        <path
          d={pathD}
          fill="none"
          stroke="url(#g1)"
          strokeWidth="7.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.9"
          mask="url(#m1)"
        />

        {/* 叠一层更细的高亮线，制造边缘高光 */}
        <path
          d={pathD}
          fill="none"
          stroke="url(#g1)"
          strokeWidth="3.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.85"
        />

        {/* 沿路径的流动高光（虚线动画） */}
        <path
          d={pathD}
          fill="none"
          stroke="url(#g2)"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="14 120"
          style={{ animation: "gloss 2.6s linear infinite" }}
          opacity="0.9"
        />
      </svg>

      {/* 交互与无障碍（减少动效时关闭动画） */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          svg { animation: none !important; }
          path[style*="gloss"] { animation: none !important; }
        }
        @keyframes mobius-spin {
          0%   { transform: rotateX(0deg) rotateZ(0deg); }
          100% { transform: rotateX(0deg) rotateZ(360deg); }
        }
        @keyframes gloss {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -134; }
        }
        div:hover > svg {
          animation-duration: ${Math.max(8, spin * 0.7)}s;
          filter: drop-shadow(0 6px 18px rgba(124,131,255,.35));
        }
      `}</style>
    </div>
  );
} 