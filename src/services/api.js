const BASE_URL = process.env.REACT_APP_API_BASE_URL || 'https://jsonplaceholder.typicode.com';
const API_KEY = process.env.REACT_APP_API_KEY;

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
