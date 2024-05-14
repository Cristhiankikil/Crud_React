import React from "react";
import axios from "axios"; // Importando a biblioteca axios para fazer requisições HTTP
import styled from "styled-components"; // Importando styled-components para estilizar os componentes
import { FaTrash, FaEdit } from "react-icons/fa"; // Importando ícones de lixeira e edição da biblioteca react-icons
import { toast } from "react-toastify"; // Importando notificações de toast da biblioteca react-toastify

// Componente estilizado para a tabela
const Table = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 1120px;
  margin: 20px auto;
  word-break: break-all;
`;

// Componentes estilizados para os elementos da tabela
export const Thead = styled.thead``;
export const Tbody = styled.tbody``;
export const Tr = styled.tr``;
export const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;
export const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width : "auto")};

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

// Componente de Grade
const Grid = ({ users, setUsers, setOnEdit }) => {
  // Função para lidar com a ação de edição
  const handleEdit = (item) => {
    setOnEdit(item); // Define o item para edição
  };

  // Função para lidar com a ação de exclusão
  const handleDelete = async (id) => {
    try {
      // Realiza uma requisição DELETE para o servidor para excluir o usuário com o ID especificado
      const response = await axios.delete("http://127.0.0.1:3001/" + id);
      
      // Filtra o usuário excluído do array de usuários
      const newArray = users.filter((user) => user.id !== id);

      // Atualiza o estado de usuários com o novo array
      setUsers(newArray);

      // Exibe uma notificação de toast de sucesso
      toast.success(response.data);
    } catch (error) {
      // Exibe uma notificação de toast de erro se houver um erro
      toast.error(error.response.data);
    }

    // Reseta o estado de edição
    setOnEdit(null);
  };

  return (

    <Table>
      {/* Cabeçalho da Tabela */}
      <Thead>
        <Tr>
          <Th>Nome</Th>
          <Th>Email</Th>
          <Th>Telefone</Th>
          <Th>Endereço</Th>
        </Tr>
      </Thead>
      {/* Corpo da Tabela */}
      <Tbody>
      {/* Verifica se a lista de usuários não está vazia antes de mapear e renderizar */}
      {users.length > 0 ? (
      /* Mapeia cada usuário e renderiza seus detalhes */
      users.map((item, i) => (
      <Tr key={i}>
        <Td width="20%">{item.nome}</Td>
        <Td width="30%">{item.email}</Td>
        <Td width="20%">{item.telefone}</Td>
        <Td width="30%">{item.endereco}</Td>
        {/* Ícone de edição com manipulador de evento onClick para acionar a função handleEdit */}
        <Td alignCenter width="5%">
          <FaEdit onClick={() => handleEdit(item)} />
        </Td>
        {/* Ícone de lixeira com manipulador de evento onClick para acionar a função handleDelete */}
        <Td alignCenter width="5%">
          <FaTrash onClick={() => handleDelete(item.id)} />
        </Td>
      </Tr>
     ))
      /**/
      ) : (
      /* Se a lista de usuários estiver vazia, exibe uma mensagem */
      <Tr>
        <Td colSpan="4">Nenhum usuário encontrado</Td>
      </Tr>
  )}
</Tbody>
    </Table>
  );
};

export default Grid; // Exporta o componente Grid como padrão
