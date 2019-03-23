export default {
  Query: {
    countries: async (_, { continentName }, { utils }) => {
      const res = await utils.geonamesUtils.getCountriesByContinentName(continentName);
      return res;
    },
    continents: async (_, args, { utils }) => {
      const res = await utils.geonamesUtils.getContinents();
      return res;
    }
  }
};
