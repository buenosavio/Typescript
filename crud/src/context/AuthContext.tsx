import { LoginDTO } from "../model/LoginDTO";
import { createContext, FC, ReactNode, useEffect, useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import IsLogged from "../components/IsLogged";

export const AuthContext = createContext({})

const AuthProvider: FC<ReactNode> = ({ children }) => {
    
    const [loginOk, setLogin] = useState(false); 
    const [loading, setLoading] = useState<boolean>(true);
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
          console.log('=> ', data)
          setLogin(true)
          localStorage.setItem('token', data)
          api.defaults.headers.common['authorization'] = data;
          setLoading(false);
          setIsToken(true)
          navigate('/')          
        } catch (error) {
           alert('login inválido')
           console.log(error)
        }
    }

    const handleLogout = () => {        
        navigate('/login')
        localStorage.removeItem('token')
        setIsToken(false)
    }

    if (loading) {
        // return <Loading/>
    }
   
    return (
        <AuthContext.Provider value={{handleLogin, isToken, handleLogout, loading, setLoading}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;