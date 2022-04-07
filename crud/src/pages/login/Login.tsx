import { Formik, Field, Form, FormikHelpers } from "formik"
import { useContext, useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import { LoginDTO } from "../../model/LoginDTO"
import { LoginTitle, ContainerLogin, DivForm, BtnLogin, LoginSubtitle, ImgLogin, StyledInput, Label, ShowPassword } from './Login.styles'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import IsLogged from '../../components/IsLogged'
import imgLogin from '../../images/logo-vemser.png'

function Login() {

  const navigate = useNavigate();
  const {handleLogin} = useContext<any>(AuthContext)
  const [typePass, setShowPass] = useState<string>('password')
  
  useEffect(()=> {
    if (IsLogged()) navigate('/')
  },[])

  const showPass = () => {

    if(typePass==='password') {
      setShowPass('text')
    } else {
      setShowPass('password')
    }
  }

  return (
      <ContainerLogin>
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
                <ImgLogin src={imgLogin} />
                <LoginTitle>Log In Vem Ser</LoginTitle>
                <LoginSubtitle>Insira seu usuário e senha abaixo</LoginSubtitle>
                <Label htmlFor="usuario">Usuário</Label>
                <Field as={StyledInput} name="usuario" id="usuario" placeholder="Informe usuário"/>
                <Label htmlFor="senha">Senha</Label>
                <Field as={StyledInput} name="senha" id="senha" type={typePass} placeholder="Informe senha"/>
                <a href="#"><ShowPassword onClick={() => showPass()}></ShowPassword></a>
                <BtnLogin type="submit">Log In</BtnLogin>
                <LoginSubtitle>Não tem uma conta? <a href="#">Sign up</a></LoginSubtitle>
              </DivForm>
          </Form>
        </Formik>
      </ContainerLogin>
  )
}

export default Login