import * as types from '../types';

const initialState = {
  clicado: false,
};

// eslint-disable-next-line default-param-last, func-names
export default function (state = initialState, action) {
  switch (action.type) {
    case types.BOTAO_CLICADO_SUCCESS: {
      console.log('SUCESSO');

      const newState = { ...state };
      newState.clicado = !newState.clicado;
      return newState;
    }
    case types.BOTAO_CLICADO_FAILURE: {
      console.log('ERROR');
      return state;
    }
    case types.BOTAO_CLICADO_REQUEST: {
      console.log('Estou fazendo a request');
      return state;
    }

    default: {
      return state;
    }
  }
}
