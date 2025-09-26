"use client";

import { useState } from "react";
import type { NextPage } from 'next';
import Image from 'next/image';
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
  Sparkles
} from 'lucide-react';

// --- Données de la page (extraites du PDF) ---
const contactInfo = [
  { 
    icon: MapPin, 
    title: "Notre Bureau", 
    detail: "Casablanca, Maroc",
    subDetail: "Centre-ville, quartier des affaires"
  },
  { 
    icon: Phone, 
    title: "Téléphone", 
    detail: "+212 661 215 698", 
    href: "tel:+212661215698",
    subDetail: "Disponible 7j/7"
  },
  { 
    icon: Mail, 
    title: "Email", 
    detail: "contact@partnershotels.ma", 
    href: "mailto:contact@partnershotels.ma",
    subDetail: "Réponse sous 24h"
  },
  { 
    icon: Clock, 
    title: "Horaires", 
    detail: "Lun - Sam : 9h à 18h",
    subDetail: "Support d'urgence 24/7"
  },
];

const faqs = [
  {
    question: "Quels types de propriétés gérez-vous ?",
    answer: "Nous gérons tous types de propriétés pour la location courte durée : appartements, maisons, villas de luxe, et propriétés commerciales. Chaque propriété bénéficie d'une stratégie personnalisée.",
  },
  {
    question: "Quels sont vos frais de gestion ?",
    answer: "Nos frais sont un pourcentage compétitif des revenus locatifs, généralement entre 15-25% selon les services choisis. Nous offrons une tarification transparente sans frais cachés, détaillée lors de notre consultation gratuite.",
  },
  {
    question: "En combien de temps pouvez-vous commencer ?",
    answer: "Généralement, nous pouvons mettre votre propriété en ligne et prête pour les réservations en 1 à 2 semaines après la signature de l'accord de gestion, incluant la préparation et la photographie.",
  },
  {
    question: "Gérez-vous la communication avec les voyageurs ?",
    answer: "Oui, nous gérons 100% des communications : réservations, questions avant arrivée, accueil, assistance pendant le séjour, et suivi après départ. Support disponible en français, anglais et arabe.",
  },
  {
    question: "Comment assurez-vous la sécurité de ma propriété ?",
    answer: "Nous utilisons des systèmes de vérification d'identité rigoureux, des assurances complètes, des inspections régulières, et des protocoles de sécurité stricts pour protéger votre investissement.",
  },
  {
    question: "Quel est le retour sur investissement moyen ?",
    answer: "Nos clients constatent en moyenne une augmentation de 30% de leurs revenus locatifs par rapport à la location traditionnelle, avec un taux d'occupation optimisé et une tarification dynamique.",
  },
];

const stats = [
  { icon: TrendingUp, value: "+30%", label: "Revenus supplémentaires" },
  { icon: Users, value: "500+", label: "Voyageurs satisfaits" },
  { icon: Building2, value: "50+", label: "Propriétés gérées" },
  { icon: Star, value: "4.9/5", label: "Satisfaction client" },
];

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
    <div className="bg-[#0d111e] text-white min-h-screen font-sans">
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
              Parlons de votre projet
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">Contactez</span>-nous
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl leading-relaxed">
              Prêt à maximiser le potentiel de votre propriété ? Discutons de la manière dont nous pouvons transformer votre investissement en source de revenus optimale.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 sm:mt-6">
              <a
                href="#contact-form"
                className="px-8 py-4 bg-gradient-to-r from-[#ff4d6d] to-pink-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-pink-500/25 transition-all transform hover:scale-105"
              >
                Devenir Partenaire
              </a>
              <a
                href="tel:+212661215698"
                className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-full hover:bg-white/5 transition-all transform hover:scale-105"
              >
                Appeler maintenant
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
                  Entrons en <span className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">contact</span>
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-gray-400 leading-relaxed">
                  Remplissez le formulaire ou utilisez nos coordonnées directes. 
                  Notre équipe d'experts vous répond en moins de 24h pour discuter de votre projet.
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
                  <span className="text-xs sm:text-sm font-medium">Appel direct</span>
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
                    <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Message envoyé avec succès !</h3>
                    <p className="text-sm sm:text-base text-gray-300 max-w-sm mb-6 sm:mb-8 leading-relaxed">
                      Merci de nous avoir contactés. Un membre de notre équipe d'experts reviendra vers vous dans les plus brefs délais.
                    </p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-3 bg-gradient-to-r from-[#ff4d6d] to-pink-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-pink-500/25 transition-all"
                    >
                      Envoyer un autre message
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="text-center mb-6 sm:mb-8">
                      <h3 className="text-xl sm:text-2xl font-bold mb-2">Demande de partenariat</h3>
                      <p className="text-sm sm:text-base text-gray-400">Transformons ensemble votre propriété en succès</p>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-3 text-gray-300">
                            Nom complet *
                          </label>
                          <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            required 
                            className="w-full bg-gray-800/50 border border-gray-600 rounded-xl p-4 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all placeholder:text-gray-500" 
                            placeholder="Votre nom"
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
                            placeholder="votre@email.com"
                          />
                        </div>
                      </div>
                      
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium mb-3 text-gray-300">
                            Téléphone
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
                            Type de propriété
                          </label>
                          <select 
                            id="property_type" 
                            name="property_type" 
                            className="w-full bg-gray-800/50 border border-gray-600 rounded-xl p-4 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all text-white"
                          >
                            <option value="">Sélectionner</option>
                            <option value="appartement">Appartement</option>
                            <option value="maison">Maison</option>
                            <option value="villa">Villa</option>
                            <option value="studio">Studio</option>
                            <option value="autre">Autre</option>
                          </select>
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="property_location" className="block text-sm font-medium mb-3 text-gray-300">
                          Localisation de la propriété
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
                          Votre message *
                        </label>
                        <textarea 
                          id="message" 
                          name="message" 
                          rows={5} 
                          required 
                          className="w-full bg-gray-800/50 border border-gray-600 rounded-xl p-4 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all placeholder:text-gray-500 resize-none" 
                          placeholder="Parlez-nous de votre projet, vos objectifs, et comment nous pouvons vous aider..."
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
                          J'accepte d'être contacté par IB Signature concernant mes projets immobiliers et je consens au traitement de mes données personnelles selon la politique de confidentialité.
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
                            Envoi en cours...
                          </div>
                        ) : (
                          <div className="flex items-center justify-center gap-2">
                            Envoyer la demande
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
              Questions <span className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">Fréquentes</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto">
              Trouvez des réponses rapides aux questions les plus courantes sur nos services de gestion immobilière.
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
                  Prêt à commencer ?
                </div>
                
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                  Transformons votre <span className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">propriété</span> ensemble
                </h2>
                
                <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
                  Rejoignez nos propriétaires satisfaits et découvrez comment maximiser vos revenus locatifs avec notre expertise.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <a
                    href="tel:+212661215698"
                    className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-[#ff4d6d] to-pink-600 text-white text-sm sm:text-base font-bold rounded-full hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 transform hover:scale-105"
                  >
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                    Appeler maintenant
                  </a>
                  <a
                    href="#contact-form"
                    className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 border border-gray-600 text-white text-sm sm:text-base font-semibold rounded-full hover:bg-white/5 transition-all transform hover:scale-105"
                  >
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                    Envoyer un message
                  </a>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-700/50">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
                    Consultation gratuite
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
                    Réponse sous 24h
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
                    Sans engagement
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default ContactPage;