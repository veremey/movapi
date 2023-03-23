const axios = require('axios');
const { Movies } = require('../entities/Movies');

const { API_KEY, API_SOURCE} = require('../config');

const getPopular = async (page) => {
  const result = await axios.get(`${API_SOURCE}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`);
  
  return new Movies(result.data);
}

const getMoviesByIds = (id) => {
  return axios.get(`${API_SOURCE}/movie/${id}?api_key=${API_KEY}&language=en-US`);
}

module.exports = {
  getPopular,
  getMoviesByIds
}
