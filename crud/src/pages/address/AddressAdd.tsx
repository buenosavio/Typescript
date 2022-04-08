import axios from 'axios';
import { Formik, Field, Form, FormikHelpers, useFormikContext } from 'formik';
import {Container, StyledInput, StyledField, TextDanger, Button, ButtonToBack, Dados} from './AddressAdd.styles'
import {AddressGetDTO} from '../../model/AddressGetDTO'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AddressContext } from '../../context/AddressContext';
import * as yup from 'yup';

function AddressAdd() {

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
 

  const navigate = useNavigate();
  const {saveAddress, updateAddress, button, setButton, cep, setCep,  tipo, setTipo,  logradouro, setLogradouro,  numero, setNumero,  complemento, setComplemento,  bairro, setBairro,  localidade, setLocalidade,  estado, setEstado,  pais, setPais} = useContext<any>(AddressContext)
   
  const formatCPF = (cpfzin:any) => {
    const cpfNew = cpfzin.replace(/([\d]{2})([\d]{3})([\d]{3})/,"$1.$2-$3")
    return(cpfNew)
  }
  
  const getAddress = async (values: AddressGetDTO, setFieldValue: any) => {   
    formatCPF(values.cep)
    try {
      const {data} = await axios.get(`https://viacep.com.br/ws/${values.cep}/json/`);
      setFieldValue('logradouro', data.logradouro)
      setFieldValue('complemento', data.complemento)
      setFieldValue('bairro', data.bairro)
      setFieldValue('localidade', data.localidade)
      setFieldValue('uf', data.uf)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
    <Formik
    initialValues={{
      cep: cep,
      tipo: tipo,
      logradouro: logradouro,
      numero: numero,
      complemento: complemento,
      bairro: bairro,
      localidade: localidade,
      uf: estado,
      pais: pais,
    }}
    validationSchema={AddressSchema}
    onSubmit={(
      values: AddressGetDTO,
      { setSubmitting }: FormikHelpers<AddressGetDTO>
    ) => {
      if (button == 'Cadastrar') {
        saveAddress(values);
      } else if (button =='Atualizar') {
        updateAddress(values);
      } else {
        alert('Erro, tente novamente')
      }
    }}
    >
    {props => (
    <Form>
      <Container>
        <Dados>
          <label htmlFor="cep">Informe seu CEP</label>
          <Field as={StyledInput}  id="cep" name="cep" placeholder="Informe o CEP" onBlur={() => getAddress(props.values, props.setFieldValue)}/>    
          {props.errors.cep && props.touched.cep ?  <TextDanger>{props.errors.cep}</TextDanger> : null}
          <Field as={StyledField} id="tipo" name="tipo">
            <option value="" id="tipo"></option>
            <option value="COMERCIAL" id="tipo">COMERCIAL</option>
            <option value="RESIDENCIAL" id="tipo">RESIDENCIAL</option>
          </Field>
          {props.errors.tipo && props.touched.tipo ? (<TextDanger>{props.errors.tipo}</TextDanger>) : null}       

          <Field as={StyledInput} id="logradouro" name="logradouro" placeholder="Logradouro" />  
          {props.errors.logradouro && props.touched.logradouro ? (<TextDanger>{props.errors.logradouro}</TextDanger>) : null}  

          <Field as={StyledInput} id="numero" name="numero" placeholder="Número" /> 
          {props.errors.numero && props.touched.numero ? (<TextDanger>{props.errors.numero}</TextDanger>) : null}       

          <Field as={StyledInput} id="complemento" name="complemento" placeholder="Complemento" />        
          {props.errors.complemento && props.touched.complemento ? (<TextDanger>{props.errors.complemento}</TextDanger>) : null}       

          <Field as={StyledInput} id="bairro" name="bairro" placeholder="Bairro" />        

          <Field as={StyledInput} id="localidade" name="localidade" placeholder="Localidade" />
          {props.errors.localidade && props.touched.localidade ? (<TextDanger>{props.errors.localidade}</TextDanger>) : null}        

          <Field as={StyledInput} id="uf" name="uf" placeholder="Estado" />
          {props.errors.uf && props.touched.uf ? (<TextDanger>{props.errors.uf}</TextDanger>) : null}                 

          <Field as={StyledInput} id="pais" name="pais" placeholder="País" /> 
          {props.errors.pais && props.touched.pais ? (<TextDanger>{props.errors.pais}</TextDanger>) : null}  
          <div>
            <ButtonToBack type="button" onClick={() => navigate('/address')}>Voltar</ButtonToBack>                        
            <Button type="submit">{button}</Button>                        
          </div>
        </Dados>        
      </Container>
    </Form>
    )}
  </Formik>
  </>)
}

export default AddressAdd