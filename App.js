import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'; //middleware
import firebase from 'firebase';
import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm';
import Router from './src/Router';


class App extends Component {
  componentWillMount(){
    const config = {
      apiKey: 'AIzaSyDjKj64KkiczRgvxiQsFHR71hx0X3zvKAM',
      authDomain: 'manager-a139d.firebaseapp.com',
      databaseURL: 'https://manager-a139d.firebaseio.com',
      projectId: 'manager-a139d',
      storageBucket: 'manager-a139d.appspot.com',
      messagingSenderId: '896012045856'
    };
    firebase.initializeApp(config);
  
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;