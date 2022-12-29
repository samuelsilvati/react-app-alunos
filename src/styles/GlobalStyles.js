import styled, { createGlobalStyle } from 'styled-components';
import {
  primaryColor,
  primaryDarkColor,
  errorColor,
  successColor,
} from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
*{
  margin: 0; padding: 0;
  outline: none;
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  background: ${primaryDarkColor};
  color: ${primaryColor};
}

html, border-style, #root {
  height: 100%;
}

button {
  cursor: pointer;
  background-color: ${primaryColor};
  padding: 10px 20px;
  border-radius: 4px;
  font-weight: 700;
}

a {
  text-decoration: none;
  color :${primaryColor} ;
}

ul {
  list-style: none;
}

body .Toastify .Toastify__toast-container .Toastify__toast--success {
  background-color: ${successColor};
  color: #fff;
}

body .Toastify .Toastify__toast-container .Toastify__toast--error {
  background-color: ${errorColor};
  color: #fff;
}
`;

export const Container = styled.section`
  max-width: 360px;
  background: #fff;
  margin: 30px auto;
  padding: 30px;
  border-radius: 4px;
  color: #000;
`;
