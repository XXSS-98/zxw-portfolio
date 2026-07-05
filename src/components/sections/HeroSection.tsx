'use client';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-32 text-center">
        <div className="animate-fade-in">
          <p className="text-sm font-medium text-[#86868b] uppercase tracking-widest mb-6">
            AI Visual Creative Designer
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-[#1d1d1f] leading-tight">
            小熊杀手
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-[#86868b] max-w-2xl mx-auto leading-relaxed">
            融合技术思维与视觉表达
            <br className="hidden sm:block" />
            探索 AI 内容创作的新可能
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <a
              href="/design-projects"
              className="inline-flex items-center px-8 py-3 rounded-full bg-[#1d1d1f] text-white text-sm font-medium hover:bg-[#333] transition-colors duration-300"
            >
              View Work
            </a>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3 rounded-full border border-[#d2d2d7] text-[#1d1d1f] text-sm font-medium hover:bg-[#f5f5f7] transition-colors duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="h-6 w-6 text-[#86868b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
