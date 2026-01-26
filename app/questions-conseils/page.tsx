import { Metadata } from 'next';
import { FaQuestionCircle, FaLightbulb } from 'react-icons/fa';
import Hero from '@/components/sections/Hero';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'Questions & Conseils - Orthophonie Casablanca',
  description: 'Trouvez des réponses à vos questions sur l\'orthophonie, la psychologie et la psychomotricité. Conseils pratiques pour accompagner votre enfant.',
  openGraph: {
    title: 'Questions & Conseils - Orthophonie Casablanca',
    description: 'FAQ et conseils pratiques en orthophonie',
  }
};

const faqs = [
  {
    category: 'Général',
    questions: [
      {
        q: 'À partir de quel âge peut-on consulter un orthophoniste ?',
        a: 'Il n\'y a pas d\'âge minimum. Dès qu\'un parent ou un professionnel de santé identifie une difficulté (retard de langage, trouble de l\'articulation, etc.), il est recommandé de consulter. Plus la prise en charge est précoce, meilleurs sont les résultats.'
      },
      {
        q: 'Comment se déroule la première consultation ?',
        a: 'La première séance est consacrée à un entretien avec les parents (si c\'est un enfant) pour comprendre l\'historique, les difficultés rencontrées et les attentes. Puis, un bilan est réalisé pour évaluer précisément les compétences et les difficultés. Ce bilan peut nécessiter plusieurs séances selon les domaines à explorer.'
      },
      {
        q: 'Combien de temps dure une prise en charge ?',
        a: 'La durée est très variable selon les difficultés. Certaines prises en charge peuvent durer quelques mois, d\'autres plusieurs années. Des bilans d\'évolution réguliers permettent d\'ajuster le suivi et de décider ensemble de la poursuite ou de l\'arrêt des séances.'
      },
      {
        q: 'Les séances sont-elles remboursées ?',
        a: 'Avec une prescription médicale, les séances d\'orthophonie peuvent être prises en charge par votre mutuelle selon votre contrat. Nous vous conseillons de vérifier les conditions de remboursement auprès de votre assurance.'
      }
    ]
  },
  {
    category: 'Troubles du langage',
    questions: [
      {
        q: 'Mon enfant parle peu ou mal pour son âge, est-ce grave ?',
        a: 'Chaque enfant évolue à son rythme, mais certains signes doivent alerter : pas de mots à 18 mois, peu de mots à 2 ans, phrases non construites à 3 ans, difficultés persistantes de prononciation après 4 ans. Une consultation permet de faire le point et de rassurer ou d\'intervenir si nécessaire.'
      },
      {
        q: 'Qu\'est-ce que la dyslexie ?',
        a: 'La dyslexie est un trouble spécifique de l\'apprentissage de la lecture. L\'enfant a des difficultés durables à identifier les mots écrits, à lire de façon fluide et à comprendre ce qu\'il lit. Ce trouble nécessite une rééducation orthophonique spécifique et des aménagements scolaires.'
      },
      {
        q: 'Mon enfant bégaie, que faire ?',
        a: 'Le bégaiement peut apparaître entre 2 et 5 ans. S\'il persiste au-delà de 6 mois ou s\'aggrave, une consultation est recommandée. Il est important de ne pas mettre la pression sur l\'enfant, de l\'écouter patiemment et de consulter pour bénéficier de conseils adaptés.'
      }
    ]
  },
  {
    category: 'Troubles des apprentissages',
    questions: [
      {
        q: 'Quelle différence entre difficulté et trouble des apprentissages ?',
        a: 'Une difficulté scolaire peut être passagère et liée à des facteurs environnementaux (déménagement, problème familial, méthode pédagogique). Un trouble des apprentissages (dyslexie, dyspraxie, dyscalculie) est durable, d\'origine neurologique et nécessite une prise en charge spécialisée.'
      },
      {
        q: 'Mon enfant a un TDAH, l\'orthophonie peut-elle aider ?',
        a: 'Oui, l\'orthophoniste peut travailler sur l\'attention, les fonctions exécutives (planification, organisation), la mémoire de travail et la compréhension. Une approche pluridisciplinaire avec psychologue et/ou psychomotricien est souvent bénéfique.'
      }
    ]
  },
  {
    category: 'Psychologie',
    questions: [
      {
        q: 'Quand consulter un psychologue pour mon enfant ?',
        a: 'Si vous observez des changements de comportement durables (tristesse, anxiété, agressivité, repli sur soi), des difficultés relationnelles importantes, une chute des résultats scolaires inexpliquée, ou si votre enfant traverse une épreuve difficile (séparation, deuil, déménagement).'
      },
      {
        q: 'Quelle est la différence entre psychologue et psychiatre ?',
        a: 'Le psychologue a une formation universitaire en psychologie et propose des bilans et des thérapies. Le psychiatre est un médecin spécialisé qui peut prescrire des médicaments. Les deux professions sont complémentaires.'
      }
    ]
  },
  {
    category: 'Psychomotricité',
    questions: [
      {
        q: 'Qu\'est-ce que la psychomotricité ?',
        a: 'La psychomotricité s\'intéresse aux liens entre le corps, les émotions et la cognition. Elle accompagne les difficultés de coordination, d\'équilibre, de tonus, de repérage dans l\'espace, mais aussi les troubles de l\'attention et la régulation émotionnelle.'
      },
      {
        q: 'Mon enfant est maladroit, faut-il consulter ?',
        a: 'Si la maladresse est importante et persistante, qu\'elle impacte les gestes du quotidien (s\'habiller, écrire, faire du vélo) ou génère de la souffrance, une évaluation psychomotrice peut être utile pour identifier une éventuelle dyspraxie.'
      }
    ]
  }
];

