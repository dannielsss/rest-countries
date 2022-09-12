import React from 'react';
import { useSelector } from 'react-redux';

import { useDefaultCountrys } from '../../hooks/useCountrys';

import { ListCountryBox } from './styles';

import CardCountry from '../CardCountry';
import Loading from '../Loading';

function ListCountry() {
  const countrys = useSelector((state) => state.countrys.countrys);
  const loading = useSelector((state) => state.countrys.loading);
  useDefaultCountrys();
  
  if (loading) {
    return <Loading />;
  }

  return (
    <ListCountryBox>
      {countrys.map((country) => (
        <CardCountry
          flag={country.flags.png}
          name={country.name.official}
          population={country.population}
          region={country.region}
          capital={country.capital[0]}
          key={country.area}
        />
      ))}
    </ListCountryBox>
  );
}

export default ListCountry;
