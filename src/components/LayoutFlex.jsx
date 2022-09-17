import styled from 'styled-components';

const LayoutFlex = styled.div`
  width: ${(props) => props.width};

  display: flex;
  flex-direction: ${(props) => props.direction};
  align-items: ${(props) => props.align};
  gap: ${(props) => props.gap};
  flex-wrap: wrap;

  @media screen and (max-width: 1220px) {
    justify-content: center;
  }

  @media screen and (max-width: 600px) {
    justify-content: flex-start;
  }
`;

export default LayoutFlex;
