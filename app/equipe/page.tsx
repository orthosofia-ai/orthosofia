import { Metadata } from 'next';
import Image from 'next/image';
import { FaGraduationCap, FaAward, FaHeart, FaUsers } from 'react-icons/fa';
import Hero from '@/components/sections/Hero';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'L\'Équipe - Cabinet Orthophonie Casablanca',
  description: 'Rencontrez notre équipe de professionnels qualifiés : orthophoniste, psychologue et psychomotricienne. Sofia EL FENE et son équipe à Casablanca.',
  openGraph: {
    title: 'L\'Équipe - Cabinet Orthophonie Casablanca',
    description: 'Équipe pluridisciplinaire qualifiée à Casablanca',
  }
};

export default function Equipe() {
  return (
    <>
      <Hero
        title="Notre Équipe"
        subtitle="Des professionnels dévoués à votre service"
        description="Découvrez les experts qui vous accompagneront dans votre parcours de soin"
        imageSrc="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&auto=format&fit=crop"
        imageAlt="Équipe cabinet orthophonie Casablanca"
      />

      {/* Team Intro */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Une Équipe Pluridisciplinaire
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Notre cabinet réunit des professionnels expérimentés et passionnés, 
              qui partagent une vision commune : offrir le meilleur accompagnement 
              possible à chaque patient. La complémentarité de nos expertises nous 
              permet d&apos;apporter des réponses globales et adaptées à chaque situation.
            </p>
          </div>
        </div>
      </section>

      {/* Sofia EL FENE - Main Profile */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image */}
                <div className="relative">
                  {/* Decorative elements around photo */}
                  <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full opacity-20 blur-2xl animate-pulse"></div>
                  <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-full opacity-20 blur-2xl animate-pulse animation-delay-400"></div>
                  <div className="absolute top-10 -right-4 w-24 h-24 border-4 border-primary-300 rounded-full opacity-30"></div>
                  <div className="absolute -bottom-4 -left-4 w-20 h-20 border-4 border-secondary-300 rounded-full opacity-30"></div>
                  
                  {/* Photo container with gradient border */}
                  <div className="relative p-1 bg-gradient-to-br from-primary-500 via-secondary-500 to-primary-600 rounded-2xl">
                    <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                      <Image
                        src="/sofia.jpg"
                        alt="Sofia EL FENE - Orthophoniste Casablanca"
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

                {/* Content */}
                <div className="p-8 md:p-12">
                  <div className="mb-6">
                    <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
                      Sofia EL FENE
                    </h2>
                    <p className="text-xl text-primary-600 font-semibold mb-2">
                      Orthophoniste et Cadre de santé
                    </p>
                    <p className="text-lg text-secondary-600 font-medium">
                      Gérante du Cabinet
                    </p>
                  </div>

                  <div className="space-y-6 text-gray-700 leading-relaxed">
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

                  {/* Expertise Areas */}
                  <div className="mt-8 space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Domaines d&apos;expertise
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <FaGraduationCap className="text-primary-600 mt-1 text-xl flex-shrink-0" />
                        <div>
                          <p className="font-semibold">Troubles du langage oral et écrit</p>
                          <p className="text-sm text-gray-600">Dyslexie, dysorthographie, dysphasie</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <FaGraduationCap className="text-primary-600 mt-1 text-xl flex-shrink-0" />
                        <div>
                          <p className="font-semibold">Troubles neurodéveloppementaux</p>
                          <p className="text-sm text-gray-600">TSA, TDA/H</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <FaGraduationCap className="text-primary-600 mt-1 text-xl flex-shrink-0" />
                        <div>
                          <p className="font-semibold">Rééducation vocale et déglutition</p>
                          <p className="text-sm text-gray-600">Troubles de la voix et de l&apos;oralité</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Team Members */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Nos Autres Professionnels
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Une équipe complémentaire pour un accompagnement global
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Psychologue */}
            <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop"
                  alt="Psychologue Casablanca"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">
                  Notre Psychologue
                </h3>
                <p className="text-lg text-primary-600 font-semibold mb-4">
                  Psychologue Clinicienne
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Spécialisée dans l&apos;accompagnement des enfants, adolescents et adultes, 
                  elle réalise des bilans psychologiques et propose un soutien adapté aux 
                  difficultés émotionnelles, comportementales et relationnelles.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FaAward className="text-primary-600" />
                    <span>Bilans cognitifs et émotionnels</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FaAward className="text-primary-600" />
                    <span>Thérapies individuelles</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FaAward className="text-primary-600" />
                    <span>Guidance parentale</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Psychomotricienne */}
            <div className="bg-gradient-to-br from-secondary-50 to-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop"
                  alt="Psychomotricienne Casablanca"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">
                  Notre Psychomotricienne
                </h3>
                <p className="text-lg text-secondary-600 font-semibold mb-4">
                  Psychomotricienne D.E.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Experte en rééducation psychomotrice, elle accompagne les patients 
                  présentant des troubles de la coordination, du tonus, de l&apos;attention 
                  et de la régulation émotionnelle à travers le corps.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FaAward className="text-secondary-600" />
                    <span>Troubles psychomoteurs</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FaAward className="text-secondary-600" />
                    <span>Coordination et équilibre</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FaAward className="text-secondary-600" />
                    <span>Régulation émotionnelle</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 text-center">
              Ce qui nous unit
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaHeart className="text-4xl text-primary-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Passion</h3>
                <p className="text-gray-600">
                  Un engagement sincère au service du bien-être de nos patients
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaUsers className="text-4xl text-primary-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Collaboration</h3>
                <p className="text-gray-600">
                  Un travail d&apos;équipe constant pour une prise en charge optimale
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaGraduationCap className="text-4xl text-primary-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Excellence</h3>
                <p className="text-gray-600">
                  Formation continue et pratiques professionnelles actualisées
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Prêt à rencontrer notre équipe ?"
        description="Contactez-nous pour prendre rendez-vous et commencer votre parcours de soin"
        primaryButton={{
          text: "Prendre Rendez-vous",
          href: "/contact"
        }}
        secondaryButton={{
          text: "Nos prises en charge",
          href: "/prises-en-charge"
        }}
      />
    </>
  );
}

