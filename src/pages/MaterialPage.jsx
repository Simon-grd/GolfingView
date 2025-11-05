import { useState, useEffect, memo } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { fetchGolfEquipment, fetchFamousGolfers } from '../services/api';

const EquipmentCard = memo(({ item, index, onSelect }) => (
  <article 
    key={item.id} 
    className="col-12 col-md-6 col-lg-4 mb-4" 
    style={{animation: `fadeIn 0.5s ease-out ${index * 0.08}s forwards`, opacity: 0}}
  >
    <div 
      className="card border-0 shadow-sm h-100" 
      style={{cursor: 'pointer', borderRadius: '15px'}} 
      onClick={() => onSelect(item)}
      role="button"
      tabIndex="0"
      onKeyDown={(e) => e.key === 'Enter' && onSelect(item)}
    >
      <div className="card-body p-4">
        <div className="d-flex justify-content-between align-items-start mb-3">
          <span className="badge" style={{backgroundColor: '#2d5016', borderRadius: '20px', padding: '8px 15px'}}>
            {item.category}
          </span>
          <span className="badge bg-success">{item.price}</span>
        </div>
        <h5 className="card-title" style={{color: '#2d5016', fontWeight: '600'}}>
          {item.name}
        </h5>
        <p className="card-text text-muted mb-2">{item.description}</p>
        <small className="text-muted">
          <i className="fas fa-map-marker-alt me-1" aria-hidden="true"></i>
          {item.region}
        </small>
      </div>
    </div>
  </article>
));

