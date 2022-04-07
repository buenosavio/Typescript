import moment from "moment";
import { UsersDTO } from "../../model/UsersDTO"
import { Card, TitleCard, TitlePage, ContainerCards, Text } from "./List.Styles";

const List  = ({people}: UsersDTO) => {
    return(
        <ContainerCards>
            <TitlePage>Usuários</TitlePage>
            <TitleCard>
                <Text>Nome</Text>
                <Text>Nascimento</Text>
                <Text>CPF</Text>
                <Text>E-mail</Text>
            </TitleCard>
            {people.map(p =>
            <Card key={p.idPessoa}>
                <Text>{p.nome}</Text>
                <Text>{moment(p.dataNascimento).format('DD/MM/YYYY')}</Text>
                <Text>{p.cpf ? p.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4") : null}</Text>
                <Text>{p.email}</Text>
            </Card>
            )}
        </ContainerCards>
    )
}

export default List;