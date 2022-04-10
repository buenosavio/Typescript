import styled from "styled-components";
import InputMask from "react-input-mask";

export const StyledInput = styled(InputMask)`
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
  ::-webkit-input-placeholder {
    font-family: 'Mulish', sans-serif;
    font-size: 14px;
  }
`;

export const TitleCard = styled.div`
  width: 1100px;
  display: grid ;
  grid-template-columns: 25% 15% 15% 30% 7% 7%;
  font-weight: bolder;
`;

export const TextDanger = styled.p`
  color: red;
  margin-top: -10px;
  font-size: 15px;
`

export const Button = styled.button`
  background: #3751FF;
  border: none;
  width: 200px;
  height: 40px;
  color: white;
  box-shadow: 0px 4px 12px rgba(55, 81, 255, 0.24);
  border-radius: 8px;
  transition: 2s;
  margin-right: 15px;
  :hover {
    transform: scale(1.05);
    transition: 2s;
  }
`;

export const ButtonToBack = styled.button`
  background: #363740;
  border: none;
  width: 100px;
  margin-right: 10px;
  height: 40px;
  color: white;
  box-shadow: 0px 4px 12px rgba(55, 81, 255, 0.24);
  border-radius: 8px;
  transition: 2s;
  :hover {
    transform: scale(1.05);
    transition: 2s;
  }
`;

export const Container = styled.div`
  display: flex ;
  justify-content: center;
  align-items: center;
  min-height: 100vh;    
  background-color: #EEE;
`

export const Dados = styled.div`
  display: flex ;
  align-items: center;
  flex-direction: column;
  border: 1px solid #DFE0EB;  
  background-color: #FFFFFF;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 20px;
`;

export const TitlePage = styled.h1`
  font-size: 24px;
  margin-left: 15px;
`;

export const Inline = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

