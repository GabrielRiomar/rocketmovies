import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
import { Container, Content } from "./styles";


export function New(){
  return(
    <Container>
      <Header/>
      <main>
        <Content>
          <ButtonText title ="Back"/>
          <h1>My Movie Reviews</h1>
          <Button title/>
          <div className="inputs">
            <Input placeholder="Title"/>
            <Input placeholder="Your score (between 0-5)"/>
          </div>
        </Content>
      </main>
    </Container>
  )
}