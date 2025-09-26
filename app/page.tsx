"use client";

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { SectionHeader } from "@/components/section-header"
import { StatsSection } from "@/components/stats-section"
import { CtaSection } from "@/components/cta-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Building2, Users, TrendingUp, Shield, Clock, Star } from "lucide-react"

const services = [
  {
    icon: Building2,
    title: "Airbnb Concierge",
    description: "Complete property management from booking to departure, ensuring exceptional guest experiences.",
  },
  {
    icon: Users,
    title: "Guest Management",
    description: "Professional guest relations, check-in coordination, and 24/7 support for seamless stays.",
  },
  {
    icon: TrendingUp,
    title: "Revenue Optimization",
    description: "Strategic pricing and occupancy optimization to maximize your rental income potential.",
  },
  {
    icon: Shield,
    title: "Property Protection",
    description: "Comprehensive maintenance, cleaning, and security services to protect your investment.",
  },
]

const stats = [
  {
    value: "+30%",
    label: "Average Revenue Increase",
    description: "Through optimized occupancy management",
  },
  {
    value: "500+",
    label: "Properties Managed",
    description: "Across premium locations",
  },
  {
    value: "98%",
    label: "Guest Satisfaction",
    description: "Consistently high ratings",
  },
  {
    value: "24/7",
    label: "Support Available",
    description: "Round-the-clock assistance",
  },
]

const testimonials = [
  {
    content:
      "IB Signature transformed my property investment. Their professional management increased my revenue by 35% while I focus on other ventures.",
    author: "Sarah Mitchell",
    role: "Property Owner",
  },
  {
    content:
      "The level of service is exceptional. Every guest interaction is handled professionally, and my property is always in perfect condition.",
    author: "David Chen",
    role: "Real Estate Investor",
  },
  {
    content:
      "Working with IB Signature has been seamless. They handle everything from A to Z, and the results speak for themselves.",
    author: "Maria Rodriguez",
    role: "Property Owner",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        {/* Hero Section */}
        <HeroSection
          title="Premium Property Management Excellence"
          subtitle="Expert property management specializing in short and medium-term rentals. Maximize your investment profitability with our comprehensive Airbnb-style management services."
          primaryCta={{
            text: "Become a Partner",
            href: "/contact",
          }}
          secondaryCta={{
            text: "Learn More",
            href: "/about",
          }}
          backgroundImage="/luxury-modern-apartment-interior-with-city-view.jpg"
        />

        {/* Stats Section */}
        <StatsSection stats={stats} subtitle="Our Results" title="Proven Success in Property Management" />

        {/* Services Overview */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeader
              subtitle="Our Services"
              title="Complete Property Management Solutions"
              description="From booking to departure, we handle every aspect of your short-term rental business with professional expertise and cutting-edge technology."
            />
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                {services.map((service) => (
                  <div key={service.title} className="flex flex-col">
                    <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground">
                      <service.icon className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
                      {service.title}
                    </dt>
                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                      <p className="flex-auto">{service.description}</p>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="mt-16 flex justify-center">
              <Button asChild size="lg">
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-muted/30 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeader
              subtitle="Why Choose IB Signature"
              title="Your Trusted Property Management Partner"
              description="We combine cutting-edge technology with hospitality expertise to create premium experiences for property owners and their guests."
            />
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                <div className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-foreground">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                      <Clock className="h-6 w-6 text-primary-foreground" aria-hidden="true" />
                    </div>
                    Complete Management
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-muted-foreground">
                    Your time is precious. We offer complete management so you don't have to worry about the details.
                  </dd>
                </div>
                <div className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-foreground">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                      <Star className="h-6 w-6 text-primary-foreground" aria-hidden="true" />
                    </div>
                    Premium Experience
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-muted-foreground">
                    We create personalized, high-end experiences for both property owners and their guests.
                  </dd>
                </div>
                <div className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-foreground">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                      <TrendingUp className="h-6 w-6 text-primary-foreground" aria-hidden="true" />
                    </div>
                    Proven Results
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-muted-foreground">
                    Our hosts see an average 30% increase in rental income through optimized property occupancy.
                  </dd>
                </div>
                <div className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-foreground">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                      <Shield className="h-6 w-6 text-primary-foreground" aria-hidden="true" />
                    </div>
                    Tailored Strategies
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-muted-foreground">
                    Each property is unique, so we develop customized rental strategies for maximum profitability.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeader
              subtitle="Client Success Stories"
              title="What Our Partners Say"
              description="Discover how property owners are maximizing their investment returns with IB Signature's professional management services."
            />
            <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {testimonials.map((testimonial, index) => (
                  <Card key={index} className="bg-card">
                    <CardContent className="pt-6">
                      <blockquote className="text-sm leading-6 text-muted-foreground">
                        <p>"{testimonial.content}"</p>
                      </blockquote>
                      <figcaption className="mt-6 flex items-center gap-x-4">
                        <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                          <span className="text-sm font-semibold text-foreground">
                            {testimonial.author
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </span>
                        </div>
                        <div>
                          <div className="font-semibold text-foreground">{testimonial.author}</div>
                          <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                        </div>
                      </figcaption>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Partnership CTA */}
        <CtaSection
          title="Ready to Maximize Your Property Revenue?"
          description="Join successful property owners who trust IB Signature to manage their investments and deliver exceptional guest experiences."
          primaryCta={{
            text: "Become a Partner",
            href: "/contact",
          }}
          secondaryCta={{
            text: "Learn About Our Services",
            href: "/services",
          }}
          variant="accent"
        />
      </main>

      <Footer />
    </div>
  )
}
