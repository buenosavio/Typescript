import { ReactChild, ReactFragment, ReactPortal, useContext, useEffect } from "react"
import Error from "../../components/error/Error";
import Loading from "../../components/loading/Loading";
import { AddressContext } from "../../context/AddressContext"
import { Card, TitleCard, TitlePage, ContainerCards, Text, Container, Button, Inline, ButtonDanger, ButtonAtz } from "./Address.styles"

function Address() {
  
  const {handleAddress, address, loadAddress, deleteAddress, registerAddress, loading, error} = useContext<any>(AddressContext)

  useEffect(() => {
    handleAddress()
  },[])

  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Error/>
  }

  return (
    <Container>
      <ContainerCards>
        <Inline>
          <TitlePage>Endereços</TitlePage>
          <Button onClick={() => registerAddress()}>Cadastrar</Button>
        </Inline>
          <TitleCard>
            <Text>Logradouro</Text>
            <Text>Número</Text>
            <Text>Cidade</Text>
            <Text>Estado</Text>
            <Text>Tipo</Text>
          </TitleCard>      
          {address?.map((a: { idEndereco: number; logradouro: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; numero: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; cidade: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; estado: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; tipo: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined }) => 
          <Card key={a.idEndereco}>
            <Text>{a.logradouro}</Text>
            <Text>{a.numero}</Text>          
            <Text>{a.cidade}</Text>
            <Text>{a.estado}</Text>
            <Text>{a.tipo}</Text>
            <ButtonAtz onClick={() => {loadAddress(a.idEndereco)}}>Atualizar</ButtonAtz>
            <ButtonDanger onClick={() => {deleteAddress(a.idEndereco)}}>Deletar</ButtonDanger>
          </Card>
          )
          }      
      </ContainerCards>
    </Container>
  )
}

export default Address