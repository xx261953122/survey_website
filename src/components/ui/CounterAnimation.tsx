import React, { useState, useEffect, useRef } from 'react';

interface CounterAnimationProps {
  value: string;
  duration?: number;
  className?: string;
}

export default function CounterAnimation({ 
  value, 
  duration = 2000, 
  className = "" 
}: CounterAnimationProps) {
  const [displayValue, setDisplayValue] = useState("0");
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // 每次进入视口时重新触发动画
          setIsVisible(true);
          setDisplayValue("0"); // 重置显示值
        } else {
          // 离开视口时停止动画
          setIsVisible(false);
          if (animationRef.current) {
            clearInterval(animationRef.current);
            animationRef.current = null;
          }
        }
      },
      { 
        threshold: 0.05,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
      if (animationRef.current) {
        clearInterval(animationRef.current);
      }
    };
  }, []);

  // 添加备用触发机制，确保在手机端也能工作
  useEffect(() => {
    const timer = setTimeout(() => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
        if (isInViewport && !isVisible) {
          setIsVisible(true);
          setDisplayValue("0");
        }
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    // 清除之前的动画
    if (animationRef.current) {
      clearInterval(animationRef.current);
    }

    // 解析数值（处理带逗号和+号的情况）
    const numericValue = parseInt(value.replace(/[^\d]/g, ''));
    const suffix = value.replace(/[\d,]/g, ''); // 提取非数字和非逗号部分（如+、%等）
    
    let currentValue = 0;
    const increment = numericValue / (duration / 16); // 60fps

    animationRef.current = setInterval(() => {
      currentValue += increment;
      if (currentValue >= numericValue) {
        currentValue = numericValue;
        if (animationRef.current) {
          clearInterval(animationRef.current);
          animationRef.current = null;
        }
      }
      
      // 格式化数字，添加逗号
      const formattedValue = Math.floor(currentValue).toLocaleString();
      setDisplayValue(formattedValue + suffix);
    }, 16);

    return () => {
      if (animationRef.current) {
        clearInterval(animationRef.current);
        animationRef.current = null;
      }
    };
  }, [isVisible, value, duration]);

  return (
    <div ref={elementRef} className={className}>
      {displayValue}
    </div>
  );
} 