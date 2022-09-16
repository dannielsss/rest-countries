import React from 'react';
import { useSelector } from 'react-redux';

import SearchCountry from '../components/SearchCountry';
import ListCountries from '../components/ListCountries';

function Home() {
  return (
    <>
      <SearchCountry />
      <ListCountries />
    </>
  );
}

export default Home;
