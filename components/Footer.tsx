import Link from 'next/link';
import Image from 'next/image';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary-600 rounded-full opacity-5 -ml-32 -mt-32"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-600 rounded-full opacity-5 -mr-48 -mb-48"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12">
                <Image
                  src="/logo.jpg"
                  alt="Cabinet Centre Ville Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-white text-xl font-bold">Cabinet Centre Ville</h3>
            </div>
            <p className="text-sm leading-relaxed mb-6 text-gray-400">
              Cabinet pluridisciplinaire à Casablanca offrant des services d&apos;orthophonie, 
              psychologie et psychomotricité pour enfants, adolescents et adultes.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://www.facebook.com/share/1G8rLLtkJ3/?mibextid=wwXIfr" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                aria-label="Facebook"
              >
                <FaFacebook className="text-lg" />
              </a>
              <a 
                href="https://www.instagram.com/cabinet_orthophonie_sofia?igsh=bmdwaHdsa2ZvazRp" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram className="text-lg" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-primary-600 rounded-full"></span>
              Liens Rapides
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-primary-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-primary-600 rounded-full group-hover:w-2 transition-all"></span>
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/le-cabinet" className="hover:text-white transition-colors">
                  Le Cabinet
                </Link>
              </li>
              <li>
                <Link href="/equipe" className="hover:text-white transition-colors">
                  L&apos;Équipe
                </Link>
              </li>
              <li>
                <Link href="/prises-en-charge" className="hover:text-white transition-colors">
                  Nos Prises en Charge
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/temoignages" className="hover:text-white transition-colors">
                  Témoignages
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-secondary-600 rounded-full"></span>
              Nos Services
            </h3>
            <ul className="space-y-3 text-sm">
              <li>• Orthophonie</li>
              <li>• Psychologie</li>
              <li>• Psychomotricité</li>
              <li>• Troubles du langage</li>
              <li>• Troubles des apprentissages</li>
              <li>• Troubles du neurodéveloppement</li>
              <li>• Accompagnement psychologique</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-primary-600 rounded-full"></span>
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <div className="w-10 h-10 bg-primary-600/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary-600 transition-colors">
                  <FaMapMarkerAlt className="text-primary-400 group-hover:text-white transition-colors" />
                </div>
                <a 
                  href="https://maps.app.goo.gl/UZYhYESKLgGYDV866"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 mt-2 hover:text-primary-400 transition-colors"
                >
                  23, Rue Abou Soufiane<br />
                  Bd de Paris<br />
                  Casablanca 20000, Maroc
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-primary-600/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary-600 transition-colors">
                  <FaPhone className="text-primary-400 group-hover:text-white transition-colors" />
                </div>
                <a href="tel:0654182804" className="text-sm text-gray-400 hover:text-white transition-colors">
                  0654 18 28 04
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-primary-600/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary-600 transition-colors">
                  <FaEnvelope className="text-primary-400 group-hover:text-white transition-colors" />
                </div>
                <a href="mailto:contact@orthophonistecasablanca.ma" className="text-sm text-gray-400 hover:text-white transition-colors break-all">
                  contact@orthophonistecasablanca.ma
                </a>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-10 h-10 bg-primary-600/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary-600 transition-colors">
                  <FaClock className="text-primary-400 group-hover:text-white transition-colors" />
                </div>
                <span className="text-sm text-gray-400 mt-2">
                  Du lundi au samedi<br />
                  Sur rendez-vous
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Cabinet Centre Ville. Tous droits réservés.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/mentions-legales" className="text-gray-500 hover:text-primary-400 transition-colors">
                Mentions Légales
              </Link>
              <span className="text-gray-700">•</span>
              <Link href="/politique-confidentialite" className="text-gray-500 hover:text-primary-400 transition-colors">
                Politique de Confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

