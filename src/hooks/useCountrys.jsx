import { useDispatch } from 'react-redux';
import { toggleAlert } from '../reducers/alertReducer';
import { isVisibleCountries, setCountries } from '../reducers/countriesReducer';

import { getCountrys } from '../services/country';

export const useCountries = () => {
  const dispatch = useDispatch();

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
      console.log(error);
    }
  };

  return { getAllCountries };
};
