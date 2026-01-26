import { Metadata } from 'next';
import Image from 'next/image';
import { FaCheckCircle, FaUsers, FaHeart, FaAward, FaHandshake, FaLightbulb } from 'react-icons/fa';
import Hero from '@/components/sections/Hero';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'Le Cabinet - Orthophonie Casablanca',
  description: 'Découvrez notre cabinet pluridisciplinaire à Casablanca. Une équipe dévouée, des locaux modernes et une approche personnalisée pour chaque patient.',
  openGraph: {
    title: 'Le Cabinet - Orthophonie Casablanca',
    description: 'Cabinet pluridisciplinaire à Casablanca. Orthophoniste, Psychologue et Psychomotricienne.',
  }
};

const values = [
  {
    icon: FaHeart,
    title: 'Bienveillance',
    description: 'Une écoute attentive et un accompagnement respectueux de chaque personne'
  },
  {
    icon: FaUsers,
    title: 'Travail d\'équipe',
    description: 'Collaboration pluridisciplinaire pour une prise en charge globale et cohérente'
  },
  {
    icon: FaLightbulb,
    title: 'Professionnalisme',
    description: 'Formation continue et pratiques basées sur les dernières recherches scientifiques'
  },
  {
    icon: FaHandshake,
    title: 'Personnalisation',
    description: 'Des protocoles adaptés aux besoins spécifiques de chaque patient'
  }
];

const services = [
  {
    title: 'Bilans Complets',
    description: 'Évaluations approfondies pour identifier précisément les difficultés et besoins'
  },
  {
    title: 'Prises en Charge Individuelles',
    description: 'Séances personnalisées adaptées au rythme et aux objectifs de chaque patient'
  },
  {
    title: 'Accompagnement Familial',
    description: 'Guidance et conseils pour soutenir les proches dans le processus thérapeutique'
  },
  {
    title: 'Coordination avec les Écoles',
    description: 'Échanges réguliers avec les équipes éducatives pour optimiser la scolarité'
  },
  {
    title: 'Suivi à Long Terme',
    description: 'Accompagnement continu avec bilans d\'évolution réguliers'
  },
  {
    title: 'Approche Pluridisciplinaire',
    description: 'Coordination entre professionnels pour une vision globale du patient'
  }
];

