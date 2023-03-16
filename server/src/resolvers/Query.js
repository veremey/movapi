const { getPopular } = require('../api/Movies')

async function movies(parent, args) {
  try {
    const data = await getPopular()

    return data
  } catch (error) {
    console.warn(error.response.data, ' = ERROR')
    throw error.response
  }
}

module.exports = {
    movies,
}
