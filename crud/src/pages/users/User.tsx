import { Key, ReactChild, ReactFragment, ReactPortal, useContext, useEffect, useState } from 'react'
import { UsersContext } from '../../context/UsersContext'
import Loading from '../../components/loading/Loading';
import Error from '../../components/error/Error';
import moment from 'moment';
import {Container, Card, Text, ButtonDanger, ButtonAtz, ContainerCards} from './Users.styles'
import { TitlePage, Button, Inline, TitleCard } from '../../App.styles';
import { useNavigate } from 'react-router-dom';


function User() {

  const navigate = useNavigate();

  const {getPeople, people, showUser, deleteUser, registerUser} = useContext<any>(UsersContext)

  useEffect(() => {
    getPeople()
  },[])

  return (
    <div>
      <Container>
        <ContainerCards>
          <Inline>
            <TitlePage>Usuários</TitlePage>
            <Button onClick={() => registerUser()}>Cadastrar Usuário</Button>
          </Inline>          
          <TitleCard>
            <Text>Nome</Text>
            <Text>Nascimento</Text>
            <Text>CPF</Text>
            <Text>E-mail</Text>
          </TitleCard>
            {
              people?.map((p: { idPessoa: Key | null | undefined; nome: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; dataNascimento: moment.MomentInput; cpf: string; email: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }) => (
                <Card key={p.idPessoa}>
                  <Text>{p.nome}</Text>
                  <Text>{moment(p.dataNascimento).format('DD/MM/YYYY')}</Text>
                  <Text>{p.cpf ? p.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4") : null}</Text>
                  <Text>{p.email}</Text>
                  <ButtonAtz onClick={() => showUser(p.idPessoa)}>Atualizar</ButtonAtz>
                  <ButtonDanger onClick={() => deleteUser(p.idPessoa)}>Deletar</ButtonDanger>
                </Card>
              ))    
            }
        </ContainerCards>
      </Container>
    </div>
  )
}

export default User