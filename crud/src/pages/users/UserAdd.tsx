import { Formik, Field, Form, FormikHelpers, useFormikContext } from 'formik';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledInput, TextDanger, ButtonToBack, Button, Container, Dados, TitlePage } from '../../App.styles';
import { UsersContext } from '../../context/UsersContext';
import {UsersDTO} from '../../model/UsersDTO'

import * as yup from 'yup';
import moment from 'moment';
import { StyledInputnoformat } from './Users.styles';

const UserAdd = () => {

  const UserSchema = yup.object().shape({
    nome: yup.string().required('Obrigatório').matches(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/, 'Permitido apenas letras'),
    dataNascimento: yup.string().required('Obrigatório').min(8,'Informe data válida no formato DD/MM/YYYY'),
    cpf: yup.string().required('Obrigatório').min(10, 'Mínimo de 11 dígitos'),
    email: yup.string().email('Informe um e-mail válido').required('Obrigatório')
  });
    const navigate = useNavigate();
    const {button, insertUser, updateUser,  toUpdated, showUser} = useContext<any>(UsersContext)

    
    
    return (
        <>
        <Formik
        initialValues={{
          nome: toUpdated?.nome,
          dataNascimento: moment(toUpdated?.dataNascimento,'YYYY-MM-DD').format('DD/MM/YYYY'),          
          cpf: toUpdated?.cpf,          
          email: toUpdated?.email,                    
        }}
        validationSchema={UserSchema}
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
              <StyledInputnoformat as={StyledInput}  id="nome" name="nome" placeholder="Nome" value={props.values.nome} onChange={props.handleChange} onBlur={props.handleBlur}/>
              <Field as={StyledInput}  id="nome" name="nome" placeholder="Nome" />    
              {props.errors.nome && props.touched.nome ?  <TextDanger>{props.errors.nome}</TextDanger> : null}                 
    
              <Field as={StyledInput} mask='99/99/9999' id="dataNascimento" name="dataNascimento" placeholder="Data de Nascimento" />  
              {props.errors.dataNascimento && props.touched.dataNascimento ? (<TextDanger>{props.errors.dataNascimento}</TextDanger>) : null}  
    
              <Field as={StyledInput} mask="999.999.999-99" id="cpf" name="cpf" placeholder="CPF"/> 
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