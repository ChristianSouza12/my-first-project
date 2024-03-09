import React, { useState, useRef  } from "react"
import axios from "axios"
import { Container, IMG, Input, InputLabel, Button} from "./styles"
import People from "../../assets/people.svg"
import Arrow from "../../assets/Arrow.svg"
import { useNavigate } from "react-router-dom"
import H1 from "../../components/title"
import ContainerItens from "../../components/ContainerItens"
// JSX - MISTURA DE HTML COM JAVASCRIPT

function App() {
  // const users = [];
  // REACT HOOKS => Ferramentas auxiliares!
  const [users, setUsers] = useState([])  // aqui inicia com o valor 
  const inputName = useRef()
  const inputAge = useRef()
  const navigate = useNavigate()

  // Um estado de react é IMUTAVEL!!!!!!




  async function addNewUser() {
    const {data : newUser} = await axios.post("http://localhost:3001/users" , {name:inputName.current.value  ,age:inputAge.current.value })
    
    
    setUsers([...users, newUser])


    navigate("/usuarios")
   

    
    
  }

// react hook => useEffect => Efeito colateral
// a minha aplicacao inicial , pagina carregou , useEffect é chamado
// quando um estado que esta no array de dependencia do useEffect é alterado







  // ESTADO  => Variavel
  // PROPS = propriedades


  return <Container>
    <IMG alt="logo img" src={People} ></IMG>
    <ContainerItens>
      <H1>Olá!</H1>
      <InputLabel>Nome</InputLabel>
      <Input ref={inputName} type="text" placeholder="Nome"></Input>
      <InputLabel>Idade</InputLabel>
      <Input ref={inputAge} type="number" placeholder="Idade"></Input>

      <Button   onClick={addNewUser}>Cadastrar <img alt="seta" src={Arrow} /></Button>

      


      

    </ContainerItens>


  </Container>
}

export default App;