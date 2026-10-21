'use client';

import { FaStar, FaGoogle } from 'react-icons/fa';
import { siteConfig } from '@/lib/seo';

export default function GoogleReviews() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
      <div className="flex justify-center mb-4">
        <FaGoogle className="text-5xl text-[#4285F4]" />
      </div>
      <h3 className="text-2xl font-bold mb-2">{siteConfig.name}</h3>
      <p className="text-gray-500 mb-4">Fiche Google officielle</p>
      <div className="flex justify-center items-center gap-3 mb-2">
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar key={star} className="text-3xl text-yellow-400" />
          ))}
        </div>
        <span className="text-2xl font-bold text-gray-900">{siteConfig.ratingValue}</span>
      </div>
      <p className="text-gray-600 mb-6">
        {siteConfig.reviewCount} avis Google · Casablanca
      </p>
      <p className="text-gray-600 mb-6">
        Votre avis nous aide à améliorer nos services et aide d&apos;autres familles à nous trouver.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <a
          href={siteConfig.googleListingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#4285F4] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#357ABD] transition-colors duration-300 shadow-lg hover:shadow-xl"
        >
          Voir notre fiche Google
        </a>
        <a
          href={siteConfig.googleListingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-[#4285F4] border-2 border-[#4285F4] px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300"
        >
          Laisser un avis
        </a>
      </div>
    </div>
  );
}
