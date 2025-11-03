# 🌐 API Endpoints

## Sportbex API
**Documentation** : [https://sportbex.com/api-docs](https://sportbex.com/api-docs)

| Endpoint | Méthode | Description |
|----------|---------|-------------|
| `/other-sport/competitions/3` | GET | Liste des compétitions de golf |
| `/other-sport/event/3/{competitionId}` | GET | Événements d'une compétition |

## Headers requis
```
sportbex-api-key: your_api_key
```

## Exemple de réponse
```json
{
  "message": "Competition get success!",
  "data": [
    {
      "competition": {
        "id": "12728576",
        "name": "The Masters 2026"
      },
      "marketCount": 1,
      "competitionRegion": "USA"
    }
  ]
}
```

## Configuration
Les clés API sont configurées via les variables d'environnement :
- `REACT_APP_API_BASE_URL` : URL de base de l'API
- `REACT_APP_API_KEY` : Clé d'authentification Sportbex