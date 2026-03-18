"use client";

import React, { useEffect, useRef, useState } from "react";
import { STATS } from "@/app/constant/homepage.constants";

function useCountUp(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3); // ease-out-cubic
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);

  return count;
}

interface StatCardProps {
  value: string;
  suffix?: string;
  label: string;
  index: number;
  animate: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ value, suffix, label, index, animate }) => {
  const numeric = parseInt(value, 10);
  const count = useCountUp(numeric, 1600 + index * 200, animate);

  return (
    <div className="stat-card" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="stat-value">
        {animate ? count : numeric}
        <span className="stat-suffix">{suffix}</span>
      </div>
      <div className="stat-label">{label}</div>
      <div className="stat-bar">
        <div className="stat-bar-fill" style={{ transitionDelay: `${index * 0.15}s` }} />
      </div>
    </div>
  );
};

const QuickHighlights: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="highlights" ref={ref} aria-label="Key Statistics">
      <div className="highlights-inner">
        {STATS.map((stat, i) => (
          <StatCard key={stat.label} {...stat} index={i} animate={animate} />
        ))}
      </div>
    </section>
  );
};

export default QuickHighlights;