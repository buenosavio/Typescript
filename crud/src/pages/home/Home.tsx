import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import IsLogged from '../../components/IsLogged'
import { Card,
         CardTitle, 
         Container,
} from './Home.styles'

function Home() {

  const navigate = useNavigate();
  
  useEffect(()=> {
    if (!IsLogged()) navigate('/login')
  },[])

  return (
    <div>
      <Container>
        <Card>
          <CardTitle>Usuários</CardTitle>
        </Card>
        <Card>
          <CardTitle>Endereço</CardTitle>
        </Card>
      </Container>
    </div>
  )
}

export default Home