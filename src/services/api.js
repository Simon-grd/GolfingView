const BASE_URL = process.env.REACT_APP_API_BASE_URL || 'https://jsonplaceholder.typicode.com';
const API_KEY = process.env.REACT_APP_API_KEY;

export async function fetchGolfCompetitions() {
  try {
    const response = await fetch(`${BASE_URL}/3`, {
      headers: {
        'sportbex-api-key': API_KEY
      }
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erreur lors de la récupération des compétitions:', error);
    return null;
  }
}

export async function fetchGolfEvents(competitionId) {
  try {
    const response = await fetch(`https://trial-api.sportbex.com/api/other-sport/event/3/${competitionId}`, {
      headers: {
        'sportbex-api-key': API_KEY
      }
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erreur lors de la récupération des événements:', error);
    return null;
  }
}

export async function fetchGolfEquipment() {
  try {
    const response = await fetch(`${BASE_URL}/3`, {
      headers: {
        'sportbex-api-key': API_KEY
      }
    });
    const data = await response.json();
    
    if (data && data.data) {
      const equipment = [
        { id: 1, name: 'Driver TaylorMade Stealth 2', category: 'Drivers', price: '549€', region: 'USA', description: 'Driver haute performance pour distance maximale' },
        { id: 2, name: 'Fer Callaway Apex Pro', category: 'Fers', price: '1299€', region: 'USA', description: 'Set de fers pour joueurs confirmés' },
        { id: 3, name: 'Putter Scotty Cameron', category: 'Putters', price: '449€', region: 'USA', description: 'Putter de précision légendaire' },
        { id: 4, name: 'Wedge Titleist Vokey', category: 'Wedges', price: '179€', region: 'USA', description: 'Wedge pour jeu court de précision' },
        { id: 5, name: 'Sac Ping Hoofer', category: 'Sacs', price: '299€', region: 'USA', description: 'Sac de golf léger avec support' },
        { id: 6, name: 'Balles Titleist Pro V1', category: 'Balles', price: '59€', region: 'USA', description: 'Balles premium pour performance' },
        { id: 7, name: 'Gant FootJoy Pure Touch', category: 'Accessoires', price: '29€', region: 'USA', description: 'Gant en cuir premium' },
        { id: 8, name: 'Chaussures Adidas Tour360', category: 'Chaussures', price: '199€', region: 'DEU', description: 'Chaussures de golf imperméables' },
        { id: 9, name: 'Télémètre Bushnell Pro X3', category: 'Technologie', price: '399€', region: 'USA', description: 'Télémètre laser haute précision' },
        { id: 10, name: 'Chariot Motocaddy S1', category: 'Chariots', price: '199€', region: 'GBR', description: 'Chariot électrique pliable' }
      ];
      
      return { data: equipment };
    }
    
    return { data: [] };
  } catch (error) {
    console.error('Erreur lors de la récupération du matériel:', error);
    return { data: [] };
  }
}

export async function fetchFamousGolfers() {
  try {
    const response = await fetch(`${BASE_URL}/3`, {
      headers: {
        'sportbex-api-key': API_KEY
      }
    });
    const data = await response.json();
    
    if (data && data.data) {
      const golfers = [
        { id: 1, name: 'Tiger Woods', nationality: 'USA', majors: 15, ranking: 1, achievement: 'Légende vivante du golf' },
        { id: 2, name: 'Rory McIlroy', nationality: 'IRL', majors: 4, ranking: 2, achievement: 'Champion du monde' },
        { id: 3, name: 'Jon Rahm', nationality: 'ESP', majors: 2, ranking: 3, achievement: 'Maître espagnol' },
        { id: 4, name: 'Scottie Scheffler', nationality: 'USA', majors: 2, ranking: 4, achievement: 'Rising star américain' },
        { id: 5, name: 'Viktor Hovland', nationality: 'NOR', majors: 0, ranking: 5, achievement: 'Talent norvégien' },
        { id: 6, name: 'Xander Schauffele', nationality: 'USA', majors: 2, ranking: 6, achievement: 'Précision américaine' }
      ];
      
      return { data: golfers };
    }
    
    return { data: [] };
  } catch (error) {
    console.error('Erreur lors de la récupération des golfeurs:', error);
    return { data: [] };
  }
}

export async function fetchCourses(query) {
  const resp = await fetch(`${BASE_URL}/posts`);
  const data = await resp.json();
  
  const frenchNames = ['Golf de Versailles', 'Golf du Château', 'Golf des Pins', 'Golf de la Forêt', 'Golf Royal', 'Golf du Lac'];
  const frenchLocations = ['Versailles', 'Fontainebleau', 'Deauville', 'Cannes', 'Biarritz', 'Saint-Tropez'];
  const frenchDescriptions = [
    'Magnifique parcours 18 trous avec vue sur le château',
    'Parcours technique au cœur de la forêt française',
    'Golf prestigieux face à la mer Méditerranée',
    'Parcours vallonné dans un cadre exceptionnel',
    'Golf historique aux portes de Paris',
    'Parcours moderne avec practice couvert'
  ];
  
  return data.slice(0, 6).map((post, index) => ({
    name: frenchNames[index],
    description: frenchDescriptions[index],
    location: frenchLocations[index]
  }));
}

export async function fetchCourseDetails(id) {
  const resp = await fetch(`${BASE_URL}/posts/${id}`);
  const data = await resp.json();
  return data;
}
