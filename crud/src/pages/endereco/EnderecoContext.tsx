import {FC, ReactNode, createContext, useState } from "react";
import api from "../../api";
import { AddressPostDTO } from "../../model/AddressPostDTO"; 

export const EnderecoContext = createContext({})

const EnderecoProvider: FC<ReactNode> = ({children}) => {

  const [address, setAddress] = useState<AddressPostDTO[]>()

  const handleAddress = async () => {
    try {
      const {data} = await api.get('/endereco');
      setAddress(data)
    } catch (error) {
      console.log(error)
    }
  }
    const teste = ' ----->>>>>>>>>>>>>>>>socorro'
    return(
        
        <EnderecoContext.Provider value={{teste}}>
            {children}
        </EnderecoContext.Provider>
    )
}

export default EnderecoProvider;