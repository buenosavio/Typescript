import { useContext, useEffect, useState } from 'react'
import api from '../../api'
import { Container} from './Users.styles'
import { UsersDTO } from "../../model/UsersDTO"
import List from './List';
import { AuthContext } from '../../context/AuthContext';
import Loading from '../../components/loading/Loading';
import Error from '../../components/error/Error';

function User() {

  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [people, setPeople] = useState<UsersDTO['people']>([]);

  const getPeople = async () => {
    try {
      const {data} = await api.get('/pessoa')
      console.log(data)
      setPeople(data)
      setLoading(false)      
    } catch (error) {
      setLoading(false)
      setError(true)
      console.log(error)
    }
  }

  useEffect(() => {
    getPeople()
  },[])

  if (loading) {
    return <Loading/>
  }

  if (error) {
    return <Error />
  }
  
  return (
    <div>
      <Container>
        <List people={people}/>
      </Container>
    </div>
  )
}

export default User