"use client";
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface CtaSectionProps {
  title: string
  description: string
  primaryCta: {
    text: string
    href: string
  }
  secondaryCta?: {
    text: string
    href: string
  }
  variant?: "default" | "accent"
}

export function CtaSection({ title, description, primaryCta, secondaryCta, variant = "default" }: CtaSectionProps) {
  return (
    <section className={`py-24 sm:py-32 ${variant === "accent" ? "bg-accent/10" : "bg-muted/30"}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight heading-serif text-balance sm:text-4xl">{title}</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">{description}</p>
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
