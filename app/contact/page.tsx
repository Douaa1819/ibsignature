"use client";

import { useState } from "react";
import type { NextPage } from 'next';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  TrendingUp,
  Users,
  ShieldCheck,
  HelpCircle,
  CheckCircle,
  MessageCircle,
  Calendar,
  Star,
  ArrowRight,
  Building2,
  Sparkles,
  Home
} from 'lucide-react';

// --- Données de la page (extraites du PDF) ---
const contactInfo = [
  { 
    icon: MapPin, 
    title: "Our Office", 
    detail: "Casablanca, Morocco",
    subDetail: "Downtown, business district"
  },
  { 
    icon: Phone, 
    title: "Phone", 
    detail: "+212 661 215 698", 
    href: "tel:+212661215698",
    subDetail: "Available 7 days a week"
  },
  { 
    icon: Mail, 
    title: "Email", 
    detail: "contact@partnershotels.ma", 
    href: "mailto:contact@partnershotels.ma",
    subDetail: "Response within 24h"
  },
  { 
    icon: Clock, 
    title: "Hours", 
    detail: "Mon - Sat: 9am to 6pm",
    subDetail: "24/7 emergency support"
  },
];

const faqs = [
  {
    question: "What types of properties do you manage?",
    answer: "We manage all types of properties for short-term rentals: apartments, houses, luxury villas, and commercial properties. Each property benefits from a personalized strategy.",
  },
  {
    question: "What are your management fees?",
    answer: "Our fees are a competitive percentage of rental income, generally between 15-25% depending on the services chosen. We offer transparent pricing with no hidden fees, detailed during our free consultation.",
  },
  {
    question: "How quickly can you get started?",
    answer: "Generally, we can get your property online and ready for bookings within 1 to 2 weeks after signing the management agreement, including preparation and photography.",
  },
  {
    question: "Do you handle communication with travelers?",
    answer: "Yes, we manage 100% of communications: bookings, pre-arrival questions, welcome, assistance during the stay, and follow-up after departure. Support available in French, English and Arabic.",
  },
  {
    question: "How do you ensure the security of my property?",
    answer: "We use rigorous identity verification systems, comprehensive insurance, regular inspections, and strict security protocols to protect your investment.",
  },
  {
    question: "What is the average return on investment?",
    answer: "Our clients see on average a 30% increase in their rental income compared to traditional rental, with optimized occupancy rates and dynamic pricing.",
  },
];

const stats = [
  { icon: TrendingUp, value: "+30%", label: "Additional revenue" },
  { icon: Users, value: "500+", label: "Satisfied travelers" },
  { icon: Building2, value: "50+", label: "Properties managed" },
  { icon: Star, value: "4.9/5", label: "Client satisfaction" },
];

// --- Composants ---
const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300">
    {children}
  </a>
);

