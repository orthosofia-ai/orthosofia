import { Metadata } from 'next';
import { siteConfig } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Mentions légales',
  description: `Mentions légales du site ${siteConfig.name}.`,
};

export default function MentionsLegales() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <h1 className="text-4xl font-bold mb-8 text-gray-900">Mentions légales</h1>
          <p className="text-gray-700 mb-4">
            Le site <strong>orthophonistecentreville.com</strong> est édité par {siteConfig.name},
            cabinet situé au {siteConfig.address.streetAddress}, {siteConfig.address.postalCode}{' '}
            {siteConfig.address.addressLocality}, Maroc.
          </p>
          <p className="text-gray-700 mb-4">
            Gérante : {siteConfig.author}, orthophoniste et cadre de santé.
          </p>
          <p className="text-gray-700 mb-4">
            Téléphone : {siteConfig.phoneDisplay}<br />
            Email : {siteConfig.email}
          </p>
          <p className="text-gray-700">
            Les informations publiées sur ce site ont un caractère informatif et ne remplacent pas
            une consultation professionnelle.
          </p>
        </div>
      </div>
    </section>
  );
}
