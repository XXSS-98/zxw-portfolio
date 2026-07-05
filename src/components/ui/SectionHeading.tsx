interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeading({ title, subtitle, className = '' }: SectionHeadingProps) {
  return (
    <div className={`mb-16 ${className}`}>
      <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#1d1d1f]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-[#86868b] max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
