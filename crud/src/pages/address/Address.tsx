import { useFormik } from "formik";
import { ReactChild, ReactFragment, ReactPortal, useContext, useEffect } from "react"
import Error from "../../components/error/Error";
import Loading from "../../components/loading/Loading";
import { AddressContext } from "../../context/AddressContext"
import { Card, TitleCard, TitlePage, ContainerCards, Text, Container, Button, Inline, ButtonDanger, ButtonAtz, StyledField } from "./Address.styles"
import {StyledInputnoformat, StyledInput, Dados} from '../users/Users.styles'
import {TextDanger} from '../../App.styles'
import api from "../../api";
import * as yup from 'yup'

function Address() {

  const AddressSchema = yup.object().shape({
    cep: yup.string().required('Obrigatório').min(8, 'Mínimo 8 dígitos'),
    tipo: yup.string().required('Obrigatório') ,
    logradouro: yup.string().required('Obrigatório'),
    numero: yup.number().required('Obrigatório').typeError('Este campo deve conter apenas números'),
    complemento: yup.string().required('Obrigatório'),
    localidade: yup.string().required('Obrigatório'),
    uf: yup.string().required('Obrigatório'),
    pais: yup.string().required('Obrigatório'),
  });
 

  const formik = useFormik({
    initialValues: {
      cep:'',
      tipo:'',
      logradouro:'',
      numero:'',
      complemento:'',
      bairro:'',
      localidade:'',
      uf:'',
      pais:'',
    },
    validationSchema: (AddressSchema),
    onSubmit: values => {
      if (button == 'Cadastrar') {
        saveAddress(values);
      } else if (button =='Atualizar') {
        updateAddress(values, formik.setFieldValue);
      } else {
        alert('Erro, tente novamente')
      }
    }});
  
  const {handleAddress, setButton, address,getAddress, deleteAddress, registerAddress, loading, error, saveAddress, updateAddress, button, setIdEndereco} = useContext<any>(AddressContext)

  const loadAddress = async (id: number, setFieldValue:any) => {
    setButton('Atualizar')
    try {
      const {data} = await api.get(`endereco/${id}`);
      setFieldValue("cep", data.cep);
      setFieldValue("tipo", data.tipo);
      setFieldValue("logradouro", data.logradouro);
      setFieldValue("numero", data.numero);  
      setFieldValue("complemento", data.complemento);  
      setFieldValue("bairro", data.bairro);  
      setFieldValue("localidade", data.cidade);  
      setFieldValue("uf", data.estado);  
      setFieldValue("pais", data.pais);  
      setIdEndereco(data.idEndereco);
    } catch (error) {
      console.log(error)
    }
    
  }

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
    <>
    <form onSubmit={formik.handleSubmit}>
      <Container>
        <Dados>
          <label htmlFor="cep">Atualizar</label>
          <StyledInputnoformat onChange={formik.handleChange} as={StyledInput} mask="99.999-999" id="cep" name="cep" placeholder="Informe o CEP" value={formik.values.cep} onBlur={() => getAddress(formik.values, formik.setFieldValue)}/>    
          {formik.errors.cep && formik.touched.cep ?  <TextDanger>{formik.errors.cep}</TextDanger> : null}
          <StyledField id="tipo" name="tipo" value={formik.values.tipo}>
            <option value="" id="tipo"></option>
            <option value="COMERCIAL" id="tipo">COMERCIAL</option>
            <option value="RESIDENCIAL" id="tipo">RESIDENCIAL</option>
          </StyledField>
          {formik.errors.tipo && formik.touched.tipo ? (<TextDanger>{formik.errors.tipo}</TextDanger>) : null}       

          <StyledInputnoformat onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.logradouro}as={StyledInput} id="logradouro" name="logradouro" placeholder="Logradouro" />  
          {formik.errors.logradouro && formik.touched.logradouro ? (<TextDanger>{formik.errors.logradouro}</TextDanger>) : null}  

          <StyledInputnoformat onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.numero}as={StyledInput} id="numero" name="numero" placeholder="Número" /> 
          {formik.errors.numero && formik.touched.numero ? (<TextDanger>{formik.errors.numero}</TextDanger>) : null}       

          <StyledInputnoformat onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.complemento}as={StyledInput} id="complemento" name="complemento" placeholder="Complemento" />        
          {formik.errors.complemento && formik.touched.complemento ? (<TextDanger>{formik.errors.complemento}</TextDanger>) : null}       

          <StyledInputnoformat onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.bairro}as={StyledInput} id="bairro" name="bairro" placeholder="Bairro" />        

          <StyledInputnoformat onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.localidade}as={StyledInput} id="localidade" name="localidade" placeholder="Localidade" />
          {formik.errors.localidade && formik.touched.localidade ? (<TextDanger>{formik.errors.localidade}</TextDanger>) : null}        

          <StyledInputnoformat onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.uf}as={StyledInput} id="uf" name="uf" placeholder="Estado" />
          {formik.errors.uf && formik.touched.uf ? (<TextDanger>{formik.errors.uf}</TextDanger>) : null}                 

          <StyledInputnoformat onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.pais}as={StyledInput} id="pais" name="pais" placeholder="País" /> 
          {formik.errors.pais && formik.touched.pais ? (<TextDanger>{formik.errors.pais}</TextDanger>) : null}  
          <div>
            <Button type="submit">Atualizar</Button>                        
          </div>
        </Dados>        
      </Container>
    </form>

    <Container>
      <ContainerCards>
        <Inline>
          <TitlePage>Endereços</TitlePage>
          <Button onClick={() => registerAddress()}>Cadastrar Endrereço</Button>
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
            <ButtonAtz onClick={() => {loadAddress(a.idEndereco, formik.setFieldValue)}}>Atualizar</ButtonAtz>
            <ButtonDanger onClick={() => {deleteAddress(a.idEndereco)}}>Deletar</ButtonDanger>
          </Card>
          )
          }      
      </ContainerCards>
    </Container>
    </>)
}

export default Address