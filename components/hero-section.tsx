"use client";

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface HeroSectionProps {
  title: string
  subtitle: string
  description?: string
  primaryCta: {
    text: string
    href: string
  }
  secondaryCta?: {
    text: string
    href: string
  }
  backgroundImage?: string
}

export function HeroSection({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  backgroundImage,
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden">
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <img src={backgroundImage || "/placeholder.svg"} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-background/60 dark:bg-background/80" />
        </div>
      )}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight heading-serif text-balance sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty sm:text-xl">{subtitle}</p>
          {description && <p className="mt-4 text-base leading-7 text-muted-foreground text-pretty">{description}</p>}
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg" className="text-base">
              <Link href={primaryCta.href}>
                {primaryCta.text}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            {secondaryCta && (
              <Button asChild variant="outline" size="lg" className="text-base bg-transparent">
                <Link href={secondaryCta.href}>{secondaryCta.text}</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
