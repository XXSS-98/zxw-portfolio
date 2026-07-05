import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-[#e8e8ed] bg-[#f5f5f7]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#86868b]">
            &copy; {new Date().getFullYear()} 小熊杀手 · AI Visual Creative Designer. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="mailto:1250171467@qq.com"
              className="text-sm text-[#86868b] hover:text-[#1d1d1f] transition-colors"
            >
              Email
            </a>
            <a
              href="#"
              className="text-sm text-[#86868b] hover:text-[#1d1d1f] transition-colors"
            >
              Behance
            </a>
            <a
              href="#"
              className="text-sm text-[#86868b] hover:text-[#1d1d1f] transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
