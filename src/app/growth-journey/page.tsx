'use client';

import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import TimelineItem from '@/components/ui/TimelineItem';
import { TimelineEvent } from '@/types';

const timelineEvents: TimelineEvent[] = [
  {
    year: '2024',
    title: '里程碑标题',
    description: '此处将展示成长历程中的重要事件和成就。',
    type: 'milestone',
  },
  {
    year: '2023',
    title: '项目经历',
    description: '此处将展示成长历程中的重要事件和成就。',
    type: 'project',
  },
  {
    year: '2022',
    title: '重要成就',
    description: '此处将展示成长历程中的重要事件和成就。',
    type: 'achievement',
  },
  {
    year: '2021',
    title: '起点',
    description: '此处将展示成长历程中的重要事件和成就。',
    type: 'milestone',
  },
];

export default function GrowthJourney() {
  return (
    <div className="pt-24">
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title="Growth Journey"
              subtitle="记录成长足迹，分享创作旅程中的每一个重要时刻。"
            />
          </ScrollReveal>

          {/* Timeline */}
          <div className="max-w-2xl mx-auto">
            {timelineEvents.map((event, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <TimelineItem event={event} index={index} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
