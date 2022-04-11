import {FC, ReactNode, createContext, useState } from "react";
import { AddressPostDTO } from "../model/AddressPostDTO";
import { AddressGetDTO } from "../model/AddressGetDTO";
import { useNavigate } from "react-router-dom";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';
import api from "../api";

export const AddressContext = createContext({})

const AddressProvider: FC<ReactNode> = ({children}) => {
  
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [address, setAddress] = useState<AddressPostDTO[]>()
  const [button, setButton] = useState<string>('Cadastrar')
  const [idEndereco, setIdEndereco] = useState<number>()
  const [toUpdated, setToUpdated] = useState<AddressPostDTO[]>();

  const navigate = useNavigate();

  const handleAddress = async () => {
    try {
      const {data} = await api.get('/endereco');
      setAddress(data)
      setError(false)
      setLoading(false)
      console.log(data)
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
    const toUpdate: any = address?.find(e => e.idEndereco == id)
    setToUpdated(toUpdate)
    navigate('/atz-add')
    setButton('Atualizar')
    setIdEndereco(toUpdate?.idEndereco)
  }

  const updateAddress = async (values: AddressGetDTO, setFieldValues: any) => {
    const updatedAddress = {
      cep: values.cep.replaceAll('.','').replaceAll('-',''),
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
    handleAddress()
    setFieldValues('cep','')
    setFieldValues("tipo", '')
    setFieldValues("logradouro", '')
    setFieldValues("numero", '')
    setFieldValues("complemento", '')
    setFieldValues("bairro", '')
    setFieldValues("localidade", '')
    setFieldValues("uf", '')
    setFieldValues("pais", '')
  }

  const saveAddress = async (values: AddressGetDTO) => {  
    const address: AddressPostDTO = {      
      tipo: values.tipo,
      logradouro: values.logradouro,
      numero: values.numero,
      complemento: values.complemento,
      cep: values.cep.replaceAll('.','').replaceAll('-',''),
      cidade: values.localidade,
      estado: values.uf,
      pais: values.pais
    } 
    try {
      await api.post('/endereco/826', address)
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
    setToUpdated(undefined)
  }

    return(
      
        <AddressContext.Provider value={{idEndereco, setIdEndereco, toUpdated, setToUpdated, error, loading, handleAddress, address, setAddress, deleteAddress, updateAddress, loadAddress, saveAddress, button, setButton, registerAddress}}>
            {children}
        </AddressContext.Provider>
      
    )
}

export default AddressProvider;