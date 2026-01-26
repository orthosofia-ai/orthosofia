import Image from 'next/image';
import Link from 'next/link';
import { FaBrain, FaUserMd, FaChild, FaHeart, FaBook, FaComments, FaStar, FaMapMarkerAlt, FaClock, FaPhone } from 'react-icons/fa';
import Hero from '@/components/sections/Hero';
import ServicesGrid from '@/components/sections/ServicesGrid';
import CTASection from '@/components/sections/CTASection';

const mainServices = [
  {
    icon: FaComments,
    title: 'Orthophonie',
    description: 'Évaluation et rééducation des troubles du langage oral et écrit, de la communication, de la voix, de la déglutition et des fonctions cognitives.',
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&auto=format&fit=crop',
    link: '/prises-en-charge#orthophonie'
  },
  {
    icon: FaBrain,
    title: 'Psychologie',
    description: 'Accompagnement psychologique, bilans cognitifs et émotionnels, soutien de l\'enfant, de l\'adolescent et de l\'adulte.',
    image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&auto=format&fit=crop',
    link: '/prises-en-charge#psychologie'
  },
  {
    icon: FaChild,
    title: 'Psychomotricité',
    description: 'Prise en charge des troubles psychomoteurs, de la coordination, du schéma corporel, de l\'attention et de la régulation émotionnelle.',
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&auto=format&fit=crop',
    link: '/prises-en-charge#psychomotricite'
  }
];

