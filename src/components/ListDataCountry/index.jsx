import React from 'react';
import LayoutFlex from '../LayoutFlex';
import { Ul } from './styles';

function ListDataCountry({ data }) {
  const parseJSON = (array) => {
    let items = [];
    for (const item in array) {
      items.push(array[item].name ? array[item].name : array[item]);
    }

    return items.toString();
  };

  return (
    <LayoutFlex direction="row" gap="3rem">
      <Ul>
        <li>
          <span>Native Name:</span> {data.name}
        </li>
        <li>
          <span>Population:</span> {data.population}
        </li>
        <li>
          <span>Region:</span> {data.region}
        </li>
        <li>
          <span>Sub Region:</span> {data.subregion}
        </li>
        <li>
          <span>Capital:</span> {data.capital}
        </li>
      </Ul>
      <Ul>
        <li>
          <span>Top Level Domain:</span> {parseJSON(data.domain)}
        </li>
        <li>
          <span>Currencies:</span> {parseJSON(data.currencies)}
        </li>
        <li>
          <span>Languages:</span> {parseJSON(data.languages)}
        </li>
      </Ul>
    </LayoutFlex>
  );
}

export default ListDataCountry;
