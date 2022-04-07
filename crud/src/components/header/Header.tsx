import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Logo from '../menu/Logo';
import Menu from '../menu/Menu';
import { ContainerHeader } from './Header.styles';

function Header() {

  const {isToken} = useContext<any>(AuthContext)

  return (
    <ContainerHeader>  
      {isToken ?
      (<>
        <Logo/>
        <Menu/>
      </>)  
      : null
    }
    
    </ContainerHeader>
  )
}

export default Header