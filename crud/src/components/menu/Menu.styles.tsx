import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: white;
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  margin: 0px 0px 1px;
  :hover {
    background-color:#9FA2B4 ;
    border-left: 2px solid white;
  }
`;

export const UlItens = styled.ul`
  display: inline;

`;

export const BtnLogout = styled.button`
  background: #ff3737;
  margin: 150% 10px;
  border: none;
  width: 90%;
  height: 34px;
  color: white;
  box-shadow: 0px 4px 12px rgba(236, 34, 7, 0.24);
  border-radius: 8px;
`;