import React from 'react';
import { CardBox } from './styles';

function CardCountry({ flag, name, population, region, capital }) {
  return (
    <CardBox>
      {flag} {name} {population} {region} {capital}
    </CardBox>
  );
}

export default CardCountry;