// --- Composant de la page ---
const ContactPage: NextPage = () => {
  const [pending, setPending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (pending) return;
    setPending(true);

    try {
      // Simule un envoi de formulaire
      await new Promise((r) => setTimeout(r, 2000));
      setSubmitted(true);
      (e.currentTarget as HTMLFormElement).reset();
    } catch (err) {
      console.error(err);
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="bg-[#0d111e] text-white min-h-screen font-sans overflow-x-hidden">
      {/* --- Header --- */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 bg-[#0d111e]/95 backdrop-blur-md z-50 border-b border-gray-800/50"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex items-center gap-2 sm:gap-3">
              <Home className="h-6 w-6 sm:h-7 sm:w-7 text-pink-500" />
              <span className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">IB Signature</span>
            </div>
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/services">Services</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </nav>
            <a
              href="#"
              className="px-4 py-2 sm:px-6 sm:py-2.5 bg-gradient-to-r from-[#ff4d6d] to-pink-600 text-white text-sm sm:text-base font-semibold rounded-full hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 transform hover:scale-105"
            >
              <span className="hidden sm:inline">Become a Host</span>
              <span className="sm:hidden">Join</span>
            </a>
          </div>
        </div>
      </motion.header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* --- Hero Section --- */}
        <section className="relative my-8 sm:my-12 md:my-20 w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl sm:rounded-3xl overflow-hidden flex items-center justify-center text-center p-4 sm:p-6 lg:p-8">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Bureau moderne avec vue sur Casablanca"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d111e] via-[#0d111e]/50 to-transparent z-10"></div>
          <div className="relative z-20 flex flex-col items-center gap-6 max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-pink-500/10 border border-pink-500/20 rounded-full px-4 py-2 text-pink-400 text-sm font-medium mb-4">
              <MessageCircle className="h-4 w-4" />
              Let's talk about your project
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">Contact</span> us
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl leading-relaxed">
              Ready to maximize your property's potential? Let's discuss how we can transform your investment into an optimal source of revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 sm:mt-6">
              <a
                href="#contact-form"
                className="px-8 py-4 bg-gradient-to-r from-[#ff4d6d] to-pink-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-pink-500/25 transition-all transform hover:scale-105"
              >
                Become a Partner
              </a>
              <a
                href="tel:+212661215698"
                className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-full hover:bg-white/5 transition-all transform hover:scale-105"
              >
                Call now
              </a>
            </div>
          </div>
        </section>

        {/* --- Stats Section --- */}
        <section className="py-8 sm:py-12 mb-12 sm:mb-16 lg:mb-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-gradient-to-br from-gray-900/60 to-gray-800/40 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-gray-700/50 text-center">
                <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 text-pink-500 mx-auto mb-2 sm:mb-3" />
                <p className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-gray-400 text-xs sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- Formulaire et Infos de Contact --- */}
        <section id="contact-form" className="py-8 sm:py-12 md:py-20">
          <div className="grid lg:grid-cols-5 gap-8 sm:gap-12">
            
            {/* Colonne d'informations */}
            <div className="lg:col-span-2 space-y-6 sm:space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
                  Let's get in <span className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">touch</span>
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-gray-400 leading-relaxed">
                  Fill out the form or use our direct contact information. 
                  Our team of experts responds within 24 hours to discuss your project.
                </p>
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.title} className="group">
                    <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-gradient-to-br from-gray-900/40 to-gray-800/30 rounded-xl sm:rounded-2xl border border-gray-700/50 hover:border-pink-500/30 transition-all duration-300">
                      <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-lg sm:rounded-xl bg-pink-500/10 border border-pink-500/20 group-hover:bg-pink-500/20 transition-colors">
                        <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-pink-500" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-semibold text-base sm:text-lg mb-1">{info.title}</h3>
                        {info.href ? (
                          <a 
                            href={info.href} 
                            className="text-pink-400 hover:text-pink-300 transition-colors font-medium block mb-1"
                          >
                            {info.detail}
                          </a>
                        ) : (
                          <p className="text-white font-medium mb-1">{info.detail}</p>
                        )}
                        <p className="text-gray-500 text-xs sm:text-sm">{info.subDetail}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Contact Cards */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-4 sm:pt-6">
                <a
                  href="tel:+212661215698"
                  className="flex items-center justify-center gap-1 sm:gap-2 p-3 sm:p-4 bg-gradient-to-r from-green-600/20 to-green-700/10 border border-green-500/30 rounded-lg sm:rounded-xl hover:border-green-400/50 transition-all group"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                  <span className="text-xs sm:text-sm font-medium">Direct call</span>
                </a>
                <a
                  href="mailto:contact@partnershotels.ma"
                  className="flex items-center justify-center gap-1 sm:gap-2 p-3 sm:p-4 bg-gradient-to-r from-blue-600/20 to-blue-700/10 border border-blue-500/30 rounded-lg sm:rounded-xl hover:border-blue-400/50 transition-all group"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                  <span className="text-xs sm:text-sm font-medium">Email</span>
                </a>
              </div>
            </div>

            {/* Colonne du formulaire */}
            <div className="lg:col-span-3">
              <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/40 p-4 sm:p-6 lg:p-8 xl:p-10 rounded-2xl sm:rounded-3xl border border-gray-700/50">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center text-center py-8 sm:py-12">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                      <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-green-500" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">Message sent successfully!</h3>
                    <p className="text-sm sm:text-base text-gray-300 max-w-sm mb-6 sm:mb-8 leading-relaxed">
                      Thank you for contacting us. A member of our expert team will get back to you as soon as possible.
                    </p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-3 bg-gradient-to-r from-[#ff4d6d] to-pink-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-pink-500/25 transition-all"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="text-center mb-6 sm:mb-8">
                      <h3 className="text-xl sm:text-2xl font-bold mb-2">Partnership request</h3>
                      <p className="text-sm sm:text-base text-gray-400">Let's transform your property into success together</p>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-3 text-gray-300">
                            Full name *
                          </label>
                          <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            required 
                            className="w-full bg-gray-800/50 border border-gray-600 rounded-xl p-4 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all placeholder:text-gray-500" 
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-3 text-gray-300">
                            Email *
                          </label>
                          <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            required 
                            className="w-full bg-gray-800/50 border border-gray-600 rounded-xl p-4 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all placeholder:text-gray-500" 
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>
                      
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium mb-3 text-gray-300">
                            Phone
                          </label>
                          <input 
                            type="tel" 
                            id="phone" 
                            name="phone" 
                            className="w-full bg-gray-800/50 border border-gray-600 rounded-xl p-4 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all placeholder:text-gray-500" 
                            placeholder="+212 6XX XXX XXX"
                          />
                        </div>
                        <div>
                          <label htmlFor="property_type" className="block text-sm font-medium mb-3 text-gray-300">
                            Property type
                          </label>
                          <select 
                            id="property_type" 
                            name="property_type" 
                            className="w-full bg-gray-800/50 border border-gray-600 rounded-xl p-4 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all text-white"
                          >
                            <option value="">Select</option>
                            <option value="apartment">Apartment</option>
                            <option value="house">House</option>
                            <option value="villa">Villa</option>
                            <option value="studio">Studio</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="property_location" className="block text-sm font-medium mb-3 text-gray-300">
                          Property location
                        </label>
                        <input 
                          type="text" 
                          id="property_location" 
                          name="property_location" 
                          className="w-full bg-gray-800/50 border border-gray-600 rounded-xl p-4 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all placeholder:text-gray-500" 
                          placeholder="Ex: Casablanca, Rabat, Marrakech..."
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-3 text-gray-300">
                          Your message *
                        </label>
                        <textarea 
                          id="message" 
                          name="message" 
                          rows={5} 
                          required 
                          className="w-full bg-gray-800/50 border border-gray-600 rounded-xl p-4 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all placeholder:text-gray-500 resize-none" 
                          placeholder="Tell us about your project, your goals, and how we can help you..."
                        />
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <input 
                          type="checkbox" 
                          id="consent" 
                          name="consent" 
                          required 
                          className="mt-1 w-4 h-4 text-pink-500 bg-gray-800 border-gray-600 rounded focus:ring-pink-500 focus:ring-2"
                        />
                        <label htmlFor="consent" className="text-sm text-gray-400 leading-relaxed">
                          I agree to be contacted by IB Signature regarding my real estate projects and I consent to the processing of my personal data according to the privacy policy.
                        </label>
                      </div>
                      
                      <button 
                        type="submit" 
                        disabled={pending} 
                        className="w-full px-8 py-4 bg-gradient-to-r from-[#ff4d6d] to-pink-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-pink-500/25 disabled:opacity-50 disabled:cursor-wait transition-all duration-300 transform hover:scale-[1.02] disabled:hover:scale-100"
                      >
                        {pending ? (
                          <div className="flex items-center justify-center gap-3">
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            Sending...
                          </div>
                        ) : (
                          <div className="flex items-center justify-center gap-2">
                            Send request
                            <ArrowRight className="w-5 h-5" />
                          </div>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* --- FAQ Section --- */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-28">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Frequently Asked <span className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto">
              Find quick answers to the most common questions about our property management services.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900/40 to-gray-800/30 border border-gray-700/50 rounded-xl sm:rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-4 sm:p-6 text-left flex items-center justify-between hover:bg-gray-800/30 transition-colors"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-pink-500/10 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                      <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5 text-pink-500" />
                    </div>
                    <h3 className="font-semibold text-base sm:text-lg text-white pr-2 sm:pr-4">{faq.question}</h3>
                  </div>
                  <div className={`transform transition-transform duration-200 ${openFaq === index ? 'rotate-180' : ''}`}>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 rotate-90" />
                  </div>
                </button>
                
                {openFaq === index && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                    <div className="pl-11 sm:pl-14">
                      <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* --- CTA Section --- */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/40 p-6 sm:p-8 lg:p-12 xl:p-16 rounded-2xl sm:rounded-3xl border border-gray-700/50 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-500/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-500/10 to-transparent rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-pink-500/10 border border-pink-500/20 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-pink-400 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                  <Sparkles className="h-3 w-3 sm:h-4 sm:w-4" />
                  Ready to get started?
                </div>
                
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                  Let's transform your <span className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">property</span> together
                </h2>
                
                <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
                  Join our satisfied owners and discover how to maximize your rental income with our expertise.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <a
                    href="tel:+212661215698"
                    className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-[#ff4d6d] to-pink-600 text-white text-sm sm:text-base font-bold rounded-full hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 transform hover:scale-105"
                  >
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                    Call now
                  </a>
                  <a
                    href="#contact-form"
                    className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 border border-gray-600 text-white text-sm sm:text-base font-semibold rounded-full hover:bg-white/5 transition-all transform hover:scale-105"
                  >
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                    Send a message
                  </a>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-700/50">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
                    Free consultation
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
                    Response within 24h
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
                    No commitment
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* --- Footer --- */}
      <footer className="border-t border-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-3">
              <Home className="h-6 w-6 text-pink-500" />
              <span className="text-xl font-bold">IB Signature</span>
            </div>
            <div className="flex gap-8">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/services">Services</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </div>
            <p className="text-sm text-gray-500">
              © 2024 IB Signature. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;