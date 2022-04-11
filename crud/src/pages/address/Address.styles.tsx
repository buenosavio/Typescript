import styled from "styled-components";

export const Card = styled.div`
  border-top: 1px solid #DFE0EB;
  width: 1100px;
  display: grid ;
  align-items: center;
  grid-template-columns: 30% 13% 15% 10% 18% 7% 7%;
  :hover {
    background-color: #DFE0EB;
  }
`;

export const TitleCard = styled.div`
  width: 1100px;
  display: grid ;
  grid-template-columns: 30% 13% 15% 10% 18% 7% 7%;
  font-weight: bolder;
`;

export const ContainerCards = styled.div`
  border: 1px solid #DFE0EB;  
  background-color: #FFFFFF;
  box-sizing: border-box;
  border-radius: 8px;
  margin-left: 17%;
  margin-top: 1%;
  margin-bottom: 1%;
`;

export const TitlePage = styled.h1`
  font-size: 24px;
  margin-left: 15px;
`;

export const Text = styled.p`
  font-size: 14px;
  margin-left: 15px;
`;

export const Container = styled.div`
  display: flex;
  background-color: #EEE;
`;

export const CardTitle = styled.h1`
  color:#999;
`;

export const Button = styled.button`
  background: #3751FF;
  border: none;
  width: 200px;
  height: 40px;
  color: white;
  margin-right: 15px;
  box-shadow: 0px 4px 12px rgba(55, 81, 255, 0.24);
  border-radius: 8px;
  transition: 2s;
  :hover {
    transform: scale(1.05);
    transition: 2s;
  }
`;

export const Inline = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonDanger = styled.button`
  background: #f30000;
  border: none;
  width: 60px;
  height: 30px;
  color: white;
  box-shadow: 0px 4px 12px rgba(55, 81, 255, 0.24);
  border-radius: 8px;
  transition: 2s;
  :hover {
    transform: scale(1.05);
    transition: 2s;
  }
`;

export const ButtonAtz = styled.button`
  padding: 3px;
  background: #00f30c;
  border: none;
  width: 60px;
  height: 30px;
  color: white;
  box-shadow: 0px 4px 12px rgba(55, 81, 255, 0.24);
  border-radius: 8px;
  transition: 2s;
  :hover {
    transform: scale(1.05);
    transition: 2s;
  }
`;

export const StyledField = styled.select`
  width: 316px;
  height: 40px;
  border: 1px solid #F0F1F7;
  border-radius: 8px;
  box-sizing: border-box;
  margin-bottom: 10px;
  :focus {
    box-shadow: 0 0 0 0;
    outline: 0;
    transition: 2s;
    border-color: #aeaeb1 ; 
  }
`;