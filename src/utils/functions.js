const axios = require('axios');

module.exports = {
  getPerson: () => {
    return axios.get('https://swapi.co/api/people/1').then(res => {
      return res.data
    })
  },
  getStarship: (id) => {
    if (typeof id !== 'number') {
      return 'Oops you need a number'
    }
    return axios.get('https://swapi.co/api/starships/' + id)
    .then(res => {
      return res.data
    })
  }
}