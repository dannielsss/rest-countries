import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import IconSpinner from './IconSpinner';

function AlertIcon({ type }) {
  if (type === 'error') {
    return <FontAwesomeIcon icon={faExclamationCircle} />;
  }

  return <IconSpinner />;
}

export default AlertIcon;
