export default function Contact() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <h2 className="text-center mb-4" style={{color: '#2d5016'}}>Contactez-nous</h2>
          
          <div className="card border-0 shadow-sm" style={{borderRadius: '15px'}}>
            <div className="card-body p-3 p-md-5">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Nom complet</label>
                  <input type="text" className="form-control" id="name" style={{borderRadius: '10px'}} />
                </div>
                
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" style={{borderRadius: '10px'}} />
                </div>
                
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">Sujet</label>
                  <input type="text" className="form-control" id="subject" style={{borderRadius: '10px'}} />
                </div>
                
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" id="message" rows="5" style={{borderRadius: '10px'}}></textarea>
                </div>
                
                <div className="text-center">
                  <button type="submit" className="btn btn-lg px-4" style={{backgroundColor: '#2d5016', color: 'white', borderRadius: '25px'}}>
                    Envoyer le message
                  </button>
                </div>
              </form>
              
              <hr className="my-4" />
              
              <div className="row text-center">
                <div className="col-12 col-md-4 mb-3 mb-md-0">
                  <h6>📧 Email</h6>
                  <p>contact@golfingview.fr</p>
                </div>
                <div className="col-12 col-md-4 mb-3 mb-md-0">
                  <h6>📞 Téléphone</h6>
                  <p>01 23 45 67 89</p>
                </div>
                <div className="col-12 col-md-4">
                  <h6>📍 Adresse</h6>
                  <p>Paris, France</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}