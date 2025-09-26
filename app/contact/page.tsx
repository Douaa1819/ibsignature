import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { SectionHeader } from "@/components/section-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
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
} from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Office Location",
    details: ["123 Business District", "New York, NY 10001", "United States"],
  },
  {
    icon: Phone,
    title: "Phone Numbers",
    details: ["+1 (555) 123-4567", "+1 (555) 987-6543", "24/7 Emergency Line"],
  },
  {
    icon: Mail,
    title: "Email Addresses",
    details: ["hello@ibsignature.com", "partnerships@ibsignature.com", "support@ibsignature.com"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Friday: 8:00 AM - 8:00 PM", "Saturday: 9:00 AM - 6:00 PM", "Sunday: 10:00 AM - 4:00 PM"],
  },
]

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
]

const partnershipProcess = [
  {
    step: "01",
    title: "Initial Consultation",
    description: "Free property assessment and revenue potential analysis.",
    duration: "30 minutes",
  },
  {
    step: "02",
    title: "Custom Proposal",
    description: "Tailored management plan with projected returns and service details.",
    duration: "2-3 days",
  },
  {
    step: "03",
    title: "Agreement & Setup",
    description: "Contract signing and property onboarding with professional photography.",
    duration: "1 week",
  },
  {
    step: "04",
    title: "Go Live",
    description: "Property listing activation and first booking management.",
    duration: "2-3 days",
  },
]

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
]

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        {/* Hero Section */}
        <HeroSection
          title="Let's Start Your Success Story"
          subtitle="Ready to maximize your property's potential? Get in touch with our team of experts and discover how we can transform your investment into a thriving rental business."
          primaryCta={{
            text: "Schedule Consultation",
            href: "#contact-form",
          }}
          secondaryCta={{
            text: "Call Us Now",
            href: "tel:+15551234567",
          }}
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
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:grid-cols-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                      <info.icon className="h-8 w-8 text-primary" />
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
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 lg:grid-cols-3">
                <div className="lg:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <MessageSquare className="h-5 w-5" />
                        Contact Form
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
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
                      <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
                        <div>
                          <Label htmlFor="propertyType">Property Type *</Label>
                          <Select name="propertyType" required>
                            <SelectTrigger>
                              <SelectValue placeholder="Select property type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="apartment">Apartment</SelectItem>
                              <SelectItem value="condo">Condominium</SelectItem>
                              <SelectItem value="house">House</SelectItem>
                              <SelectItem value="townhouse">Townhouse</SelectItem>
                              <SelectItem value="villa">Villa</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="bedrooms">Number of Bedrooms</Label>
                          <Select name="bedrooms">
                            <SelectTrigger>
                              <SelectValue placeholder="Select bedrooms" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="studio">Studio</SelectItem>
                              <SelectItem value="1">1 Bedroom</SelectItem>
                              <SelectItem value="2">2 Bedrooms</SelectItem>
                              <SelectItem value="3">3 Bedrooms</SelectItem>
                              <SelectItem value="4">4 Bedrooms</SelectItem>
                              <SelectItem value="5+">5+ Bedrooms</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="location">Property Location *</Label>
                        <Input id="location" name="location" type="text" placeholder="City, State" required />
                      </div>
                      <div>
                        <Label htmlFor="currentStatus">Current Property Status</Label>
                        <Select name="currentStatus">
                          <SelectTrigger>
                            <SelectValue placeholder="Select current status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="not-rented">Not Currently Rented</SelectItem>
                            <SelectItem value="self-managed">Self-Managed STR</SelectItem>
                            <SelectItem value="other-manager">Managed by Another Company</SelectItem>
                            <SelectItem value="long-term">Long-Term Rental</SelectItem>
                            <SelectItem value="personal-use">Personal Use Only</SelectItem>
                          </SelectContent>
                        </Select>
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
                      <div>
                        <Label htmlFor="preferredContact">Preferred Contact Method</Label>
                        <Select name="preferredContact">
                          <SelectTrigger>
                            <SelectValue placeholder="How would you like us to contact you?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="email">Email</SelectItem>
                            <SelectItem value="phone">Phone Call</SelectItem>
                            <SelectItem value="text">Text Message</SelectItem>
                            <SelectItem value="video">Video Call</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <Button type="submit" className="w-full">
                        Send Message & Schedule Consultation
                      </Button>
                    </CardContent>
                  </Card>
                </div>
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Calendar className="h-5 w-5" />
                        Quick Response
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm">Response within 24 hours</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm">Free property assessment</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm">Custom revenue projections</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm">No obligation consultation</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Emergency Contact</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        For existing clients with urgent property issues:
                      </p>
                      <Button variant="outline" className="w-full bg-transparent">
                        <Phone className="h-4 w-4 mr-2" />
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
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              {partnershipBenefits.map((benefit, index) => (
                <div key={index} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-foreground">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                      <benefit.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    {benefit.title}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-muted-foreground">{benefit.description}</dd>
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
                  <Card key={index} className="relative">
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between mb-4">
                        <Badge variant="secondary" className="text-xs font-bold">
                          {step.step}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
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
                  <Card key={index}>
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
  )
}
