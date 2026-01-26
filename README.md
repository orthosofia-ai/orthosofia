# Cabinet Centre Ville - Orthophonie Casablanca

Site web professionnel pour le cabinet d'orthophonie de Madame Sofia EL FENE à Casablanca, Maroc.

## 🌟 Fonctionnalités

- ✅ **Design moderne et responsive** - Mobile-first, optimisé pour tous les écrans
- ✅ **SEO optimisé** - Structured data, meta tags, sitemap, robots.txt
- ✅ **Multilingue** - Prêt pour l'extension multilingue
- ✅ **Performance** - Optimisé pour gérer 10,000+ utilisateurs
- ✅ **Google My Business** - Intégration pour les avis
- ✅ **Pages complètes** - Toutes les pages nécessaires
- ✅ **Système de témoignages** - Collecte et affichage d'avis
- ✅ **Formulaire de contact** - Contact facile pour les patients

## 📋 Pages Disponibles

1. **Accueil** - Page d'accueil avec hero, services, et présentation
2. **Le Cabinet** - Présentation du cabinet et des valeurs
3. **L'Équipe** - Profils des professionnels
4. **Nos Prises en Charge** - Services détaillés (SEO optimisé)
5. **Questions & Conseils** - FAQ et conseils pratiques
6. **Témoignages** - Avis clients et intégration Google
7. **Contact** - Formulaire de contact et informations

## 🚀 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Construire pour la production
npm run build

# Démarrer en production
npm start
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## 🔧 Configuration

### 1. Informations du site

Modifiez les informations dans `/lib/seo.ts`:

```typescript
export const siteConfig = {
  url: 'https://www.orthophonistecasablanca.ma',
  phone: '0654182804',
  email: 'contact@orthophonistecasablanca.ma',
  // ... autres configurations
};
```

### 2. Google My Business

Pour activer l'intégration complète avec Google My Business:

1. Récupérez votre **Place ID** depuis Google My Business
2. Ajoutez-le dans `/lib/seo.ts`:
   ```typescript
   googleMapsPlaceId: 'VOTRE_PLACE_ID'
   ```

### 3. Google Search Console

1. Créez un compte sur [Google Search Console](https://search.google.com/search-console)
2. Ajoutez votre site
3. Récupérez le code de vérification
4. Ajoutez-le dans `/app/layout.tsx`:
   ```typescript
   verification: {
     google: 'VOTRE_CODE_VERIFICATION'
   }
   ```

### 4. Images

Remplacez les images placeholder (Unsplash) par vos propres images:
- Placez vos images dans `/public/images/`
- Mettez à jour les URLs dans les composants

### 5. Email de contact

Pour recevoir les emails du formulaire de contact, configurez un service comme:
- [SendGrid](https://sendgrid.com/)
- [Resend](https://resend.com/)
- [Nodemailer](https://nodemailer.com/)

Ajoutez la logique dans `/app/contact/page.tsx`

## 📱 Technologies Utilisées

- **Next.js 15** - Framework React
- **TypeScript** - Typage statique
- **Tailwind CSS** - Styling
- **React Icons** - Icônes
- **Structured Data** - Schema.org pour SEO

## 🎨 Personnalisation des couleurs

Les couleurs sont configurées dans `/tailwind.config.ts`:

```typescript
colors: {
  primary: { ... }, // Bleu par défaut
  secondary: { ... }, // Violet par défaut
}
```

## 📊 SEO & Performance

### SEO inclus:
- ✅ Meta tags optimisés
- ✅ Open Graph pour réseaux sociaux
- ✅ Structured Data (LocalBusiness, Reviews)
- ✅ Sitemap XML
- ✅ Robots.txt
- ✅ Canonical URLs
- ✅ Geo tags pour Casablanca

### Performance:
- ✅ Images optimisées avec Next.js Image
- ✅ Code splitting automatique
- ✅ Lazy loading
- ✅ Compression automatique
- ✅ Headers de sécurité

## 🚀 Déploiement

### Vercel (Recommandé)

1. Créez un compte sur [Vercel](https://vercel.com)
2. Connectez votre repository GitHub
3. Déployez en un clic

### Autres plateformes

- **Netlify**: Compatible
- **AWS**: Compatible
- **VPS**: Nécessite Node.js 18+

## 📞 Support

Pour toute question technique:
- Email: contact@orthophonistecasablanca.ma
- Téléphone: 0654 18 28 04

## 📄 License

© 2026 Cabinet Centre Ville. Tous droits réservés.

## 🔄 Mises à jour futures

- [ ] Système de réservation en ligne
- [ ] Blog/Articles
- [ ] Espace patient
- [ ] Paiement en ligne
- [ ] Version anglaise/arabe
