import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8080/api/geoApi',
});

export const fetchQuizQuestion = (mode = 'country', countries = []) =>
  API.post('/question', { mode, countries });

export const fetchCountries = () => API.get('/countries');

