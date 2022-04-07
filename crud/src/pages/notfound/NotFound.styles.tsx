import styled from "styled-components";
import err404 from '../../images/err2404.jpg'

export const Container = styled.div`
  min-height: 100vh;    
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #252422;
`;

export const Image = styled.img.attrs({
    src: `${err404}`
})`
  margin-left: 15%;
  min-height: 100vh;
`