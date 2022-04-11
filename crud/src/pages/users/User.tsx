import { useContext, useEffect } from 'react'
import {Container, Card, Text, ButtonDanger, ButtonAtz, ContainerCards, Dados, StyledInput, StyledInputnoformat} from './Users.styles'
import { UsersContext } from '../../context/UsersContext'
import { TitlePage, Button, Inline, TitleCard, TextDanger } from '../../App.styles';
import { useFormik} from 'formik';


import Loading from '../../components/loading/Loading';
import Error from '../../components/error/Error';
import moment from 'moment';
import * as yup from 'yup';

function User() {

  const UserSchema = yup.object().shape({
    nome: yup.string().required('Obrigatório').matches(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/, 'Permitido apenas letras'),
    dataNascimento: yup.string().required('Obrigatório').min(8,'Informe data válida no formato DD/MM/YYYY'),
    cpf: yup.string().required('Obrigatório').min(10, 'Mínimo de 11 dígitos'),
    email: yup.string().email('Informe um e-mail válido').required('Obrigatório')
  });

  const formik = useFormik({
    initialValues: {
      nome: '',
      dataNascimento: '',
      cpf: '',
      email: '',
    },
    validationSchema: (UserSchema),
    onSubmit: values => {
        if (button == 'Cadastrar') {
            insertUser(values)
        } else if (button=='Atualizar'){
            updateUser(values)
        } else {
            alert('Erro')
        }        
    }});

  const {getPeople, people, deleteUser, registerUser, loading, error, button, setButton, insertUser, updateUser, loadUser} = useContext<any>(UsersContext)

  useEffect(() => {
    getPeople()
    setButton('Atualizar')
  },[])

  if (loading) {
    return <Loading/>
  }

  if (error) { 
    return <Error />
  }

  
  return (  
  <>
    <form onSubmit={formik.handleSubmit}>      
      <Container>
        <Dados>
          <TitlePage>Usuários</TitlePage>
          <StyledInputnoformat as={StyledInput}  id="nome" name="nome" placeholder="Nome" value={formik.values.nome} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
          {formik.errors.nome && formik.touched.nome ? (<TextDanger>{formik.errors.nome}</TextDanger>) : null }              
          <StyledInputnoformat as={StyledInput} mask='99/99/9999' id="dataNascimento" name="dataNascimento" placeholder="Data de Nascimento" value={formik.values.dataNascimento} onChange={formik.handleChange} onBlur={formik.handleBlur}/>            
          {formik.errors.dataNascimento && formik.touched.dataNascimento ? (<TextDanger>{formik.errors.dataNascimento}</TextDanger>) : null }  
          <StyledInputnoformat as={StyledInput} mask='999.999.999-99' id="cpf"  name="cpf" placeholder="CPF" value={formik.values.cpf} onChange={formik.handleChange} onBlur={formik.handleBlur}/>           
          {formik.errors.cpf && formik.touched.cpf ? (<TextDanger>{formik.errors.cpf}</TextDanger>) : null }  
          <StyledInputnoformat as={StyledInput} id="email" name="email" placeholder="E-mail" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}/>                  
          {formik.errors.email && formik.touched.email ? (<TextDanger>{formik.errors.email}</TextDanger>) : null }  
          <Button type="submit">{button}</Button>
        </Dados>        
      </Container>
    </form>
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
              people?.map((p: { idPessoa: number; nome: string; dataNascimento: string; cpf: string; email: string; }) => (
                <Card key={p.idPessoa}>
                  <Text>{p.nome}</Text>
                  <Text>{moment(p.dataNascimento).format('DD/MM/YYYY')}</Text>
                  <Text>{p.cpf ? p.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4") : null}</Text>
                  <Text>{p.email}</Text>
                  <ButtonAtz onClick={() => loadUser(p.idPessoa, formik.setFieldValue)}>Atualizar</ButtonAtz>
                  <ButtonDanger onClick={() => deleteUser(p.idPessoa)}>Deletar</ButtonDanger>
                </Card>
              ))    
            }
        </ContainerCards>
      </Container>
  </>
  )
}

export default User