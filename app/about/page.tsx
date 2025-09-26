"use client";

import type { NextPage } from 'next';
import Image from 'next/image';
import { Home, Award, BarChart2, CheckCircle, Users, Star, TrendingUp, Shield, Clock, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

// --- Composants ---

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300">
    {children}
  </a>
);

const PartnerLogo = ({ src, alt }: { src: string; alt: string }) => (
  <motion.div 
    className="flex justify-center items-center h-16 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
    whileHover={{ scale: 1.1 }}
  >
    <Image src={src} alt={alt} width={120} height={40} className="object-contain" />
  </motion.div>
);

const StatCard = ({ icon: Icon, value, label }: { icon: any, value: string, label: string }) => (
  <motion.div 
    className="bg-gray-900/50 border border-gray-700/50 p-4 sm:p-6 rounded-2xl text-center"
    whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(236, 72, 153, 0.3)" }}
  >
    <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-pink-500 mx-auto mb-3" />
    <p className="text-2xl sm:text-3xl font-bold text-white">{value}</p>
    <p className="text-gray-400 text-xs sm:text-sm mt-1">{label}</p>
  </motion.div>
);

// --- Animations Framer Motion ---
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0
  }
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

// --- Page Principale ---

const AboutPage: NextPage = () => {
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
              <NavLink href="/">Accueil</NavLink>
              <NavLink href="/properties">Propriétés</NavLink>
              <NavLink href="/services">Services</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </nav>
            <a
              href="#"
              className="px-4 py-2 sm:px-6 sm:py-2.5 bg-gradient-to-r from-[#ff4d6d] to-pink-600 text-white text-sm sm:text-base font-semibold rounded-full hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 transform hover:scale-105"
            >
              <span className="hidden sm:inline">Devenez Hôte</span>
              <span className="sm:hidden">Rejoindre</span>
            </a>
          </div>
        </div>
      </motion.header>

      {/* --- Main Content --- */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        
        {/* --- Hero Section --- */}
        <motion.section 
          className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl sm:rounded-3xl overflow-hidden flex items-center justify-center text-center p-4 sm:p-6 lg:p-8 mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Luxurious modern home with coins representing investment returns"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d111e] via-[#0d111e]/50 to-transparent z-10"></div>
          <motion.div 
            className="relative z-20 flex flex-col items-center gap-6 max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="inline-flex items-center gap-2 bg-pink-500/10 border border-pink-500/20 rounded-full px-4 py-2 text-pink-400 text-sm font-medium mb-4">
              <Star className="h-4 w-4" />
              Gestionnaire Immobilier Expert
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
              Votre partenaire pour la 
              <span className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent"> location courte</span> et moyenne durée
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl leading-relaxed">
              Nous gérons tout, de A à Z, pour que vous n'ayez plus jamais à vous en soucier. Maximisez vos revenus avec notre expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 sm:mt-6">
              <a href="/services" className="px-8 py-4 bg-gradient-to-r from-[#ff4d6d] to-pink-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-pink-500/25 transition-all transform hover:scale-105">
                Découvrir nos services
              </a>
              <a href="/contact" className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-full hover:bg-white/5 transition-all transform hover:scale-105">
                Nous contacter
              </a>
            </div>
          </motion.div>
        </motion.section>

        {/* --- Statistics Section --- */}
        <motion.section
          className="mb-12 sm:mb-16 lg:mb-20"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <StatCard icon={TrendingUp} value="+30%" label="Augmentation revenus" />
            <StatCard icon={Users} value="100+" label="Propriétaires satisfaits" />
            <StatCard icon={Star} value="4.9/5" label="Note moyenne clients" />
            <StatCard icon={Clock} value="24/7" label="Support disponible" />
          </div>
        </motion.section>

        {/* --- Mission & Expertise Section --- */}
        <motion.section 
          className="mb-12 sm:mb-16 md:mb-20 lg:mb-28 text-center"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <motion.h2 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6"
                variants={itemVariants}
              >
                Notre <span className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">Expertise</span>
              </motion.h2>
              <motion.p 
                className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto"
                variants={itemVariants}
              >
                Spécialisés dans la gestion immobilière de courte et moyenne durée, nous combinons technologie de pointe et expertise hôtelière.
              </motion.p>
            </div>
            
            <motion.div 
              className="grid md:grid-cols-2 gap-6 sm:gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div 
                className="bg-gradient-to-br from-gray-900/60 to-gray-800/40 p-8 rounded-2xl border border-gray-700/50 hover:border-pink-500/30 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-pink-500/10 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <Award className="h-8 w-8 text-pink-500" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4">Notre Expertise</h3>
                <p className="text-gray-400 leading-relaxed">
                  Gestionnaire immobilier spécialisé dans la location de courte et moyenne durée. 
                  Nous maîtrisons tous les aspects : de la mise en ligne à l'accueil des voyageurs.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-gradient-to-br from-gray-900/60 to-gray-800/40 p-8 rounded-2xl border border-gray-700/50 hover:border-pink-500/30 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-pink-500/10 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <BarChart2 className="h-8 w-8 text-pink-500" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4">Notre Mission</h3>
                <p className="text-gray-400 leading-relaxed">
                  Maximiser la rentabilité de votre investissement immobilier grâce à des stratégies 
                  personnalisées et une gestion complète de A à Z.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* --- Services Section --- */}
        <motion.section 
          className="mb-12 sm:mb-16 md:mb-20 lg:mb-28"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <motion.div 
              className="relative w-full h-64 sm:h-80 md:h-[400px] lg:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl order-2 md:order-1"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Contrat de gestion immobilière et clés"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </motion.div>
            
            <div className="space-y-6 sm:space-y-8 order-1 md:order-2">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                  Un service <span className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">complet</span>, de A à Z
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed mb-6 sm:mb-8">
                  Nous offrons un service de conciergerie Airbnb complet pour maximiser la rentabilité 
                  de votre investissement et garantir un séjour exceptionnel. De la réservation au départ, 
                  en passant par l'accueil, le ménage et la maintenance, IB Signature prend en charge chaque étape.
                </p>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                <motion.div 
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-900/40 rounded-lg sm:rounded-xl border border-gray-800/50"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-pink-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-pink-500" />
                  </div>
                  <span className="text-sm sm:text-base lg:text-lg">Technologie de pointe et expertise hôtelière</span>
                </motion.div>
                
                <motion.div 
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-900/40 rounded-lg sm:rounded-xl border border-gray-800/50"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-pink-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-4 w-4 sm:h-5 sm:w-5 text-pink-500" />
                  </div>
                  <span className="text-sm sm:text-base lg:text-lg">Expérience personnalisée pour propriétaires et voyageurs</span>
                </motion.div>
                
                <motion.div 
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-900/40 rounded-lg sm:rounded-xl border border-gray-800/50"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-pink-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-pink-500" />
                  </div>
                  <span className="text-sm sm:text-base lg:text-lg">Stratégies de location sur mesure pour chaque bien</span>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* --- Results Section --- */}
        <motion.section 
          className="mb-20 md:mb-28 text-center"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Des <span className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">résultats</span> concrets
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed mb-12 max-w-3xl mx-auto">
              En optimisant l'occupation des biens et grâce à une tarification dynamique, 
              nos hôtes constatent une augmentation significative de leurs revenus.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div 
                className="bg-gradient-to-br from-gray-900/60 to-gray-800/40 border border-gray-700/50 p-8 rounded-2xl"
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 25px rgba(236, 72, 153, 0.3)" }}
              >
                <TrendingUp className="h-12 w-12 text-pink-500 mx-auto mb-4" />
                <p className="text-6xl font-bold text-white mb-2">+30%</p>
                <p className="text-lg text-gray-300">Revenus locatifs</p>
              </motion.div>
              
              <motion.div 
                className="bg-gradient-to-br from-gray-900/60 to-gray-800/40 border border-gray-700/50 p-8 rounded-2xl"
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 25px rgba(236, 72, 153, 0.3)" }}
              >
                <Shield className="h-12 w-12 text-pink-500 mx-auto mb-4" />
                <p className="text-6xl font-bold text-white mb-2">100%</p>
                <p className="text-lg text-gray-300">Gestion complète</p>
              </motion.div>
              
              <motion.div 
                className="bg-gradient-to-br from-gray-900/60 to-gray-800/40 border border-gray-700/50 p-8 rounded-2xl"
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 25px rgba(236, 72, 153, 0.3)" }}
              >
                <Star className="h-12 w-12 text-pink-500 mx-auto mb-4" />
                <p className="text-6xl font-bold text-white mb-2">4.9</p>
                <p className="text-lg text-gray-300">Satisfaction client</p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* --- Partners Section --- */}
        <motion.section 
          className="mb-20 md:mb-28 text-center"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">Partenaires</span> Privilégiés
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Nous diffusons vos annonces sur les plus grandes plateformes pour une visibilité maximale et des réservations optimales.
            </p>
            
            <div className="bg-gradient-to-r from-gray-900/40 to-gray-800/30 border border-gray-700/50 rounded-2xl p-8">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
                <div className="flex justify-center items-center h-16 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                  <div className="w-24 h-12 bg-pink-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                    Airbnb
                  </div>
                </div>
                <div className="flex justify-center items-center h-16 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                  <div className="w-24 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                    Booking
                  </div>
                </div>
                <div className="flex justify-center items-center h-16 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                  <div className="w-24 h-12 bg-yellow-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                    Expedia
                  </div>
                </div>
                <div className="flex justify-center items-center h-16 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                  <div className="w-24 h-12 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                    Vrbo
                  </div>
                </div>
                <div className="flex justify-center items-center h-16 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                  <div className="w-24 h-12 bg-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                    Abritel
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

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
              <NavLink href="/">Accueil</NavLink>
              <NavLink href="/properties">Propriétés</NavLink>
              <NavLink href="/services">Services</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </div>
            <p className="text-sm text-gray-500">
              © 2024 IB Signature. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;