import { useNavigate } from 'react-router-dom'
import IsLogged from '../IsLogged';

function Header() {
  
  const navigate = useNavigate();

  const Logout = () => {
    navigate('/login')
    localStorage.removeItem('token')
  }

  return (
    <>
      <div>Header</div>
      { (IsLogged()) ? 
          <button onClick={() => Logout()}>Logout</button>
        :
        null
      } 
       
    </>
  )
}

export default Header