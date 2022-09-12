import styled from 'styled-components';
const paddingCard = '5px';

export const CardBox = styled.div`
  width: 270px;
  background: hsl(0, 0%, 100%);
  box-shadow: 0px 2px 5px #7a797950;
  border-radius: ${paddingCard};
  color: hsl(200, 15%, 8%);
  height: 335px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  transition: 0.1s ease;
  &:hover {
    cursor: pointer;
    transform: scale(1.02);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: ${paddingCard} ${paddingCard} 0px 0px;
`;

export const CardBody = styled.div`
  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const CardTitle = styled.p`
  font-weight: 800;
  font-size: 16px;
`;
