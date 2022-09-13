import React from 'react';
import { useSelector } from 'react-redux';

import { Container } from './components/Container';

import SearchCountry from './components/SearchCountry';
import ListCountries from './components/ListCountries';
import Navbar from './components/Navbar';
import Alert from './components/Alert';

function App() {
  const alertActive = useSelector((state) => state.alert.active);
  const alertData = useSelector((state) => state.alert);

  return (
    <>
      <Navbar />
      <Container>
        {alertActive ? (
          <Alert message={alertData.message} type={alertData.type} />
        ) : null}
        <SearchCountry />
        <ListCountries />
      </Container>
    </>
  );
}

export default App;
