import axios from 'axios';

export const fetchQuizQuestion = () => {
  return axios.get('http://localhost:8080/api/geoApi/question');
};
