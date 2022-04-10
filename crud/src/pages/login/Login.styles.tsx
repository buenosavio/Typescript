import styled from 'styled-components';
import imgShowPass from '../../images/showPass.png'

export const ContainerLogin = styled.div`
  background-color: #363740;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginTitle = styled.h1`
  font-size: 24px;
  color: #252733;
  text-align: center;
`;

export const LoginSubtitle = styled.p `
  text-align: center;
`;

export const DivForm = styled.div`
  background-color: #FFFFFF;
  box-sizing: border-box;
  width: 380px;
  height: 582px;
  border: 1px solid #DFE0EB;
  border-radius: 8px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`;

export const BtnLogin = styled.button`
  background: #3751FF;
  border: none;
  width: 316px;
  height: 48px;
  color: white;
  box-shadow: 0px 4px 12px rgba(55, 81, 255, 0.24);
  border-radius: 8px;
  transition: 2s;
  :hover {
    transform: scale(1.05);
    transition: 2s;
  }
`;

export const ImgLogin = styled.img`
  width: 80px;
  border-radius: 50%;
  text-align: center;
`;

export const StyledInput = styled.input`
  width: 316px;
  height: 48px;
  border: 1px solid #F0F1F7;
  border-radius: 8px;
  box-sizing: border-box;
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

export const Label = styled.label`
  color: #9FA2B4;
  margin-top: 10px;
`;

export const ShowPassword = styled.img.attrs({
  src: `${imgShowPass}`
})`
  position: absolute;
  top: 58%;
  left: 59%;
`;

export const TextDanger = styled.p`
  color: red;
  font-size: 15px;
`

export const DivItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Senha = styled.div`
  position: relative;
  text-align: center;
`

export const MostrarSenha = styled.div`
  position: absolute;
  top:0; right:0;
  margin-right: 10%;
  margin-top: 5%;
  background:transparent;
  outline:none;
  border:none;

`