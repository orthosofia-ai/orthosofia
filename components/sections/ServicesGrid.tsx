import Image from 'next/image';
import Link from 'next/link';
import { IconType } from 'react-icons';

interface Service {
  icon: IconType;
  title: string;
  description: string;
  image: string;
  link?: string;
}

interface ServicesGridProps {
  services: Service[];
  columns?: number;
}

export default function ServicesGrid({ services, columns = 3 }: ServicesGridProps) {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4'
  };

  const colors = [
    { bg: 'from-blue-500 to-blue-600', light: 'bg-blue-50', icon: 'bg-blue-500' },
    { bg: 'from-purple-500 to-purple-600', light: 'bg-purple-50', icon: 'bg-purple-500' },
    { bg: 'from-pink-500 to-pink-600', light: 'bg-pink-50', icon: 'bg-pink-500' },
  ];

  return (
    <div className={`grid grid-cols-1 ${gridCols[columns as keyof typeof gridCols]} gap-8`}>
      {services.map((service, index) => {
        const Icon = service.icon;
        const color = colors[index % colors.length];
        
        return (
          <div
            key={index}
            className="group relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3"
          >
            {/* Decorative elements */}
            <div className={`absolute top-0 right-0 w-32 h-32 ${color.light} rounded-full -mr-16 -mt-16 opacity-50`}></div>
            
            {/* Image */}
            <div className="relative h-56 overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${color.bg} opacity-80`}></div>
              
              {/* Icon in image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl transform group-hover:scale-110 transition-transform duration-500">
                  <Icon className="text-6xl text-white drop-shadow-lg" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 relative">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-primary-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              {service.link && (
                <Link
                  href={service.link}
                  className={`inline-flex items-center gap-2 ${color.icon} text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform group-hover:translate-x-1`}
                >
                  En savoir plus
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

