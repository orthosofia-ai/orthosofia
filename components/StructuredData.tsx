import { generateLocalBusinessSchema } from '@/lib/seo';

export default function StructuredData() {
  const schema = generateLocalBusinessSchema();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

