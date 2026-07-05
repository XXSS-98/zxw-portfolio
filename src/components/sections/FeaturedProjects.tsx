'use client';

import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import ProjectCard from '@/components/ui/ProjectCard';
import { designProjects } from '@/data/design-projects';

export default function FeaturedProjects() {
  // Show first 3 projects as featured
  const featured = designProjects.slice(0, 3);

  return (
    <section className="py-24 bg-[#f5f5f7]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title="Featured Work"
            subtitle="精选设计项目展示，涵盖品牌视觉、平面设计、数字创意等多个领域。"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 100}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={300}>
          <div className="mt-16 text-center">
            <a
              href="/design-projects"
              className="inline-flex items-center text-sm font-medium text-[#0071e3] hover:text-[#0077ed] transition-colors group"
            >
              View All Projects
              <svg className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
