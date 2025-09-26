"use client";

import type { NextPage } from 'next';
import Image from 'next/image';
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
    title: "Conciergerie Airbnb",
    description: "Service complet qui prend soin de vos voyageurs, gère votre propriété et augmente vos revenus, sans aucun effort de votre part.",
    icon: ConciergeBell,
    imageSrc: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["Accueil personnalisé", "Support 24/7", "Communication multilingue"]
  },
  {
    title: "Gestion Complète de Propriété",
    description: "De la réservation au départ, nous gérons chaque étape de A à Z pour une tranquillité d'esprit totale.",
    icon: Home,
    imageSrc: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["Gestion des réservations", "Check-in/Check-out", "Maintenance préventive"]
  },
  {
    title: "Optimisation des Revenus",
    description: "Augmentez vos revenus de 30% en moyenne grâce à nos stratégies de tarification dynamique et d'optimisation.",
    icon: TrendingUp,
    imageSrc: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["Tarification dynamique", "Analyse de marché", "Stratégies personnalisées"]
  },
  {
    title: "Maintenance & Nettoyage",
    description: "Nous assurons la propreté impeccable et la maintenance régulière pour préserver et améliorer la valeur de votre bien.",
    icon: Wrench,
    imageSrc: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["Nettoyage professionnel", "Maintenance technique", "Inspection régulière"]
  },
];

// --- Services détaillés ---
const detailedServices = [
  { icon: Camera, title: "Photographie Professionnelle", description: "Photos haute qualité pour optimiser vos annonces" },
  { icon: Wifi, title: "Installation Technologique", description: "Smart locks, WiFi, équipements modernes" },
  { icon: MessageCircle, title: "Communication Client", description: "Gestion complète des messages et demandes" },
  { icon: Calendar, title: "Gestion du Planning", description: "Optimisation du calendrier et des disponibilités" },
  { icon: CreditCard, title: "Gestion Financière", description: "Suivi des paiements et reporting détaillé" },
  { icon: Shield, title: "Assurance & Protection", description: "Couverture complète et gestion des sinistres" }
];

// --- Données des avantages ---
const benefits = [
  {
    icon: BarChart2,
    title: "Croissance Prouvée des Revenus",
    description: "Nos clients voient en moyenne une augmentation de 30% de leurs revenus locatifs grâce à notre expertise.",
    stat: "+30%"
  },
  {
    icon: Clock,
    title: "Tranquillité d'Esprit Totale",
    description: "Concentrez-vous sur vos priorités pendant que nous gérons chaque aspect de votre propriété 24/7.",
    stat: "24/7"
  },
  {
    icon: Sparkles,
    title: "Expérience Client Premium",
    description: "Un service exceptionnel qui génère des évaluations élevées et des réservations répétées.",
    stat: "4.9★"
  },
  {
    icon: ShieldCheck,
    title: "Protection de la Propriété",
    description: "Un entretien complet qui préserve et améliore la valeur de votre investissement sur le long terme.",
    stat: "100%"
  },
];

// --- Composant de la page ---
const ServicesPage: NextPage = () => {
  return (
    <div className="bg-[#0d111e] text-white min-h-screen font-sans">
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
              Services Premium
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
              Nos <span className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl leading-relaxed">
              Nous offrons une gamme complète de services pour optimiser la gestion de votre propriété et maximiser vos revenus locatifs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 sm:mt-6">
              <a
                href="#services-grid"
                className="px-8 py-4 bg-gradient-to-r from-[#ff4d6d] to-pink-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-pink-500/25 transition-all transform hover:scale-105"
              >
                Découvrir nos services
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-full hover:bg-white/5 transition-all transform hover:scale-105"
              >
                Devenir partenaire
              </a>
            </div>
          </div>
        </section>

        {/* --- Services Grid Section --- */}
        <section id="services-grid" className="py-8 sm:py-12 md:py-20">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Une Solution pour <span className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">Chaque Besoin</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto">
              De la conciergerie complète à l'optimisation des revenus, découvrez nos services qui transforment votre propriété en source de revenus optimale.
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
              Services <span className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">Complémentaires</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto">
              Des services additionnels pour une expérience complète et professionnelle.
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
              Notre <span className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">Processus</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto">
              Un processus simple et efficace en 4 étapes pour transformer votre propriété.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="relative order-2 md:order-1">
              <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Processus de gestion immobilière moderne"
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
                  <h3 className="text-lg sm:text-xl font-bold mb-2">Consultation & Évaluation</h3>
                  <p className="text-sm sm:text-base text-gray-400">Analyse complète de votre propriété et définition de la stratégie optimale.</p>
                </div>
              </div>
              
              <div className="flex gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg flex-shrink-0">2</div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">Préparation & Optimisation</h3>
                  <p className="text-sm sm:text-base text-gray-400">Mise en place des équipements, photographie professionnelle et création des annonces.</p>
                </div>
              </div>
              
              <div className="flex gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg flex-shrink-0">3</div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">Lancement & Promotion</h3>
                  <p className="text-sm sm:text-base text-gray-400">Diffusion sur toutes les plateformes et début de la gestion complète.</p>
                </div>
              </div>
              
              <div className="flex gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg flex-shrink-0">4</div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">Gestion Continue</h3>
                  <p className="text-sm sm:text-base text-gray-400">Suivi permanent, optimisation et reporting mensuel de vos performances.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Benefits Section --- */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-28">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              L'Avantage <span className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">IB Signature</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto">
              Découvrez pourquoi les propriétaires nous font confiance pour leur tranquillité d'esprit et leur rentabilité.
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
                "IB Signature a transformé mon investissement immobilier. Mes revenus ont augmenté de 35% et je n'ai plus aucun souci de gestion."
              </blockquote>
              <div className="flex items-center justify-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base">
                  MK
                </div>
                <div className="text-left">
                  <div className="font-semibold text-sm sm:text-base">Mohamed Karim</div>
                  <div className="text-xs sm:text-sm text-gray-400">Propriétaire à Casablanca</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- CTA Section --- */}
        <section className="text-center py-12 sm:py-16 md:py-20 lg:py-28">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Prêt à <span className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">maximiser</span> vos revenus ?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
              Rejoignez nos propriétaires satisfaits et découvrez le potentiel inexploité de votre investissement immobilier.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 lg:px-10 bg-gradient-to-r from-[#ff4d6d] to-pink-600 text-white text-sm sm:text-base font-bold rounded-full hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 transform hover:scale-105"
              >
                Devenez Partenaire
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:+212661215698"
                className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 lg:px-10 border border-gray-600 text-white text-sm sm:text-base font-semibold rounded-full hover:bg-white/5 transition-all transform hover:scale-105"
              >
                Appelez-nous
                <span className="text-pink-400">+212 661 215 698</span>
              </a>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default ServicesPage;