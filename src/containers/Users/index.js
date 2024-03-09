import React, { useState, useEffect } from "react"
import axios from "axios"
import { Container,  IMG, Button, User } from "./styles"
import Avatar from "../../assets/avatar.svg"
import Arrow from "../../assets/Arrow.svg"
import Trash from "../../assets/trash.svg"
import {useNavigate} from "react-router-dom"
import H1 from "../../components/title"
import ContainerItens from "../../components/ContainerItens"
// JSX - MISTURA DE HTML COM JAVASCRIPT

function Users() {
  // const users = [];
  // REACT HOOKS => Ferramentas auxiliares!
  const [users, setUsers] = useState([])  // aqui inicia com o valor 
  const navigate = useNavigate()
  

  


  // Um estado de react é IMUTAVEL!!!!!!






// react hook => useEffect => Efeito colateral
// a minha aplicacao inicial , pagina carregou , useEffect é chamado
// quando um estado que esta no array de dependencia do useEffect é alterado
  useEffect(() =>{
   async function fetchUsers (){
    const {data : newUsers} = await axios.get("http://localhost:3001/users")

    setUsers(newUsers)
   }
  
   fetchUsers()
  }, [])




  async function deleteUser (userId) {  
    await axios.delete(`http://localhost:3001/users/${userId}`)
    const newUsers = users.filter( users => users.id !== userId)
    setUsers(newUsers)
  
  }

  function goBackPage(){
    navigate("/")
  }

  // ESTADO  => Variavel

 

  return <Container>
    <IMG alt="logo img" src={Avatar} ></IMG>
    <ContainerItens isBlur={true}>
      <H1>Usuários</H1>


      


      <ul>
        {users.map(user => (

          <User key={user.id}>
            <p>{user.name}</p> <p>{user.age}</p>
            <button onClick={ ()=> deleteUser(user.id)}>
              <img alt="trash" src={Trash} />
              </button>
          </User>
        ))


        }

      </ul>
      <Button onClick={goBackPage} > <img alt="seta" src={Arrow} /> Voltar</Button>

    </ContainerItens>


  </Container>
}

export default Users;