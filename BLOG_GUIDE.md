# 📝 Guide du Blog - Cabinet Centre Ville

## ✅ Système de Blog Complet

Le blog est maintenant entièrement fonctionnel avec:
- ✅ Page publique du blog
- ✅ Pages d'articles individuels
- ✅ Administration protégée par mot de passe
- ✅ Upload d'images
- ✅ SEO optimisé
- ✅ Pas de base de données nécessaire

---

## 🌐 URLs

### Public:
- **Liste des articles:** `http://localhost:3000/blog`
- **Article individuel:** `http://localhost:3000/blog/[slug]`

### Admin (Protégé):
- **Administration:** `http://localhost:3000/admin/blog`
- **Mot de passe par défaut:** `orthocasa2024`

---

## 🔐 Connexion Admin

1. Allez sur: `http://localhost:3000/admin/blog`
2. Entrez le mot de passe: **orthocasa2024**
3. Vous êtes connecté!

### Changer le mot de passe:

Créez un fichier `.env.local` (déjà créé) et modifiez:

```env
ADMIN_PASSWORD=votre_nouveau_mot_de_passe
```

---

## ✍️ Créer un Article

1. **Connectez-vous** à `/admin/blog`
2. Cliquez sur **"Nouvel Article"**
3. Remplissez le formulaire:
   - **Titre:** Titre de votre article
   - **Catégorie:** Orthophonie, Psychologie, etc.
   - **Auteur:** Sofia EL FENE (par défaut)
   - **Image:** Cliquez pour uploader une photo
   - **Extrait:** Résumé court (pour SEO et aperçu)
   - **Contenu:** Texte complet de l'article
   - **Mots-clés SEO:** Séparés par des virgules
   - **Publier:** Cochez pour rendre visible

4. Cliquez sur **"Publier"**

---

## 📸 Upload d'Images

### Pour l'image de couverture:
1. Dans le formulaire, cliquez sur "Choisir un fichier"
2. Sélectionnez votre image
3. Elle sera automatiquement uploadée dans `/public/images/blog/`
4. L'URL sera automatiquement ajoutée

### Images dans le contenu:
Pour ajouter des images dans le texte:
1. Uploadez d'abord l'image via le champ "Image de couverture"
2. Copiez l'URL générée
3. Dans le contenu, utilisez du HTML:
   ```html
   <img src="/images/blog/votre-image.jpg" alt="Description" />
   ```

---

## 📝 Formater le Contenu

Le contenu supporte:
- **Sauts de ligne simples** = nouveaux paragraphes
- **HTML basique** pour le formatage

Exemples:

```
Ceci est un paragraphe.

Ceci est un autre paragraphe.

<strong>Texte en gras</strong>
<em>Texte en italique</em>

<h2>Sous-titre</h2>

<ul>
  <li>Point 1</li>
  <li>Point 2</li>
</ul>
```

---

## 🎯 SEO Optimisé

Chaque article génère automatiquement:
- ✅ **Meta tags** optimisés
- ✅ **Open Graph** pour réseaux sociaux
- ✅ **Structured Data** (Schema.org Article)
- ✅ **Mots-clés** personnalisables
- ✅ **URL SEO-friendly** (slug automatique)

### Conseils SEO:

1. **Titre:** 50-60 caractères, incluez un mot-clé
2. **Extrait:** 150-160 caractères, résumé attractif
3. **Mots-clés:** 5-10 mots-clés pertinents
4. **Contenu:** Minimum 500 mots pour un bon SEO

**Exemples de mots-clés:**
```
dyslexie casablanca, orthophonie enfant, troubles langage maroc, conseils parents, développement enfant
```

---

## 📂 Structure des Fichiers

```
/data/
  └── blog-posts.json          # Tous vos articles (JSON)

/public/images/blog/
  └── [vos-images].jpg         # Images uploadées

/app/blog/
  ├── page.tsx                 # Liste des articles
  └── [slug]/page.tsx          # Page article

/app/admin/blog/
  └── page.tsx                 # Administration
```

---

## 🔧 Gestion des Articles

### Modifier un article:
1. Dans l'admin, cliquez sur l'icône **✏️ Edit**
2. Modifiez les champs
3. Cliquez sur **"Mettre à jour"**

### Supprimer un article:
1. Cliquez sur l'icône **🗑️ Trash**
2. Confirmez la suppression

### Brouillon vs Publié:
- **Coché** = Article visible sur le site
- **Décoché** = Brouillon (non visible)

---

## 💡 Idées d'Articles (SEO)

### Orthophonie:
1. "5 signes qu'il faut consulter un orthophoniste à Casablanca"
2. "Comment aider son enfant dyslexique: Guide pratique"
3. "Qu'est-ce que la dysphasie? Symptômes et traitements"
4. "Bégaiement chez l'enfant: Que faire?"
5. "Retard de langage vs trouble du langage"

### Psychologie:
1. "TDAH: Guide complet pour les parents"
2. "Comment gérer l'anxiété chez l'enfant"
3. "Troubles du comportement: Quand consulter?"

### Conseils Parents:
1. "10 activités pour stimuler le langage à la maison"
2. "Comment préparer son enfant à la première séance"
3. "L'importance du jeu dans le développement"

---

## 🚀 Publication

### Avant de publier:
- [ ] Titre accrocheur et clair
- [ ] Image de qualité (min 800x600px)
- [ ] Extrait bien rédigé
- [ ] Contenu relu et corrigé
- [ ] Mots-clés SEO ajoutés
- [ ] Case "Publier" cochée

### Après publication:
- ✅ Vérifiez l'article sur `/blog`
- ✅ Partagez sur réseaux sociaux
- ✅ Ajoutez le lien dans votre newsletter

---

## 🔒 Sécurité

### Mot de passe:
- **Changez le mot de passe** par défaut en production
- Stocké dans `.env.local` (non versionné)
- Session stockée dans le navigateur

### Backup:
- Vos articles sont dans `/data/blog-posts.json`
- **Sauvegardez ce fichier régulièrement**
- Les images sont dans `/public/images/blog/`

---

## 📊 Statistiques

Pour suivre les performances de vos articles:
1. Configurez **Google Analytics** (voir README.md)
2. Suivez:
   - Pages vues par article
   - Temps de lecture
   - Taux de rebond
   - Partages sociaux

---

## ❓ Questions Fréquentes

**Q: Puis-je ajouter des vidéos?**
R: Oui, utilisez du HTML dans le contenu:
```html
<iframe width="560" height="315" src="URL_YOUTUBE" frameborder="0" allowfullscreen></iframe>
```

**Q: Comment ajouter des liens?**
R: Dans le contenu:
```html
<a href="https://example.com">Texte du lien</a>
```

**Q: Limite de taille pour les images?**
R: Recommandé: < 2MB par image. Format: JPG, PNG, WebP

**Q: Puis-je programmer une publication?**
R: Non pour le moment. Créez en brouillon et publiez manuellement.

---

## 🎉 C'est Prêt!

Votre système de blog est **100% opérationnel**!

**Prochaines étapes:**
1. Connectez-vous à `/admin/blog`
2. Créez votre premier article
3. Publiez et partagez!

**Besoin d'aide?** Consultez le README.md principal.

