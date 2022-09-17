import { Link } from "react-router-dom";
import styled from "styled-components";

export const ButtonLink = styled(Link)`
  padding: 0.5rem;
  width: 130px;
  text-align: center;
  color: hsl(200, 15%, 8%);
  text-decoration: none;
  box-shadow: 0px 0px 10px #00000052;
  border-radius: 5px;
  align-self: flex-start;

  @media screen and (max-width: 1220px) {
    align-self: center;
  }

  @media screen and (max-width: 600px) {
    align-self: flex-start;
  }
`