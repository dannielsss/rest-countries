import React from 'react';
import { Outlet } from 'react-router-dom';

import { Container } from './components/Container';

import Navbar from './components/Navbar';

function App() {
  // const alertActive = useSelector((state) => state.alert.active);
  // const alertData = useSelector((state) => state.alert);

  return (
    <>
      <Navbar />
      <Container>
        {/* {alertActive ? (
          <Alert message={alertData.message} type={alertData.type} />
        ) : null}
        <SearchCountry />
        <ListCountries /> */}
        <Outlet />
      </Container>
    </>
  );
}

export default App;
