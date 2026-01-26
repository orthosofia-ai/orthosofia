'use client';

import { FaStar, FaGoogle } from 'react-icons/fa';

interface GoogleReviewsProps {
  placeId?: string;
}

export default function GoogleReviews({ placeId }: GoogleReviewsProps) {
  const handleReviewClick = () => {
    // This will redirect to Google My Business review page
    const reviewUrl = placeId 
      ? `https://search.google.com/local/writereview?placeid=${placeId}`
      : 'https://www.google.com/search?q=Cabinet+Orthophonie+Sofia+EL+FENE+Casablanca';
    
    window.open(reviewUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
      <div className="flex justify-center mb-4">
        <FaGoogle className="text-5xl text-[#4285F4]" />
      </div>
      <h3 className="text-2xl font-bold mb-4">Laissez-nous un avis</h3>
      <p className="text-gray-600 mb-6">
        Votre avis nous aide à améliorer nos services et aide d&apos;autres familles à nous trouver.
      </p>
      <div className="flex justify-center gap-2 mb-6">
        {[1, 2, 3, 4, 5].map((star) => (
          <FaStar key={star} className="text-3xl text-yellow-400" />
        ))}
      </div>
      <button
        onClick={handleReviewClick}
        className="bg-[#4285F4] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#357ABD] transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
      >
        Écrire un avis sur Google
      </button>
    </div>
  );
}

