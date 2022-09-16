import styled from "styled-components";

const IconSpinner =styled.div`
  border: 4px solid white;
  border-left-color: transparent;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`

export default IconSpinner;