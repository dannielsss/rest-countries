import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useCountrys } from '../../hooks/useCountrys';

import { ListCountryBox } from './styles';

import CardCountry from '../CardCountry';

function ListCountry() {
  const visible = useSelector((state) => state.countrys.visibleCountrys);
  const countrys = useSelector((state) => state.countrys.countrys);
  const { getAllCountrys } = useCountrys();
  
  useEffect(() => {
    getAllCountrys();
  }, []);

  return (
    <ListCountryBox>
      {visible && countrys.map((country) => (
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

export default ListCountry;
