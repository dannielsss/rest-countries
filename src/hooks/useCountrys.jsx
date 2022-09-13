import { useDispatch } from 'react-redux';
import { toggleAlert } from '../reducers/alertReducer';
import { isVisibleCountrys, setCountrys } from '../reducers/countrysReducer';

import { getCountrys } from '../services/country';

export const useCountrys = () => {
  const dispatch = useDispatch();

  const getAllCountrys = async () => {
    dispatch(isVisibleCountrys(false));
    dispatch(
      toggleAlert({
        type: 'loading',
        message: 'Loading...',
        active: true,
      })
    );

    try {
      const countries = await getCountrys();
      const countrysElements = [];
      for (let i = 0; i < 8; i++) {
        countrysElements.push(countries[i]);
      }

      dispatch(setCountrys(countrysElements));
      dispatch(isVisibleCountrys(true));
      dispatch(toggleAlert({ active: false }));
    } catch (error) {
      console.log(error);
    }
  };

  return { getAllCountrys };
};
