import React from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Container } from './components/Container';

import Navbar from './components/Navbar';
import Alert from './components/Alert';

function App() {
  const alertData = useSelector((state) => state.alert);

  return (
    <>
      <Navbar />
      <Container>
        {alertData.active ? (
          <Alert message={alertData.message} type={alertData.type} />
        ) : null}
        <Outlet />
      </Container>
    </>
  );
}

export default App;
