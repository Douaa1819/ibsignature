"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { SectionHeader } from "@/components/section-header";
import { StatsSection } from "@/components/stats-section";
import { CtaSection } from "@/components/cta-section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Users, Award, TrendingUp, Shield, Heart, Lightbulb, CheckCircle } from "lucide-react";

const values = [
  { icon: Target, title: "Excellence", description: "We strive for perfection in every aspect of property management, from guest experiences to owner satisfaction." },
  { icon: Shield, title: "Trust", description: "Building lasting relationships through transparency, reliability, and consistent delivery of our promises." },
  { icon: Heart, title: "Care", description: "We treat every property as if it were our own, ensuring meticulous attention to detail and genuine care." },
  { icon: Lightbulb, title: "Innovation", description: "Leveraging cutting-edge technology and industry best practices to stay ahead of market trends." },
];

const milestones = [
  { year: "2019", title: "Company Founded", description: "Started with a vision to revolutionize short-term rental management with personalized service." },
  { year: "2020", title: "First 50 Properties", description: "Reached our first milestone of managing 50 properties across major metropolitan areas." },
  { year: "2021", title: "Technology Platform Launch", description: "Developed our proprietary management platform for enhanced efficiency and guest experience." },
  { year: "2022", title: "Partnership Expansion", description: "Became preferred partners with Expedia and other major booking platforms." },
  { year: "2023", title: "200+ Properties", description: "Expanded to manage over 200 properties with consistently high guest satisfaction ratings." },
  { year: "2024", title: "Market Leadership", description: "Established as a leading property management company with proven 30% revenue increases." },
];

const teamMembers = [
  { name: "Sarah Johnson", role: "Founder & CEO", bio: "Former hospitality executive with 15+ years of experience in luxury hotel management and property operations.", image: "/professional-woman-ceo.png" },
  { name: "Michael Chen", role: "Head of Operations", bio: "Operations specialist focused on streamlining processes and ensuring exceptional service delivery across all properties.", image: "/professional-operations-manager.png" },
  { name: "Emma Rodriguez", role: "Guest Experience Director", bio: "Customer service expert dedicated to creating memorable experiences that drive positive reviews and repeat bookings.", image: "/professional-woman-customer-service-director-heads.jpg" },
  { name: "David Thompson", role: "Revenue Optimization Manager", bio: "Data analyst and pricing strategist who maximizes property revenue through market analysis and dynamic pricing.", image: "/professional-man-revenue-manager-headshot.jpg" },
];

