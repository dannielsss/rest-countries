import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { setCountrys } from '../../reducers/countrysReducer';
import { toggleAlert } from '../../reducers/alertReducer';

import { Input } from './styles';

import { searchCountrys } from '../../services/country';
import { useCountrys } from '../../hooks/useCountrys';

function SearchCountry() {
  const [searchValue, setSearchValue] = useState('');
  const { getAllCountrys } = useCountrys();
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
        const searchContrysData = await searchCountrys(searchValue);
        dispatch(setCountrys(searchContrysData));
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
      getAllCountrys();
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
