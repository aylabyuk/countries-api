import getSymbolFromCurrency from 'currency-symbol-map';
import isoConv from 'iso-language-converter/index.es5';

export default {
  Country: {
    currency(country) {
      return {
        code: country.currencyCode,
        symbol: getSymbolFromCurrency(country.currencyCode)
      };
    },
    languages(country) {
      const langArr = country.languages.split(',').map(l => {
        // prevent errs
        if (!l) {
          return null;
        }
        return {
          code: l,
          name: isoConv(l.split('-')[0])
        };
      });

      if (langArr[0] === null) return [];

      return langArr;
    }
  },
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
    },
    continent: async (_, { continentName }, { utils }) => {
      const res = await utils.geonamesUtils.getContinents().then(cont => {
        return cont.filter(item => item.name === continentName);
      });
      return res[0];
    }
  }
};
