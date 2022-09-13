import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { setCountries } from '../../reducers/countriesReducer';
import { toggleAlert } from '../../reducers/alertReducer';

import { Input } from './styles';

import { searchCountrys } from '../../services/country';
import { useCountries } from '../../hooks/useCountrys';

function SearchCountry() {
  const [searchValue, setSearchValue] = useState('');
  const { getAllCountries } = useCountries();
  const dispatch = useDispatch();

  const onSubmitForm = async (e) => {
    e.preventDefault();

    if (searchValue) {
      dispatch(
        toggleAlert({
          type: 'loading',
          message: 'Loading...',
          active: true,
        })
      );

      try {
        const searchCountriesData = await searchCountrys(searchValue);
        dispatch(setCountries(searchCountriesData));
        dispatch(toggleAlert({ active: false }));
      } catch (error) {
        if (error.response.status === 404) {
          dispatch(
            toggleAlert({
              type: 'error',
              message: 'Not Found Country',
              active: true,
            })
          );
        }
      }
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
