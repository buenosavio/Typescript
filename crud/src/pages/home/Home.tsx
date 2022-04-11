import { useContext, useEffect } from "react"
import Loading from "../../components/loading/Loading"
import { AddressContext } from "../../context/AddressContext"
import { UsersContext } from "../../context/UsersContext"
import { BigContainerCard, Container, ContainerCards, Info, TitlePage, InfoDetalhe, Comercial, Residencial, TitlePageIcons } from "./Home.styles"

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
  
  let totalResidencial = Object.keys(address.filter((b: { tipo: string }) => (b.tipo === 'RESIDENCIAL'))).length
  let totalComercial = Object.keys(address.filter((a: { tipo: string }) => (a.tipo === 'COMERCIAL'))).length
  let totalFora = Object.keys(address.filter((c: { estado: string }) => (c.estado != 'RS'))).length

  return (
     <Container>
       <BigContainerCard>
        <TitlePageIcons>Tipo de Endereço</TitlePageIcons>
        <InfoDetalhe><Residencial/>{`${totalResidencial}`}</InfoDetalhe>      
        <InfoDetalhe><Comercial/>{`${totalComercial}`}</InfoDetalhe>        
      </BigContainerCard>
      <ContainerCards>
        <TitlePage>Total de Endereços</TitlePage>
        <Info>{address ? Object.keys(address).length : <Info>Loading...</Info>}</Info>      
      </ContainerCards>
      <ContainerCards>
        <TitlePage>Total de Pessoas</TitlePage>
        <Info>{people ? Object.keys(people).length : <Info>Loading...</Info>}</Info>      
      </ContainerCards>
      <ContainerCards>
        <TitlePage>Total fora do RS</TitlePage>
        <Info>{totalFora}</Info>      
      </ContainerCards>   
       
     </Container>
  )
}

export default Home