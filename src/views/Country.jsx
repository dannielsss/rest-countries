import React from 'react';

import { useParams } from 'react-router-dom';
import { useFindCountry } from '../hooks/useCountries';
import ButtonBack from '../components/ButtonBack';
import LayoutFlex from '../components/LayoutFlex';

function Country() {
  const { countryId } = useParams();
  const country = useFindCountry(countryId);

  return (
    <>
      {country.name ? (
        <LayoutFlex>
          <ButtonBack />
          <h1>Country {country.name.common}</h1>
        </LayoutFlex>
      ) : null}
    </>
  );
}

export default Country;