export default function MaterialPage() {
  const { darkMode } = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [articles, setArticles] = useState([]);
  const [equipment, setEquipment] = useState([]);
  const [golfers, setGolfers] = useState([]);
  const [priceFilter, setPriceFilter] = useState('');

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
    { key: 'Drivers', label: '🏌️ Drivers', color: '#2d5016' },
    { key: 'Fers', label: '⚡ Fers', color: '#1a5490' },
    { key: 'Putters', label: '🎯 Putters', color: '#8b4513' },
    { key: 'Accessoires', label: '👕 Accessoires', color: '#228b22' },
    { key: 'Chaussures', label: '👟 Chaussures', color: '#dc3545' },
    { key: 'Technologie', label: '📱 Tech', color: '#6f42c1' }
  ];

  const toggleFilter = (filterKey) => {
    setSelectedFilters(prev => 
      prev.includes(filterKey) 
        ? prev.filter(f => f !== filterKey)
        : [...prev, filterKey]
    );
  };

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      
      // Charger les articles
      const fetchedArticles = await fetchArticles();
      setArticles(fetchedArticles);
      
      // Charger le matériel de golf
      const equipmentData = await fetchGolfEquipment();
      if (equipmentData && equipmentData.data) {
        setEquipment(equipmentData.data);
      }
      
      // Charger les golfeurs célèbres
      const golfersData = await fetchFamousGolfers();
      if (golfersData && golfersData.data) {
        setGolfers(golfersData.data);
      }
      
      setLoading(false);
    };
    loadData();
  }, []);

  useEffect(() => {
    let searchResults = [...equipment];
    
    // Filtrer par catégorie
    if (selectedFilters.length > 0) {
      searchResults = searchResults.filter(item => selectedFilters.includes(item.category));
    }
    
    // Filtrer par prix
    if (priceFilter) {
      searchResults = searchResults.filter(item => {
        const price = parseInt(item.price.replace('€', ''));
        switch(priceFilter) {
          case '0-50': return price <= 50;
          case '50-200': return price > 50 && price <= 200;
          case '200-500': return price > 200 && price <= 500;
          case '500+': return price > 500;
          default: return true;
        }
      });
    }
    
    // Filtrer par terme de recherche
    if (searchTerm) {
      searchResults = searchResults.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setResults(searchResults);
  }, [searchTerm, selectedFilters, equipment, priceFilter]);

  return (
    <section className="container mt-5" aria-label="Recherche d'informations golf">
      <h2 className="text-center mb-4" style={{color: darkMode ? '#ffffff' : '#2d5016', fontWeight: '700'}}>Matériel & News</h2>
      
      {/* Section Golfeurs Célèbres */}
      {golfers.length > 0 && (
        <div className="mb-5">
          <h3 className="mb-3" style={{color: darkMode ? '#ffffff' : '#2d5016'}}>Golfeurs du moment</h3>
          <div className="row">
            {golfers.map((golfer, index) => (
              <div key={golfer.id} className="col-12 col-md-6 col-lg-4 mb-3">
                <div className="card border-0 shadow-sm h-100" style={{borderRadius: '15px'}}>
                  <div className="card-body p-3">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <h6 className="card-title text-success">{golfer.name}</h6>
                      <span className="badge bg-warning">#{golfer.ranking}</span>
                    </div>
                    <p className="card-text small text-muted mb-1">
                      <i className="fas fa-flag me-1"></i>{golfer.nationality}
                    </p>
                    <p className="card-text small text-muted mb-2">
                      <i className="fas fa-trophy me-1"></i>{golfer.majors} Majeurs
                    </p>
                    <small className="text-muted">{golfer.achievement}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mb-4">
        <input 
          type="text" 
          className="form-control border-0 shadow-sm" 
          style={{borderRadius: '25px', padding: '15px 25px', fontSize: '16px'}}
          placeholder="Rechercher des informations..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Rechercher du matériel de golf"
        />
      </div>

      {/* Filtres */}
      <div className="mb-5">
        <div className="d-flex flex-wrap gap-2 justify-content-center align-items-center">
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
          
          {/* Filtre Prix */}
          <select 
            className="form-select" 
            style={{
              maxWidth: '150px', 
              borderRadius: '20px', 
              fontSize: '14px',
              backgroundColor: darkMode ? '#333333' : 'rgba(0,0,0,0.05)',
              color: darkMode ? '#ffffff' : '#000000',
              border: 'none'
            }}
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
          >
            <option value="" style={{backgroundColor: darkMode ? '#333333' : '#ffffff', color: darkMode ? '#ffffff' : '#000000'}}>💰 Prix</option>
            <option value="0-50" style={{backgroundColor: darkMode ? '#333333' : '#ffffff', color: darkMode ? '#ffffff' : '#000000'}}>0€ - 50€</option>
            <option value="50-200" style={{backgroundColor: darkMode ? '#333333' : '#ffffff', color: darkMode ? '#ffffff' : '#000000'}}>50€ - 200€</option>
            <option value="200-500" style={{backgroundColor: darkMode ? '#333333' : '#ffffff', color: darkMode ? '#ffffff' : '#000000'}}>200€ - 500€</option>
            <option value="500+" style={{backgroundColor: darkMode ? '#333333' : '#ffffff', color: darkMode ? '#ffffff' : '#000000'}}>500€+</option>
          </select>
        </div>
      </div>

      <h3 className="mb-3" style={{color: darkMode ? '#ffffff' : '#2d5016'}}>Catalogue Matériel</h3>
      
      {loading && <p>Chargement en cours...</p>}
      
      <div className="row">
        {results.map((item, index) => (
          <EquipmentCard 
            key={item.id}
            item={item}
            index={index}
            onSelect={setSelectedArticle}
          />
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
                <h5 className="modal-title">{selectedArticle.name || selectedArticle.title}</h5>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={() => setSelectedArticle(null)}
                  aria-label="Fermer la modal"
                  autoFocus
                ></button>
              </div>
              <div className="modal-body">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="badge bg-primary">{selectedArticle.category}</span>
                  <span className="badge bg-success fs-6">{selectedArticle.price}</span>
                </div>
                <p>{selectedArticle.description}</p>
                <p><strong>Région:</strong> {selectedArticle.region}</p>
                <p>Matériel de golf professionnel recommandé par nos experts.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}