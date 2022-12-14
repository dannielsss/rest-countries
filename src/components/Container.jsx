import styled from 'styled-components';

export const Container = styled.div`
  padding: 5rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  
  @media screen and (max-width: 600px) {
    padding: 3rem;
  }
`;
