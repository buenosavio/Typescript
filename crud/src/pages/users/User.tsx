import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import IsLogged from '../../components/IsLogged'

function User() {
  const navigate = useNavigate();
  
  useEffect(()=> {
    if (!IsLogged()) navigate('/login')
  },[])
  return (
    <div>User</div>
  )
}

export default User