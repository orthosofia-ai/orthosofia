import { Metadata } from 'next';
import Image from 'next/image';
import { FaBrain, FaBook, FaComments, FaHeart, FaChild, FaGraduationCap, FaHandsHelping, FaHeadSideVirus } from 'react-icons/fa';
import Hero from '@/components/sections/Hero';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'Nos Prises en Charge - Orthophonie Casablanca',
  description: 'Découvrez nos prises en charge spécialisées : troubles du langage, dyslexie, autisme, TDAH, bégaiement, troubles psychomoteurs. Cabinet pluridisciplinaire à Casablanca.',
  keywords: [
    'orthophonie casablanca',
    'dyslexie casablanca',
    'autisme casablanca',
    'tdah casablanca',
    'bégaiement casablanca',
    'troubles langage maroc',
    'psychomotricité casablanca'
  ],
  openGraph: {
    title: 'Nos Prises en Charge - Orthophonie Casablanca',
    description: 'Prises en charge spécialisées en orthophonie, psychologie et psychomotricité',
  }
};

const treatments = [
  {
    id: 'neurodeveloppement',
    icon: FaBrain,
    title: 'Troubles du Neurodéveloppement',
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&auto=format&fit=crop',
    description: 'Prise en charge spécialisée des troubles affectant le développement cognitif et linguistique',
    conditions: [
      {
        name: 'Troubles du langage oral',
        details: 'Retard de langage, dysphasie, trouble de l\'articulation'
      },
      {
        name: 'Troubles du langage écrit',
        details: 'Dyslexie, dysorthographie, dysgraphie'
      },
      {
        name: 'Trouble Déficit de l\'Attention (TDA/H)',
        details: 'Avec ou sans hyperactivité, difficultés attentionnelles'
      },
      {
        name: 'Troubles du Spectre de l\'Autisme (TSA)',
        details: 'Communication, interactions sociales, comportements'
      }
    ]
  },
  {
    id: 'apprentissages',
    icon: FaBook,
    title: 'Troubles des Apprentissages',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop',
    description: 'Accompagnement des difficultés scolaires et des troubles spécifiques des apprentissages',
    conditions: [
      {
        name: 'Difficultés scolaires',
        details: 'Lecture, écriture, mathématiques'
      },
      {
        name: 'Troubles de la mémoire',
        details: 'Mémoire de travail, mémoire à court et long terme'
      },
      {
        name: 'Fonctions exécutives',
        details: 'Planification, organisation, inhibition'
      },
      {
        name: 'Difficultés de compréhension',
        details: 'Compréhension orale et écrite, raisonnement'
      }
    ]
  },
  {
    id: 'communication',
    icon: FaComments,
    title: 'Communication et Oralité',
    image: 'https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=800&auto=format&fit=crop',
    description: 'Rééducation des troubles de la parole, de la voix et de la déglutition',
    conditions: [
      {
        name: 'Troubles de la parole et articulation',
        details: 'Dyslalie, troubles phonologiques'
      },
      {
        name: 'Bégaiement',
        details: 'Fluence verbale, aisance à l\'oral'
      },
      {
        name: 'Troubles de la voix',
        details: 'Dysphonie, rééducation vocale'
      },
      {
        name: 'Troubles de la déglutition',
        details: 'Oralité alimentaire, déglutition atypique'
      }
    ]
  },
  {
    id: 'psychologie',
    icon: FaHeart,
    title: 'Accompagnement Psychologique',
    image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&auto=format&fit=crop',
    description: 'Soutien émotionnel et psychologique pour enfants, adolescents et adultes',
    conditions: [
      {
        name: 'Anxiété',
        details: 'Gestion du stress, anxiété scolaire ou sociale'
      },
      {
        name: 'Difficultés émotionnelles',
        details: 'Régulation émotionnelle, tristesse, colère'
      },
      {
        name: 'Manque de confiance en soi',
        details: 'Estime de soi, affirmation de soi'
      },
      {
        name: 'Soutien face aux changements',
        details: 'Transitions, deuil, séparation'
      }
    ]
  },
  {
    id: 'psychomotricite',
    icon: FaChild,
    title: 'Psychomotricité',
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&auto=format&fit=crop',
    description: 'Rééducation des troubles psychomoteurs et du développement corporel',
    conditions: [
      {
        name: 'Troubles de la coordination',
        details: 'Dyspraxie, maladresse motrice'
      },
      {
        name: 'Troubles du tonus',
        details: 'Hypertonie, hypotonie'
      },
      {
        name: 'Schéma corporel et latéralité',
        details: 'Conscience du corps, repérage dans l\'espace'
      },
      {
        name: 'Attention et régulation',
        details: 'Gestion de l\'attention et des émotions par le corps'
      }
    ]
  }
];

