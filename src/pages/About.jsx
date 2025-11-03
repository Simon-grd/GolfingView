export default function About() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <h2 className="text-center mb-4" style={{color: '#2d5016'}}>À propos de GolfingView</h2>
          
          <div className="card border-0 shadow-sm" style={{borderRadius: '15px'}}>
            <div className="card-body p-3 p-md-5">
              <p className="lead text-center mb-4">
                Votre plateforme dédiée au monde du golf
              </p>
              
              <p>
                GolfingView est né de la passion pour le golf et du désir de créer une communauté 
                rassemblant tous les amateurs de ce sport magnifique. Notre mission est de vous 
                fournir les dernières actualités, les meilleurs conseils techniques et les 
                informations sur les parcours les plus prestigieux.
              </p>
              
              <h5 className="mt-4 mb-3" style={{color: '#2d5016'}}>Notre équipe</h5>
              <p>
                Composée de passionnés de golf, notre équipe travaille quotidiennement pour vous 
                apporter un contenu de qualité, des analyses expertes et des conseils pratiques 
                pour améliorer votre jeu.
              </p>
              
              <h5 className="mt-4 mb-3" style={{color: '#2d5016'}}>Nos services</h5>
              <ul>
                <li>Actualités du monde du golf</li>
                <li>Tests et reviews de matériel</li>
                <li>Conseils techniques</li>
                <li>Guide des parcours</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}