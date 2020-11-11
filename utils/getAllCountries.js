import countries from "../countries.js";

export default () =>
  countries
    .reduce((acc, country) => {
      country.cities.forEach((city) => {
        acc.push({
          ...city,
          country: country.name,
          isRight: false,
          isOpen: false,
        });
        return acc;
      });
      return acc;
    }, [])
    .sort(() => Math.random() - 0.5);
