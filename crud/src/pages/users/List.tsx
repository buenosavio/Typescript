import moment from "moment";
// import { UsersDTO } from "../../model/UsersDTO"
// import { Card, TitleCard, TitlePage, ContainerCards, Text, ButtonAtz, ButtonDanger, Button, Inline } from "./List.Styles";

// const List  = (e: UsersDTO) => {
//     return(
//         <ContainerCards>
//             <Inline>
//                 <TitlePage>Usuários</TitlePage>
//                 <Button>Cadastrar Usuário</Button>
//             </Inline>
//             <TitleCard>
//                 <Text>Nome</Text>
//                 <Text>Nascimento</Text>
//                 <Text>CPF</Text>
//                 <Text>E-mail</Text>
//             </TitleCard>
//             {e.map(p =>
//             <Card key={p.idPessoa}>
//                 <Text>{p.nome}</Text>
//                 <Text>{moment(p.dataNascimento).format('DD/MM/YYYY')}</Text>
//                 <Text>{p.cpf ? p.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4") : null}</Text>
//                 <Text>{p.email}</Text>
//                 <ButtonAtz>Atualizar</ButtonAtz>
//                 <ButtonDanger>Deletar</ButtonDanger>
//             </Card>
//             )}
//         </ContainerCards>
//     )
// }

// export default List;