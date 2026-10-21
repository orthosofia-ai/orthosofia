import { Metadata } from 'next';
import { siteConfig } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description: `Politique de confidentialité du site ${siteConfig.name}.`,
};

export default function PolitiqueConfidentialite() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-gray-900">Politique de confidentialité</h1>
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              {siteConfig.name} collecte uniquement les informations que vous transmettez via le
              formulaire de contact ou de témoignage : nom, email, téléphone et message.
            </p>
            <p>
              Ces données sont utilisées exclusivement pour répondre à votre demande de rendez-vous
              ou de renseignement. Elles ne sont ni vendues ni cédées à des tiers.
            </p>
            <p>
              Pour toute question relative à vos données, contactez-nous à {siteConfig.email} ou au{' '}
              {siteConfig.phoneDisplay}.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