const tips = [
  {
    title: 'Stimuler le langage au quotidien',
    tips: [
      'Parlez beaucoup à votre enfant, commentez vos activités',
      'Lisez des histoires ensemble chaque jour',
      'Posez des questions ouvertes plutôt que fermées',
      'Reformulez correctement sans forcer la répétition',
      'Valorisez chaque effort de communication'
    ]
  },
  {
    title: 'Accompagner les devoirs',
    tips: [
      'Créez un espace de travail calme et organisé',
      'Établissez une routine avec des pauses régulières',
      'Fractionnez les tâches en petites étapes',
      'Valorisez les progrès plutôt que les résultats',
      'Restez patient et bienveillant'
    ]
  },
  {
    title: 'Gérer les émotions',
    tips: [
      'Accueillez et nommez les émotions de votre enfant',
      'Proposez des outils de régulation (respiration, dessin)',
      'Montrez l\'exemple dans la gestion de vos propres émotions',
      'Créez des rituels sécurisants',
      'Ne minimisez pas ce qu\'il ressent'
    ]
  },
  {
    title: 'Favoriser la motricité',
    tips: [
      'Encouragez les jeux de manipulation (pâte à modeler, construction)',
      'Proposez des activités physiques variées',
      'Laissez votre enfant s\'habiller seul, même si c\'est plus long',
      'Utilisez des jeux de balles, cordes, parcours',
      'Soyez patient avec les progrès moteurs'
    ]
  }
];

export default function QuestionsConseils() {
  return (
    <>
      <Hero
        title="Questions & Conseils"
        subtitle="Toutes les réponses à vos questions"
        description="Trouvez des informations utiles et des conseils pratiques pour accompagner votre parcours"
        imageSrc="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1920&auto=format&fit=crop"
        imageAlt="Questions et conseils orthophonie"
      />

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <FaQuestionCircle className="text-5xl text-primary-600 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Foire Aux Questions
              </h2>
              <p className="text-lg text-gray-600">
                Les réponses aux questions les plus fréquentes
              </p>
            </div>

            <div className="space-y-12">
              {faqs.map((category, index) => (
                <div key={index}>
                  <h3 className="text-2xl font-bold mb-6 text-primary-600 border-b-2 border-primary-200 pb-2">
                    {category.category}
                  </h3>
                  <div className="space-y-6">
                    {category.questions.map((faq, idx) => (
                      <div key={idx} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                        <h4 className="text-lg font-bold mb-3 text-gray-900 flex items-start gap-3">
                          <span className="text-primary-600 flex-shrink-0">Q:</span>
                          <span>{faq.q}</span>
                        </h4>
                        <p className="text-gray-700 leading-relaxed pl-8">
                          <span className="font-semibold text-secondary-600">R:</span> {faq.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <FaLightbulb className="text-5xl text-secondary-600 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Conseils Pratiques
              </h2>
              <p className="text-lg text-gray-600">
                Des astuces simples pour accompagner votre enfant au quotidien
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {tips.map((tipCategory, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-xl font-bold mb-6 text-gray-900">
                    {tipCategory.title}
                  </h3>
                  <ul className="space-y-3">
                    {tipCategory.tips.map((tip, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-700">
                        <span className="text-secondary-600 text-xl flex-shrink-0">✓</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Important Note */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-primary-50 border-l-4 border-primary-600 rounded-r-xl p-8">
            <h3 className="text-xl font-bold mb-4 text-gray-900">
              Note importante
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Les informations et conseils proposés sur cette page sont donnés à titre indicatif. 
              Ils ne remplacent en aucun cas une consultation personnalisée avec un professionnel 
              de santé. Chaque situation est unique et nécessite une évaluation et un accompagnement 
              adaptés. N&apos;hésitez pas à nous contacter pour discuter de votre situation.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Vous avez d'autres questions ?"
        description="N'hésitez pas à nous contacter, nous serons ravis de vous répondre"
        primaryButton={{
          text: "Nous Contacter",
          href: "/contact"
        }}
        secondaryButton={{
          text: "Prendre Rendez-vous",
          href: "/contact"
        }}
      />
    </>
  );
}

