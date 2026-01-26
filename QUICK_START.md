# 🚀 Quick Start - Cabinet Centre Ville

Guide rapide pour démarrer avec votre nouveau site web.

---

## ⚡ Démarrage Immédiat

### 1. Vérifier l'Installation

Le site est déjà installé et prêt à l'emploi!

```bash
cd /Users/youssof/Desktop/orthocasa

# Le serveur est déjà en cours d'exécution sur:
# http://localhost:3000
```

### 2. Voir le Site

Ouvrez votre navigateur: **http://localhost:3000**

---

## 📝 Modifications Rapides

### Changer les Coordonnées

**Fichier:** `lib/seo.ts`

```typescript
phone: '0654182804',        // Votre numéro
email: 'contact@orthophonistecasablanca.ma', // Votre email
```

### Ajouter Vos Photos

1. Placez vos photos dans: `/public/images/`
2. Nommez-les clairement (ex: `hero-accueil.jpg`)
3. Remplacez les URLs dans le code:

```typescript
// Cherchez "images.unsplash.com" et remplacez par:
imageSrc="/images/hero-accueil.jpg"
```

### Modifier les Textes

Les pages sont dans le dossier `app/`:
- `app/page.tsx` - Page d'accueil
- `app/le-cabinet/page.tsx` - Le cabinet
- `app/equipe/page.tsx` - L'équipe
- etc.

---

## 🌐 Mise en Ligne (5 minutes)

### Option 1: Vercel (Recommandé)

1. Créez un compte sur [vercel.com](https://vercel.com) (gratuit)
2. Connectez votre GitHub
3. Importez le projet
4. Cliquez "Deploy"
5. **C'est en ligne!** ✅

### Option 2: Git + Vercel

```bash
# Initialiser Git
git init
git add .
git commit -m "Initial commit"

# Créer repo GitHub (sur github.com)
# Puis:
git remote add origin https://github.com/VOUS/orthocasa.git
git push -u origin main

# Sur Vercel: Import from GitHub
```

---

## 🎯 Checklist Première Semaine

### Jour 1: Configuration de Base
- [ ] Site en ligne sur Vercel
- [ ] Domaine configuré
- [ ] SSL actif (automatique)

### Jour 2: Contenu
- [ ] Remplacer photos placeholder
- [ ] Vérifier tous les textes
- [ ] Ajouter logo

### Jour 3: Google My Business
- [ ] Fiche GMB complétée
- [ ] 10 photos ajoutées
- [ ] Lien site web ajouté

### Jour 4: SEO
- [ ] Google Search Console
- [ ] Sitemap soumis
- [ ] Vérification indexation

### Jour 5: Avis
- [ ] Demander 5 premiers avis
- [ ] Répondre aux avis

---

## 🆘 Problèmes Courants

### Le site ne démarre pas

```bash
# Réinstallez les dépendances
npm install

# Démarrez
npm run dev
```

### Images ne s'affichent pas

- Vérifiez que le chemin commence par `/`
- Exemple: `/images/photo.jpg`

### Changements non visibles

```bash
# Effacez le cache
rm -rf .next

# Rebuild
npm run build
npm run dev
```

---

## 📞 Aide Rapide

### Commandes Essentielles

```bash
npm run dev        # Démarrer en développement
npm run build      # Construire pour production
npm start          # Démarrer en production
```

### Fichiers Importants

- `lib/seo.ts` - Configuration SEO et contact
- `app/page.tsx` - Page d'accueil
- `components/Header.tsx` - Menu navigation
- `components/Footer.tsx` - Pied de page

### Documentations

1. **Technique:** `README.md`
2. **Déploiement:** `DEPLOYMENT.md`
3. **Utilisation:** `GUIDE_UTILISATION.md`
4. **SEO:** `SEO_CHECKLIST.md`
5. **Résumé:** `PROJECT_SUMMARY.md`

---

## ✅ Vous Êtes Prêt!

Votre site est **100% fonctionnel** et prêt à l'emploi.

**Actions suivantes:**
1. ✅ Testez toutes les pages
2. ✅ Remplacez les photos
3. ✅ Déployez sur Vercel
4. ✅ Configurez Google My Business

**Temps estimé: 2-3 heures**

---

## 🎉 Bon Lancement!

Pour toute question: **contact@orthophonistecasablanca.ma** ou **0654 18 28 04**

