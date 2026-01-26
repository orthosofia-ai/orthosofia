'use client';

import { useState, useEffect } from 'react';
import { FaStar, FaPaperPlane } from 'react-icons/fa';
import Hero from '@/components/sections/Hero';
import TestimonialsCarousel from '@/components/sections/TestimonialsCarousel';
import GoogleReviews from '@/components/GoogleReviews';
import CTASection from '@/components/sections/CTASection';

// Metadata is handled in the parent layout since this is a client component

interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export default function Temoignages() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    author: '',
    rating: 5,
    comment: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await fetch('/api/reviews');
      if (response.ok) {
        const data = await response.json();
        setReviews(data.reviews);
      }
    } catch (error) {
      console.error('Error fetching reviews:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage('');

    try {
      const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage('Merci pour votre témoignage ! Il sera publié après vérification.');
        setFormData({ author: '', rating: 5, comment: '' });
        fetchReviews();
      } else {
        setMessage('Une erreur est survenue. Veuillez réessayer.');
      }
    } catch (error) {
      setMessage('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Hero
        title="Témoignages"
        subtitle="Vos avis comptent"
        description="Découvrez les expériences de nos patients et partagez la vôtre"
        imageSrc="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&auto=format&fit=crop"
        imageAlt="Témoignages patients"
      />

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Votre Avis Nous Aide à Progresser
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Les témoignages de nos patients sont précieux. Ils nous permettent d&apos;améliorer 
              constamment la qualité de nos services et aident d&apos;autres familles à faire le 
              premier pas vers un accompagnement.
            </p>
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Laissez un Avis sur Google
              </h2>
              <p className="text-lg text-gray-600">
                Votre avis sur Google My Business aide d&apos;autres familles à nous trouver
              </p>
            </div>
            <GoogleReviews />
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      {!loading && reviews.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Ce Que Disent Nos Patients
              </h2>
            </div>
            <TestimonialsCarousel testimonials={reviews} />
          </div>
        </section>
      )}

      {/* Testimonial Form */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                  Partagez Votre Expérience
                </h2>
                <p className="text-lg text-gray-600">
                  Votre témoignage sera publié après vérification
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="author" className="block text-sm font-semibold text-gray-700 mb-2">
                    Votre nom ou initiales
                  </label>
                  <input
                    type="text"
                    id="author"
                    required
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Ex: Sophie M."
                  />
                </div>

                {/* Rating */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Votre note
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setFormData({ ...formData, rating: star })}
                        className="focus:outline-none focus:ring-2 focus:ring-primary-500 rounded"
                      >
                        <FaStar
                          className={`text-4xl ${
                            star <= formData.rating ? 'text-yellow-400' : 'text-gray-300'
                          } hover:text-yellow-400 transition-colors`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Comment */}
                <div>
                  <label htmlFor="comment" className="block text-sm font-semibold text-gray-700 mb-2">
                    Votre témoignage
                  </label>
                  <textarea
                    id="comment"
                    required
                    rows={6}
                    value={formData.comment}
                    onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Partagez votre expérience avec notre cabinet..."
                  />
                </div>

                {/* Message */}
                {message && (
                  <div className={`p-4 rounded-lg ${
                    message.includes('Merci') ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
                  }`}>
                    {message}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-primary-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    'Envoi en cours...'
                  ) : (
                    <>
                      <FaPaperPlane />
                      Envoyer mon témoignage
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Prêt à commencer votre parcours ?"
        description="Rejoignez nos patients satisfaits et bénéficiez d'un accompagnement personnalisé"
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

