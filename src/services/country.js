import axios from 'axios';

export const getCountrys = async () => {
  const res = await axios.get('https://restcountries.com/v3.1/all');
  return res.data;
};

export const searchCountrys = async (countryName) => {
  const res = await axios.get(`https://restcountries.com/v3.1/name/${countryName}`)
  return res.data;
}