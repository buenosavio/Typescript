import { LoginDTO } from "../model/LoginDTO";
import { createContext, FC, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import IsLogged from "../components/IsLogged";
import api from "../api";

export const AuthContext = createContext({})

const AuthProvider: FC<ReactNode> = ({ children }) => {
    
    const [loadingLogin, setLoadingLogin] = useState<boolean>(false);
    const [isToken, setIsToken] = useState(false);
    
    const navigate = useNavigate();

    useEffect(() => {
        if(IsLogged()) {
            setIsToken(true);   
        } else {
            navigate('/login')
        }
    },[]);

    const handleLogin = async (values: LoginDTO) => {
        try {
          const {data} = await api.post('/auth', values);
          localStorage.setItem('token', data)            
          setIsToken(true)
          api.defaults.headers.common['Authorization'] = data;
          navigate('/')          
        } catch (error) {
          Notify.failure('Login inválido!');    
        }
    }

    const handleLogout = () => {        
        navigate('/login')
        localStorage.removeItem('token')
        setIsToken(false)
    }

    return (
        <AuthContext.Provider value={{handleLogin, isToken, handleLogout, loadingLogin, setLoadingLogin}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;