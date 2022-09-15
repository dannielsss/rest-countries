import React, { useState } from 'react';

import { Input } from './styles';
import { useCountries } from '../../hooks/useCountries';

function SearchCountry() {
  const [searchValue, setSearchValue] = useState('');
  const { getAllCountries, searchOneCountries } = useCountries();

  const onSubmitForm = async (e) => {
    e.preventDefault();

    if (searchValue) {
      searchOneCountries(searchValue)
    } else {
      getAllCountries();
    }
  };

  return (
    <form onSubmit={onSubmitForm}>
      <Input
        type="search"
        name="search"
        id="search"
        placeholder="Search for a country"
        autoComplete="off"
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </form>
  );
}

export default SearchCountry;
