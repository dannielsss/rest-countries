import styled from "styled-components";

const ImageFlag = styled.img`
  width: 500px;
  height: 332px;
  object-fit: cover;

  @media screen and (max-width: 720px) {
    width: 100%;
  }

  @media screen and (max-width: 600px) {
    height: auto;
  }
`

export default ImageFlag;