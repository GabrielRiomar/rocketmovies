import { Input } from "../Input";
import { Container, Profile, Search} from "./styles";
import { Link } from 'react-router-dom';

export function Header(){
  return(
    <Container>
      <h1>RocketMovies</h1>
      <Search>
        <Input placeholder="Search for title"/>
      </Search>
      <Profile to="/profile">
          <div>
            <strong>Gabriel Riomar</strong>
            <Link to="/">
              Leave
            </Link>
          </div>
          <img src="https://github.com/gabrielriomar.png" alt="Foto do usuario gabrielriomar" />
      </Profile>
    </Container>
  )
}