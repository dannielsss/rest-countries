import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { isLoading, setCountrys } from '../reducers/countrysReducer';

import { getCountrys } from '../services/country';

export const useDefaultCountrys = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const res = getCountrys();
    dispatch(isLoading(true));
    res.then((data) => {
      const countrysElements = [];
      for (let i = 0; i < 8; i++) {
        countrysElements.push(data[i]);
      }

      dispatch(setCountrys(countrysElements))
      dispatch(isLoading(false));
    });
  }, []);
};
