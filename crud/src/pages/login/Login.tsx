import { Formik, Field, Form, FormikHelpers, useFormik } from "formik"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import { LoginDTO } from "../../model/LoginDTO"
import { LoginTitle, ContainerLogin, DivForm } from './Login.styles'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import IsLogged from '../../components/IsLogged'

function Login() {

  const navigate = useNavigate();
  
  useEffect(()=> {
    if (IsLogged()) navigate('/home')
  },[])

  const {handleLogin} = useContext<any>(AuthContext)

  return (
    <ContainerLogin>
      <LoginTitle>Login Vem Ser</LoginTitle>
      <Formik
        initialValues={{
          usuario:'',
          senha:''
        }}
        onSubmit={(
          values: LoginDTO,
          {setSubmitting, resetForm} : FormikHelpers<LoginDTO>,
        ) => {
          handleLogin(values)
          setSubmitting(false)
          resetForm()
        }}
      >
        <Form>
          <DivForm>
            <label htmlFor="usuario">Usuário</label>
            <Field name="usuario" id="usuario" placeholder="Digite o nome do usuário"/>
          </DivForm>
          <DivForm>
            <label htmlFor="senha">Senha</label>
            <Field name="senha" id="senha" type="password" placeholder="Informe sua senha"/>
          </DivForm>
          <button type="submit">Login</button>
        </Form>

      </Formik>
    </ContainerLogin>
  )
}

export default Login