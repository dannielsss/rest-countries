import { v4 } from 'uuid';
import axios from 'axios';

export const getCountrys = async () => {
  const res = await axios.get('https://restcountries.com/v3.1/all');
  res.data.forEach(element => {
    element.id = v4().slice(0, 16);
  });
  
  console.log(res.data);
  return res.data;
};

export const searchCountrys = async (countryName) => {
  const res = await axios.get(`https://restcountries.com/v3.1/name/${countryName}`)
  return res.data;
}