export default function PrisesEnCharge() {
  return (
    <>
      <Hero
        title="Nos Prises en Charge"
        subtitle="Des solutions adaptées à chaque besoin"
        description="Une approche personnalisée pour accompagner enfants, adolescents et adultes"
        imageSrc="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920&auto=format&fit=crop"
        imageAlt="Prises en charge orthophonie Casablanca"
      />

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Un Accompagnement Global et Personnalisé
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Notre équipe pluridisciplinaire propose des prises en charge adaptées 
              à chaque patient, dans le respect de ses particularités et de son rythme. 
              Chaque parcours de soin débute par un bilan complet qui permet d&apos;identifier 
              précisément les besoins et de définir des objectifs thérapeutiques personnalisés.
            </p>
          </div>
        </div>
      </section>

      {/* Treatment Areas */}
      {treatments.map((treatment, index) => {
        const Icon = treatment.icon;
        const isEven = index % 2 === 0;
        
        return (
          <section
            key={treatment.id}
            id={treatment.id}
            className={`py-20 ${isEven ? 'bg-gray-50' : 'bg-white'}`}
          >
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
                  {/* Image */}
                  <div className={`relative h-[400px] rounded-2xl overflow-hidden shadow-xl ${!isEven ? 'lg:col-start-2' : ''}`}>
                    <Image
                      src={treatment.image}
                      alt={treatment.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>

                  {/* Content */}
                  <div className={!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="bg-primary-600 text-white p-4 rounded-xl">
                        <Icon className="text-4xl" />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        {treatment.title}
                      </h2>
                    </div>
                    
                    <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                      {treatment.description}
                    </p>

                    <div className="space-y-4">
                      {treatment.conditions.map((condition, idx) => (
                        <div
                          key={idx}
                          className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-shadow duration-300"
                        >
                          <h3 className="font-bold text-gray-900 mb-2">
                            {condition.name}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {condition.details}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Process */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Le Parcours de Soin
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold mb-2">Premier Contact</h3>
                <p className="text-primary-100">
                  Prise de rendez-vous et recueil des informations
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold mb-2">Bilan</h3>
                <p className="text-primary-100">
                  Évaluation complète et identification des besoins
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold mb-2">Plan de Soin</h3>
                <p className="text-primary-100">
                  Définition des objectifs et du programme
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  4
                </div>
                <h3 className="text-xl font-bold mb-2">Suivi</h3>
                <p className="text-primary-100">
                  Séances régulières et réévaluations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
              Questions Fréquentes
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  Combien de temps dure une séance ?
                </h3>
                <p className="text-gray-700">
                  Les séances durent généralement entre 30 et 45 minutes pour les enfants, 
                  et jusqu&apos;à 60 minutes pour les adolescents et adultes, selon les besoins 
                  et la capacité d&apos;attention.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  À quelle fréquence sont les séances ?
                </h3>
                <p className="text-gray-700">
                  La fréquence est adaptée à chaque situation. En général, nous recommandons 
                  1 à 2 séances par semaine pour optimiser les progrès tout en respectant 
                  le rythme du patient.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  Faut-il une prescription médicale ?
                </h3>
                <p className="text-gray-700">
                  Pour une prise en charge remboursée, une prescription médicale est nécessaire. 
                  Vous pouvez cependant consulter directement pour un bilan initial.
                </p>
              </div>
            </div>
            <div className="text-center mt-8">
              <a
                href="/questions-conseils"
                className="text-primary-600 font-semibold hover:text-primary-700 inline-flex items-center gap-2 text-lg"
              >
                Voir toutes les questions →
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Besoin d'un accompagnement personnalisé ?"
        description="Contactez-nous pour discuter de votre situation et prendre rendez-vous"
        primaryButton={{
          text: "Prendre Rendez-vous",
          href: "/contact"
        }}
        secondaryButton={{
          text: "Questions & Conseils",
          href: "/questions-conseils"
        }}
      />
    </>
  );
}