const achievements = [
  { icon: Award, title: "Industry Recognition", description: "Winner of the 2023 Property Management Excellence Award for outstanding service quality." },
  { icon: TrendingUp, title: "Proven Results", description: "Consistently deliver 30% average revenue increases for property owners within the first year." },
  { icon: Users, title: "Client Satisfaction", description: "Maintain a 98% client retention rate with over 500 five-star reviews from property owners." },
  { icon: CheckCircle, title: "Quality Assurance", description: "ISO 9001 certified processes ensuring consistent, high-quality service delivery." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        {/* Hero */}
        <HeroSection
          title="Redefining Property Management Excellence"
          subtitle="We combine hospitality expertise with cutting-edge technology to create exceptional experiences for property owners and their guests."
          primaryCta={{ text: "Partner With Us", href: "/contact" }}
          secondaryCta={{ text: "View Our Services", href: "/services" }}
          backgroundImage="/luxury-modern-apartment-interior-with-city-view.jpg"
        />

        {/* Mission & Vision */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <SectionHeader
                subtitle="Our Mission"
                title="Maximizing Your Investment Potential"
                description="We exist to transform property ownership into a truly passive income stream while delivering exceptional experiences that guests remember and recommend."
                centered={false}
              />
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="rounded-2xl bg-muted/30 p-8 transition-transform duration-300 hover:-translate-y-1">
                <h3 className="mb-4 text-2xl font-bold tracking-tight text-foreground">Our Mission</h3>
                <p className="text-lg leading-8 text-muted-foreground">
                  To revolutionize short-term rental management by combining personalized service with innovative
                  technology, ensuring maximum profitability for property owners while creating unforgettable
                  experiences for guests.
                </p>
              </div>
              <div className="rounded-2xl bg-primary/5 p-8 transition-transform duration-300 hover:-translate-y-1">
                <h3 className="mb-4 text-2xl font-bold tracking-tight text-foreground">Our Vision</h3>
                <p className="text-lg leading-8 text-muted-foreground">
                  To become the most trusted property management partner globally, setting new standards for service
                  excellence and helping property owners achieve financial freedom through optimized rental income.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <StatsSection
          stats={[
            { value: "200+", label: "Properties Managed" },
            { value: "30%", label: "Average Revenue Increase" },
            { value: "98%", label: "Client Retention Rate" },
            { value: "4.9", label: "Average Guest Rating" },
          ]}
        />

        {/* Values (accent icons) */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeader
              subtitle="Our Values"
              title="The Principles That Guide Everything We Do"
              description="Our core values shape every interaction, decision, and service we provide to ensure exceptional outcomes for all stakeholders."
            />
            <div className="icons-highlight mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
              {values.map((value, index) => (
                <div key={index} className="relative pl-16 transition-transform duration-300 hover:-translate-y-0.5">
                  <dt className="text-base font-semibold leading-7 text-foreground">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary border border-[--color-highlight] transition-transform duration-300">
                      <value.icon className="h-6 w-6" />
                    </div>
                    {value.title}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-muted-foreground">{value.description}</dd>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-muted/30 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeader
              subtitle="Our Journey"
              title="Building Excellence Since 2019"
              description="From a small startup to an industry leader, our growth reflects our commitment to innovation and exceptional service."
            />
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:max-w-4xl">
              <div className="relative">
                {/* ligne centrale */}
                <div className="absolute left-8 top-0 h-full w-px bg-border lg:left-1/2 lg:-translate-x-px" />
                <div className="space-y-12">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="relative flex items-center">
                      {/* halo + badge année */}
                      <div className="pointer-events-none absolute left-0 -top-2 h-16 w-16 rounded-full bg-[--color-highlight] opacity-10 blur-xl lg:left-1/2 lg:-translate-x-1/2" />
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-background border-4 border-[--color-highlight] shadow-sm lg:absolute lg:left-1/2 lg:-translate-x-1/2">
                        <Badge variant="highlight" className="text-xs font-bold">{milestone.year}</Badge>
                      </div>

                      <div
                        className={cnTimeline(index)}
                      >
                        <h3 className="text-lg font-semibold text-foreground">{milestone.title}</h3>
                        <p className="mt-2 text-sm text-muted-foreground">{milestone.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeader
              subtitle="Meet Our Team"
              title="The Experts Behind Your Success"
              description="Our experienced team combines hospitality expertise, technology innovation, and genuine care to deliver exceptional results."
            />
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:grid-cols-4">
              {teamMembers.map((member, index) => (
                <Card key={index} className="overflow-hidden transition-transform duration-300 hover:-translate-y-1">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                    <p className="mb-3 text-sm font-medium text-[--color-highlight]">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="bg-muted/30 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeader
              subtitle="Our Achievements"
              title="Recognition and Results That Speak for Themselves"
              description="Our commitment to excellence has earned us industry recognition and, more importantly, the trust of our clients."
            />
            <div className="icons-highlight mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              {achievements.map((achievement, index) => (
                <div key={index} className="relative pl-16 transition-transform duration-300 hover:-translate-y-0.5">
                  <dt className="text-base font-semibold leading-7 text-foreground">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary border border-[--color-highlight]">
                      <achievement.icon className="h-6 w-6" />
                    </div>
                    {achievement.title}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-muted-foreground">{achievement.description}</dd>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <CtaSection
          title="Ready to Experience the IB Signature Difference?"
          description="Join our growing family of successful property owners and discover what personalized, professional management can do for your investment."
          primaryCta={{ text: "Start Your Partnership", href: "/contact" }}
          secondaryCta={{ text: "Explore Our Services", href: "/services" }}
          variant="accent"
        />
      </main>

      <Footer />
    </div>
  );
}

function cnTimeline(index: number) {
  const leftSide = index % 2 === 0;
  const side = leftSide ? "lg:pr-8 lg:text-right" : "lg:pl-8";
  const align = leftSide ? "" : "lg:ml-auto";
  return `ml-24 lg:ml-0 ${side} lg:w-1/2 ${align}`;
}
