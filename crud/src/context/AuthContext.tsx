import { LoginDTO } from "../model/LoginDTO";
import { createContext, FC, useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({})

const AuthProvider: FC<any> = ({ children }) => {
    
    const navigate = useNavigate();
    
    const [loginOk, setLogin] = useState(false); 

    const handleLogin = async (user: LoginDTO) => {
        try {
          const {data} = await api.post('/auth', user);
          console.log('=> ', data)
          setLogin(true)
          localStorage.setItem('token', data)
          navigate('/')          
        } catch (error) {
           alert('login inválido')
            console.log(error)
        }
    }
    return (
        <AuthContext.Provider value={{handleLogin}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;