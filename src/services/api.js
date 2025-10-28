const BASE_URL = 'https://sportsdata.io/developers/api-documentation/golf? 815c6c5ce8aa473d8b681c766b5a19cf';

export async function fetchCourses(query) {
  const resp = await fetch(`${BASE_URL}/courses?search=${encodeURIComponent(query)}`);
  const data = await resp.json();
  return data;
}

export async function fetchCourseDetails(id) {
  const resp = await fetch(`${BASE_URL}/courses/${id}`);
  const data = await resp.json();
  return data;
}
