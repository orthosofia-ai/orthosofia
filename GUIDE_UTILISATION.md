# Guide d'Utilisation - Cabinet Centre Ville

Guide pour gérer le contenu de votre site web.

## 📝 Modifier le Contenu

### 1. Informations de Contact

**Fichier:** `/lib/seo.ts`

```typescript
export const siteConfig = {
  phone: '0654182804',        // Modifiez ici
  email: 'contact@orthophonistecasablanca.ma', // Modifiez ici
  address: {
    streetAddress: 'Centre-Ville',  // Adresse précise
    addressLocality: 'Casablanca',
    postalCode: '20000',
  }
};
```

### 2. Textes de la Page d'Accueil

**Fichier:** `/app/page.tsx`

Modifiez les sections:
- Hero (titre principal)
- Services
- Présentation de Sofia EL FENE

### 3. Services et Prises en Charge

**Fichier:** `/app/prises-en-charge/page.tsx`

Pour ajouter un nouveau trouble:

```typescript
const treatments = [
  // ... troubles existants
  {
    id: 'nouveau-trouble',
    icon: FaBrain,  // Icône (importée en haut du fichier)
    title: 'Titre du Trouble',
    image: 'URL_IMAGE',
    description: 'Description courte',
    conditions: [
      {
        name: 'Nom de la condition',
        details: 'Détails de la condition'
      }
    ]
  }
];
```

### 4. Questions & Réponses (FAQ)

**Fichier:** `/app/questions-conseils/page.tsx`

Ajouter une nouvelle question:

```typescript
{
  q: 'Votre question ?',
  a: 'Votre réponse détaillée.'
}
```

### 5. Équipe

**Fichier:** `/app/equipe/page.tsx`

Pour ajouter un nouveau membre:

```typescript
<div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl shadow-lg">
  <div className="relative h-64">
    <Image
      src="URL_PHOTO"
      alt="Nom du professionnel"
      fill
      className="object-cover"
    />
  </div>
  <div className="p-8">
    <h3 className="text-2xl font-bold mb-2">Nom Prénom</h3>
    <p className="text-lg text-primary-600 font-semibold mb-4">
      Titre/Spécialité
    </p>
    <p className="text-gray-700 leading-relaxed mb-6">
      Présentation...
    </p>
  </div>
</div>
```

## 🖼️ Gérer les Images

### Ajouter Vos Propres Images

1. **Placez les images dans:** `/public/images/`

2. **Nommez-les clairement:**
   - `hero-accueil.jpg`
   - `cabinet-interieur.jpg`
   - `sofia-portrait.jpg`
   - `service-orthophonie.jpg`

3. **Remplacez dans le code:**

```typescript
// Avant (placeholder)
imageSrc="https://images.unsplash.com/photo-xxx"

// Après (votre image)
imageSrc="/images/hero-accueil.jpg"
```

### Tailles Recommandées

- **Hero sections:** 1920x1080px (16:9)
- **Portraits équipe:** 800x800px (carré)
- **Services:** 800x600px (4:3)
- **Format:** JPG (photos) ou PNG (logos)
- **Poids:** < 500KB par image

### Optimiser les Images

Avant d'ajouter une image:

