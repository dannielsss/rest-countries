import React from 'react';

import { AlertBox } from './styes';

import AlertIcon from '../AlertIcon';

function Alert({ message, type }) {
  return (
    <AlertBox type={type}>
      <AlertIcon type={type} /> {message}
    </AlertBox>
  );
}

export default Alert;
