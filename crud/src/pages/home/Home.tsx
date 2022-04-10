import { useContext, useEffect } from "react"
import Loading from "../../components/loading/Loading"
import { AddressContext } from "../../context/AddressContext"
import { UsersContext } from "../../context/UsersContext"
import { Container, ContainerCards, Info, TitlePage } from "./Home.styles"

function Home() {

  const {getPeople, people, loading} = useContext<any>(UsersContext)
  const {handleAddress, address} = useContext<any>(AddressContext)

  useEffect(() => {
    getPeople();
    handleAddress();
  },[])

  if (loading) {
    return (<Loading />)
  }

  return (
     <Container>
      <ContainerCards>
        <TitlePage>Total de Endereços</TitlePage>
        <Info>{address ? Object.keys(address).length : <Info>Loading...</Info>}</Info>      
      </ContainerCards>
      <ContainerCards>
        <TitlePage>Total de Pessoas</TitlePage>
        <Info>{people ? Object.keys(people).length : <Info>Loading...</Info>}</Info>      
      </ContainerCards>
       
     </Container>
  )
}

export default Home