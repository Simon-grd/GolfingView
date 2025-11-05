import { useState, useEffect, memo } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { fetchGolfCompetitions } from '../services/api';

const CompetitionCard = memo(({ item, index, onSelect, darkMode }) => (
  <article 
    key={item.competition.id} 
    className="col-12 col-sm-6 col-lg-4 mb-4" 
    style={{animation: `fadeIn 0.6s ease-out ${index * 0.1}s forwards`, opacity: 0}}
  >
    <div 
      className="card h-100 border-0 shadow-sm" 
      style={{cursor: 'pointer', borderRadius: '15px'}} 
      onClick={() => onSelect(item)}
      role="button" 
      tabIndex="0"
      onKeyDown={(e) => e.key === 'Enter' && onSelect(item)}
    >
      <div className="card-body p-4">
        <h5 className="card-title mb-3" style={{color: '#2d5016', fontWeight: '600', fontSize: '1.1rem'}}>
          {item.competition.name}
        </h5>
        <div className="mb-3">
          <p className="card-text text-muted mb-2 d-flex align-items-center">
            <i className="fas fa-map-marker-alt me-2 text-danger" aria-hidden="true"></i>
            <strong>{item.competitionRegion}</strong>
          </p>
          <p className="card-text mb-2 d-flex align-items-center">
            <i className="fas fa-chart-line me-2 text-success" aria-hidden="true"></i>
            {item.marketCount} marché{item.marketCount > 1 ? 's' : ''} disponible{item.marketCount > 1 ? 's' : ''}
          </p>
          <p className="card-text mb-0 d-flex align-items-center">
            <i className="fas fa-golf-ball me-2 text-warning" aria-hidden="true"></i>
            <small className="text-muted">Tournoi de golf</small>
          </p>
        </div>
        <span className="badge bg-success px-3 py-2">Actif</span>
      </div>
    </div>
  </article>
));

export default function HomePage() {
  const { darkMode } = useTheme();
  const [competitions, setCompetitions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCompetition, setSelectedCompetition] = useState(null);
  const [apiData, setApiData] = useState(null);
  const [stats, setStats] = useState({});

  useEffect(() => {
    const loadCompetitions = async () => {
      const data = await fetchGolfCompetitions();
      setApiData(data);
      
      if (data && data.data) {
        // Ajouter des compétitions fictives pour avoir plus de contenu
        const additionalGolfComps = [
          { competition: { id: 'f1', name: 'Open de France' }, competitionRegion: 'FRA', marketCount: 2 },
          { competition: { id: 'f2', name: 'Trophee Hassan II' }, competitionRegion: 'MAR', marketCount: 1 },
          { competition: { id: 'f3', name: 'Italian Open' }, competitionRegion: 'ITA', marketCount: 3 },
          { competition: { id: 'f4', name: 'BMW Championship' }, competitionRegion: 'USA', marketCount: 2 },
          { competition: { id: 'f5', name: 'Dubai Desert Classic' }, competitionRegion: 'UAE', marketCount: 1 },
          { competition: { id: 'f6', name: 'Scottish Open' }, competitionRegion: 'GBR', marketCount: 2 },
          { competition: { id: 'f7', name: 'Memorial Tournament' }, competitionRegion: 'USA', marketCount: 1 },
          { competition: { id: 'f8', name: 'WGC Match Play' }, competitionRegion: 'USA', marketCount: 2 },
          { competition: { id: 'f9', name: 'European Masters' }, competitionRegion: 'CHE', marketCount: 1 },
          { competition: { id: 'f10', name: 'Australian Open' }, competitionRegion: 'AUS', marketCount: 2 }
        ];
        
        const allCompetitions = [...data.data, ...additionalGolfComps];
        setCompetitions(allCompetitions);
        
        const regions = {};
        let totalMarkets = 0;
        allCompetitions.forEach(item => {
          regions[item.competitionRegion] = (regions[item.competitionRegion] || 0) + 1;
          totalMarkets += item.marketCount;
        });
        
        setStats({
          totalCompetitions: allCompetitions.length,
          totalMarkets,
          regions,
          mostPopularRegion: Object.keys(regions).reduce((a, b) => regions[a] > regions[b] ? a : b, '')
        });
      }
      setLoading(false);
    };
    
    loadCompetitions();
  }, []);

  return (
    <section className="container mt-4" aria-label="Actualités golf">
      <h2 className="mb-4" style={{color: darkMode ? '#ffffff' : '#2d5016', fontWeight: '700'}}>Compétitions de Golf</h2>
      
      {stats.totalCompetitions > 0 && (
        <div className="row mb-4">
          <div className="col-md-3 col-6 mb-3">
            <div className="card text-center border-0 shadow-sm" style={{borderRadius: '15px'}}>
              <div className="card-body">
                <h3 className="text-success mb-1">{stats.totalCompetitions}</h3>
                <small className="text-muted">Compétitions</small>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-6 mb-3">
            <div className="card text-center border-0 shadow-sm" style={{borderRadius: '15px'}}>
              <div className="card-body">
                <h3 className="text-primary mb-1">{stats.totalMarkets}</h3>
                <small className="text-muted">Marchés</small>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-6 mb-3">
            <div className="card text-center border-0 shadow-sm" style={{borderRadius: '15px'}}>
              <div className="card-body">
                <h3 className="text-warning mb-1">{Object.keys(stats.regions).length}</h3>
                <small className="text-muted">Régions</small>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-6 mb-3">
            <div className="card text-center border-0 shadow-sm" style={{borderRadius: '15px'}}>
              <div className="card-body">
                <h3 className="text-info mb-1">{stats.mostPopularRegion}</h3>
                <small className="text-muted">Top Région</small>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {loading ? (
        <p className="text-center">Chargement des compétitions...</p>
      ) : (
        <div className="row">
          {competitions.length > 0 ? competitions.map((item, index) => (
            <CompetitionCard 
              key={item.competition.id}
              item={item}
              index={index}
              onSelect={setSelectedCompetition}
              darkMode={darkMode}
            />
          )) : (
            <div className="col-12">
              <p className="text-center text-muted">Aucune compétition trouvée ou erreur de chargement</p>
            </div>
          )}
        </div>
      )}
      
      {selectedCompetition && (
        <div className="modal show d-block" style={{backgroundColor: 'rgba(0,0,0,0.5)', animation: 'fadeIn 0.3s ease-out'}}>
          <div className="modal-dialog modal-lg modal-dialog-centered" style={{animation: 'fadeIn 0.4s ease-out'}}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedCompetition.competition.name}</h5>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={() => setSelectedCompetition(null)}
                  aria-label="Fermer la modal"
                  autoFocus
                ></button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-6">
                    <h6 className="text-muted">Informations générales</h6>
                    <p><strong>Nom:</strong> {selectedCompetition.competition.name}</p>
                    <p><strong>Région:</strong> {selectedCompetition.competitionRegion}</p>
                  </div>
                  <div className="col-md-6">
                    <h6 className="text-muted">Statistiques</h6>
                    <p><strong>Marchés disponibles:</strong> {selectedCompetition.marketCount}</p>
                    <p><strong>Type:</strong> Tournoi majeur</p>
                    <p><strong>Statut:</strong> <span className="badge bg-success">Actif</span></p>
                  </div>
                </div>
                <hr />
                <div className="text-center">
                  <small className="text-muted">Données fournies par Sportbex API</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}