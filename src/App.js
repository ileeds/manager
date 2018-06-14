import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCOPW0rZ3Dy0xPXIrHUCXmavLCQH6xPqFg',
      authDomain: 'manager-d1fb0.firebaseapp.com',
      databaseURL: 'https://manager-d1fb0.firebaseio.com',
      projectId: 'manager-d1fb0',
      storageBucket: 'manager-d1fb0.appspot.com',
      messagingSenderId: '321348034753'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
