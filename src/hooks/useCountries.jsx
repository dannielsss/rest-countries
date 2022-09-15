import { useDispatch } from 'react-redux';
import { toggleAlert } from '../reducers/alertReducer';
import { isVisibleCountries, setCountries } from '../reducers/countriesReducer';

import { getCountrys, searchCountrys } from '../services/country';

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
      const countries = await getCountrys();
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
