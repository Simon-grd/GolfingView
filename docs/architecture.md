# 🏗️ Architecture Technique

## Sitemap & Routing
```
/                 → HomePage (Compétitions de golf)
/material         → MaterialPage (Matériel & Golfeurs)
/courses          → CoursePage (Parcours de golf)
/about            → About (À propos)
/contact          → Contact
/auth             → Auth (Connexion/Inscription)
/profile          → Profile (Profil utilisateur)
```

## Composants Principaux
```
src/
├── components/
│   ├── Header.jsx          # Navigation principale
│   ├── Footer.jsx          # Pied de page
│   ├── ScrollToTop.jsx     # Scroll automatique
│   └── SignupForm.jsx      # Formulaire d'inscription
├── pages/
│   ├── HomePage.jsx        # Page d'accueil - Compétitions
│   ├── MaterialPage.jsx    # Matériel & Golfeurs
│   ├── CoursePage.jsx      # Parcours de golf
│   ├── About.jsx           # À propos
│   ├── Contact.jsx         # Contact
│   └── Auth.jsx            # Authentification
├── contexts/
│   ├── ThemeContext.js     # Gestion thème sombre/clair
│   └── AuthContext.js      # Gestion authentification
├── services/
│   └── api.js              # Services API
└── utils/
    ├── constants.js        # Constantes
    └── storage.js          # Gestion localStorage
```

## Services API

- `fetchGolfCompetitions()` - Récupère les compétitions de golf
- `fetchGolfEvents()` - Récupère les événements d'une compétition
- `fetchGolfEquipment()` - Génère le catalogue matériel
- `fetchFamousGolfers()` - Récupère les golfeurs du moment