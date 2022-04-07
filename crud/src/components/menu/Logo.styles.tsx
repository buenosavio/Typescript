import styled from "styled-components";
import logoImg from '../../images/logo-vemser.png'

export const ImageLogo = styled.img.attrs({
    src: `${logoImg}`
})`
  border-radius: 50%;
  width: 80px;
  margin-left: 30%;
  margin-top:20%
`;
