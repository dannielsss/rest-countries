import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CardBody, CardBox, CardImage, CardTitle } from './styles';
import CardInfoItem from '../CardInfoItem';

function CardCountry({ id, flag, name, population, region, capital }) {
  const navigate = useNavigate();

  return (
    <CardBox onClick={() => navigate(`/country/${id}`)}>
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
