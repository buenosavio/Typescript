import { Key, ReactChild, ReactFragment, ReactPortal, useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { EnderecoContext } from './EnderecoContext'
function Address() {

  const navigate = useNavigate();

  const {teste} = useContext<any>(EnderecoContext)
//   const {address, setAddress} = useContext<any>(EnderecoContext)

  // const deleteAddress = async (id: number | undefined) => {
  //   try {
  //     await api.delete(`/endereco/${id}`)
  //     handleAddress()

  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  useEffect(() => {
    
  },[])

  // const updateAddress = (id: number | undefined) => {
  //   alert(`eiiii... ${id}`)
  // }

  return (
    <h1> aaaaaaaaaaaaaaaaaaaaaaaaaaa {teste}</h1>
  )
}

export default Address