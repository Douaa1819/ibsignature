import { FadeIn } from "@/components/fade-in"
import { StaggerContainer } from "@/components/stagger-container"

interface Stat {
  value: string
  label: string
  description?: string
}

interface StatsSectionProps {
  stats: Stat[]
  title?: string
  subtitle?: string
}

export function StatsSection({ stats, title, subtitle }: StatsSectionProps) {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {(title || subtitle) && (
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center mb-16">
              {subtitle && (
                <p className="text-sm font-semibold leading-7 text-primary uppercase tracking-wide">{subtitle}</p>
              )}
              {title && (
                <h2 className="mt-2 text-3xl font-bold tracking-tight heading-serif text-balance sm:text-4xl">
                  {title}
                </h2>
              )}
            </div>
          </FadeIn>
        )}
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <StaggerContainer className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <dt className="text-4xl font-bold tracking-tight heading-serif text-primary sm:text-5xl transition-transform duration-300 group-hover:scale-110">
                  {stat.value}
                </dt>
                <dd className="mt-2 text-base font-semibold leading-7 text-foreground">{stat.label}</dd>
                {stat.description && (
                  <dd className="mt-1 text-sm leading-6 text-muted-foreground">{stat.description}</dd>
                )}
              </div>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
