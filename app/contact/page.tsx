'use client';

import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane, FaWhatsapp } from 'react-icons/fa';
import Hero from '@/components/sections/Hero';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Demande de rendez-vous',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage('');

    // In production, this would send to your email service or backend
    // For now, we'll just simulate a successful submission
    setTimeout(() => {
      setMessage('Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'Demande de rendez-vous',
        message: ''
      });
      setSubmitting(false);
    }, 1000);
  };

  return (
    <>
      <Hero
        title="Contact & Rendez-vous"
        subtitle="Prenons contact"
        description="Nous sommes à votre écoute pour toute question ou demande de rendez-vous"
        imageSrc="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&auto=format&fit=crop"
        imageAlt="Contact cabinet orthophonie Casablanca"
      />

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Phone */}
            <a
              href="tel:0654182804"
              className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center group"
            >
              <div className="bg-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <FaPhone className="text-3xl text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">Téléphone</h3>
              <p className="text-primary-600 font-semibold">0654 18 28 04</p>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/212654182804"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center group"
            >
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <FaWhatsapp className="text-3xl text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">WhatsApp</h3>
              <p className="text-green-600 font-semibold">Message direct</p>
            </a>

            {/* Email */}
            <a
              href="mailto:contact@orthophonistecasablanca.ma"
              className="bg-gradient-to-br from-secondary-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center group"
            >
              <div className="bg-secondary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <FaEnvelope className="text-3xl text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">Email</h3>
              <p className="text-secondary-600 font-semibold text-sm break-all">contact@orthophonistecasablanca.ma</p>
            </a>

            {/* Address */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg text-center">
              <div className="bg-gray-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaMapMarkerAlt className="text-3xl text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">Adresse</h3>
              <p className="text-gray-700 font-semibold text-sm">
                Centre-Ville<br />Casablanca
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form and Info */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  Envoyez-nous un message
                </h2>
                <p className="text-gray-600 mb-8">
                  Remplissez le formulaire ci-dessous et nous vous répondrons dans les meilleurs délais.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Nom complet <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Votre nom"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="votre@email.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Téléphone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="0612345678"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                      Sujet
                    </label>
                    <select
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option>Demande de rendez-vous</option>
                      <option>Question générale</option>
                      <option>Informations sur les prises en charge</option>
                      <option>Demande de bilan</option>
                      <option>Autre</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Décrivez votre demande..."
                    />
                  </div>

                  {/* Message */}
                  {message && (
                    <div className="p-4 bg-green-50 text-green-800 rounded-lg">
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
                        Envoyer le message
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Additional Info */}
              <div className="space-y-8">
                {/* Hours */}
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center">
                      <FaClock className="text-2xl text-primary-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Horaires</h3>
                  </div>
                  <div className="space-y-3 text-gray-700">
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-semibold">Lundi - Vendredi</span>
                      <span>Sur rendez-vous</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-semibold">Samedi</span>
                      <span>Sur rendez-vous</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="font-semibold">Dimanche</span>
                      <span className="text-red-600">Fermé</span>
                    </div>
                  </div>
                </div>

                {/* Quick Tips */}
                <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">
                    Avant votre première visite
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="text-primary-600 mt-1">•</span>
                      <span>Préparez les questions que vous souhaitez poser</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary-600 mt-1">•</span>
                      <span>Apportez vos bilans médicaux ou scolaires si disponibles</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary-600 mt-1">•</span>
                      <span>Notez l&apos;historique des difficultés observées</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary-600 mt-1">•</span>
                      <span>Prévoyez 1h pour le premier rendez-vous</span>
                    </li>
                  </ul>
                </div>

                {/* Map Info */}
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center">
                      <FaMapMarkerAlt className="text-2xl text-primary-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Localisation</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Notre cabinet est situé en plein centre-ville de Casablanca, 
                    facilement accessible en transport ou en voiture.
                  </p>
                  <div className="bg-primary-50 rounded-xl p-4 mb-4">
                    <p className="font-semibold text-gray-900 mb-2">
                      23, Rue Abou Soufiane
                    </p>
                    <p className="text-gray-700">
                      Bd de Paris<br />
                      Casablanca 20000, Maroc
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      Plus Code: H9VH+MR Casablanca
                    </p>
                  </div>
                  <a
                    href="https://maps.app.goo.gl/UZYhYESKLgGYDV866"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-700 transition-colors w-full justify-center"
                  >
                    <FaMapMarkerAlt />
                    Ouvrir dans Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-12 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg mb-2">
            <strong>Pour toute urgence ou question rapide :</strong>
          </p>
          <a
            href="tel:0654182804"
            className="text-2xl font-bold hover:text-primary-200 transition-colors"
          >
            0654 18 28 04
          </a>
        </div>
      </section>
    </>
  );
}

