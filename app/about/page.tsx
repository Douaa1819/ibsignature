"use client";

import type { NextPage } from 'next';
import Image from 'next/image';
import { Home, Award, BarChart2, CheckCircle, Users, Star, TrendingUp, Shield, Clock, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroImage from '../../public/images/hero.png'
import AboutImage from '../../public/images/about.png'
import AirbnbLogo from '../../public/images/airbnb.png'
import BookingLogo from '../../public/images/booking.png'
import ExpediaLogo from '../../public/images/expedia.png'
import VrboLogo from '../../public/images/vrbo.png'
import AbritelLogo from '../../public/images/abritel.png'
import GoogleLogo from '../../public/images/google.png'
import SuperchLogo from '../../public/images/superch.png'

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
            src={HeroImage}
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
          className="mb-12 sm:mb-16 md:mb-20 lg:mb-28 relative"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 -left-20 w-40 h-40 bg-pink-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 -right-20 w-60 h-60 bg-pink-500/3 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
            <motion.div 
              className="relative w-full h-64 sm:h-80 md:h-[400px] lg:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl order-2 md:order-1 group"
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Image
                src={AboutImage} alt="Contrat de gestion immobilière et clés"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-pink-500/10 group-hover:from-black/30 transition-all duration-500"></div>
              
              {/* Floating badge */}
              <motion.div 
                className="absolute top-4 left-4 bg-pink-500/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                ✨ Service Premium
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="space-y-6 sm:space-y-8 order-1 md:order-2"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div variants={itemVariants}>
                {/* Enhanced title with better typography */}
                <div className="mb-6 sm:mb-8">
                  <motion.div 
                    className="inline-flex items-center gap-2 bg-pink-500/10 border border-pink-500/20 rounded-full px-4 py-2 text-pink-400 text-sm font-medium mb-4"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Sparkles className="h-4 w-4" />
                    Gestion Complète
                  </motion.div>
                  
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                    Un service{" "}
                    <span className="relative">
                      <span className="bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 bg-clip-text text-transparent">
                        complet
                      </span>
                      <motion.div 
                        className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                      />
                    </span>
                    <br />
                    <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-300 font-light">
                      de A à Z
                    </span>
                  </h2>
                </div>
                
                <motion.p 
                  className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed mb-8 sm:mb-10"
                  variants={itemVariants}
                >
                  Nous offrons un service de{" "}
                  <span className="text-pink-400 font-semibold">conciergerie Airbnb complet</span>{" "}
                  pour maximiser la rentabilité de votre investissement et garantir un séjour exceptionnel. 
                  De la réservation au départ, en passant par l'accueil, le ménage et la maintenance, 
                  <span className="text-white font-semibold"> IB Signature prend en charge chaque étape</span>.
                </motion.p>
              </motion.div>
              
              <motion.div 
                className="space-y-4 sm:space-y-5"
                variants={staggerContainer}
              >
                <motion.div 
                  className="group flex items-center gap-4 sm:gap-5 p-4 sm:p-5 bg-gradient-to-r from-gray-900/60 to-gray-800/40 rounded-xl sm:rounded-2xl border border-gray-700/50 hover:border-pink-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/10"
                  variants={itemVariants}
                  whileHover={{ x: 8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-pink-500/20 to-pink-600/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-pink-500" />
                  </div>
                  <div className="flex-1">
                    <span className="text-sm sm:text-base lg:text-lg font-medium text-white group-hover:text-pink-100 transition-colors">
                      Technologie de pointe et expertise hôtelière
                    </span>
                    <p className="text-xs sm:text-sm text-gray-400 mt-1">
                      Solutions innovantes pour une gestion optimale
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="group flex items-center gap-4 sm:gap-5 p-4 sm:p-5 bg-gradient-to-r from-gray-900/60 to-gray-800/40 rounded-xl sm:rounded-2xl border border-gray-700/50 hover:border-pink-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/10"
                  variants={itemVariants}
                  whileHover={{ x: 8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-pink-500/20 to-pink-600/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Users className="h-5 w-5 sm:h-6 sm:w-6 text-pink-500" />
                  </div>
                  <div className="flex-1">
                    <span className="text-sm sm:text-base lg:text-lg font-medium text-white group-hover:text-pink-100 transition-colors">
                      Expérience personnalisée pour propriétaires et voyageurs
                    </span>
                    <p className="text-xs sm:text-sm text-gray-400 mt-1">
                      Service sur mesure adapté à chaque besoin
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="group flex items-center gap-4 sm:gap-5 p-4 sm:p-5 bg-gradient-to-r from-gray-900/60 to-gray-800/40 rounded-xl sm:rounded-2xl border border-gray-700/50 hover:border-pink-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/10"
                  variants={itemVariants}
                  whileHover={{ x: 8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-pink-500/20 to-pink-600/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-pink-500" />
                  </div>
                  <div className="flex-1">
                    <span className="text-sm sm:text-base lg:text-lg font-medium text-white group-hover:text-pink-100 transition-colors">
                      Stratégies de location sur mesure pour chaque bien
                    </span>
                    <p className="text-xs sm:text-sm text-gray-400 mt-1">
                      Optimisation personnalisée de la rentabilité
                    </p>
                  </div>
                </motion.div>
              </motion.div>
              
              {/* Call to action button */}
              <motion.div 
                className="pt-4 sm:pt-6"
                variants={itemVariants}
              >
                <motion.a 
                  href="/services"
                  className="inline-flex items-center gap-3 px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Découvrir nos services</span>
                  <motion.div
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  >
                    →
                  </motion.div>
                </motion.a>
              </motion.div>
            </motion.div>
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
          className="mb-20 md:mb-28 text-center relative"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-pink-500/3 rounded-full blur-3xl"></div>
            <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-pink-500/2 rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto relative">
            <motion.div 
              className="text-center mb-16"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div 
                className="inline-flex items-center gap-2 bg-pink-500/10 border border-pink-500/20 rounded-full px-4 py-2 text-pink-400 text-sm font-medium mb-6"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <Star className="h-4 w-4" />
                Partenariats Stratégiques
              </motion.div>
              
              <motion.h2 
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
                variants={itemVariants}
              >
                <span className="bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 bg-clip-text text-transparent">
                  Partenaires
                </span>{" "}
                <span className="text-white">Privilégiés</span>
              </motion.h2>
              
              <motion.p 
                className="text-lg sm:text-xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed"
                variants={itemVariants}
              >
                Nous diffusons vos annonces sur les{" "}
                <span className="text-pink-400 font-semibold">plus grandes plateformes mondiales</span>{" "}
                pour une visibilité maximale et des réservations optimales.
              </motion.p>
              
              <motion.p 
                className="text-base text-gray-400 max-w-2xl mx-auto"
                variants={itemVariants}
              >
                Une présence multi-plateforme pour maximiser votre taux d'occupation
              </motion.p>
            </motion.div>
            
            {/* Enhanced Partners Grid */}
            <motion.div 
              className="bg-gradient-to-br from-gray-900/60 via-gray-800/40 to-gray-900/60 border border-gray-700/50 rounded-3xl p-8 sm:p-12 backdrop-blur-sm shadow-2xl"
              variants={itemVariants}
              whileHover={{ boxShadow: "0px 0px 40px rgba(236, 72, 153, 0.15)" }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-6 sm:gap-8 lg:gap-6 items-center"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {/* Airbnb */}
                <motion.div 
                  className="group flex justify-center items-center h-20 sm:h-24 p-4 bg-white rounded-2xl border border-gray-700/30 hover:border-pink-500/40 transition-all duration-500 hover:shadow-lg"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -8,
                    boxShadow: "0px 10px 30px rgba(236, 72, 153, 0.2)"
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <Image
                    src={AirbnbLogo}
                    alt="Airbnb"
                    width={100}
                    height={40}
                    className="object-contain transition-all duration-500 max-w-full h-auto"
                  />
                </motion.div>

                {/* Booking.com */}
                <motion.div 
                  className="group flex justify-center items-center h-20 sm:h-24 p-4 bg-white rounded-2xl border border-gray-700/30 hover:border-pink-500/40 transition-all duration-500 hover:shadow-lg"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -8,
                    boxShadow: "0px 10px 30px rgba(236, 72, 153, 0.2)"
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <Image
                    src={BookingLogo}
                    alt="Booking.com"
                    width={100}
                    height={40}
                    className="object-contain transition-all duration-500 max-w-full h-auto"
                  />
                </motion.div>

                {/* Expedia */}
                <motion.div 
                  className="group flex justify-center items-center h-20 sm:h-24 p-4 bg-white rounded-2xl border border-gray-700/30 hover:border-pink-500/40 transition-all duration-500 hover:shadow-lg"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -8,
                    boxShadow: "0px 10px 30px rgba(236, 72, 153, 0.2)"
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <Image
                    src={ExpediaLogo}
                    alt="Expedia"
                    width={100}
                    height={40}
                    className="object-contain transition-all duration-500 max-w-full h-auto"
                  />
                </motion.div>

                {/* Vrbo */}
                <motion.div 
                  className="group flex justify-center items-center h-20 sm:h-24 p-4 bg-white rounded-2xl border border-gray-700/30 hover:border-pink-500/40 transition-all duration-500 hover:shadow-lg"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -8,
                    boxShadow: "0px 10px 30px rgba(236, 72, 153, 0.2)"
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <Image
                    src={VrboLogo}
                    alt="Vrbo"
                    width={100}
                    height={40}
                    className="object-contain transition-all duration-500 max-w-full h-auto"
                  />
                </motion.div>

                {/* Abritel */}
                <motion.div 
                  className="group flex justify-center items-center h-20 sm:h-24 p-4 bg-white rounded-2xl border border-gray-700/30 hover:border-pink-500/40 transition-all duration-500 hover:shadow-lg"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -8,
                    boxShadow: "0px 10px 30px rgba(236, 72, 153, 0.2)"
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <Image
                    src={AbritelLogo}
                    alt="Abritel"
                    width={100}
                    height={40}
                    className="object-contain transition-all duration-500 max-w-full h-auto"
                  />
                </motion.div>

                {/* Google */}
                <motion.div 
                  className="group flex justify-center items-center h-20 sm:h-24 p-4 bg-white rounded-2xl border border-gray-700/30 hover:border-pink-500/40 transition-all duration-500 hover:shadow-lg"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -8,
                    boxShadow: "0px 10px 30px rgba(236, 72, 153, 0.2)"
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <Image
                    src={GoogleLogo}
                    alt="Google"
                    width={100}
                    height={40}
                    className="object-contain transition-all duration-500 max-w-full h-auto"
                  />
                </motion.div>

                {/* Superch */}
                <motion.div 
                  className="group flex justify-center items-center h-20 sm:h-24 p-4 bg-white rounded-2xl border border-gray-700/30 hover:border-pink-500/40 transition-all duration-500 hover:shadow-lg"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -8,
                    boxShadow: "0px 10px 30px rgba(236, 72, 153, 0.2)"
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <Image
                    src={SuperchLogo}
                    alt="Superch"
                    width={100}
                    height={40}
                    className="object-contain transition-all duration-500 max-w-full h-auto"
                  />
                </motion.div>
              </motion.div>
              
              {/* Stats below partners */}
              <motion.div 
                className="mt-12 pt-8 border-t border-gray-700/50"
                variants={itemVariants}
              >
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                  <div>
                    <p className="text-2xl sm:text-3xl font-bold text-pink-400 mb-1">7+</p>
                    <p className="text-sm text-gray-400">Plateformes partenaires</p>
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-bold text-pink-400 mb-1">100%</p>
                    <p className="text-sm text-gray-400">Visibilité maximale</p>
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-bold text-pink-400 mb-1">24/7</p>
                    <p className="text-sm text-gray-400">Synchronisation automatique</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
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