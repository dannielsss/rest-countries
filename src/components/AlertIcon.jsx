import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

function AlertIcon({ type }) {
  if (type === 'error') {
    return <FontAwesomeIcon icon={faExclamationCircle} />;
  }

  return <FontAwesomeIcon icon={faSpinner} spin />;
}

export default AlertIcon;
