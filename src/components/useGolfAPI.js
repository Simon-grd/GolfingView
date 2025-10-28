import { useState, useEffect } from 'react';
import { fetchCourses } from '../services/api';

export default function useGolfCourses(searchTerm) {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!searchTerm) {
      setCourses([]);
      setLoading(false);
      return;
    }
    setLoading(true);
    fetchCourses(searchTerm)
      .then(data => {
        setCourses(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError(err);
        setLoading(false);
      });
  }, [searchTerm]);

  return { courses, loading, error };
}
