import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import IsLogged from '../../components/IsLogged'

function Address() {

  const navigate = useNavigate();
  
  useEffect(()=> {
    if (!IsLogged()) navigate('/login')
  },[])
  
  return (
    <div>Address</div>
  )
}

export default Address