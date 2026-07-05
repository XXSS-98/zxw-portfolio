'use client';

import { useEffect, useRef, useState } from 'react';
import { Skill } from '@/types';

interface SkillBarProps {
  skill: Skill;
}

export default function SkillBar({ skill }: SkillBarProps) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(skill.level), 200);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [skill.level]);

  return (
    <div ref={ref} className="w-full">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-[#1d1d1f]">{skill.name}</span>
        <span className="text-xs text-[#86868b]">{skill.level}%</span>
      </div>
      <div className="h-1.5 bg-[#e8e8ed] rounded-full overflow-hidden">
        <div
          className="h-full bg-[#1d1d1f] rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}
