import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import ReduxDevTools from "./ReduxDevTools";
import Reducers from './reducers';

const enhancer = compose(applyMiddleware(ReduxThunk), ReduxDevTools);
const store = createStore(Reducers, enhancer);

const ReduxProvider = function({ children }) {
  return (
    <Provider store={ store }>
      { children }
    </Provider>
  );
};

export default ReduxProvider;