export default function LeCabinet() {
  return (
    <>
      <Hero
        title="Le Cabinet"
        subtitle="Un espace dédié à votre bien-être"
        description="Découvrez notre approche pluridisciplinaire et nos locaux pensés pour votre confort"
        imageSrc="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&auto=format&fit=crop"
        imageAlt="Cabinet orthophonie Casablanca"
      />

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Un Cabinet au Cœur de Casablanca
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Notre cabinet pluridisciplinaire, situé en plein centre-ville de Casablanca, 
              a été créé avec une vision claire : offrir un accompagnement de qualité, 
              personnalisé et coordonné pour tous ceux qui rencontrent des difficultés 
              de langage, d&apos;apprentissage ou de développement.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nous croyons fermement qu&apos;une prise en charge efficace nécessite une 
              approche globale qui prend en compte tous les aspects de la personne : 
              ses compétences, ses difficultés, son environnement familial et scolaire.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Nos Valeurs
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Les principes qui guident notre pratique quotidienne
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
                >
                  <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-3xl text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Nos Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Un accompagnement complet à chaque étape
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <FaCheckCircle className="text-2xl text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities with Cabinet Photos */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Des Locaux Pensés pour Votre Confort
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Découvrez nos espaces modernes et accueillants, conçus pour garantir 
                votre confort et la confidentialité de vos consultations
              </p>
            </div>

            {/* Photo Gallery */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
              {/* Photo 1 - Large */}
              <div className="lg:col-span-2 group relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                <Image
                  src="/cabinet1.jpg"
                  alt="Cabinet Centre Ville - Salle de consultation"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 via-primary-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-2xl font-bold mb-2">Nos Espaces</h3>
                  <p className="text-sm">Salle de consultation spacieuse et lumineuse</p>
                </div>
              </div>

              {/* Photo 2 - Small */}
              <div className="group relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                <Image
                  src="/cabinet2.jpg"
                  alt="Cabinet Centre Ville - Accueil"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/70 via-secondary-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-2xl font-bold mb-2">Accueil</h3>
                  <p className="text-sm">Espace d'attente chaleureux</p>
                </div>
              </div>
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
              {/* Photo 3 */}
              <div className="group relative h-[350px] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                <Image
                  src="/cabinet3.jpg"
                  alt="Cabinet Centre Ville - Matériel thérapeutique"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/70 via-teal-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-xl font-bold mb-1">Équipements</h3>
                  <p className="text-sm">Matériel moderne</p>
                </div>
              </div>

              {/* Features List */}
              <div className="lg:col-span-2 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">
                  Nos Installations
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary-600 p-2 rounded-lg flex-shrink-0">
                      <FaCheckCircle className="text-white text-xl" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Salles Spacieuses</h4>
                      <p className="text-sm text-gray-600">Espaces lumineux et confortables</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-secondary-600 p-2 rounded-lg flex-shrink-0">
                      <FaCheckCircle className="text-white text-xl" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Matériel Moderne</h4>
                      <p className="text-sm text-gray-600">Équipements thérapeutiques de qualité</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-teal-600 p-2 rounded-lg flex-shrink-0">
                      <FaCheckCircle className="text-white text-xl" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Accueil Chaleureux</h4>
                      <p className="text-sm text-gray-600">Salle d'attente accueillante</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-purple-600 p-2 rounded-lg flex-shrink-0">
                      <FaCheckCircle className="text-white text-xl" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Centre-Ville</h4>
                      <p className="text-sm text-gray-600">Accès facile et parking proche</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-primary-600 p-2 rounded-lg flex-shrink-0">
                      <FaCheckCircle className="text-white text-xl" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Confidentialité</h4>
                      <p className="text-sm text-gray-600">Espaces privés et discrets</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-secondary-600 p-2 rounded-lg flex-shrink-0">
                      <FaCheckCircle className="text-white text-xl" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Environnement Calme</h4>
                      <p className="text-sm text-gray-600">Ambiance paisible et rassurante</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Map */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Notre Localisation
              </h2>
              <p className="text-lg text-gray-600">
                Facilement accessible en plein cœur de Casablanca
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Address Info */}
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">
                  Adresse Complète
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary-600 p-3 rounded-xl flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-gray-900 mb-1">
                        23, Rue Abou Soufiane
                      </p>
                      <p className="text-gray-700">
                        Bd de Paris<br />
                        Casablanca 20000<br />
                        Maroc
                      </p>
                      <p className="text-sm text-gray-500 mt-2">
                        Plus Code: H9VH+MR Casablanca
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-gray-300 pt-6">
                    <a
                      href="https://maps.app.goo.gl/UZYhYESKLgGYDV866"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                      Ouvrir dans Google Maps
                    </a>
                  </div>

                  <div className="bg-white/60 rounded-xl p-4">
                    <h4 className="font-bold text-gray-900 mb-3">Comment nous trouver ?</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-primary-600">🚗</span>
                        <span>Parking disponible à proximité</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary-600">🚌</span>
                        <span>Accessible en transport en commun</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary-600">📍</span>
                        <span>En plein centre-ville de Casablanca</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="rounded-3xl overflow-hidden shadow-2xl h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.7799999999997!2d-7.6204!3d33.5941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDM1JzM4LjgiTiA3wrAzNycxMy40Ilc!5e0!3m2!1sfr!2sma!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation Cabinet Centre Ville"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 text-center">
              Notre Approche
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Au Cabinet Centre Ville, nous privilégions une <strong>approche pluridisciplinaire</strong> 
                qui permet de croiser les regards et les expertises. Cette coordination entre 
                orthophoniste, psychologue et psychomotricienne garantit une prise en charge 
                cohérente et complète.
              </p>
              <p>
                Chaque parcours de soin commence par un <strong>bilan approfondi</strong> qui nous 
                permet d&apos;identifier précisément les besoins et de définir ensemble des objectifs 
                thérapeutiques réalistes et motivants.
              </p>
              <p>
                Nous accordons une importance particulière à <strong>l&apos;implication de la famille</strong> 
                dans le processus thérapeutique. Des temps d&apos;échange réguliers sont prévus pour 
                vous accompagner et vous donner des outils concrets à mettre en place au quotidien.
              </p>
              <p>
                Notre objectif est de vous offrir un <strong>accompagnement sur-mesure</strong>, 
                respectueux de votre rythme et de vos particularités, dans un climat de confiance 
                et de bienveillance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Envie d'en savoir plus ?"
        description="N'hésitez pas à nous contacter pour toute question ou pour prendre rendez-vous"
        primaryButton={{
          text: "Nous Contacter",
          href: "/contact"
        }}
        secondaryButton={{
          text: "Découvrir l'équipe",
          href: "/equipe"
        }}
      />
    </>
  );
}

