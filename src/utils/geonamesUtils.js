import Geonames from 'geonames.js';

const geonames = new Geonames({ username: 'thevinci', lan: 'en', encoding: 'JSON' });

module.exports = {
  // get all continents
  getContinents: async () => {
    return new Promise((resolve, reject) => {
      geonames
        .search({ q: 'CONT', inclBbox: true })
        .then(res => {
          const continents = res.geonames.filter(item => item.fcode === 'CONT');
          resolve(continents);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  // get countries per continent name
  getCountriesByContinentName: async continentName => {
    return new Promise((resolve, reject) => {
      geonames
        .countryInfo({})
        .then(countries => {
          const filtered = countries.geonames.filter(item => {
            return item.continentName === continentName;
          });
          resolve(filtered);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
};
