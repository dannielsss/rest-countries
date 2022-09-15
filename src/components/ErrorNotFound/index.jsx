import React from 'react';
import Warning from '../../assets/warning.svg';
import {
  NotFoundBox,
  NotFoundContainer,
  NotFoundImage,
  NotFoundLink,
  NotFoundText,
  NotFoundTitle,
} from './styles';

function ErrorNotFound() {
  return (
    <NotFoundBox>
      <div>
        <NotFoundImage src={Warning} alt="" />
      </div>
      <NotFoundContainer>
        <NotFoundTitle>404 Not Found</NotFoundTitle>
        <NotFoundText>
          Page not found
        </NotFoundText>
        <NotFoundLink to={'/'}>Back to home</NotFoundLink>
      </NotFoundContainer>
    </NotFoundBox>
  );
}

export default ErrorNotFound;
