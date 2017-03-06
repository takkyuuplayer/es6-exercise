import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import reducer from '../reducers';

class LocalStateApp extends React.Component {
  constructor() {
    super();

    this.store = createStore(reducer);
  }
  render() {
    return (
      <Provider store={this.store}>
        <App />
      </Provider>
    );
  }
}

export default LocalStateApp;
