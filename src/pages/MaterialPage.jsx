import { useState, useEffect } from 'react';

export default function MaterialPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const golfContent = {
    'matériel': [
      { title: 'Nouveaux drivers 2024', description: 'Découvrez les derniers drivers avec technologie IA', type: 'Matériel' },
      { title: 'Chaussures de golf imperméables', description: 'Les meilleures chaussures pour jouer par temps humide', type: 'Matériel' },
      { title: 'Putters haute précision', description: 'Nouvelle gamme de putters pour améliorer votre jeu court', type: 'Matériel' },
      { title: 'Sacs de golf connectés', description: 'Sacs intelligents avec GPS intégré et suivi des statistiques', type: 'Matériel' },
      { title: 'Balles de golf premium', description: 'Balles haute performance pour tous les niveaux', type: 'Matériel' }
    ],
    'news': [
      { title: 'Tournoi Masters Augusta', description: 'Résultats et highlights du dernier tournoi', type: 'Actualité' },
      { title: 'Nouveau parcours en France', description: 'Ouverture d\'un parcours 18 trous en Normandie', type: 'Actualité' },
      { title: 'Ryder Cup 2024', description: 'Préparatifs et équipes sélectionnées pour la compétition', type: 'Actualité' },
      { title: 'Golf féminin en progression', description: 'Augmentation de 25% des licenciées cette année', type: 'Actualité' },
      { title: 'Championnat européen junior', description: 'Les jeunes talents français brillent en Europe', type: 'Actualité' }
    ],
    'technique': [
      { title: 'Améliorer son swing', description: 'Conseils pour perfectionner votre technique', type: 'Technique' },
      { title: 'Putting de précision', description: 'Techniques pour réussir vos putts courts', type: 'Technique' },
      { title: 'Gestion du parcours', description: 'Stratégies pour optimiser votre score', type: 'Technique' },
      { title: 'Sortie de bunker', description: 'Maîtrisez les coups depuis les obstacles de sable', type: 'Technique' },
      { title: 'Jeu par vent fort', description: 'Adaptez votre jeu aux conditions météorologiques', type: 'Technique' }
    ],
    'parcours': [
      { title: 'Golf de Versailles', description: 'Parcours prestigieux aux portes de Paris', type: 'Parcours' },
      { title: 'Golf du Château', description: 'Parcours technique en forêt', type: 'Parcours' },
      { title: 'Golf de Biarritz', description: 'Parcours en bord de mer avec vue océanique', type: 'Parcours' },
      { title: 'Golf des Alpes', description: 'Parcours de montagne avec dénivelés spectaculaires', type: 'Parcours' },
      { title: 'Golf de Bordeaux', description: 'Parcours au cœur des vignobles bordelais', type: 'Parcours' }
    ]
  };

  useEffect(() => {
    if (!searchTerm) {
      setResults([]);
      return;
    }
    
    setLoading(true);
    setTimeout(() => {
      const searchResults = [];
      Object.entries(golfContent).forEach(([category, items]) => {
        if (category.includes(searchTerm.toLowerCase()) || 
            items.some(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              item.description.toLowerCase().includes(searchTerm.toLowerCase()))) {
          searchResults.push(...items);
        }
      });
      setResults(searchResults);
      setLoading(false);
    }, 500);
  }, [searchTerm]);

  return (
    <section className="container mt-5" aria-label="Recherche d'informations golf">
      <h2 className="text-center mb-4" style={{color: '#2d5016', fontWeight: '700'}}>📰 Matériel & News</h2>
      
      <div className="mb-5">
        <input 
          type="text" 
          className="form-control border-0 shadow-sm" 
          style={{borderRadius: '25px', padding: '15px 25px', fontSize: '16px'}}
          placeholder="Rechercher des informations golf..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {loading && <p>Recherche en cours...</p>}
      
      <div className="row">
        {results.map((item, index) => (
          <article key={index} className="col-12 col-md-6 col-lg-4 mb-4" style={{animation: `fadeIn 0.5s ease-out ${index * 0.08}s forwards`, opacity: 0}}>
            <div className="card border-0 shadow-sm h-100" style={{cursor: 'pointer', transition: 'all 0.3s', borderRadius: '15px'}} onClick={() => setSelectedArticle(item)} onMouseEnter={(e) => {e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';}} onMouseLeave={(e) => {e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';}}>
              <div className="card-body p-4">
                <span className="badge mb-3" style={{backgroundColor: '#2d5016', borderRadius: '20px', padding: '8px 15px'}}>{item.type}</span>
                <h5 className="card-title" style={{color: '#2d5016', fontWeight: '600'}}>{item.title}</h5>
                <p className="card-text text-muted">{item.description}</p>
              </div>
            </div>
          </article>
        ))}
        {searchTerm && !loading && results.length === 0 && (
          <div className="col-12">
            <p className="text-muted text-center">Aucun résultat trouvé pour "{searchTerm}"</p>
          </div>
        )}
      </div>
      
      {selectedArticle && (
        <div className="modal show d-block" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedArticle.title}</h5>
                <button type="button" className="btn-close" onClick={() => setSelectedArticle(null)}></button>
              </div>
              <div className="modal-body">
                <span className="badge bg-success mb-3">{selectedArticle.type}</span>
                <p>{selectedArticle.description}</p>
                <p>Contenu détaillé de l'article à venir...</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}