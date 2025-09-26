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
  CheckCircle
} from 'lucide-react';

// --- Données de la page (extraites du PDF) ---

const contactInfo = [
  { icon: MapPin, title: "Notre Bureau", detail: "Casablanca, Maroc" },
  { icon: Phone, title: "Téléphone", detail: "+212 661 215 698", href: "tel:+212661215698" },
  { icon: Mail, title: "Email", detail: "contact@partnershotels.ma", href: "mailto:contact@partnershotels.ma" },
  { icon: Clock, title: "Horaires", detail: "Lun - Sam : 9h à 18h" },
];

const faqs = [
  {
    question: "Quels types de propriétés gérez-vous ?",
    answer: "Nous gérons tous types de propriétés pour la location courte durée : appartements, maisons, et villas de luxe.",
  },
  {
    question: "Quels sont vos frais de gestion ?",
    answer: "Nos frais sont un pourcentage compétitif des revenus locatifs. Nous offrons une tarification transparente et sans frais cachés, détaillée lors de notre consultation.",
  },
  {
    question: "En combien de temps pouvez-vous commencer ?",
    answer: "Généralement, nous pouvons mettre votre propriété en ligne et prête pour les réservations en 1 à 2 semaines après la signature de l'accord de gestion.",
  },
  {
    question: "Gérez-vous la communication avec les voyageurs ?",
    answer: "Oui, nous gérons 100% des communications : avant, pendant et après le séjour, pour garantir une expérience 5 étoiles.",
  },
];

// --- Composant de la page ---

const ContactPage: NextPage = () => {
  const [pending, setPending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (pending) return;
    setPending(true);

    try {
      // Simule un envoi de formulaire
      await new Promise((r) => setTimeout(r, 1500));
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
      {/* <Navigation /> */}

      <main className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* --- Hero Section --- */}
        <section className="relative my-12 md:my-20 w-full h-[450px] rounded-2xl overflow-hidden flex items-center justify-center text-center p-4">
          <Image
            src="/contact-hero.jpg" // IMAGE: Intérieur d'un bureau de design moderne avec vue sur la ville
            alt="Contactez IB Signature"
            layout="fill"
            objectFit="cover"
            className="z-0 opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d111e] via-transparent to-[#0d111e]/50 z-10"></div>
          <div className="relative z-20 flex flex-col items-center gap-4 max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold">Contactez-nous</h1>
            <p className="text-lg text-gray-300">
              Prêt à maximiser le potentiel de votre propriété ? Discutons de la manière dont nous pouvons transformer votre investissement.
            </p>
            <a
              href="#contact-form"
              className="mt-4 px-8 py-3 bg-[#ff4d6d] text-white font-semibold rounded-full hover:bg-pink-600 transition-transform transform hover:scale-105"
            >
              Devenir Partenaire
            </a>
          </div>
        </section>

        {/* --- Formulaire et Infos de Contact --- */}
        <section id="contact-form" className="py-12 md:py-20">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Colonne d'informations */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-2">Entrons en contact</h2>
                <p className="text-gray-400">Remplissez le formulaire ou utilisez nos coordonnées directes. Nous vous répondons en moins de 24h.</p>
              </div>
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-gray-800/70 border border-pink-500/30">
                      <info.icon className="w-6 h-6 text-pink-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{info.title}</h3>
                      {info.href ? (
                        <a href={info.href} className="text-gray-300 hover:text-white transition-colors">{info.detail}</a>
                      ) : (
                        <p className="text-gray-300">{info.detail}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Colonne du formulaire */}
            <div className="lg:col-span-2 bg-gray-900/40 p-8 rounded-2xl border border-gray-800/50">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Message envoyé !</h3>
                  <p className="text-gray-300 max-w-sm">Merci de nous avoir contactés. Un membre de notre équipe reviendra vers vous dans les plus brefs délais.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Nom complet *</label>
                      <input type="text" id="name" name="name" required className="w-full bg-gray-800/50 border border-gray-700 rounded-md p-3 focus:ring-pink-500 focus:border-pink-500 transition" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Email *</label>
                      <input type="email" id="email" name="email" required className="w-full bg-gray-800/50 border border-gray-700 rounded-md p-3 focus:ring-pink-500 focus:border-pink-500 transition" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="property_location" className="block text-sm font-medium mb-2">Adresse de la propriété</label>
                    <input type="text" id="property_location" name="property_location" placeholder="Ex: Casablanca, Maroc" className="w-full bg-gray-800/50 border border-gray-700 rounded-md p-3 focus:ring-pink-500 focus:border-pink-500 transition" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Votre message *</label>
                    <textarea id="message" name="message" rows={5} required className="w-full bg-gray-800/50 border border-gray-700 rounded-md p-3 focus:ring-pink-500 focus:border-pink-500 transition"></textarea>
                  </div>
                  <div>
                    <button type="submit" disabled={pending} className="w-full px-8 py-4 bg-[#ff4d6d] text-white font-bold rounded-full hover:bg-pink-600 disabled:opacity-50 disabled:cursor-wait transition-all duration-300">
                      {pending ? "Envoi en cours..." : "Envoyer le Message"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* --- FAQ Section --- */}
        <section className="py-20 md:py-28">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Questions Fréquentes</h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-400">Trouvez des réponses rapides aux questions les plus courantes sur nos services.</p>
          </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="p-6 bg-gray-900/30 rounded-xl border border-gray-800/50">
                <h3 className="font-semibold text-lg flex items-start gap-3">
                  <HelpCircle className="w-6 h-6 text-pink-500 flex-shrink-0 mt-1" />
                  {faq.question}
                </h3>
                <p className="mt-2 text-gray-400 pl-9">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default ContactPage;
