import axios from 'axios';

export const getCountries = async () => {
  const res = await axios.get('https://restcountries.com/v3.1/all');
  console.log(res.data);
  return res.data;
};

export const searchCountries = async (countryName) => {
  const res = await axios.get(
    `https://restcountries.com/v3.1/name/${countryName}`
  );
  return res.data;
};

export const findCountry = async (countryId) => {
  const res = await axios.get(
    `https://restcountries.com/v3.1/alpha/${countryId}`
  );
  console.log(res.data);
  return res.data[0];
};
