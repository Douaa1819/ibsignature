"use client";

import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { SectionHeader } from "@/components/section-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  Building2,
  TrendingUp,
  Users,
  Calendar,
  CheckCircle,
  Star,
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Office Location",
    details: ["Casablanca, Morocco"],
  },
  {
    icon: Phone,
    title: "Phone Numbers",
    details: ["+212 661 215 698"],
  },
  {
    icon: Mail,
    title: "Email Addresses",
    details: ["contact@partnershotels.ma"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Friday: 8:00 AM - 8:00 PM", "Saturday: 9:00 AM - 6:00 PM", "Sunday: 10:00 AM - 4:00 PM"],
  },
];

const partnershipBenefits = [
  {
    icon: TrendingUp,
    title: "Revenue Growth",
    description: "Average 30% increase in rental income within the first year of partnership.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "Personal account manager and 24/7 support for all your property management needs.",
  },
  {
    icon: Building2,
    title: "Property Care",
    description: "Professional maintenance, cleaning, and guest services to protect your investment.",
  },
  {
    icon: Star,
    title: "Premium Positioning",
    description: "Strategic marketing and pricing to position your property as a premium rental option.",
  },
];

const partnershipProcess = [
  { step: "01", title: "Initial Consultation", description: "Free property assessment and revenue potential analysis.", duration: "30 minutes" },
  { step: "02", title: "Custom Proposal", description: "Tailored management plan with projected returns and service details.", duration: "2-3 days" },
  { step: "03", title: "Agreement & Setup", description: "Contract signing and property onboarding with professional photography.", duration: "1 week" },
  { step: "04", title: "Go Live", description: "Property listing activation and first booking management.", duration: "2-3 days" },
];

const faqs = [
  {
    question: "What types of properties do you manage?",
    answer:
      "We manage all types of short-term rental properties including apartments, condos, houses, and luxury estates in major metropolitan areas.",
  },
  {
    question: "What are your management fees?",
    answer:
      "Our management fees are competitive and based on a percentage of rental income. We provide transparent pricing with no hidden costs during your consultation.",
  },
  {
    question: "How quickly can you start managing my property?",
    answer:
      "Typically, we can have your property listed and ready for bookings within 1-2 weeks of signing the management agreement.",
  },
  {
    question: "Do you handle guest communications?",
    answer:
      "Yes, we handle all guest communications including pre-arrival instructions, check-in coordination, during-stay support, and post-stay follow-up.",
  },
];

