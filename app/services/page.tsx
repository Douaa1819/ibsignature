"use client";

import type { NextPage } from 'next';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  ConciergeBell, 
  Home, 
  TrendingUp, 
  Wrench,
  ShieldCheck,
  Sparkles,
  Clock,
  BarChart2,
  Star,
  Users,
  Wifi,
  Camera,
  MessageCircle,
  Calendar,
  CreditCard,
  Shield,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

// --- Données des services (extraites du PDF) ---
const mainServices = [
  {
    title: "Airbnb Concierge",
    description: "Complete service that takes care of your travelers, manages your property and increases your revenue, without any effort on your part.",
    icon: ConciergeBell,
    imageSrc: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["Personalized welcome", "24/7 support", "Multilingual communication"]
  },
  {
    title: "Complete Property Management",
    description: "From booking to departure, we manage every step from A to Z for total peace of mind.",
    icon: Home,
    imageSrc: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["Booking management", "Check-in/Check-out", "Preventive maintenance"]
  },
  {
    title: "Revenue Optimization",
    description: "Increase your revenue by 30% on average thanks to our dynamic pricing and optimization strategies.",
    icon: TrendingUp,
    imageSrc: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["Dynamic pricing", "Market analysis", "Personalized strategies"]
  },
  {
    title: "Maintenance & Cleaning",
    description: "We ensure impeccable cleanliness and regular maintenance to preserve and improve the value of your property.",
    icon: Wrench,
    imageSrc: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["Professional cleaning", "Technical maintenance", "Regular inspection"]
  },
];

// --- Services détaillés ---
const detailedServices = [
  { icon: Camera, title: "Professional Photography", description: "High-quality photos to optimize your listings" },
  { icon: Wifi, title: "Technology Installation", description: "Smart locks, WiFi, modern equipment" },
  { icon: MessageCircle, title: "Client Communication", description: "Complete management of messages and requests" },
  { icon: Calendar, title: "Schedule Management", description: "Calendar and availability optimization" },
  { icon: CreditCard, title: "Financial Management", description: "Payment tracking and detailed reporting" },
  { icon: Shield, title: "Insurance & Protection", description: "Complete coverage and claims management" }
];

// --- Données des avantages ---
const benefits = [
  {
    icon: BarChart2,
    title: "Proven Revenue Growth",
    description: "Our clients see on average a 30% increase in their rental income thanks to our expertise.",
    stat: "+30%"
  },
  {
    icon: Clock,
    title: "Total Peace of Mind",
    description: "Focus on your priorities while we manage every aspect of your property 24/7.",
    stat: "24/7"
  },
  {
    icon: Sparkles,
    title: "Premium Client Experience",
    description: "Exceptional service that generates high ratings and repeat bookings.",
    stat: "4.9★"
  },
  {
    icon: ShieldCheck,
    title: "Property Protection",
    description: "Complete maintenance that preserves and improves the value of your investment in the long term.",
    stat: "100%"
  },
];

// --- Composants ---
const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300">
    {children}
  </a>
);