1. Utilisez [tinypng.com](https://tinypng.com) pour compresser
2. Redimensionnez aux dimensions exactes
3. Convertissez en WebP si possible (meilleure compression)

## 🎨 Personnaliser les Couleurs

**Fichier:** `/tailwind.config.ts`

```typescript
colors: {
  primary: {
    // Votre couleur principale (actuellement bleu)
    500: '#0ea5e9',  // Couleur principale
    600: '#0284c7',  // Version plus foncée
    // Modifiez toutes les nuances
  },
  secondary: {
    // Couleur secondaire (actuellement violet)
    500: '#d946ef',
    // ...
  }
}
```

**Après modification:** Redémarrez le serveur (`npm run dev`)

## 📱 Gérer les Témoignages

Les témoignages sont stockés en mémoire. Pour une solution permanente:

### Option 1: Base de Données (Production)

Connectez une base de données (Supabase, MongoDB):

**Fichier:** `/lib/reviews.ts`

```typescript
// Remplacez les fonctions par des requêtes DB
export async function getReviews() {
  // Votre code de connexion DB
  const reviews = await db.reviews.findMany();
  return reviews;
}
```

### Option 2: CMS Headless (Facile)

Utilisez [Sanity.io](https://sanity.io) ou [Contentful](https://contentful.com):

1. Créez un compte (gratuit)
2. Configurez un schéma "Témoignage"
3. Connectez via leur SDK

## 🔧 Configuration Avancée

### Ajouter une Nouvelle Page

1. **Créez le dossier:** `/app/nom-page/`
2. **Créez le fichier:** `/app/nom-page/page.tsx`

```typescript
import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';

export const metadata: Metadata = {
  title: 'Titre de la Page',
  description: 'Description pour SEO',
};

export default function NomPage() {
  return (
    <>
      <Hero
        title="Titre"
        description="Description"
        imageSrc="/images/image.jpg"
        imageAlt="Description image"
      />
      
      {/* Votre contenu */}
    </>
  );
}
```

3. **Ajoutez au menu:** `/components/Header.tsx`

```typescript
const navigation = [
  // ... pages existantes
  { name: 'Nouvelle Page', href: '/nom-page' }
];
```

### Modifier les Horaires

**Fichier:** `/app/contact/page.tsx`

Trouvez la section horaires et modifiez:

```typescript
<div className="flex justify-between py-2">
  <span className="font-semibold">Lundi - Vendredi</span>
  <span>9h - 18h</span> {/* Modifiez ici */}
</div>
```

### Ajouter des Liens Réseaux Sociaux

**Fichier:** `/lib/seo.ts`

```typescript
socialMedia: {
  facebook: 'https://facebook.com/votre-page',
  instagram: 'https://instagram.com/votre-compte',
  linkedin: 'https://linkedin.com/company/votre-entreprise'
}
```

**Fichier:** `/components/Footer.tsx`

Remplacez `#` par vos vrais liens:

```typescript
<a href={siteConfig.socialMedia.facebook} ...>
```

## 📊 Suivre les Statistiques

### Google Analytics (si configuré)

1. Connectez-vous à [analytics.google.com](https://analytics.google.com)
2. Vérifiez:
   - Nombre de visiteurs
   - Pages les plus vues
   - Origine du trafic
   - Comportement mobile vs desktop

### Google Search Console

1. Connectez-vous à [search.google.com/search-console](https://search.google.com/search-console)
2. Vérifiez:
   - Position dans les résultats
   - Mots-clés qui amènent des visiteurs
   - Erreurs d'indexation
   - Performance mobile

## 🆘 Problèmes Courants

### Le site ne se met pas à jour

```bash
# Effacez le cache
rm -rf .next
npm run build
```

### Images qui ne s'affichent pas

1. Vérifiez que l'image existe dans `/public/images/`
2. Vérifiez le chemin (commence par `/`)
3. Vérifiez l'extension (.jpg, .png, etc.)

### Changements CSS non visibles

```bash
# Redémarrez le serveur
# Appuyez sur Ctrl+C puis
npm run dev
```

### Erreur de build

```bash
# Vérifiez les erreurs TypeScript
npm run build

# Corrigez les erreurs affichées
```

## 📞 Besoin d'Aide ?

Pour toute modification complexe ou personnalisation avancée:
- Email: contact@orthophonistecasablanca.ma
- Consultez la documentation Next.js: [nextjs.org/docs](https://nextjs.org/docs)

## ✅ Checklist Maintenance Mensuelle

- [ ] Vérifier les témoignages en attente
- [ ] Mettre à jour les photos si nécessaire
- [ ] Vérifier Google Analytics
- [ ] Répondre aux messages du formulaire
- [ ] Vérifier le positionnement SEO
- [ ] Sauvegarder les données importantes

---

**Bon courage avec votre site!** 🎉

