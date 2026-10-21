'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  imageSrc?: string;
  imageAlt?: string;
  images?: Array<{ src: string; alt: string }>;
  overlay?: boolean;
}

export default function Hero({
  title,
  subtitle,
  description,
  ctaText,
  ctaLink,
  imageSrc,
  imageAlt,
  images,
  overlay = true
}: HeroProps) {
  // Use images array if provided, otherwise fall back to single image
  const slideImages = images || (imageSrc ? [{ src: imageSrc, alt: imageAlt || '' }] : []);

  return (
    <section className="relative h-[70vh] md:h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect="fade"
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            bulletClass: 'swiper-pagination-bullet !bg-white/60',
            bulletActiveClass: 'swiper-pagination-bullet-active !bg-white',
          }}
          loop={slideImages.length > 1}
          className="w-full h-full"
        >
          {slideImages.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="100vw"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        
        {overlay && (
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/95 via-primary-800/90 to-secondary-900/85 z-10"></div>
        )}
        
        {/* Animated shapes */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-secondary-500/20 rounded-full blur-3xl animate-pulse z-10"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse animation-delay-400 z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center text-white">
          {subtitle && (
            <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full mb-6 animate-fade-in">
              <p className="text-lg md:text-xl text-white font-semibold">
                {subtitle}
              </p>
            </div>
          )}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight animate-fade-in-up">
            <span className="bg-gradient-to-r from-white to-primary-100 bg-clip-text text-transparent">
              {title}
            </span>
          </h1>
          {description && (
            <p className="text-xl md:text-2xl mb-10 text-gray-100 leading-relaxed max-w-3xl mx-auto animate-fade-in-up animation-delay-200 font-light">
              {description}
            </p>
          )}
          {ctaText && ctaLink && (
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animation-delay-400">
              <Link
                href={ctaLink}
                className="group bg-gradient-to-r from-secondary-600 to-secondary-700 text-white px-10 py-5 rounded-full text-lg font-bold hover:from-secondary-700 hover:to-secondary-800 transition-all duration-300 shadow-2xl hover:shadow-secondary-500/50 transform hover:scale-105 inline-flex items-center justify-center gap-3"
              >
                {ctaText}
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <Link
                href="/prises-en-charge"
                className="bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-white/20 transition-all duration-300 border-2 border-white/50 hover:border-white inline-flex items-center justify-center gap-3 group"
              >
                Nos Services
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-7 h-12 border-2 border-white/70 rounded-full flex justify-center backdrop-blur-sm bg-white/5">
          <div className="w-1.5 h-3 bg-white rounded-full mt-3 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}

