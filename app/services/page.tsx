"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { SectionHeader } from "@/components/section-header";
import { CtaSection } from "@/components/cta-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  TrendingUp,
  Shield,
  Clock,
  Star,
  Home,
  Sparkles,
  HeadphonesIcon,
  Camera,
  Key,
  Wrench,
} from "lucide-react";

const mainServices = [
  {
    icon: Building2,
    title: "Airbnb Concierge Service",
    description:
      "Complete property management that takes care of your travelers, manages your property, and increases your revenue without any effort from your side.",
    features: [
      "Guest communication and support",
      "Check-in and check-out coordination",
      "Property maintenance oversight",
      "Revenue optimization strategies",
    ],
    highlight: "Most Popular",
  },
  {
    icon: Home,
    title: "Complete Property Management",
    description:
      "From reservation to departure, including reception, cleaning, and maintenance, we handle every step from A to Z.",
    features: [
      "Booking management across platforms",
      "Professional guest relations",
      "Comprehensive cleaning services",
      "Regular maintenance and inspections",
    ],
  },
  {
    icon: TrendingUp,
    title: "Revenue Optimization",
    description: "Maximize your rental income through strategic pricing, occupancy optimization, and market analysis.",
    features: [
      "Dynamic pricing strategies",
      "Market analysis and positioning",
      "Occupancy rate optimization",
      "Performance reporting and insights",
    ],
  },
  {
    icon: Shield,
    title: "Property Protection & Maintenance",
    description:
      "Comprehensive maintenance and cleaning services to ensure your property remains in perfect condition.",
    features: [
      "Regular property inspections",
      "Professional cleaning after each stay",
      "Preventive maintenance programs",
      "Emergency repair coordination",
    ],
  },
];

const additionalServices = [
  { icon: Camera, title: "Professional Photography", description: "High-quality listing photos that showcase your property's best features." },
  { icon: Sparkles, title: "Interior Staging", description: "Expert staging to create attractive, welcoming spaces for guests." },
  { icon: Key, title: "Smart Lock Installation", description: "Secure, convenient access solutions for seamless guest experiences." },
  { icon: HeadphonesIcon, title: "24/7 Guest Support", description: "Round-the-clock assistance for guests and property owners." },
  { icon: Star, title: "Review Management", description: "Proactive review management to maintain high ratings and reputation." },
  { icon: Wrench, title: "Emergency Services", description: "Immediate response to urgent property issues and guest concerns." },
];

const processSteps = [
  { step: "01", title: "Property Assessment", description: "We evaluate your property and develop a customized management strategy tailored to your goals." },
  { step: "02", title: "Setup & Optimization", description: "Professional photography, listing creation, and pricing optimization across multiple platforms." },
  { step: "03", title: "Guest Management", description: "Complete guest lifecycle management from booking confirmation to post-stay follow-up." },
  { step: "04", title: "Ongoing Support", description: "Continuous monitoring, maintenance coordination, and performance optimization." },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        {/* Hero Section */}
        <HeroSection
          title="Comprehensive Property Management Services"
          subtitle="Expert solutions designed to maximize your rental income while providing exceptional guest experiences. We handle everything so you don't have to."
          primaryCta={{ text: "Get Started Today", href: "/contact" }}
          secondaryCta={{ text: "Learn About Our Process", href: "#process" }}
          backgroundImage="/modern-property-management-office.jpg"
        />

        {/* Main Services */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeader
              subtitle="Our Core Services"
              title="Everything You Need for Successful Property Management"
              description="From complete Airbnb management to revenue optimization, we provide comprehensive solutions tailored to your property's unique needs."
            />
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              {mainServices.map((service, index) => (
                <Card key={index} className="relative overflow-hidden">
                  {service.highlight && (
                    <Badge variant="highlight" className="absolute right-4 top-4">
                      {service.highlight}
                    </Badge>
                  )}
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      {/* pastille claire + bord + icône accent */}
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary border border-[--color-highlight]">
                        <service.icon className="h-6 w-6 text-[--color-highlight]" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm">
                          <div className="h-1.5 w-1.5 rounded-full bg-[--color-highlight]" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="bg-muted/30 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeader
              subtitle="Additional Services"
              title="Enhanced Solutions for Premium Results"
              description="Complementary services that elevate your property's appeal and streamline operations."
            />
            {/* toutes les icônes de cette grille en accent */}
            <div className="icons-highlight mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {additionalServices.map((service, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary border border-[--color-highlight]">
                      <service.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeader
              subtitle="Our Process"
              title="How We Transform Your Property Investment"
              description="A proven four-step approach that ensures maximum profitability and minimal hassle for property owners."
            />
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:max-w-none">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
                {processSteps.map((step, index) => (
                  <div key={index} className="relative">
                    <div className="flex items-center gap-4 mb-4">
                      {/* pastille discrète + texte accent */}
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary border border-[--color-highlight] font-bold text-[--color-highlight]">
                        {step.step}
                      </div>
                      {index < processSteps.length - 1 && <div className="hidden lg:block flex-1 h-px bg-border" />}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-muted/30 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <SectionHeader
                subtitle="Why Choose Our Services"
                title="The IB Signature Advantage"
                description="Experience the difference that professional property management makes for your investment returns and peace of mind."
                centered={false}
              />
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              {/* icônes du bloc en accent */}
              <dl className="icons-highlight grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                <div className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-foreground">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary border border-[--color-highlight]">
                      <TrendingUp className="h-6 w-6" />
                    </div>
                    Proven Revenue Growth
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-muted-foreground">
                    Our clients see an average 30% increase in rental income through optimized pricing and occupancy strategies.
                  </dd>
                </div>
                <div className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-foreground">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary border border-[--color-highlight]">
                      <Clock className="h-6 w-6" />
                    </div>
                    Complete Peace of Mind
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-muted-foreground">
                    Focus on your other priorities while we handle every aspect of your property management needs.
                  </dd>
                </div>
                <div className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-foreground">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary border border-[--color-highlight]">
                      <Star className="h-6 w-6" />
                    </div>
                    Premium Guest Experience
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-muted-foreground">
                    Exceptional service standards that result in higher ratings, repeat bookings, and premium pricing.
                  </dd>
                </div>
                <div className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-foreground">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary border border-[--color-highlight]">
                      <Shield className="h-6 w-6" />
                    </div>
                    Property Protection
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-muted-foreground">
                    Comprehensive maintenance and care that preserves and enhances your property's value over time.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CtaSection
          title="Ready to Maximize Your Property's Potential?"
          description="Join hundreds of successful property owners who trust IB Signature to manage their investments and deliver exceptional results."
          primaryCta={{ text: "Start Your Partnership", href: "/contact" }}
          secondaryCta={{ text: "Learn About Us", href: "/about" }}
          variant="accent"
        />
      </main>

      <Footer />
    </div>
  );
}
