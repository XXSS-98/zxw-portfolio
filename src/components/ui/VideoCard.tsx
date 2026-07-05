'use client';

import { useState } from 'react';
import { VideoProject } from '@/types';

interface VideoCardProps {
  project: VideoProject;
}

export default function VideoCard({ project }: VideoCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-video overflow-hidden rounded-2xl bg-[#1d1d1f]">
        {/* Placeholder video area */}
        <div className="flex h-full items-center justify-center">
          <div className="text-center text-white/60">
            <svg className="mx-auto h-16 w-16 mb-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            <span className="text-sm">视频内容</span>
          </div>
        </div>

        {/* Duration badge */}
        <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-black/60 text-white text-xs">
          {project.duration}
        </div>

        {/* Hover overlay */}
        <div
          className={`absolute inset-0 bg-black/20 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="h-14 w-14 rounded-full bg-white/90 flex items-center justify-center">
            <svg className="h-6 w-6 text-[#1d1d1f] ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h3 className="text-lg font-medium text-[#1d1d1f] group-hover:text-[#0071e3] transition-colors duration-300">
          {project.title}
        </h3>
        <p className="mt-1.5 text-sm text-[#86868b] leading-relaxed line-clamp-2">
          {project.description}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full bg-[#f5f5f7] text-[#86868b]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
