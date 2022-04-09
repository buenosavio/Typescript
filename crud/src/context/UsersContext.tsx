import moment from "moment";
import { createContext, FC, ReactNode, useState } from "react"
import { useNavigate } from "react-router-dom";
import api from "../api";
import { UsersDTO } from "../model/UsersDTO";

export const UsersContext = createContext({})

const UsersProvider: FC<ReactNode> = ({children}) => {

    const navigate = useNavigate();

    const [error, setError] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    const [people, setPeople] = useState<UsersDTO[]>();
    const [button, setButton] = useState<string>('Cadastrar')

    const getPeople = async () => {
        try {
            const {data} = await api.get('/pessoa')
            console.log(data)
            setPeople(data)
            setLoading(false)      
        } catch (error) {
            setLoading(false)
            setError(true)
            console.log(error)
        }
    }

    const insertUser = async (values: UsersDTO) => {
        const newValues: UsersDTO = {
            nome: values.nome,
            dataNascimento: moment(values.dataNascimento, 'DD/MM/YYYY').format('YYYY-MM-DD'),
            cpf: values.cpf,
            email: values.email
        }
        try {
            await api.post('/pessoa', newValues)            
            navigate('/users')
            getPeople()
        } catch (error) {
            console.log(error)
        }
        
    }

    const showUser = (id: number) => {
        setButton('Atualizar')
        navigate('/user-add-atz')
    }

    const updateUser = (id: number) => {
        try {
            
        } catch (error) {
            
        }
        alert("atualizar")
    }


    
    const deleteUser = async (id: number) => {
        await api.delete(`/pessoa/${id}`) 
        getPeople()       
    }

    const registerUser = () => {
        setButton('Cadastrar')
        navigate('/user-add-atz')
    }

    return (
        <UsersContext.Provider value={{people, loading, error, getPeople, button, deleteUser, updateUser, registerUser, insertUser, showUser}}>
            {children}
        </UsersContext.Provider>
    )
}

export default UsersProvider;
