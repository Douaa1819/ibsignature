"use client"

import React from "react"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number; 
  once?: boolean;        
  threshold?: number;    
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.08,
  once = true,
  threshold = 0.08,
}: StaggerContainerProps) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // respecte prefers-reduced-motion
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [once, threshold]);

  const items = React.Children.toArray(children);

  return (
    <div ref={ref} className={className}>
      {items.map((child, idx) => (
        <div
          key={idx}
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translate3d(0,0,0)" : "translate3d(0, 0.75rem, 0)",
            transition: `opacity 600ms ease-out ${idx * staggerDelay}s, transform 600ms ease-out ${idx * staggerDelay}s`,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}