import { Formik, Field, Form, FormikHelpers, useFormikContext } from 'formik';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledInput, TextDanger, ButtonToBack, Button, Container, Dados, TitlePage } from '../../App.styles';
import { UsersContext } from '../../context/UsersContext';
import {UsersDTO} from '../../model/UsersDTO'

const UserAdd = () => {
    
    const navigate = useNavigate();
    const {button, insertUser, updateUser} = useContext<any>(UsersContext)
    
    return (
        <>
        <Formik
        initialValues={{
          nome: '',
          dataNascimento: '',
          cpf:'',
          email:'',
        }}
        onSubmit={(
          values: UsersDTO,
          { setSubmitting }: FormikHelpers<UsersDTO>
        ) => {
            if (button == 'Cadastrar') {
                insertUser(values)
            } else if (button=='Atualizar'){
                updateUser(values)
            } else {
                alert('Erro')
            }        
        }}
        >
        {props => (
        <Form>
          <Container>
            <Dados>

              <TitlePage>Usuários</TitlePage>
              <Field as={StyledInput}  id="nome" name="nome" placeholder="Nome" />    
              {props.errors.nome && props.touched.nome ?  <TextDanger>{props.errors.nome}</TextDanger> : null}                 
    
              <Field as={StyledInput} id="dataNascimento" name="dataNascimento" placeholder="Data de Nascimento" />  
              {props.errors.dataNascimento && props.touched.dataNascimento ? (<TextDanger>{props.errors.dataNascimento}</TextDanger>) : null}  
    
              <Field as={StyledInput} id="cpf" name="cpf" placeholder="CPF" /> 
              {props.errors.cpf && props.touched.cpf ? (<TextDanger>{props.errors.cpf}</TextDanger>) : null}       
    
              <Field as={StyledInput} id="email" name="email" placeholder="E-mail" />        
              {props.errors.email && props.touched.email ? (<TextDanger>{props.errors.email}</TextDanger>) : null}          
            
              <div>
                <ButtonToBack type="button" onClick={() => navigate('/users')}>Voltar</ButtonToBack>                        
                <Button type="submit">{button}</Button>                        
              </div>

            </Dados>        
          </Container>
        </Form>
        )}
      </Formik>
      </>)

}

export default UserAdd;