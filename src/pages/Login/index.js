// import React from 'react';
import { useDispatch } from 'react-redux';
import { Container } from '../../styles/GlobalStyles';
import { Title } from './styled';
import * as exampleActions from '../../store/modules/example/actions';

// import axios from '../../services/axios';

export default function Login() {
  // React.useEffect(() => {
  //   async function getData() {
  //     const response = await axios.get('/alunos');
  //     console.log(response.data);
  //   }
  //   getData();
  // }, []);
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    dispatch(exampleActions.clicaBotaoRequest());
  }
  return (
    <Container>
      <Title>
        <h1>Login</h1>
      </Title>
      <p>Hello World!</p>
      <a href="/">outline</a>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
