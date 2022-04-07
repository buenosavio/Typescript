export interface ContactListDTO {
    contatosList: {
        descricao?:string;
        idContato?: number;
        idPessoa?: number;
        numero?: string;
        tipoContato?: string;
    }[] 
}