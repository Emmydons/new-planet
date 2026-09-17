interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export function SectionHeading({
  title,
  subtitle,
  centered = true,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      <div className={`flex items-center gap-4 mb-4 ${centered ? 'justify-center' : ''}`}>
        <div className="h-px w-12 bg-[#BF9B3C]" />
        <span className="text-[#BF9B3C] text-[11px] font-bold uppercase tracking-[0.3em]">
          {title}
        </span>
        {centered && <div className="h-px w-12 bg-[#BF9B3C]" />}
      </div>
      {subtitle && (
        <p className="text-[#7A6E65] text-lg max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
      )}
    </div>
  )
}