// --- Composant de la page ---
const ServicesPage: NextPage = () => {
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
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Salon moderne luxueux avec vue panoramique"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d111e] via-[#0d111e]/50 to-transparent z-10"></div>
          <div className="relative z-20 flex flex-col items-center gap-6 max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-pink-500/10 border border-pink-500/20 rounded-full px-4 py-2 text-pink-400 text-sm font-medium mb-4">
              <Sparkles className="h-4 w-4" />
              Premium Services
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
              Our <span className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl leading-relaxed">
              We offer a complete range of services to optimize the management of your property and maximize your rental income.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 sm:mt-6">
              <a
                href="#services-grid"
                className="px-8 py-4 bg-gradient-to-r from-[#ff4d6d] to-pink-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-pink-500/25 transition-all transform hover:scale-105"
              >
                Discover our services
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-full hover:bg-white/5 transition-all transform hover:scale-105"
              >
                Become a partner
              </a>
            </div>
          </div>
        </section>

        {/* --- Services Grid Section --- */}
        <section id="services-grid" className="py-8 sm:py-12 md:py-20">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              A Solution for <span className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">Every Need</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto">
              From complete concierge to revenue optimization, discover our services that transform your property into an optimal source of income.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {mainServices.map((service, index) => (
              <div key={service.title} className="bg-gradient-to-br from-gray-900/60 to-gray-800/40 rounded-xl sm:rounded-2xl overflow-hidden group border border-gray-700/50 hover:border-pink-500/30 transition-all duration-500">
                <div className="relative h-48 sm:h-56 lg:h-64 w-full overflow-hidden">
                  <Image
                    src={service.imageSrc}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-pink-500/20 backdrop-blur-sm rounded-lg sm:rounded-xl flex items-center justify-center border border-pink-500/30">
                      <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-pink-400" />
                    </div>
                  </div>
                </div>
                <div className="p-4 sm:p-6 lg:p-8">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">{service.title}</h3>
                  <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 leading-relaxed">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 sm:gap-3">
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-pink-500 flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- Detailed Services Section --- */}
        <section className="py-8 sm:py-12 md:py-20">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Additional <span className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto">
              Additional services for a complete and professional experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {detailedServices.map((service, index) => (
              <div key={service.title} className="group">
                <div className="bg-gradient-to-br from-gray-900/40 to-gray-800/30 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-gray-700/50 hover:border-pink-500/30 transition-all duration-300 h-full">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-pink-500/10 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-pink-500/20 transition-colors">
                    <service.icon className="h-6 w-6 sm:h-7 sm:w-7 text-pink-500" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{service.title}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- Process Section --- */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-28">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Our <span className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto">
              A simple and efficient 4-step process to transform your property.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="relative order-2 md:order-1">
              <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Modern property management process"
                width={600}
                height={500}
                className="rounded-xl sm:rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent rounded-xl sm:rounded-2xl"></div>
            </div>
            
            <div className="space-y-6 sm:space-y-8 order-1 md:order-2">
              <div className="flex gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg flex-shrink-0">1</div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">Consultation & Evaluation</h3>
                  <p className="text-sm sm:text-base text-gray-400">Complete analysis of your property and definition of the optimal strategy.</p>
                </div>
              </div>
              
              <div className="flex gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg flex-shrink-0">2</div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">Preparation & Optimization</h3>
                  <p className="text-sm sm:text-base text-gray-400">Equipment setup, professional photography and listing creation.</p>
                </div>
              </div>
              
              <div className="flex gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg flex-shrink-0">3</div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">Launch & Promotion</h3>
                  <p className="text-sm sm:text-base text-gray-400">Distribution on all platforms and start of complete management.</p>
                </div>
              </div>
              
              <div className="flex gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg flex-shrink-0">4</div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">Continuous Management</h3>
                  <p className="text-sm sm:text-base text-gray-400">Permanent monitoring, optimization and monthly reporting of your performance.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Benefits Section --- */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-28">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              The <span className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">IB Signature</span> Advantage
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto">
              Discover why owners trust us for their peace of mind and profitability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {benefits.map((benefit, index) => (
              <div key={benefit.title} className="text-center group">
                <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/40 p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl border border-gray-700/50 hover:border-pink-500/30 transition-all duration-300 h-full">
                  <div className="mx-auto mb-4 sm:mb-6 flex h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 items-center justify-center rounded-full bg-pink-500/10 border border-pink-500/20 group-hover:bg-pink-500/20 transition-colors">
                    <benefit.icon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-pink-500" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-pink-400 mb-2 sm:mb-3">{benefit.stat}</div>
                  <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">{benefit.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- Testimonial Section --- */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/40 p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl border border-gray-700/50">
              <div className="flex justify-center mb-4 sm:mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-gray-200 mb-6 sm:mb-8 leading-relaxed">
                "IB Signature transformed my real estate investment. My income increased by 35% and I no longer have any management worries."
              </blockquote>
              <div className="flex items-center justify-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base">
                  MK
                </div>
                <div className="text-left">
                  <div className="font-semibold text-sm sm:text-base">Mohamed Karim</div>
                  <div className="text-xs sm:text-sm text-gray-400">Property Owner in Casablanca</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- CTA Section --- */}
        <section className="text-center py-12 sm:py-16 md:py-20 lg:py-28">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Ready to <span className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">maximize</span> your revenue?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
              Join our satisfied owners and discover the untapped potential of your real estate investment.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 lg:px-10 bg-gradient-to-r from-[#ff4d6d] to-pink-600 text-white text-sm sm:text-base font-bold rounded-full hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 transform hover:scale-105"
              >
                Become a Partner
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:+212661215698"
                className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 lg:px-10 border border-gray-600 text-white text-sm sm:text-base font-semibold rounded-full hover:bg-white/5 transition-all transform hover:scale-105"
              >
                Call us
                <span className="text-pink-400">+212 661 215 698</span>
              </a>
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

export default ServicesPage;