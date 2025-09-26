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
  BarChart2
} from 'lucide-react';

// --- Données des services (extraites du PDF) ---
const services = [
  {
    title: "Conciergerie Airbnb",
    description: "Prend soin de vos voyageurs, gère votre propriété et augmente vos revenus, sans effort de votre part.",
    icon: ConciergeBell,
    imageSrc: "/service-concierge.jpg", // Image: Cloche d'hôtel sur un comptoir
  },
  {
    title: "Gestion Complète",
    description: "De la réservation au départ, nous gérons chaque étape de A à Z pour une tranquillité d'esprit totale.",
    icon: Home,
    imageSrc: "/service-property.jpg", // Image: Façade d'une belle maison moderne
  },
  {
    title: "Optimisation des Revenus",
    description: "Augmentez vos revenus de 30% en moyenne grâce à nos stratégies de tarification dynamique.",
    icon: TrendingUp,
    imageSrc: "/service-revenue.jpg", // Image: Piles de pièces de monnaie en croissance
  },
  {
    title: "Maintenance & Nettoyage",
    description: "Nous assurons la propreté et la maintenance régulière pour préserver la valeur de votre bien.",
    icon: Wrench,
    imageSrc: "/service-cleaning.jpg", // Image: Produits de nettoyage professionnels
  },
];

// --- Données des avantages ---
const benefits = [
  {
    icon: BarChart2,
    title: "Croissance Prouvée des Revenus",
    description: "Nos clients voient en moyenne une augmentation de 30% de leurs revenus locatifs.",
  },
  {
    icon: Clock,
    title: "Tranquillité d'Esprit Totale",
    description: "Concentrez-vous sur vos priorités pendant que nous gérons chaque aspect de votre propriété.",
  },
  {
    icon: Sparkles,
    title: "Expérience Client Premium",
    description: "Un service exceptionnel qui génère des évaluations élevées et des réservations répétées.",
  },
  {
    icon: ShieldCheck,
    title: "Protection de la Propriété",
    description: "Un entretien complet qui préserve et améliore la valeur de votre investissement sur le long terme.",
  },
]

// --- Composant de la page ---
const ServicesPage: NextPage = () => {
  return (
    <div className="bg-[#0d111e] text-white min-h-screen font-sans">
      {/* Remplacez par votre composant de Navigation */}
      {/* <Navigation /> */}

      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- Hero Section --- */}
        <section className="relative my-12 md:my-20 w-full h-[450px] rounded-2xl overflow-hidden flex items-center justify-center text-center p-4">
          <Image
            src="/modern-living-room.jpg" // IMAGE : Un salon luxueux et moderne
            alt="Nos Services de Gestion Immobilière"
            layout="fill"
            objectFit="cover"
            className="z-0 opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d111e] via-transparent to-[#0d111e]/50 z-10"></div>
          <div className="relative z-20 flex flex-col items-center gap-4 max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold">Nos Services</h1>
            <p className="text-lg text-gray-300">
              Nous offrons une gamme complète de services pour optimiser la gestion de votre propriété et maximiser vos revenus.
            </p>
            <a
              href="#services-grid"
              className="mt-4 px-8 py-3 bg-[#ff4d6d] text-white font-semibold rounded-full hover:bg-pink-600 transition-transform transform hover:scale-105"
            >
              Découvrir
            </a>
          </div>
        </section>

        {/* --- Services Grid Section --- */}
        <section id="services-grid" className="py-12 md:py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Une Solution pour Chaque Besoin</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-gray-900/40 rounded-xl overflow-hidden group flex flex-col border border-transparent hover:border-pink-500/30 transition-all duration-300">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={service.imageSrc}
                    alt={service.title}
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-3">
                    <service.icon className="w-6 h-6 text-pink-500" />
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm flex-grow">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- Benefits Section --- */}
        <section className="py-20 md:py-28">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">L'Avantage IB Signature</h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-400">Découvrez pourquoi les propriétaires nous font confiance pour leur tranquillité d'esprit et leur rentabilité.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center p-6 bg-gray-900/30 rounded-xl border border-gray-800/50">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gray-800/70 border border-pink-500/30">
                  <benefit.icon className="h-7 w-7 text-pink-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- CTA Section --- */}
        <section className="text-center py-20 md:py-28">
          <h2 className="text-4xl md:text-5xl font-bold">Prêt à maximiser vos revenus ?</h2>
          <p className="mt-4 text-lg text-gray-300">Devenez partenaire et laissez-nous transformer votre investissement.</p>
          <a
            href="/contact" // Lien vers votre page de contact
            className="mt-8 inline-block px-10 py-4 bg-[#ff4d6d] text-white font-bold rounded-full hover:bg-pink-600 transition-all duration-300 transform hover:scale-105"
          >
            Devenez Partenaire
          </a>
        </section>

      </main>

      {/* Remplacez par votre composant de Footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default ServicesPage;
