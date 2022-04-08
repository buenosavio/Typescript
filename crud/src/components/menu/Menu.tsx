import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';
import IsLogged from '../IsLogged';
import { LinkStyled, UlItens, BtnLogout } from './Menu.styles';

function Menu() {
  
    const {handleLogout} = useContext<any>(AuthContext)
    
  return (
    <nav>
        <UlItens>
        { (IsLogged()) ? (
            <>
            <div>
              <li><LinkStyled to='/'>Home</LinkStyled></li>
              <li><LinkStyled to='/users'>Usuários</LinkStyled></li>
              <li><LinkStyled to='/address'>Endereços</LinkStyled></li>
             </div>
             <BtnLogout onClick={() => handleLogout()}>Logout</BtnLogout>
            </>) 
          :
          <li><LinkStyled to='login'>Login</LinkStyled></li>
        }
        </UlItens>
    </nav>
  )
}

export default Menu