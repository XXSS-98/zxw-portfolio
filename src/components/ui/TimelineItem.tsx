'use client';

import { TimelineEvent } from '@/types';

interface TimelineItemProps {
  event: TimelineEvent;
  index: number;
}

export default function TimelineItem({ event, index }: TimelineItemProps) {
  return (
    <div className="relative pl-8 pb-12 border-l-2 border-[#e8e8ed] last:pb-0">
      {/* Dot */}
      <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-white border-2 border-[#1d1d1f]" />

      {/* Year */}
      <span className="text-xs font-medium text-[#86868b] uppercase tracking-wider">
        {event.year}
      </span>

      {/* Title */}
      <h3 className="mt-1.5 text-lg font-semibold text-[#1d1d1f]">
        {event.title}
      </h3>

      {/* Description */}
      <p className="mt-2 text-sm text-[#86868b] leading-relaxed">
        {event.description}
      </p>
    </div>
  );
}
