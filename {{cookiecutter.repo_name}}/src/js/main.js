import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux'

import configureStore from './store'
import Application from './containers/Application'

class Root extends React.Component {
  constructor() {
    super();
    this.store = configureStore()
  }
  render() {
    return (
      <Provider store={this.store}>
        <Application/>
      </Provider>
    );
  }
}

let element = document.getElementById("main");
ReactDOM.render(<Root/>, element)
