import React, { useMemo } from "react";

type LogoSize = "small" | "medium" | "large";
type LogoStyle = "minimal" | "glow" | "gradient";

interface MobiusLogoProps {
  size?: LogoSize;
  style?: LogoStyle;
  animated?: boolean;
  className?: string;
}

export default function MobiusLogo({
  size = "medium",
  style = "minimal",
  animated = true,
  className = "",
}: MobiusLogoProps) {
  const { dimensions, segments, radius } = useMemo(() => {
    switch (size) {
      case "small":
        return { dimensions: 40, segments: 24, radius: 16 };
      case "large":
        return { dimensions: 120, segments: 48, radius: 50 };
      default: // medium
        return { dimensions: 80, segments: 36, radius: 32 };
    }
  }, [size]);

  const { colors, effects } = useMemo(() => {
    switch (style) {
      case "glow":
        return {
          colors: {
            primary: "#6366f1",
            secondary: "#8b5cf6",
            glow: "rgba(99, 102, 241, 0.3)",
          },
          effects: {
            boxShadow: "0 0 20px rgba(99, 102, 241, 0.4)",
            filter: "drop-shadow(0 0 8px rgba(99, 102, 241, 0.3))",
          },
        };
      case "gradient":
        return {
          colors: {
            primary: "linear-gradient(45deg, #6366f1, #8b5cf6)",
            secondary: "linear-gradient(45deg, #8b5cf6, #a855f7)",
            glow: "rgba(139, 92, 246, 0.2)",
          },
          effects: {
            boxShadow: "0 0 15px rgba(139, 92, 246, 0.3)",
            filter: "drop-shadow(0 0 6px rgba(139, 92, 246, 0.2))",
          },
        };
      default: // minimal
        return {
          colors: {
            primary: "#6366f1",
            secondary: "#8b5cf6",
            glow: "rgba(99, 102, 241, 0.1)",
          },
          effects: {
            boxShadow: "0 0 8px rgba(99, 102, 241, 0.2)",
            filter: "none",
          },
        };
    }
  }, [style]);

  const items = Array.from({ length: segments });
  const step = 360 / segments;

  return (
    <div
      className={`mobius-logo ${className}`}
      style={{
        position: "relative",
        width: dimensions,
        height: dimensions,
        display: "inline-block",
        ...effects,
      }}
    >
      {/* 背景圆环 */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          border: `2px solid ${colors.glow}`,
          borderRadius: "50%",
          opacity: 0.3,
        }}
      />

      {/* Mobius 环 */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
          animation: animated ? `logo-spin 8s linear infinite` : "none",
        }}
      >
        {items.map((_, i) => {
          const theta = i * step;
          const twist = (theta / 360) * 180;
          const stripWidth = Math.max(1, dimensions / 40);
          const stripHeight = Math.max(1, dimensions / 20);

          return (
            <div
              key={i}
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                transformStyle: "preserve-3d",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: stripWidth,
                  height: stripHeight,
                  transform: `rotateY(${theta}deg) translateZ(${radius}px) rotateX(${twist}deg) translateY(${-stripHeight / 2}px)`,
                  background: colors.primary,
                  borderRadius: stripWidth / 2,
                  boxShadow: `0 0 ${stripWidth * 2}px ${colors.glow}`,
                  opacity: 0.8,
                }}
              />
            </div>
          );
        })}
      </div>

      {/* 中心点 */}
      <div
        style={{
          position: "absolute",
          width: dimensions / 8,
          height: dimensions / 8,
          background: colors.secondary,
          borderRadius: "50%",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          boxShadow: `0 0 ${dimensions / 16}px ${colors.glow}`,
        }}
      />

      {/* 动画样式 */}
      {animated && (
        <style>{`
          @keyframes logo-spin {
            0% { transform: rotateX(20deg) rotateZ(-5deg) rotateY(0deg); }
            100% { transform: rotateX(20deg) rotateZ(-5deg) rotateY(360deg); }
          }
        `}</style>
      )}
    </div>
  );
}

// 导出预设样式
export const LogoPresets = {
  // 导航栏logo
  Navbar: () => <MobiusLogo size="small" style="minimal" animated={false} />,
  
  // 页面标题logo
  Header: () => <MobiusLogo size="medium" style="glow" animated={true} />,
  
  // 英雄区域logo
  Hero: () => <MobiusLogo size="large" style="gradient" animated={true} />,
  
  // 静态logo
  Static: () => <MobiusLogo size="medium" style="minimal" animated={false} />,
}; 