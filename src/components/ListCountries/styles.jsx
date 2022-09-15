import styled from 'styled-components';

export const ListCountryBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  place-items: center;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1220px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 850px) {
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
