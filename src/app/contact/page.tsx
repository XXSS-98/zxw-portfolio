'use client';

import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';

export default function Contact() {
  return (
    <div className="pt-24">
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title="Get in Touch"
              subtitle="如有合作意向或创意想法，欢迎随时联系。"
            />
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h3 className="text-sm font-medium text-[#86868b] uppercase tracking-wider mb-2">
                    Email
                  </h3>
                  <a
                    href="mailto:1250171467@qq.com"
                    className="text-lg text-[#1d1d1f] hover:text-[#0071e3] transition-colors"
                  >
                    1250171467@qq.com
                  </a>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-[#86868b] uppercase tracking-wider mb-2">
                    Social
                  </h3>
                  <div className="flex gap-4">
                    <a href="#" className="text-[#86868b] hover:text-[#1d1d1f] transition-colors">
                      Behance
                    </a>
                    <a href="#" className="text-[#86868b] hover:text-[#1d1d1f] transition-colors">
                      LinkedIn
                    </a>
                    <a href="#" className="text-[#86868b] hover:text-[#1d1d1f] transition-colors">
                      Instagram
                    </a>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-[#86868b] uppercase tracking-wider mb-2">
                    Location
                  </h3>
                  <p className="text-lg text-[#1d1d1f]">
                    中国 · 北京
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[#1d1d1f] mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-[#d2d2d7] bg-white text-[#1d1d1f] placeholder:text-[#86868b] focus:outline-none focus:border-[#1d1d1f] transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1d1d1f] mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-[#d2d2d7] bg-white text-[#1d1d1f] placeholder:text-[#86868b] focus:outline-none focus:border-[#1d1d1f] transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1d1d1f] mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-[#d2d2d7] bg-white text-[#1d1d1f] placeholder:text-[#86868b] focus:outline-none focus:border-[#1d1d1f] transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="button"
                  className="w-full px-8 py-3 rounded-full bg-[#1d1d1f] text-white text-sm font-medium hover:bg-[#333] transition-colors duration-300"
                >
                  Send Message
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
