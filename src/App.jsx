import React from 'react';
import { Container } from './components/Container';
import ListCountry from './components/ListCountry';
import Navbar from './components/Navbar';
import SearchCountry from './components/SearchCountry';

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <SearchCountry />
        <ListCountry />
      </Container>
    </>
  );
}

export default App;
