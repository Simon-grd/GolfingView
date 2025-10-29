import { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export default function MaterialPage() {
  const { darkMode } = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState([]);

  const [articles, setArticles] = useState([]);

  const fetchArticles = async () => {
    try {
      const golfTypes = ['Matériel', 'Actualité', 'Technique', 'Parcours'];
      const golfTitles = [
        'Nouveaux drivers 2024', 'Chaussures imperméables', 'Putters précision', 'Sacs connectés',
        'Tournoi Masters', 'Nouveau parcours France', 'Ryder Cup 2024', 'Golf féminin',
        'Améliorer son swing', 'Putting précision', 'Gestion parcours', 'Sortie bunker',
        'Golf de Versailles', 'Golf du Château', 'Golf de Biarritz', 'Golf des Alpes'
      ];
      const descriptions = [
        'Découvrez les derniers drivers avec technologie IA',
        'Les meilleures chaussures pour jouer par temps humide',
        'Nouvelle gamme de putters pour améliorer votre jeu court',
        'Sacs intelligents avec GPS intégré et suivi des statistiques',
        'Résultats et highlights du dernier tournoi',
        'Ouverture d\'un parcours 18 trous en Normandie',
        'Préparatifs et équipes sélectionnées pour la compétition',
        'Augmentation de 25% des licenciées cette année',
        'Conseils pour perfectionner votre technique',
        'Techniques pour réussir vos putts courts',
        'Stratégies pour optimiser votre score',
        'Maîtrisez les coups depuis les obstacles de sable',
        'Parcours prestigieux aux portes de Paris',
        'Parcours technique en forêt',
        'Parcours en bord de mer avec vue océanique',
        'Parcours de montagne avec dénivelés spectaculaires'
      ];
      
      return Array.from({length: 16}, (_, index) => ({
        id: index + 1,
        title: golfTitles[index],
        description: descriptions[index],
        type: golfTypes[index % 4]
      }));
    } catch (error) {
      console.error('Erreur lors du chargement des articles:', error);
      return [];
    }
  };

  const filterTypes = [
    { key: 'Matériel', label: '🏌️ Matériel', color: '#2d5016' },
    { key: 'Actualité', label: '📰 News', color: '#1a5490' },
    { key: 'Technique', label: '🎯 Technique', color: '#8b4513' },
    { key: 'Parcours', label: '🏞️ Parcours', color: '#228b22' }
  ];

  const toggleFilter = (filterKey) => {
    setSelectedFilters(prev => 
      prev.includes(filterKey) 
        ? prev.filter(f => f !== filterKey)
        : [...prev, filterKey]
    );
  };

  useEffect(() => {
    const loadArticles = async () => {
      setLoading(true);
      const fetchedArticles = await fetchArticles();
      setArticles(fetchedArticles);
      setLoading(false);
    };
    loadArticles();
  }, []);

  useEffect(() => {
    let searchResults = [...articles];
    
    // Filtrer par type si des filtres sont sélectionnés
    if (selectedFilters.length > 0) {
      searchResults = searchResults.filter(item => selectedFilters.includes(item.type));
    }
    
    // Filtrer par terme de recherche
    if (searchTerm) {
      searchResults = searchResults.filter(item => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setResults(searchResults);
  }, [searchTerm, selectedFilters, articles]);

  return (
    <section className="container mt-5" aria-label="Recherche d'informations golf">
      <h2 className="text-center mb-4" style={{color: '#2d5016', fontWeight: '700'}}>📰 Matériel & News</h2>
      
      <div className="mb-4">
        <input 
          type="text" 
          className="form-control border-0 shadow-sm" 
          style={{borderRadius: '25px', padding: '15px 25px', fontSize: '16px'}}
          placeholder="Rechercher des informations golf..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Filtres */}
      <div className="mb-5">
        <div className="d-flex flex-wrap gap-2 justify-content-center">
          {filterTypes.map(filter => (
            <button
              key={filter.key}
              className="btn border-0"
              style={{
                backgroundColor: selectedFilters.includes(filter.key) ? filter.color : (darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'),
                color: selectedFilters.includes(filter.key) ? '#ffffff' : (darkMode ? '#ffffff' : '#000000'),
                borderRadius: '20px',
                padding: '8px 16px',
                fontSize: '14px',
                fontWeight: '500',
                transition: 'all 0.3s ease'
              }}
              onClick={() => toggleFilter(filter.key)}
              onMouseEnter={(e) => {
                if (!selectedFilters.includes(filter.key)) {
                  e.target.style.backgroundColor = darkMode ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)';
                }
              }}
              onMouseLeave={(e) => {
                if (!selectedFilters.includes(filter.key)) {
                  e.target.style.backgroundColor = darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)';
                }
              }}
            >
              {filter.label}
            </button>
          ))}
        </div>
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
        {!loading && results.length === 0 && (searchTerm || selectedFilters.length > 0) && (
          <div className="col-12">
            <p className="text-muted text-center">
              {searchTerm ? `Aucun résultat trouvé pour "${searchTerm}"` : 'Aucun résultat pour les filtres sélectionnés'}
            </p>
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