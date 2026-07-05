'use client';

import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';

export default function About() {
  return (
    <div className="pt-24">
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <p className="text-sm font-medium text-[#86868b] uppercase tracking-widest mb-4">
                  About
                </p>
                <SectionHeading
                  title="小熊杀手"
                  subtitle="AI 视觉创意设计师 —— 融合技术思维与视觉表达，探索 AI 内容创作的新可能。"
                />
                <div className="space-y-4 text-[#86868b] leading-relaxed text-base">
                  <p>
                    我是小熊杀手，一名 AIGC 全栈创作者。从计算机技术专业出发，
                    深入研究扩散模型与生成式 AI 原理，逐步将技术能力转化为视觉创意生产力。
                  </p>
                  <p>
                    我的工作涵盖 AI 视觉设计、AI 视频创作与商业内容生产，
                    致力于将前沿 AI 技术转化为具有商业价值和美学品质的视觉表达。
                    相信技术与创意并不矛盾，而是可以相互放大，创造出真正打动人心的内容。
                  </p>
                  <p>
                    从技术研究到设计落地，从个人探索到商业交付——
                    我持续在 AI 内容创作领域深耕，寻找技术与艺术之间最优雅的平衡点。
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="aspect-[3/4] rounded-2xl bg-[#f5f5f7] flex items-center justify-center overflow-hidden">
                <div className="text-center text-[#86868b]">
                  <div className="text-7xl mb-4 opacity-40">🐻</div>
                  <p className="text-sm">个人形象</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Career Path */}
      <section className="py-24 bg-[#f5f5f7]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading title="成长轨迹" subtitle="从技术研究到 AIGC 创作的进化之路。" />
          </ScrollReveal>
          <div className="relative pl-8 border-l-2 border-[#d2d2d7] space-y-12">
            {[
              { step: '起点', title: '计算机技术 · 扩散模型方向', desc: '系统学习计算机科学基础，深入研究 Stable Diffusion 等扩散模型技术原理。' },
              { step: '深入', title: '生成式 AI 原理与技术研究', desc: '探索大模型的底层逻辑与能力边界，理解 AI 生成内容的内在机制。' },
              { step: '拓展', title: 'AI 视觉设计 · AI 视频创作', desc: '将技术理解转化为创意实践，在视觉设计和视频制作领域探索 AI 的无限可能。' },
              { step: '商业化', title: '商业内容生产与创意方案', desc: '面向品牌与市场需求，交付具备商业价值的 AI 视觉内容与创意解决方案。' },
              { step: '现在', title: '全职 AIGC 创作者', desc: '全身心投入 AI 内容创作，持续探索技术与美学的最优结合点。' },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="relative pl-8">
                  <div className="absolute -left-[13px] top-1 h-5 w-5 rounded-full bg-white border-2 border-[#1d1d1f]" />
                  <span className="text-xs font-semibold text-[#0071e3] uppercase tracking-wider">{item.step}</span>
                  <h3 className="mt-1 text-lg font-semibold text-[#1d1d1f]">{item.title}</h3>
                  <p className="mt-1 text-sm text-[#86868b] leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
