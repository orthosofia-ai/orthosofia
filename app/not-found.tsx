import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Page introuvable</h1>
        <p className="text-lg text-gray-600 mb-8">
          Cette page n&apos;existe pas ou a été déplacée.
        </p>
        <Link
          href="/"
          className="inline-block bg-primary-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-700"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </section>
  );
}
