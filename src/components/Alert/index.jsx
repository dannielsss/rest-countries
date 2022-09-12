import React from 'react';
import { AlertBox } from './styes';

function Alert({ message, type }) {
  return <AlertBox type={type}>{message}</AlertBox>;
}

export default Alert;
