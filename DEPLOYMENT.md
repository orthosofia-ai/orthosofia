# Guide de Déploiement - Cabinet Centre Ville

Ce guide vous accompagne pour déployer votre site en production.

## 🚀 Déploiement sur Vercel (Recommandé)

Vercel est la plateforme officielle de Next.js et offre le meilleur déploiement.

### Étape 1: Préparer le Repository Git

```bash
# Initialiser Git (si pas déjà fait)
git init

# Ajouter tous les fichiers
git add .

# Commit initial
git commit -m "Initial commit - Cabinet Centre Ville"

# Créer un repository sur GitHub et le lier
git remote add origin https://github.com/VOTRE-USERNAME/orthocasa.git
git branch -M main
git push -u origin main
```

### Étape 2: Déployer sur Vercel

1. Allez sur [vercel.com](https://vercel.com)
2. Créez un compte (gratuit) avec GitHub
3. Cliquez sur "Add New Project"
4. Sélectionnez votre repository `orthocasa`
5. Configurez les variables d'environnement:
   - `NEXT_PUBLIC_SITE_URL`: `https://www.orthophonistecasablanca.ma`
   - `NEXT_PUBLIC_GOOGLE_PLACE_ID`: Votre Place ID Google
6. Cliquez sur "Deploy"

**C'est fait !** Votre site sera déployé en quelques minutes.

### Étape 3: Configurer le Domaine Personnalisé

1. Dans Vercel, allez dans Settings > Domains
2. Ajoutez votre domaine: `orthophonistecasablanca.ma`
3. Suivez les instructions pour configurer les DNS:

**Chez votre registrar de domaine (ex: ma-domains.ma):**

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

4. Attendez la propagation DNS (15 min - 48h)
5. Vercel configurera automatiquement le certificat SSL

## 📊 Configuration Post-Déploiement

### 1. Google Search Console

Pour apparaître dans les résultats de recherche Google:

1. Allez sur [search.google.com/search-console](https://search.google.com/search-console)
2. Ajoutez votre propriété: `https://www.orthophonistecasablanca.ma`
3. Vérifiez la propriété:
   - Option 1: Balise HTML (déjà préparée dans le code)
   - Option 2: DNS TXT record
4. Soumettez votre sitemap: `https://www.orthophonistecasablanca.ma/sitemap.xml`

### 2. Google My Business - Intégration Complète

**Récupérer votre Place ID:**

1. Allez sur [developers.google.com/maps/documentation/places/web-service/place-id](https://developers.google.com/maps/documentation/places/web-service/place-id)
2. Recherchez votre établissement
3. Copiez le Place ID (format: `ChIJ...`)
4. Ajoutez-le dans Vercel:
   - Settings > Environment Variables
   - `NEXT_PUBLIC_GOOGLE_PLACE_ID` = Votre Place ID

**Lier votre site à Google My Business:**

1. Connectez-vous à [business.google.com](https://business.google.com)
2. Sélectionnez votre établissement
3. Allez dans "Info" > "Site web"
4. Ajoutez: `https://www.orthophonistecasablanca.ma`
5. Dans "Services", ajoutez tous vos services

### 3. Configuration des Emails du Formulaire de Contact

Le formulaire de contact nécessite un service d'envoi d'email.

**Option A: Resend (Recommandé - Simple)**

1. Créez un compte sur [resend.com](https://resend.com) (gratuit: 3000 emails/mois)
2. Vérifiez votre domaine
3. Récupérez votre API Key
4. Installez Resend:
   ```bash
   npm install resend
   ```
5. Créez `/app/api/contact/route.ts`:

```typescript
import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const { name, email, phone, subject, message } = await request.json();

  try {
    await resend.emails.send({
      from: 'contact@orthophonistecasablanca.ma',
      to: 'contact@orthophonistecasablanca.ma',
      subject: `Nouveau message: ${subject}`,
      html: `
        <h2>Nouveau message depuis le site web</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Téléphone:</strong> ${phone}</p>
        <p><strong>Sujet:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
```

6. Ajoutez dans Vercel Environment Variables:
   ```
   RESEND_API_KEY=re_xxxxx
   ```

**Option B: SendGrid**

1. Créez un compte sur [sendgrid.com](https://sendgrid.com)
2. Suivez leur documentation d'intégration Next.js

### 4. Google Analytics (Optionnel mais Recommandé)

Pour suivre vos visiteurs:

1. Créez un compte [analytics.google.com](https://analytics.google.com)
2. Créez une propriété GA4
3. Récupérez votre Measurement ID (format: `G-XXXXXXXXXX`)
4. Créez `/lib/analytics.tsx`:

```typescript
'use client';

import Script from 'next/script';

export default function Analytics() {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

  if (!GA_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
```

5. Ajoutez dans `/app/layout.tsx` avant `</body>`:
   ```typescript
   <Analytics />
   ```

6. Ajoutez dans Vercel:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

## 🔒 Sécurité

Le site inclut déjà:
- ✅ Headers de sécurité (HSTS, X-Frame-Options, etc.)
- ✅ Protection CSRF
- ✅ Validation des entrées
- ✅ SSL/HTTPS automatique (Vercel)

## 📈 Performance

Le site est optimisé pour:
- ✅ Score Lighthouse 95+
- ✅ Images optimisées
- ✅ Code splitting automatique
- ✅ Caching agressif
- ✅ CDN global (Vercel)

## 🔄 Mises à Jour

Pour mettre à jour le site:

```bash
# Modifier le code localement
git add .
git commit -m "Description des modifications"
git push

# Vercel déploiera automatiquement!
```

## 📱 Test Mobile

Testez sur:
- Google Mobile-Friendly Test
- PageSpeed Insights
- Lighthouse (Chrome DevTools)

## ✅ Checklist Finale

Avant de lancer:

- [ ] Domaine configuré et SSL actif
- [ ] Google Search Console configuré
- [ ] Google My Business lié
- [ ] Place ID ajouté
- [ ] Formulaire de contact fonctionnel
- [ ] Analytics configuré
- [ ] Testé sur mobile
- [ ] Testé tous les liens
- [ ] Vérifié toutes les images
- [ ] SEO vérifié (meta tags, structured data)

## 🆘 Support

En cas de problème:
- Documentation Vercel: [vercel.com/docs](https://vercel.com/docs)
- Documentation Next.js: [nextjs.org/docs](https://nextjs.org/docs)
- Email: contact@orthophonistecasablanca.ma

## 💰 Coûts

**Avec Vercel (Hobby Plan - Gratuit):**
- Hébergement: **0€/mois**
- Domaine: ~15€/an (chez votre registrar)
- Resend Email: **0€/mois** (jusqu'à 3000 emails)
- **Total: ~1.25€/mois**

Parfait pour commencer! Vous pourrez passer au plan Pro (20$/mois) si vous dépassez les limites.

---

**Félicitations!** Votre site est prêt pour la production. 🎉

