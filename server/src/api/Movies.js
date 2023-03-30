const axios = require('axios');
const { Movies } = require('../entities/Movies');

const { API_KEY, API_SOURCE} = require('../config');

const getPopular = async (page, language) => {
  const result = await axios.get(`${API_SOURCE}/movie/popular?api_key=${API_KEY}&language=${language}&page=${page}`);
  
  return new Movies(result.data);
}

const getMoviesByIds = (id, language) => {
  return axios.get(`${API_SOURCE}/movie/${id}?api_key=${API_KEY}&language=${language}`);
}

module.exports = {
  getPopular,
  getMoviesByIds
}