export default function ContactPage() {
  const [pending, setPending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (pending) return;
    setPending(true);

    try {
      // Brancher ici votre intégration réelle (API route, n8n, Zapier, etc.)
      // const formData = new FormData(e.currentTarget);
      // await fetch("/api/contact", { method: "POST", body: formData });

      // Demo: on simule un envoi
      await new Promise((r) => setTimeout(r, 1200));
      // Option: afficher un toast si vous avez un système de notifications
      // toast.success("Message sent! We'll get back to you within 24 hours.");
      (e.currentTarget as HTMLFormElement).reset();
    } catch (err) {
      // toast.error("Something went wrong. Please try again.");
      console.error(err);
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        {/* Hero Section */}
        <HeroSection
          title="Let's Start Your Success Story"
          subtitle="Ready to maximize your property's potential? Get in touch with our team of experts and discover how we can transform your investment into a thriving rental business."
          primaryCta={{ text: "Schedule Consultation", href: "#contact-form" }}
          secondaryCta={{ text: "Call Us Now", href: "tel:+212 661 215 698" }}
          backgroundImage="/luxury-modern-apartment-interior-with-city-view.jpg"
        />

        {/* Contact Information */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeader
              subtitle="Get In Touch"
              title="Multiple Ways to Reach Our Team"
              description="Whether you prefer to call, email, or visit us in person, we're here to answer your questions and discuss your property management needs."
            />
            {/* Accent icônes */}
            <div className="icons-highlight mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:grid-cols-4">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="group text-center transition-transform duration-300 hover:-translate-y-1"
                >
                  <CardContent className="pt-6">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary border border-[--color-highlight] transition-transform duration-300 group-hover:scale-105">
                      <info.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-lg font-semibold mb-4">{info.title}</h3>
                    <div className="space-y-1">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-sm text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact-form" className="bg-muted/30 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <SectionHeader
                subtitle="Start Your Partnership"
                title="Tell Us About Your Property"
                description="Fill out the form below and we'll get back to you within 24 hours with a customized proposal for your property."
                centered={false}
              />
            </div>
            <div className="mx-auto mt-16 max-w-xl sm:mt-20 lg:max-w-none">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                {/* Form */}
                <Card className="lg:col-span-2 transition-transform duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageSquare className="h-5 w-5 text-[--color-highlight]" />
                      Contact Form
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
                        <div>
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input id="firstName" name="firstName" type="text" required />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input id="lastName" name="lastName" type="text" required />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input id="email" name="email" type="email" required />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input id="phone" name="phone" type="tel" />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="location">Property Location *</Label>
                        <Input id="location" name="location" type="text" placeholder="City, State" required />
                      </div>
                      <div>
                        <Label htmlFor="goals">Your Goals & Expectations</Label>
                        <Textarea
                          id="goals"
                          name="goals"
                          rows={4}
                          placeholder="Tell us about your goals for this property, expected timeline, and any specific requirements..."
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={pending}
                        className="w-full bg-[--color-highlight] text-[--color-highlight-foreground] hover:opacity-90 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        <span className="flex items-center justify-center gap-2">
                          {pending && (
                            <svg
                              className="animate-spin h-4 w-4"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                              />
                            </svg>
                          )}
                          {pending ? "Sending..." : "Send Message & Schedule Consultation"}
                        </span>
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                <div className="space-y-6">
                  <Card className="relative overflow-hidden transition-transform duration-300 hover:-translate-y-1">
                    <div className="pointer-events-none absolute -top-8 -right-8 h-28 w-28 rounded-full bg-green-100 opacity-30 blur-2xl" />
                    <CheckCircle
                      className="pointer-events-none absolute -top-3 -right-3 h-16 w-16 text-green-200 opacity-60"
                      aria-hidden="true"
                    />
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 relative z-10">
                        <Calendar className="h-5 w-5 text-[--color-highlight]" />
                        Quick Response
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4 relative z-10">
                        {[
                          "Response within 24 hours",
                          "Free property assessment",
                          "Custom revenue projections",
                          "No obligation consultation",
                        ].map((t, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span className="text-sm">{t}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="transition-transform duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <CardTitle>Emergency Contact</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        For existing clients with urgent property issues:
                      </p>
                      <Button
                        variant="outline"
                        className="w-full bg-transparent hover:border-[--color-highlight] hover:text-[--color-highlight] transition-colors"
                      >
                        <Phone className="h-4 w-4 mr-2 text-[--color-highlight]" />
                        Call Emergency Line
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeader
              subtitle="Partnership Benefits"
              title="What You Get When You Partner With Us"
              description="Our comprehensive approach ensures maximum returns while providing complete peace of mind for property owners."
            />
            {/* Icônes en accent + animation hover */}
            <div className="icons-highlight mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              {partnershipBenefits.map((benefit, index) => (
                <div key={index} className="relative pl-16 transition-transform duration-300 hover:-translate-y-1">
                  <dt className="text-base font-semibold leading-7 text-foreground">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary border border-[--color-highlight] transition-transform duration-300 hover:scale-105">
                      <benefit.icon className="h-6 w-6" />
                    </div>
                    {benefit.title}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-muted-foreground">
                    {benefit.description}
                  </dd>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Process */}
        <section className="bg-muted/30 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeader
              subtitle="Partnership Process"
              title="How We Get Started Together"
              description="Our streamlined onboarding process gets your property generating income quickly while ensuring everything is set up for long-term success."
            />
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:max-w-4xl">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-4">
                {partnershipProcess.map((step, index) => (
                  <Card
                    key={index}
                    className="relative transition-transform duration-300 hover:-translate-y-1"
                  >
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between mb-4">
                        <Badge variant="highlight" className="text-xs font-bold">{step.step}</Badge>
                        <Badge variant="outline" className="text-xs border-[--color-highlight] text-[--color-highlight]">
                          {step.duration}
                        </Badge>
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeader
              subtitle="Frequently Asked Questions"
              title="Common Questions About Our Services"
              description="Get quick answers to the most common questions about our property management services and partnership process."
            />
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:max-w-4xl">
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <Card key={index} className="transition-transform duration-300 hover:-translate-y-1">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
