import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FaCalendar, FaUser, FaArrowRight } from 'react-icons/fa';
import { getPublishedPosts } from '@/lib/blog';
import Hero from '@/components/sections/Hero';

export const metadata: Metadata = {
  title: 'Blog - Conseils en Orthophonie et Développement | Cabinet Centre Ville',
  description: 'Découvrez nos articles et conseils d\'experts sur l\'orthophonie, la psychologie et la psychomotricité. Informations et astuces pour accompagner votre enfant.',
  keywords: [
    'blog orthophonie',
    'conseils orthophoniste',
    'articles dyslexie',
    'aide langage enfant',
    'blog psychologie enfant',
    'conseils parents maroc',
  ],
};

export const dynamic = 'force-dynamic';

export default function BlogPage() {
  const posts = getPublishedPosts();

  return (
    <>
      <Hero
        title="Blog & Conseils"
        subtitle="Actualités et Expertise"
        description="Découvrez nos articles, conseils pratiques et actualités sur l'orthophonie, la psychologie et le développement de l'enfant"
        imageSrc="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1920&auto=format&fit=crop"
        imageAlt="Blog orthophonie"
      />

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {posts.length === 0 ? (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">📝</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Bientôt disponible
                </h2>
                <p className="text-gray-600">
                  Nos premiers articles arrivent prochainement !
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <article
                    key={post.id}
                    className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                  >
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={post.image || 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&auto=format&fit=crop'}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Meta */}
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <span className="flex items-center gap-1">
                          <FaCalendar className="text-primary-600" />
                          {new Date(post.date).toLocaleDateString('fr-FR', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <FaUser className="text-primary-600" />
                          {post.author}
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>

                      {/* Read More */}
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:gap-3 transition-all"
                      >
                        Lire l&apos;article
                        <FaArrowRight />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Besoin de Conseils Personnalisés ?
          </h2>
          <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
            Notre équipe est à votre écoute pour vous accompagner
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-xl"
          >
            Prendre Rendez-vous
          </Link>
        </div>
      </section>
    </>
  );
}

