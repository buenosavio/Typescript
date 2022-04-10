import { LoginDTO } from "../model/LoginDTO";
import { createContext, FC, ReactNode, useEffect, useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import IsLogged from "../components/IsLogged";
import Loading from "../components/loading/Loading";

export const AuthContext = createContext({})

const AuthProvider: FC<ReactNode> = ({ children }) => {
    
    const [loginOk, setLogin] = useState(false); 
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
          console.log('=> ', data)
          setLogin(true)
          localStorage.setItem('token', data)
          api.defaults.headers.common['authorization'] = data;
          setLoadingLogin(true);
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

    if (loadingLogin) {
        // return <Loading />
    }
   
    return (
        <AuthContext.Provider value={{handleLogin, isToken, handleLogout, loadingLogin, setLoadingLogin}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;