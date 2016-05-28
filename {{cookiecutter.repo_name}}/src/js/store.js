import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducer.js';
import createLogger from 'redux-logger';

export default function configureStore(initialState) {
  return createStore(reducer, initialState, applyMiddleware(thunkMiddleware, createLogger()));
}

