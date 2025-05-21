import axios from 'axios';


// const API = axios.create({
//   baseURL: process.env.REACT_APP_API_URL, 
// });

export const fetchQuizQuestion = (mode = "country", countries = []) =>
  API.post('/question', {
    mode,
    countries
  });

  export const fetchCountries = () => API.get('/countries');

  
