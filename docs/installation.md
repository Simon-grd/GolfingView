# 🚀 Installation et Lancement

## 1. Obtenir la clé API Sportbex

1. Rendez-vous sur [Sportbex API](https://sportbex.com/api)
2. Créez un compte et obtenez votre clé API
3. Copiez votre clé API

## 2. Configuration du projet

```bash
# Cloner le projet
git clone [url-du-repo]
cd GolfingView

# Installer les dépendances
npm install

# Configurer les variables d'environnement
cp .env.example .env
```

## 3. Configuration de l'environnement

Éditez le fichier `.env` :
```env
REACT_APP_API_BASE_URL=https://trial-api.sportbex.com/api/other-sport/competitions
REACT_APP_API_KEY=votre_cle_api_sportbex
```

## 4. Lancer l'application

```bash
npm start
```

L'application sera accessible sur [http://localhost:3000](http://localhost:3000)

## Scripts Disponibles

```bash
npm start          # Démarre en mode développement
npm test           # Lance les tests
npm run build      # Build de production
npm run eject      # Éjecte la configuration CRA
```