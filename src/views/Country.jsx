import React from 'react';

import { useParams } from 'react-router-dom';
import { useFindCountry } from '../hooks/useCountries';

import ErrorNotFound from '../components/ErrorNotFound';
import ButtonBack from '../components/ButtonBack';
import LayoutFlex from '../components/LayoutFlex';
import ImageFlag from '../components/ImageFlag';
import ListDataCountry from '../components/ListDataCountry';

function Country() {
  const { countryId } = useParams();
  const { country, notfound, loading } = useFindCountry(countryId);
  const data = {
    name: country?.name?.official,
    population: country?.population,
    region: country?.region,
    subregion: country?.subregion,
    capital: country?.capital,
    flag: country?.flags?.svg,
    domain: country?.tld,
    currencies: country?.currencies,
    languages: country?.languages,
  };

  return (
    <>
      {!loading ? (
        <>
          {notfound ? (
            <ErrorNotFound />
          ) : (
            <LayoutFlex direction="column" gap="3rem" align="center">
              <ButtonBack />
              <LayoutFlex
                direction="row"
                gap="7rem"
                align="center"
                width="100%"
              >
                <ImageFlag src={data.flag} />
                <LayoutFlex
                  direction="column"
                  gap="2rem"
                  width="auto"
                  algin="center"
                >
                  <h1>{data.name}</h1>
                  <LayoutFlex direction="column" gap="4rem">
                    <ListDataCountry data={data} />
                  </LayoutFlex>
                </LayoutFlex>
              </LayoutFlex>
            </LayoutFlex>
          )}
        </>
      ) : null}
    </>
  );
}

export default Country;
