import moment from "moment";
import { createContext, FC, ReactNode, useState } from "react"
import { useNavigate } from "react-router-dom";
import api from "../api";
import { UsersDTO } from "../model/UsersDTO";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';

export const UsersContext = createContext({})

const UsersProvider: FC<ReactNode> = ({children}) => {

    const navigate = useNavigate();

    const [error, setError] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    const [people, setPeople] = useState<UsersDTO[]>();
    const [button, setButton] = useState<string>('Cadastrar');
    const [idPessoa, setIdPessoa] = useState<number>();
    const [toUpdated, setToUpdated] = useState<UsersDTO[]>()

    const getPeople = async () => {
        try {
            const {data} = await api.get('/pessoa')
            console.log(data)
            setPeople(data)
            setError(false)
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
            cpf: values.cpf?.replaceAll('.','').replaceAll('-',''),
            email: values.email
        }
        try {
            await api.post('/pessoa', newValues)            
            navigate('/users')
            Notify.success('Pessoa Cadastrada!');
            getPeople()
        } catch (error) {
            Notify.failure('Erro ao Cadastrar!');
        }
        
    }

    const showUser = (id: number) => {
        const toUpdate: any = people?.find(e => (e.idPessoa == id))
        console.log(toUpdate)
        setIdPessoa(toUpdate?.idPessoa)
        setToUpdated(toUpdate)
        setButton('Atualizar')
        navigate('/user-add-atz')
    }

    const updateUser = (values: UsersDTO) => {
        const newValues: UsersDTO = {
            nome: values.nome,
            dataNascimento: moment(values.dataNascimento, 'DD/MM/YYYY').format('YYYY-MM-DD'),
            cpf: values.cpf?.replaceAll('.','').replaceAll('-',''),
            email: values.email
        }
        try {
            api.put(`/pessoa/${idPessoa}`, newValues)
            navigate('/users')
            Notify.success('Pessoa Atualizada!');
            getPeople()
        } catch (error) {
            Notify.failure('Erro ao atualizar!');
        }
    }
    
    const deleteUser = async (id: number) => {
        Confirm.show(
            'ATENÇÃO',
            'Deseja excluir?',
            'Sim',
            'Não',
            async () => {
                try {
                await api.delete(`/pessoa/${id}`) 
                getPeople() 
              } catch (error) {
                console.log(error)
              }
            },
            () => {
              return;
            },
            );                            
    }

    const registerUser = () => {
        setButton('Cadastrar')
        navigate('/user-add-atz')
        setIdPessoa(undefined)
        setToUpdated(undefined)
    }

    return (
        <UsersContext.Provider value={{toUpdated,  people, loading, error, getPeople, button, deleteUser, updateUser, registerUser, insertUser, showUser}}>
            {children}
        </UsersContext.Provider>
    )
}

export default UsersProvider;
