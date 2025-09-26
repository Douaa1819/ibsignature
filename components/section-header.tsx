interface SectionHeaderProps {
  title: string
  subtitle?: string
  description?: string
  centered?: boolean
}

export function SectionHeader({ title, subtitle, description, centered = true }: SectionHeaderProps) {
  return (
    <div className={`mx-auto max-w-4xl ${centered ? "text-center" : ""}`}>
      {subtitle && <p className="text-sm font-semibold leading-7 text-primary uppercase tracking-wide">{subtitle}</p>}
      <h2 className="mt-2 text-3xl font-bold tracking-tight heading-serif text-balance sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">{description}</p>}
    </div>
  )
}
