import React from 'react';
import { CardBody, CardBox, CardImage, CardTitle } from './styles';

import CardInfoItem from '../CardInfoItem';

function CardCountry({ flag, name, population, region, capital }) {
  return (
    <CardBox>
      <CardImage src={flag} />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <div>
          <CardInfoItem title={'Population:'} value={population} />
          <CardInfoItem title={'Region:'} value={region} />
          <CardInfoItem title={'Capital:'} value={capital} />
        </div>
      </CardBody>
    </CardBox>
  );
}

export default CardCountry;
