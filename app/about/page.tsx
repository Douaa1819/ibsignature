import type { NextPage } from 'next';
import Image from 'next/image';
import { Home, Award, Briefcase, BarChart2 } from 'lucide-react';

// --- Composants ---

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300">
    {children}
  </a>
);

const PartnerLogo = ({ src, alt }: { src: string; alt: string }) => (
  <div className="flex justify-center items-center h-16 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
    <Image src={src} alt={alt} width={120} height={40} objectFit="contain" />
  </div>
);

// --- Page Principale ---

const AboutPage: NextPage = () => {
  return (
    <div className="bg-[#0d111e] text-white min-h-screen font-sans">
      {/* --- Header --- */}
      <header className="sticky top-0 bg-[#0d111e]/80 backdrop-blur-sm z-10 border-b border-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
              {/* Logo mis à jour */}
              <Home className="h-6 w-6 text-pink-500" />
              <span className="text-2xl font-bold">IB Signature</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <NavLink href="#">Accueil</NavLink>
              <NavLink href="#">Propriétés</NavLink>
              <NavLink href="#">Services</NavLink>
              <NavLink href="#">Contact</NavLink>
            </nav>
            <a
              href="#"
              className="px-5 py-2 bg-[#ff4d6d] text-white font-semibold rounded-full hover:bg-pink-600 transition-all duration-300 transform hover:scale-105"
            >
              Connexion
            </a>
          </div>
        </div>
      </header>

      {/* --- Main Content --- */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        
        {/* --- Hero Section --- */}
        <section className="relative w-full h-[500px] rounded-2xl overflow-hidden flex items-center justify-center text-center p-4">
          <Image
            src="/house-and-coins.jpg" // IMAGE : Maison avec des pièces
            alt="Maximiser la rentabilité de l'investissement immobilier"
            layout="fill"
            objectFit="cover"
            className="z-0 opacity-40"
          />
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <div className="relative z-20 flex flex-col items-center gap-4 max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold">Votre partenaire pour la location courte et moyenne durée</h1>
            <p className="text-lg text-gray-200">
              Nous gérons tout, pour que vous n'ayez plus jamais à le faire.
            </p>
            <button className="mt-4 px-8 py-3 bg-[#ff4d6d] text-white font-semibold rounded-full hover:bg-pink-600 transition-transform transform hover:scale-105">
              Découvrir nos services
            </button>
          </div>
        </section>

        {/* --- Mission & Expertise Section --- */}
        <section className="mt-20 md:mt-28 text-center">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
            <div className="bg-gray-900/30 p-8 rounded-xl border border-gray-800/50">
              <Award className="h-8 w-8 mx-auto mb-4 text-pink-500" />
              <h3 className="text-2xl font-bold mb-2">Notre Expertise</h3>
              <p className="text-gray-400">Gestion immobilière spécialisée dans la location de courte et moyenne durée.</p>
            </div>
            <div className="bg-gray-900/30 p-8 rounded-xl border border-gray-800/50">
              <BarChart2 className="h-8 w-8 mx-auto mb-4 text-pink-500" />
              <h3 className="text-2xl font-bold mb-2">Notre Mission</h3>
              <p className="text-gray-400">Maximiser la rentabilité de l'investissement des propriétaires.</p>
            </div>
          </div>
        </section>

        {/* --- Services Section --- */}
        <section className="mt-20 md:mt-28 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full h-80 md:h-[450px] rounded-2xl overflow-hidden shadow-lg order-last md:order-first">
             <Image
                src="/contract-signing.jpg" // IMAGE : Personnes signant un contrat
                alt="Gestion complète de la location"
                layout="fill"
                objectFit="cover"
              />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Un service complet de A à Z</h2>
            <p className="text-gray-300 leading-relaxed">
              Nous offrons un service de gestion complet type Airbnb pour maximiser la rentabilité de votre investissement et garantir un séjour exceptionnel à vos voyageurs. De la réservation au départ, en passant par l'accueil, le nettoyage et la maintenance, IB Signature prend en charge chaque étape.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Votre temps est précieux. Nous combinons le meilleur de la technologie avec notre savoir-faire pour créer une expérience haut de gamme et personnalisée pour nos propriétaires et leurs voyageurs.
            </p>
          </div>
        </section>

        {/* --- Results Section --- */}
        <section className="mt-20 md:mt-28 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Des résultats concrets</h2>
          <div className="mt-8 max-w-md mx-auto bg-gray-900/50 border border-gray-700/50 p-8 rounded-2xl">
            <p className="text-lg text-gray-300">Augmentation moyenne des revenus locatifs</p>
            <p className="text-6xl font-bold text-white mt-2">+30%</p>
          </div>
          <p className="mt-6 max-w-3xl mx-auto text-gray-300 leading-relaxed">
            En optimisant l'occupation des biens et grâce à une tarification dynamique, nos hôtes constatent une augmentation significative de leurs revenus.
          </p>
        </section>

        {/* --- Partners Section --- */}
        <section className="mt-20 md:mt-28 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Partenaire privilégié de</h2>
          <p className="text-gray-400 mb-12">Nous diffusons vos annonces sur les plus grandes plateformes pour une visibilité maximale.</p>
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <PartnerLogo src="/logo-airbnb.svg" alt="Airbnb" />
            <PartnerLogo src="/logo-booking.svg" alt="Booking.com" />
            <PartnerLogo src="/logo-expedia.svg" alt="Expedia" />
            <PartnerLogo src="/logo-vrbo.svg" alt="Vrbo" />
          </div>
        </section>

      </main>

      {/* --- Footer --- */}
      <footer className="border-t border-gray-800/50 mt-20 md:mt-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex gap-6">
              <NavLink href="#">Accueil</NavLink>
              <NavLink href="#">Propriétés</NavLink>
              <NavLink href="#">Services</NavLink>
              <NavLink href="#">Contact</NavLink>
          </div>
          <p className="text-sm text-gray-500">
            © 2024 IB Signature. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
