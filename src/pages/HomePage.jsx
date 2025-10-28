import { useState, useEffect } from 'react';

export default function HomePage() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(resp => resp.json())
      .then(data => {
        console.log('Données API récupérées:', data);
        const golfNews = data.slice(0, 12).map((post, index) => ({
          id: post.id,
          title: [
            'Nouveau record au Masters d\'Augusta',
            'Ouverture du Golf de Versailles rénové',
            'Championnat de France amateur 2024',
            'Innovation technologique dans les clubs',
            'Tournoi caritatif à Saint-Tropez',
            'Formation jeunes golfeurs en Bretagne',
            'Tiger Woods annonce son retour',
            'Nouveau parcours écologique en Provence',
            'Ryder Cup 2024 : préparatifs en cours',
            'Open de France : victoire surprise',
            'Golf féminin : nouveau record d\'audience',
            'Technologie 3D pour l\'analyse du swing'
          ][index],
          summary: [
            'Un joueur français établit un nouveau record sur le parcours mythique d\'Augusta.',
            'Après 2 ans de travaux, le prestigieux golf de Versailles rouvre ses portes.',
            'Les inscriptions sont ouvertes pour le championnat national amateur.',
            'Les nouveaux drivers intègrent l\'intelligence artificielle pour améliorer le swing.',
            'Plus de 100 000€ récoltés lors du tournoi caritatif organisé sur la Côte d\'Azur.',
            'Un programme spécial initie 200 jeunes au golf dans les écoles bretonnes.',
            'La légende du golf confirme sa participation au prochain tournoi majeur.',
            'Un parcours respectueux de l\'environnement ouvre ses portes près d\'Aix-en-Provence.',
            'L\'équipe européenne se prépare intensivement pour défendre son titre.',
            'Un amateur français crée la sensation en remportant l\'Open de France.',
            'Le golf féminin bat tous les records de téléspectateurs cette saison.',
            'Une nouvelle technologie révolutionne l\'analyse biomecanique du swing.'
          ][index],
          image: [
            'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=400&h=250&fit=crop&q=80',
            'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=400&h=250&fit=crop&q=80',
            'https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?w=400&h=250&fit=crop&q=80',
            'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop&q=80',
            'https://images.unsplash.com/photo-1596727147705-61a532a659bd?w=400&h=250&fit=crop&q=80',
            'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=250&fit=crop&q=80',
            'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop&q=80',
            'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop&q=80',
            'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=400&h=250&fit=crop&q=80',
            'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=400&h=250&fit=crop&q=80',
            'https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?w=400&h=250&fit=crop&q=80',
            'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop&q=80'
          ][index],
          date: new Date(Date.now() - index * 24 * 60 * 60 * 1000).toLocaleDateString('fr-FR')
        }));
        setNews(golfNews);
        console.log('Articles transformés:', golfNews);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mt-4">

      
      {loading ? (
        <p className="text-center">Chargement des actualités...</p>
      ) : (
        <div className="row">
          {news.map(article => (
            <div key={article.id} className="col-12 col-sm-6 col-lg-4 mb-4">
              <div className="card h-100 border-0 shadow-sm" style={{cursor: 'pointer', transition: 'all 0.3s', borderRadius: '15px'}} onClick={() => setSelectedArticle(article)} onMouseEnter={(e) => {e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';}} onMouseLeave={(e) => {e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';}}>
                <img src={article.image} className="card-img-top" alt={article.title} style={{height: '220px', objectFit: 'cover', borderRadius: '15px 15px 0 0'}} />
                <div className="card-body p-4">
                  <h5 className="card-title" style={{color: '#2d5016', fontWeight: '600'}}>{article.title}</h5>
                  <p className="card-text text-muted">{article.summary}</p>
                  <small className="text-muted">{article.date}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      
      {selectedArticle && (
        <div className="modal show d-block" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedArticle.title}</h5>
                <button type="button" className="btn-close" onClick={() => setSelectedArticle(null)}></button>
              </div>
              <div className="modal-body">
                <img src={selectedArticle.image} className="img-fluid mb-3" alt={selectedArticle.title} />
                <p>{selectedArticle.summary}</p>
                <small className="text-muted">{selectedArticle.date}</small>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}