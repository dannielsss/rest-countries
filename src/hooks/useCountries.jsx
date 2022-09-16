import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleAlert } from '../reducers/alertReducer';
import { isVisibleCountries, setCountries } from '../reducers/countriesReducer';

import {
  findCountry,
  getCountries,
  searchCountries,
} from '../services/country';

export const useCountries = () => {
  const dispatch = useDispatch();

  // Find all countries
  const getAllCountries = async () => {
    dispatch(isVisibleCountries(false));
    dispatch(
      toggleAlert({
        type: 'loading',
        message: 'Loading...',
        active: true,
      })
    );

    try {
      const countries = await getCountries();
      const countriesElements = [];
      for (let i = 0; i < 8; i++) {
        countriesElements.push(countries[i]);
      }

      dispatch(setCountries(countriesElements));
      dispatch(isVisibleCountries(true));
      dispatch(toggleAlert({ active: false }));
    } catch (error) {
      if (error.response.status === 0) {
        dispatch(
          toggleAlert({
            type: 'error',
            message: 'Network Error',
            active: true,
          })
        );
      }
    }
  };

  // Search one country
  const searchOneCountries = async (searchValue) => {
    dispatch(
      toggleAlert({
        type: 'loading',
        message: 'Loading...',
        active: true,
      })
    );

    try {
      const searchCountriesData = await searchCountries(searchValue);
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
      } else if (error.response.status === 0) {
        dispatch(
          toggleAlert({
            type: 'error',
            message: 'Network Error',
            active: true,
          })
        );
      }
    }
  };

  return { getAllCountries, searchOneCountries };
};

export const useFindCountry = (countryId) => {
  const [country, setCountry] = useState({});
  const dispatch = useDispatch();

  const getCountry = async () => {
    dispatch(isVisibleCountries(false));
    setCountry({});
    dispatch(
      toggleAlert({
        type: 'loading',
        message: 'Loading...',
        active: true,
      })
    );

    try {
      const res = await findCountry(countryId);
      dispatch(isVisibleCountries(true));
      dispatch(toggleAlert({ active: false }));
      setCountry(res);
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
  };

  useEffect(() => {
    getCountry();
  }, []);

  return country;
};
