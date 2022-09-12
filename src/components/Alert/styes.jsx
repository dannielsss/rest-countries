import styled from 'styled-components';

export const AlertBox = styled.div`
  width: 100%;
  padding: 20px;
  border-radius: 2px;
  font-weight: 600;

  color: white;
  background: ${(props) =>
    (props.type === 'error') && '#f84d4d' ||
    (props.type === 'loading') && '#353fce'};
`;
