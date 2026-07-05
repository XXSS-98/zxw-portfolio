'use client';

import { useState } from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import ProjectCard from '@/components/ui/ProjectCard';
import { designProjects, designCategories } from '@/data/design-projects';

export default function DesignProjects() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filtered = activeCategory === 'all'
    ? designProjects
    : designProjects.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-24">
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title="Design Projects"
              subtitle="涵盖品牌与视觉识别、平面与排版、电商视觉、UI与新媒体等多个设计领域。"
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
              {designCategories.map((cat) => (
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

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project, index) => (
              <ScrollReveal key={project.id} delay={index * 80}>
                <ProjectCard project={project} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
