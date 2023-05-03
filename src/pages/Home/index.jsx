import { Container, Content } from "./styles"
import { FiPlus, FiSearch } from "react-icons/fi"
import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input"
import { Note } from "../../components/Note"

export function Home(){
  return(
    <Container>
      <Header>

      </Header>

      <Content>
        <h1>My Movies</h1>
          <Note data={{
            title: 'React',
            tags:[
              {id:'1', name: 'react'},
              {id:'2', name: 'rocketseat'}
            ]
            }}/>
      </Content>

      {/* <NewNote to="/new">
        <FiPlus/>
        Create Note
      </NewNote> */}


    </Container>
  )

}