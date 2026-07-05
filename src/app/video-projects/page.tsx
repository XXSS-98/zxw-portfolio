'use client';

import { useState } from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import VideoCard from '@/components/ui/VideoCard';
import { videoProjects, videoCategories } from '@/data/video-projects';

export default function VideoProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filtered = activeCategory === 'all'
    ? videoProjects
    : videoProjects.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-24">
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title="Video Projects"
              subtitle="涵盖卡通人物创意视频、儿童绘本故事、消防宣传片等多种视频类型。"
            />
          </ScrollReveal>

          {/* Category filter */}
          <ScrollReveal delay={100}>
            <div className="flex flex-wrap gap-2 mb-12">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-5 py-2 rounded-full text-sm transition-colors duration-200 ${
                  activeCategory === 'all'
                    ? 'bg-[#1d1d1f] text-white'
                    : 'bg-[#f5f5f7] text-[#86868b] hover:text-[#1d1d1f]'
                }`}
              >
                All
              </button>
              {videoCategories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`px-5 py-2 rounded-full text-sm transition-colors duration-200 ${
                    activeCategory === cat.value
                      ? 'bg-[#1d1d1f] text-white'
                      : 'bg-[#f5f5f7] text-[#86868b] hover:text-[#1d1d1f]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Video cards - large card layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {filtered.map((project, index) => (
              <ScrollReveal key={project.id} delay={index * 100}>
                <VideoCard project={project} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
