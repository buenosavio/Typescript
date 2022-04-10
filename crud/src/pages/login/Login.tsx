import { Formik, Field, Form, FormikHelpers } from "formik"
import { useContext, useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import { LoginDTO } from "../../model/LoginDTO"
import { LoginTitle, ContainerLogin, DivForm, BtnLogin, LoginSubtitle, ImgLogin, StyledInput, Label, ShowPassword, TextDanger, DivItem, MostrarSenha, Senha } from './Login.styles'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

import IsLogged from '../../components/IsLogged'
import imgLogin from '../../images/logo-vemser.png'
import * as yup from 'yup'

function Login() {

  const LoginSchema = yup.object().shape({
    usuario: yup.string().required('Obrigatório'),
    senha: yup.string().required('Obrigatório').min(3,'Senha deve conter mais de 3 caracteres'),
  });

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
          validationSchema={ LoginSchema }
          onSubmit={(
            values: LoginDTO,
            {setSubmitting, resetForm} : FormikHelpers<LoginDTO>,
          ) => {
            handleLogin(values)
            setSubmitting(false)
            resetForm()
          }}
        >
          {props => 
          <Form>
              <DivForm>
                <DivItem>
                  <ImgLogin src={imgLogin} />
                  <LoginTitle>Log In Vem Ser</LoginTitle>
                  <LoginSubtitle>Insira seu usuário e senha abaixo</LoginSubtitle>
                </DivItem>
                <DivItem>
                  <Label htmlFor="usuario">Usuário</Label>              
                  <Field as={StyledInput} name="usuario" id="usuario" placeholder="Informe usuário"/>
                  {props.errors.usuario && props.touched.usuario ? <TextDanger>{props.errors.usuario}</TextDanger> : null}                 
                  <Label htmlFor="senha">Senha</Label>
                  <Senha>
                    <Field as={StyledInput} name="senha" id="senha" type={typePass} placeholder="Informe senha"/>
                      <MostrarSenha><
                        a href="#"><ShowPassword onClick={() => showPass()}></ShowPassword></a>
                      </MostrarSenha>
                    {props.errors.senha && props.touched.senha ? <TextDanger>{props.errors.senha}</TextDanger> : null} 
                  </Senha>
                </DivItem>
                <DivItem>                  
                  <BtnLogin type="submit">Log In</BtnLogin>
                  <LoginSubtitle>Não tem uma conta? <a href="#">Sign up</a></LoginSubtitle>
                </DivItem>
              </DivForm>
          </Form>
          }
        </Formik>
      </ContainerLogin>
  )
}

export default Login