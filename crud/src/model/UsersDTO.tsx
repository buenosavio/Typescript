import {ContactListDTO} from './ContactListDTO'

export interface UsersDTO {
    people: {
        contatosList?: ContactListDTO;
        cpf?: string;
        dataNascimento?: string;
        email?: string;
        idPessoa?: number;
        nome?: string;
    }[]
}