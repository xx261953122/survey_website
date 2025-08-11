import React from 'react';

interface AnimatedBackgroundProps {
  className?: string;
}

export default function AnimatedBackground({ className = "" }: AnimatedBackgroundProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* 浮动粒子 */}
      <div className="absolute w-2 h-2 bg-white/30 rounded-full top-1/4 left-1/4 animate-pulse"></div>
      <div className="absolute w-1 h-1 bg-white/40 rounded-full top-1/3 right-1/3 animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute w-1.5 h-1.5 bg-white/25 rounded-full bottom-1/4 left-1/3 animate-pulse" style={{animationDelay: '2s'}}></div>
      
      {/* 几何图形 */}
      <div className="absolute w-16 h-16 border border-white/20 rounded-lg top-1/4 right-1/4 transform rotate-45 animate-spin" style={{animationDuration: '20s'}}></div>
      <div className="absolute w-12 h-12 bg-white/10 rounded-full bottom-1/3 left-1/4 animate-bounce" style={{animationDuration: '3s'}}></div>
      
      {/* 数据流线条 */}
      <div className="absolute w-20 h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent top-1/2 left-1/6 transform rotate-45 animate-pulse"></div>
      <div className="absolute w-16 h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent bottom-1/3 right-1/6 transform -rotate-30 animate-pulse" style={{animationDelay: '1s'}}></div>
      
      {/* 神经网络节点 */}
      <div className="absolute w-3 h-3 bg-white/40 rounded-full top-1/3 left-1/2 animate-ping" style={{animationDuration: '2s'}}></div>
      <div className="absolute w-2 h-2 bg-white/50 rounded-full bottom-1/4 right-1/4 animate-ping" style={{animationDuration: '2s', animationDelay: '1s'}}></div>
      
      {/* 装饰性圆形 */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-16 -translate-y-16"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/10 rounded-full translate-x-12 translate-y-12"></div>
    </div>
  );
} 