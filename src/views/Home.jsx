import React from 'react';
import { useSelector } from 'react-redux';

import Alert from '../components/Alert';
import SearchCountry from '../components/SearchCountry';
import ListCountries from '../components/ListCountries';

function Home() {
  const alertActive = useSelector((state) => state.alert.active);
  const alertData = useSelector((state) => state.alert);

  return (
    <>
      {alertActive ? (
        <Alert message={alertData.message} type={alertData.type} />
      ) : null}
      <SearchCountry />
      <ListCountries />
    </>
  );
}

export default Home;
