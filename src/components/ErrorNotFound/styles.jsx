import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NotFoundBox = styled.div`
  height: 55vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 3rem;
`;

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const NotFoundTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
`;

export const NotFoundText = styled.p`
  font-size: 1.3rem;
  font-weight: lighter;
`;

export const NotFoundLink = styled(Link)`
  text-decoration: none;
  color: white;
  background: #353fce;
  padding: 0.5rem;
  margin-top: 10px;
  border-radius: 5px;
  width: 140px;
  text-align: center;
`;

export const NotFoundImage = styled.img`
  width: 300px;
`