const treatments = [
  {
    icon: FaBrain,
    title: 'Troubles du neurodéveloppement',
    items: [
      'Troubles du langage oral (retard de langage, dysphasie)',
      'Troubles du langage écrit (dyslexie, dysorthographie)',
      'TDA/H',
      'Troubles du spectre de l\'autisme (TSA)'
    ]
  },
  {
    icon: FaBook,
    title: 'Troubles des apprentissages',
    items: [
      'Difficultés scolaires',
      'Troubles de la mémoire',
      'Fonctions exécutives',
      'Difficultés de compréhension'
    ]
  },
  {
    icon: FaComments,
    title: 'Communication et oralité',
    items: [
      'Troubles de la parole et articulation',
      'Bégaiement',
      'Troubles de la voix',
      'Troubles de la déglutition'
    ]
  },
  {
    icon: FaHeart,
    title: 'Accompagnement psychologique',
    items: [
      'Anxiété',
      'Difficultés émotionnelles',
      'Manque de confiance en soi',
      'Soutien face aux changements'
    ]
  }
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Cabinet Pluridisciplinaire Centre-Ville"
        subtitle="Bienvenue au Cabinet Centre Ville"
        description="Accompagnement pluridisciplinaire pour enfants, adolescents et adultes. Orthophonie, Psychologie et Psychomotricité à Casablanca."
        ctaText="Prendre Rendez-vous"
        ctaLink="/contact"
        images={[
          {
            src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&auto=format&fit=crop",
            alt: "Cabinet d'orthophonie Casablanca - Salle de consultation"
          },
          {
            src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&auto=format&fit=crop",
            alt: "Cabinet d'orthophonie - Accompagnement enfants et adultes"
          },
          {
            src: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1920&auto=format&fit=crop",
            alt: "Cabinet Centre Ville - Équipe professionnelle"
          }
        ]}
      />

      {/* Welcome Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100/30 rounded-full -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary-100/30 rounded-full -ml-40 -mb-40"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-primary-600">Nos</span>{' '}
                <span className="text-gray-900">Prestations</span>
              </h2>
              <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
            </div>

            {/* Services Grid */}
            <div className="space-y-8">
              {/* First Row - 3 items */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {/* Troubles du langage oral */}
                <div className="bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 shadow-lg border border-gray-100 group">
                  <div className="flex flex-col items-center text-center">
                    {/* Icon */}
                    <div className="w-24 h-24 mb-6 relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
                      <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                        {/* Mouth */}
                        <ellipse cx="50" cy="55" rx="30" ry="20" fill="#FF6B9D" opacity="0.9"/>
                        <ellipse cx="50" cy="50" rx="25" ry="15" fill="#FFB4D1"/>
                        {/* Teeth */}
                        <rect x="40" y="47" width="5" height="8" fill="white" rx="1"/>
                        <rect x="47" y="47" width="5" height="8" fill="white" rx="1"/>
                        <rect x="54" y="47" width="5" height="8" fill="white" rx="1"/>
                        {/* Letter A */}
                        <text x="25" y="25" fontSize="16" fontWeight="bold" fill="#93C5FD">A</text>
                        {/* Question mark */}
                        <text x="65" y="25" fontSize="16" fontWeight="bold" fill="#FCD34D">?</text>
                        {/* Sound waves */}
                        <path d="M 15 45 Q 12 45 10 45" stroke="#93C5FD" strokeWidth="2" fill="none"/>
                        <path d="M 15 50 Q 10 50 5 50" stroke="#93C5FD" strokeWidth="2" fill="none"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Troubles du langage oral
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Retard de langage, dysphasie, troubles de la parole et de l&apos;articulation
                    </p>
                  </div>
                </div>

                {/* Troubles du langage écrit */}
                <div className="bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 shadow-lg border border-gray-100 group">
                  <div className="flex flex-col items-center text-center">
                    {/* Icon */}
                    <div className="w-24 h-24 mb-6 relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
                      <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                        {/* Paper */}
                        <rect x="25" y="20" width="45" height="60" rx="4" fill="#93C5FD" opacity="0.9"/>
                        <rect x="28" y="23" width="39" height="54" rx="2" fill="#DBEAFE"/>
                        {/* Lines */}
                        <line x1="32" y1="30" x2="60" y2="30" stroke="#60A5FA" strokeWidth="2"/>
                        <line x1="32" y1="38" x2="62" y2="38" stroke="#60A5FA" strokeWidth="2"/>
                        <line x1="32" y1="46" x2="58" y2="46" stroke="#60A5FA" strokeWidth="2"/>
                        <line x1="32" y1="54" x2="63" y2="54" stroke="#60A5FA" strokeWidth="2"/>
                        {/* Red X marks */}
                        <text x="35" y="36" fontSize="12" fontWeight="bold" fill="#EF4444">✗</text>
                        <text x="50" y="52" fontSize="12" fontWeight="bold" fill="#EF4444">✗</text>
                        <text x="42" y="68" fontSize="12" fontWeight="bold" fill="#EF4444">✗</text>
                        {/* Pencil */}
                        <rect x="60" y="50" width="4" height="30" rx="1" fill="#FCD34D" transform="rotate(-30 62 65)"/>
                        <polygon points="68,48 70,52 66,54" fill="#F59E0B"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Troubles du langage écrit
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Dyslexie, dysorthographie, dysgraphie, difficultés scolaires
                    </p>
                  </div>
                </div>

                {/* Troubles de la voix */}
                <div className="bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 shadow-lg border border-gray-100 group">
                  <div className="flex flex-col items-center text-center">
                    {/* Icon */}
                    <div className="w-24 h-24 mb-6 relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
                      <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                        {/* Head profile */}
                        <ellipse cx="45" cy="50" rx="25" ry="30" fill="#FCD34D" opacity="0.9"/>
                        <path d="M 60 45 Q 70 50 60 55" fill="#F59E0B"/>
                        {/* Mouth open */}
                        <ellipse cx="62" cy="50" rx="5" ry="8" fill="#DC2626"/>
                        {/* Sound waves from mouth */}
                        <path d="M 70 45 Q 75 45 80 40" stroke="#60A5FA" strokeWidth="2.5" fill="none"/>
                        <path d="M 70 50 Q 78 50 85 50" stroke="#60A5FA" strokeWidth="2.5" fill="none"/>
                        <path d="M 70 55 Q 75 55 80 60" stroke="#60A5FA" strokeWidth="2.5" fill="none"/>
                        {/* Question marks */}
                        <text x="35" y="25" fontSize="16" fontWeight="bold" fill="#93C5FD">?</text>
                        <text x="45" y="20" fontSize="16" fontWeight="bold" fill="#93C5FD">?</text>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Troubles de la voix
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Dysphonie, rééducation vocale, troubles de la déglutition et oralité
                    </p>
                  </div>
                </div>
              </div>

              {/* Second Row - 2 items centered */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
                {/* Troubles neurodéveloppementaux */}
                <div className="bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 shadow-lg border border-gray-100 group">
                  <div className="flex flex-col items-center text-center">
                    {/* Icon */}
                    <div className="w-24 h-24 mb-6 relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-red-600 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
                      <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                        {/* Brain */}
                        <path d="M 30 40 Q 25 30 35 25 Q 45 20 50 22 Q 55 20 65 25 Q 75 30 70 40 Q 73 50 70 60 Q 65 70 50 72 Q 35 70 30 60 Q 27 50 30 40" 
                              fill="#EF4444" opacity="0.9"/>
                        <path d="M 35 35 Q 40 32 45 35 M 50 33 Q 55 30 60 33" stroke="#DC2626" strokeWidth="2" fill="none"/>
                        <path d="M 35 45 Q 40 43 45 45 M 50 43 Q 55 41 60 43" stroke="#DC2626" strokeWidth="2" fill="none"/>
                        <path d="M 38 55 Q 43 53 48 55 M 52 53 Q 57 52 62 54" stroke="#DC2626" strokeWidth="2" fill="none"/>
                        {/* Tools emblem */}
                        <circle cx="50" cy="30" r="12" fill="#3B82F6" opacity="0.95"/>
                        {/* Wrench */}
                        <path d="M 46 27 L 46 33 L 48 33 L 48 27 L 47 25 Z" fill="white"/>
                        {/* Screwdriver */}
                        <path d="M 51 27 L 51 33 L 53 33 L 53 27 Z" fill="white"/>
                        <circle cx="52" cy="26" r="1.5" fill="white"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Troubles neurodéveloppementaux
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      TSA, TDA/H, troubles cognitifs, troubles de la mémoire et fonctions exécutives
                    </p>
                  </div>
                </div>

                {/* Communication et handicaps */}
                <div className="bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 shadow-lg border border-gray-100 group">
                  <div className="flex flex-col items-center text-center">
                    {/* Icon */}
                    <div className="w-24 h-24 mb-6 relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
                      <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                        {/* Magnifying glass circle */}
                        <circle cx="45" cy="45" r="25" stroke="#A855F7" strokeWidth="4" fill="#E9D5FF" opacity="0.9"/>
                        {/* Handle */}
                        <rect x="60" y="60" width="8" height="30" rx="4" fill="#A855F7" transform="rotate(-45 64 75)"/>
                        {/* Inner circle for accessibility symbol */}
                        <circle cx="45" cy="45" r="18" fill="#3B82F6" opacity="0.95"/>
                        {/* Wheelchair symbol */}
                        <circle cx="42" cy="38" r="3" fill="white"/>
                        <path d="M 42 42 L 42 48 L 38 48" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                        <path d="M 42 45 L 48 45 L 52 50" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                        <circle cx="47" cy="53" r="5.5" stroke="white" strokeWidth="2.5" fill="none"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Accompagnement psychologique
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Anxiété, difficultés émotionnelles, confiance en soi, soutien psychomoteur
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom description */}
            <div className="mt-16 text-center">
              <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Notre cabinet pluridisciplinaire accompagne <span className="font-bold">enfants, adolescents et adultes</span> présentant 
                des troubles du langage, de la communication, des apprentissages et du développement. 
                Notre équipe propose des prises en charge personnalisées et adaptées à chaque patient.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -ml-48 -mt-48"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full -mr-48 -mb-48"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Notre Engagement en Chiffres
              </h2>
              <p className="text-xl text-primary-100">
                Des années d&apos;expérience au service de votre bien-être
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* 10+ Years */}
              <div className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-6xl mb-4">📅</div>
                  <div className="text-5xl font-bold text-white mb-2">
                    10+
                  </div>
                  <p className="text-xl text-primary-100 font-semibold">
                    Années d&apos;Expérience
                  </p>
                </div>
              </div>

              {/* 1400+ Patients */}
              <div className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-6xl mb-4">👥</div>
                  <div className="text-5xl font-bold text-white mb-2">
                    1400+
                  </div>
                  <p className="text-xl text-primary-100 font-semibold">
                    Patients Traités
                  </p>
                </div>
              </div>

              {/* 3 Specialists */}
              <div className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-6xl mb-4">⭐</div>
                  <div className="text-5xl font-bold text-white mb-2">
                    3
                  </div>
                  <p className="text-xl text-primary-100 font-semibold">
                    Spécialistes Qualifiés
                  </p>
                </div>
              </div>

              {/* 95% Satisfaction */}
              <div className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-6xl mb-4">💚</div>
                  <div className="text-5xl font-bold text-white mb-2">
                    95%
                  </div>
                  <p className="text-xl text-primary-100 font-semibold">
                    Taux de Satisfaction
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services - Nos Professionnels */}
      <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary-200 rounded-full opacity-20 blur-3xl animate-pulse animation-delay-400"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-3 rounded-full text-sm font-bold mb-6 shadow-lg animate-fade-in">
              ⭐ Équipe Pluridisciplinaire
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Nos Professionnels
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-medium">
              Une équipe d&apos;experts à votre service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Orthophoniste Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl transform group-hover:-translate-y-3 transition-all duration-500">
                {/* Image with overlay */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop"
                    alt="Orthophoniste"
                    fill
                    className="object-cover object-top group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/50 to-transparent"></div>
                  
                  {/* Floating icon */}
                  <div className="absolute top-6 right-6 w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-2xl transform group-hover:rotate-12 transition-transform duration-500">
                    <FaComments className="text-3xl text-blue-600" />
                  </div>
                  
                  {/* Title on image */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-3xl font-bold text-white mb-2">
                      Orthophoniste
                    </h3>
                    <div className="w-16 h-1 bg-white rounded-full"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Évaluation et rééducation des troubles du langage oral et écrit, communication, voix et déglutition.
                  </p>
                  
                  <Link 
                    href="/prises-en-charge#orthophonie"
                    className="inline-flex items-center justify-center w-full gap-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-4 rounded-xl font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    Découvrir
                    <span className="text-xl">→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Psychologue Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl transform group-hover:-translate-y-3 transition-all duration-500">
                {/* Image with overlay */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop"
                    alt="Psychologue"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/50 to-transparent"></div>
                  
                  {/* Floating icon */}
                  <div className="absolute top-6 right-6 w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-2xl transform group-hover:rotate-12 transition-transform duration-500">
                    <FaBrain className="text-3xl text-purple-600" />
                  </div>
                  
                  {/* Title on image */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-3xl font-bold text-white mb-2">
                      Psychologue
                    </h3>
                    <div className="w-16 h-1 bg-white rounded-full"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Accompagnement psychologique, bilans cognitifs et émotionnels pour enfants, adolescents et adultes.
                  </p>
                  
                  <Link 
                    href="/prises-en-charge#psychologie"
                    className="inline-flex items-center justify-center w-full gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-4 rounded-xl font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    Découvrir
                    <span className="text-xl">→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Psychomotricienne Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-teal-500 rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl transform group-hover:-translate-y-3 transition-all duration-500">
                {/* Image with overlay */}
                <div className="relative h-64 overflow-hidden">
        <Image
                    src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&auto=format&fit=crop"
                    alt="Psychomotricienne"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-900/90 via-teal-900/50 to-transparent"></div>
                  
                  {/* Floating icon */}
                  <div className="absolute top-6 right-6 w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-2xl transform group-hover:rotate-12 transition-transform duration-500">
                    <FaChild className="text-3xl text-teal-600" />
                  </div>
                  
                  {/* Title on image */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-3xl font-bold text-white mb-2">
                      Psychomotricienne
                    </h3>
                    <div className="w-16 h-1 bg-white rounded-full"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Prise en charge des troubles psychomoteurs, coordination, schéma corporel et régulation émotionnelle.
                  </p>
                  
                  <Link 
                    href="/prises-en-charge#psychomotricite"
                    className="inline-flex items-center justify-center w-full gap-3 bg-gradient-to-r from-green-600 to-teal-600 text-white px-6 py-4 rounded-xl font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    Découvrir
                    <span className="text-xl">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-secondary-100 text-secondary-700 px-6 py-2 rounded-full text-sm font-semibold mb-4">
              Nos Spécialités
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Nos Prises en Charge
            </h2>
            <div className="w-20 h-1 bg-secondary-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions adaptées à chaque besoin
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {treatments.map((treatment, index) => {
              const Icon = treatment.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-primary-600 text-white p-4 rounded-xl">
                      <Icon className="text-3xl" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {treatment.title}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {treatment.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-700">
                        <span className="text-primary-600 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/prises-en-charge"
              className="inline-block bg-primary-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Voir toutes nos prises en charge
            </Link>
          </div>
        </div>
      </section>

      {/* About Doctor Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                {/* Decorative elements around photo */}
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full opacity-20 blur-2xl animate-pulse"></div>
                <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-full opacity-20 blur-2xl animate-pulse animation-delay-400"></div>
                <div className="absolute top-10 -right-4 w-24 h-24 border-4 border-primary-300 rounded-full opacity-30"></div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 border-4 border-secondary-300 rounded-full opacity-30"></div>
                
                {/* Photo container with gradient border */}
                <div className="relative p-1 bg-gradient-to-br from-primary-500 via-secondary-500 to-primary-600 rounded-2xl max-w-md mx-auto lg:mx-0">
                  <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
                      src="/sofia.jpg"
                      alt="Madame Sofia EL FENE - Orthophoniste"
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
                
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-primary-500 rounded-tl-2xl"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-secondary-500 rounded-br-2xl"></div>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                  Madame Sofia EL FENE
                </h2>
                <p className="text-xl text-primary-600 font-semibold mb-6">
                  Gérante du cabinet, Orthophoniste et Cadre de santé
                </p>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Orthophoniste diplômée depuis plus de 10 ans, cadre de santé, 
                    je suis la fondatrice et la gérante du cabinet.
                  </p>
                  <p>
                    Mon parcours m&apos;a permis de développer une vision globale du soin, 
                    centrée sur la personne, son environnement et ses besoins spécifiques.
                  </p>
                  <p>
                    J&apos;accorde une importance particulière au travail en équipe 
                    pluridisciplinaire afin d&apos;offrir une prise en charge cohérente, 
                    bienveillante et efficace.
                  </p>
                </div>
                <div className="mt-8">
                  <Link
                    href="/equipe"
                    className="inline-block bg-secondary-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-secondary-700 transition-colors shadow-lg"
                  >
                    Découvrir l&apos;équipe
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Votre Avis Compte
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Partagez votre expérience avec notre cabinet
              </p>
              
              {/* Google Rating Display */}
              <div className="inline-flex flex-col items-center bg-white rounded-3xl shadow-2xl p-8 mb-10 border-2 border-primary-100">
                <div className="flex items-center gap-2 mb-3">
                  <img 
                    src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" 
                    alt="Google" 
                    className="h-6"
                  />
                  <span className="text-gray-600 font-semibold">Reviews</span>
                </div>
                
                {/* Star Rating */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FaStar key={star} className="text-4xl text-yellow-400" />
                    ))}
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-5xl font-bold text-gray-900 mb-1">5.0</div>
                  <p className="text-gray-600 font-medium">Basé sur plus de 50+ avis</p>
                </div>
                
                {/* CTA Button */}
                <a 
                  href="https://share.google/7cz4Z2jl29VlvHRNO" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-4 rounded-full font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Laissez-nous un avis
                  <FaStar className="text-xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-700 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full -ml-40 -mb-40"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Contactez-Nous
              </h2>
              <p className="text-xl text-primary-100">
                Nous sommes là pour vous accompagner
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <a 
                href="https://maps.app.goo.gl/UZYhYESKLgGYDV866"
            target="_blank"
            rel="noopener noreferrer"
                className="group bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center hover:bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20 block"
              >
                <div className="bg-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl transform group-hover:rotate-6 transition-transform duration-500">
                  <FaMapMarkerAlt className="text-4xl text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary-600 transition-colors">Adresse</h3>
                <p className="text-primary-100 group-hover:text-gray-600 transition-colors text-lg">
                  23, Rue Abou Soufiane<br />
                  Bd de Paris<br />
                  Casablanca 20000
                </p>
              </a>

              <div className="group bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center hover:bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20">
                <div className="bg-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl transform group-hover:rotate-6 transition-transform duration-500">
                  <FaClock className="text-4xl text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary-600 transition-colors">Horaires</h3>
                <p className="text-primary-100 group-hover:text-gray-600 transition-colors text-lg">
                  Du lundi au samedi<br />
                  Sur rendez-vous
                </p>
              </div>

              <div className="group bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center hover:bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20">
                <div className="bg-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl transform group-hover:rotate-6 transition-transform duration-500">
                  <FaPhone className="text-4xl text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary-600 transition-colors">Contact</h3>
                <p className="text-primary-100 group-hover:text-gray-600 transition-colors text-lg">
                  <a href="tel:0654182804" className="hover:underline">
                    0654 18 28 04
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Prêt à commencer votre parcours de soin ?"
        description="Contactez-nous dès aujourd'hui pour prendre rendez-vous avec nos professionnels."
        primaryButton={{
          text: "Prendre Rendez-vous",
          href: "/contact"
        }}
        secondaryButton={{
          text: "En savoir plus",
          href: "/le-cabinet"
        }}
      />
    </>
  );
}
