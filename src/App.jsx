import React, { Fragment, useReducer } from 'react';
import axios from 'axios';
import { Header, Main } from './components';

const API = 'http://localhost:8080/api/v1/car-info/';
const initialState = {
  data: {},
  error: null
};

const reducer = (state, { type, payload, error }) => {
  switch (type) {
    case 'SEARCH_SUCCESS':
      return {
        ...state,
        data: payload,
        error: null
      };
    case 'SEARCH_FAILURE':
      return {
        ...state,
        error
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSearch = id => {
    axios
      .get(`${API}${id}`)
      .then(({ data }) =>
        dispatch({
          type: 'SEARCH_SUCCESS',
          payload: data.result
        })
      )
      .catch(({ response }) =>
        dispatch({ type: 'SEARCH_FAILURE', error: response.statusText })
      );
  };

  return (
    <Fragment>
      <Header search={handleSearch} error={state.error} />
      <Main {...state.data} />
    </Fragment>
  );
};
export default App;
