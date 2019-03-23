export default {
  Query: {
    countries: async (_, { continentName }, { utils }) => {
      const res = await utils.geonamesUtils.getCountriesByContinentName(continentName);
      return res;
    },
    continents: async (_, args, { utils }) => {
      const res = await utils.geonamesUtils.getContinents();
      return res;
    },
    country: async (_, { continentName, countryName }, { utils }) => {
      const res = await utils.geonamesUtils
        .getCountriesByContinentName(continentName)
        .then(results => {
          return results.filter(country => country.countryName === countryName)[0];
        });
      return res;
    }
  }
};
