import { useDispatch } from 'react-redux';
import { toggleAlert } from '../reducers/alertReducer';
import { isVisibleCountrys, setCountrys } from '../reducers/countrysReducer';

import { getCountrys } from '../services/country';

export const useCountrys = () => {
  const dispatch = useDispatch();

  const getAllCountrys = () => {
    const res = getCountrys();
    dispatch(isVisibleCountrys(false));
    dispatch(
      toggleAlert({
        type: 'loading',
        message: 'Loading...',
        active: true,
      })
    );

    res.then((data) => {
      const countrysElements = [];
      for (let i = 0; i < 8; i++) {
        countrysElements.push(data[i]);
      }

      console.log(data);
      // dispatch(setCountrys(data))
      dispatch(setCountrys(countrysElements));

      dispatch(isVisibleCountrys(true));
      dispatch(toggleAlert({ active: false }));
    });
  };

  return { getAllCountrys };
};
