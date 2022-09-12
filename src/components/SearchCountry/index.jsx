import React from 'react';
import { Input } from './styles';

function SearchCountry() {
  return (
    <form>
      <Input
        type="search"
        name="search"
        id="search"
        placeholder="Search for a country"
        autoComplete="off"
      />
    </form>
  );
}

export default SearchCountry;
