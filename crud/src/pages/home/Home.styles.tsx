import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #EEE;
  margin-left: 100px;
`;

export const ContainerCards = styled.div`
  border: 1px solid #DFE0EB;  
  background-color: #FFFFFF;
  box-sizing: border-box;
  border-radius: 8px;
  margin-left: 7%;
  margin-top: 1%;
  min-height: 40vh;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 40vh;
  
`;

export const TitlePage = styled.h1`
  font-size: 24px;
`;

export const Info = styled.h3 `
  font-size: 40px;
  text-align: center;
`