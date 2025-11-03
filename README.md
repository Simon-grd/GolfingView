# GolfingView 🏌️

## 📋 Pitch du Projet

**Quoi ?** GolfingView est une application web moderne dédiée au monde du golf, offrant un accès centralisé aux compétitions, matériel et actualités du golf.

**Pourquoi ?** Pour répondre au besoin des passionnés de golf d'avoir une plateforme unique regroupant toutes les informations essentielles : compétitions en cours, matériel professionnel, et golfeurs du moment.

**Pour qui ?** 
- Golfeurs amateurs et professionnels
- Passionnés de golf cherchant à suivre les compétitions
- Acheteurs de matériel de golf
- Fans souhaitant suivre leurs golfeurs préférés

## 🛠️ Stack Technique

- **Frontend** : React 18 avec Hooks (useState, useEffect, useContext)
- **Styling** : Bootstrap 5 + CSS personnalisé
- **Routing** : React Router DOM
- **API** : Sportbex API pour les données de golf en temps réel
- **State Management** : Context API (ThemeContext, AuthContext)
- **Icons** : Font Awesome
- **Build Tool** : Create React App

## 📚 Documentation

| Section | Description | Lien |
|---------|-------------|------|
| 🚀 **Installation** | Guide d'installation et configuration | [📖 Voir le guide](docs/installation.md) |
| 🏗️ **Architecture** | Structure technique et composants | [📖 Voir l'architecture](docs/architecture.md) |
| 🌐 **API** | Endpoints et documentation API | [📖 Voir l'API](docs/api.md) |
| 📱 **Fonctionnalités** | Description des features | [📖 Voir les fonctionnalités](docs/features.md) |
| 📸 **Screenshots** | Captures d'écran mobile/desktop | [📖 Voir les captures](docs/screenshots.md) |

## 🚀 Démarrage Rapide

```bash
# 1. Cloner le projet
git clone [url-du-repo]
cd GolfingView

# 2. Installer les dépendances
npm install

# 3. Configurer l'API
cp .env.example .env
# Éditer .env avec votre clé Sportbex API

# 4. Lancer l'application
npm start
```

## 🤝 Contribution

1. Fork le projet
2. Créez une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.