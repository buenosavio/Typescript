import {FC, ReactNode, createContext, useState } from "react";
import api from "../api";
import { AddressPostDTO } from "../model/AddressPostDTO";
import { AddressGetDTO } from "../model/AddressGetDTO";
import { useNavigate } from "react-router-dom";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';

export const AddressContext = createContext({})

const AddressProvider: FC<ReactNode> = ({children}) => {
  
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [address, setAddress] = useState<AddressPostDTO[]>()
  const [button, setButton] = useState<string>('Cadastrar')
  const [cep, setCep] = useState<string>()
  const [tipo, setTipo] = useState<string>()
  const [logradouro, setLogradouro] = useState<string>()
  const [numero, setNumero] = useState<string>()
  const [complemento, setComplemento] = useState<string>()
  const [bairro, setBairro] = useState<string>()
  const [localidade, setLocalidade] = useState<string>()
  const [estado, setEstado] = useState<string>()
  const [pais, setPais] = useState<string>()
  const [idEndereco, setIdEndereco] = useState<number>()

  const navigate = useNavigate();

  const handleAddress = async () => {
    try {
      const {data} = await api.get('/endereco');
      setAddress(data)
      setError(false)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setError(true)
      console.log(error)
    }
  }
   
  const deleteAddress = (id: number | undefined) => {
    Confirm.show(
      'ATENÇÃO',
      'Deseja excluir?',
      'Sim',
      'Não',
      async () => {
          try {
          await api.delete(`/endereco/${id}`)
          handleAddress()
        } catch (error) {
          console.log(error)
        }
      },
      () => {
        return;
      },
      );          
  }

  const loadAddress = (id: number | undefined) => {
    const toUpdate = address?.find(e => e.idEndereco == id)
    console.log(toUpdate)
    navigate('/atz-add')
    setButton('Atualizar')
    setCep(toUpdate?.cep)
    setTipo(toUpdate?.tipo)
    setLogradouro(toUpdate?.logradouro)
    setNumero(toUpdate?.numero)
    setComplemento(toUpdate?.complemento)
    setLocalidade(toUpdate?.cidade)
    setEstado(toUpdate?.estado)
    setPais(toUpdate?.pais)
    setIdEndereco(toUpdate?.idEndereco)
  }

  const updateAddress = async (values: AddressGetDTO) => {
    console.log(values.tipo, idEndereco)
    const updatedAddress = {
      cep: values.cep,
      cidade: values.localidade,
      complemento: values.complemento,
      estado: values.uf,
      idEndereco: idEndereco,
      logradouro: values.logradouro,
      numero: values.numero,
      pais: values.pais,
      tipo: values.tipo 
    }
    try {
      await api.put(`/endereco/${idEndereco}`, updatedAddress)
      Notify.success('Endereço Atualizado!');
    } catch (error) {
      console.log(error)
      Notify.failure('Erro ao atualizar!');
    }
    navigate('/address')
  }

  const saveAddress = async (values: AddressGetDTO) => {  
    const address: AddressPostDTO = {      
      tipo: values.tipo,
      logradouro: values.logradouro,
      numero: values.numero,
      complemento: values.complemento,
      cep: values.cep,
      cidade: values.localidade,
      estado: values.uf,
      pais: values.pais
    } 
    try {
      await api.post('/endereco/451', address)
      navigate('/address')
      Notify.success('Endereço Cadastrado!');
    } catch (error) {
      console.log(error)
      Notify.failure('Erro ao cadastrar!');
    }
  }

  const registerAddress = () => {
    navigate('/atz-add')
    setButton('Cadastrar')
    setCep('')
    setTipo('')
    setLogradouro('')
    setNumero('')
    setComplemento('')
    setLocalidade('')
    setEstado('')
    setPais('')
  }

    return(
      
        <AddressContext.Provider value={{error, loading, handleAddress, address, setAddress, deleteAddress, updateAddress, loadAddress, saveAddress, button, setButton, registerAddress, cep, setCep,  tipo, setTipo,  logradouro, setLogradouro,  numero, setNumero,  complemento, setComplemento,  bairro, setBairro,  localidade, setLocalidade,  estado, setEstado,  pais, setPais}}>
            {children}
        </AddressContext.Provider>
      
    )
}

export default AddressProvider;