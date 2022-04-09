import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: #EEE;
`;

export const CardTitle = styled.h1`
  color:#999;
`;

export const Card = styled.div`
  align-items: center;
  border-top: 1px solid #DFE0EB;
  width: 1100px;
  display: grid ;
  grid-template-columns: 25% 15% 15% 30% 7% 7%;
  :hover {
    background-color: #DFE0EB;
  }
`;

export const Text = styled.p`
  font-size: 14px;
  margin-left: 15px;
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

export const ContainerCards = styled.div`
  border: 1px solid #DFE0EB;  
  background-color: #FFFFFF;
  box-sizing: border-box;
  border-radius: 8px;
  margin-left: 17%;
  margin-top: 1%;
`;