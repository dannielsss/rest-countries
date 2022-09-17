import React from 'react';

import { ButtonLink } from './styles';

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ButtonBack() {
  return (
    <ButtonLink to={'/'}>
      <FontAwesomeIcon icon={faArrowLeft  } /> Back
    </ButtonLink>
  );
}

export default ButtonBack;
