const { getPopular, getMoviesByIds} = require('../api/Movies')
const { Movie } = require('../entities/Movie')

async function movies(parent, args, {locale}) {
  try {
    const data = await getPopular(args.page, locale)

    return data
  } catch (error) {
    console.warn(error.response.data, ' = ERROR')
    throw error.response
  }
}

async function moviesByIds(parent, {ids}) {
  
  try {
    const requests = ids.map((id) => getMoviesByIds(id));
    const data = await Promise.all(requests);
    const movies = data.map((movie) => new Movie(movie.data));
    
    return movies
  
  } catch (error) {
    console.warn(error.response.data, ' = ERROR')
    throw error.response
  }
}

module.exports = {
    movies,
    moviesByIds

}
