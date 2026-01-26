'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes, FaPhone, FaEnvelope, FaCalendar } from 'react-icons/fa';

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Le Cabinet', href: '/le-cabinet' },
  { name: "L'Équipe", href: '/equipe' },
  { name: 'Nos Services', href: '/prises-en-charge' },
  { name: 'Blog', href: '/blog' },
  { name: 'Témoignages', href: '/temoignages' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isOpen) setIsOpen(false);
    };
    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isOpen]);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        isScrolled ? 'shadow-lg' : 'shadow-md'
      }`}
    >
      {/* Top Info Bar - Hidden on mobile */}
      <div className="hidden md:block bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-2 text-sm">
            <div className="flex items-center gap-6">
              <a href="tel:0654182804" className="flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors">
                <FaPhone className="text-primary-600" />
                <span>0654 18 28 04</span>
              </a>
              <a href="mailto:contact@orthophonistecasablanca.ma" className="flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors">
                <FaEnvelope className="text-primary-600" />
                <span>contact@orthophonistecasablanca.ma</span>
              </a>
            </div>
            <div className="text-gray-600">
              Lun - Sam | Sur rendez-vous
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-16 h-16 md:w-20 md:h-20">
              <Image
                src="/logo.jpg"
                alt="Cabinet Centre Ville Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <div className="text-lg font-bold text-gray-900">Cabinet Centre Ville</div>
              <div className="text-xs text-primary-600 font-medium">Fondatrice El Fene Sofia</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? 'bg-primary-600 text-white'
                    : 'text-gray-700 hover:bg-primary-50 hover:text-primary-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:0654182804"
              className="flex items-center gap-2 px-4 py-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors"
            >
              <FaPhone />
              <span className="hidden xl:inline">Appeler</span>
            </a>
            <Link
              href="/contact"
              className="flex items-center gap-2 bg-primary-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-md hover:shadow-lg"
            >
              <FaCalendar />
              <span>Prendre RDV</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(!isOpen);
            }}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Menu"
          >
            {isOpen ? (
              <FaTimes className="w-6 h-6 text-gray-700" />
            ) : (
              <FaBars className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white border-t border-gray-200 transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <nav className="container mx-auto px-4 py-4">
          <div className="space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                  pathname === item.href
                    ? 'bg-primary-600 text-white'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile CTAs */}
          <div className="mt-4 pt-4 border-t border-gray-200 space-y-3">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              <FaCalendar />
              Prendre Rendez-vous
            </Link>
            <a
              href="tel:0654182804"
              className="flex items-center justify-center gap-2 w-full bg-gray-100 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              <FaPhone />
              0654 18 28 04
            </a>
          </div>

          {/* Mobile Contact Info */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <a
              href="mailto:contact@orthophonistecasablanca.ma"
              className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:text-primary-600 transition-colors"
            >
              <FaEnvelope className="text-primary-600" />
              contact@orthophonistecasablanca.ma
            </a>
            <div className="px-4 py-2 text-sm text-gray-600">
              <span className="font-medium">Horaires:</span> Lun - Sam, Sur RDV
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
