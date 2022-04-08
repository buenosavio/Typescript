import axios from 'axios';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import {Container, StyledInput, StyledField, StyledOption, Button, ButtonToBack, Dados} from './AddressAdd.styles'
import {AddressGetDTO} from '../../model/AddressGetDTO'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AddressContext } from '../../context/AddressContext';
import InputMask from 'react-input-mask';


function AddressAdd() {

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
  const phoneNumberMask = [
    "(",
    /[1-9]/,
    /\d/,
    /\d/,
    ")",
    " ",
    /\d/,
    /\d/,
    /\d/,
    "-",
    /\d/,
    /\d/,
    /\d/,
    /\d/
  ];

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
          <Field as={StyledField} id="tipo" name="tipo">
            <option value="COMERCIAL" id="tipo">COMERCIAL</option>
            <option value="RESIDENCIAL" id="tipo">RESIDENCIAL</option>
          </Field>

          <Field as={StyledInput} id="logradouro" name="logradouro" placeholder="Logradouro" />        
          <Field as={StyledInput} id="numero" name="numero" placeholder="Número" />        
          <Field as={StyledInput} id="complemento" name="complemento" placeholder="Complemento" />        
          <Field as={StyledInput} id="bairro" name="bairro" placeholder="Bairro" />        
          <Field as={StyledInput} id="localidade" name="localidade" placeholder="Localidade" />        
          <Field as={StyledInput} id="uf" name="uf" placeholder="Estado" />                 
          <Field as={StyledInput} id="pais" name="pais" placeholder="País" />   
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