'use client';

import { useState } from 'react';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface Testimonial {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  if (testimonials.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">Aucun témoignage pour le moment.</p>
      </div>
    );
  }

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Testimonial Card */}
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
        <FaQuoteLeft className="text-5xl text-primary-200 mb-6" />
        
        {/* Rating */}
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={`text-2xl ${
                i < currentTestimonial.rating ? 'text-yellow-400' : 'text-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Comment */}
        <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
          &ldquo;{currentTestimonial.comment}&rdquo;
        </p>

        {/* Author */}
        <div className="border-t pt-6">
          <p className="font-bold text-gray-900">{currentTestimonial.author}</p>
          <p className="text-sm text-gray-500">
            {new Date(currentTestimonial.date).toLocaleDateString('fr-FR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
        </div>
      </div>

      {/* Navigation Buttons */}
      {testimonials.length > 1 && (
        <>
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all hover:bg-primary-50"
            aria-label="Témoignage précédent"
          >
            <FaChevronLeft className="text-primary-600 text-xl" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all hover:bg-primary-50"
            aria-label="Témoignage suivant"
          >
            <FaChevronRight className="text-primary-600 text-xl" />
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {testimonials.length > 1 && (
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 rounded-full transition-all ${
                index === currentIndex ? 'w-8 bg-primary-600' : 'w-3 bg-gray-300'
              }`}
              aria-label={`Aller au témoignage ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

