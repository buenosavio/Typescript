import styled from "styled-components";
import imgComercial from '../../images/comercial.png'
import imgResidencial from '../../images/residencial.png'

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
  margin-bottom: 1%;
  min-height: 40vh;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 40vh;
  
`;

export const BigContainerCard = styled.div`
  border: 1px solid #DFE0EB;  
  background-color: #FFFFFF;
  box-sizing: border-box;
  border-radius: 8px;
  margin-left: 9%;
  margin-top: 1%;
  min-height: 50vh;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 180vh;
  
`;

export const TitlePage = styled.h1`
  font-size: 24px;
`;

export const TitlePageIcons = styled.h1`
  font-size: 24px;
  margin-bottom: -15px;
`;

export const Info = styled.h3 `
  font-size: 40px;
  text-align: center;
`

export const InfoDetalhe = styled.h6 `
  font-size: 30px;  
  margin-bottom: -40px;
  text-align: start;
  color: green;
  display: flex;
  align-items: center;
`

export const Comercial = styled.img.attrs({
  src: `${imgComercial}`
})`
  width: 70px;
`;

export const Residencial = styled.img.attrs({
  src: `${imgResidencial}`
})`
  width: 50px;
`;