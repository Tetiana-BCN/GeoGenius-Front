import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8080/api/geography', 
});


export const fetchQuizQuestion = (mode = "country-to-capital") =>
    API.get(`/question?mode=${mode}`);
  
