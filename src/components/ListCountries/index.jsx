import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useCountries } from '../../hooks/useCountries';

import { ListCountryBox } from './styles';

import CardCountry from '../CardCountry';

function ListCountries() {
  const visible = useSelector((state) => state.countries.visibleCountries);
  const countries = useSelector((state) => state.countries.countries);
  const { getAllCountries } = useCountries();
  
  useEffect(() => {
    getAllCountries();
  }, []);

  return (
    <ListCountryBox>
      {visible && countries.map((country) => (
        <CardCountry
          flag={country.flags.png}
          name={country.name.official}
          population={country.population}
          region={country.region}
          capital={country.capital}
          key={country.flags.png}
        />
      ))}
    </ListCountryBox>
  );
}

export default ListCountries;
