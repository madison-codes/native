import React, { Component } from 'react';
import {
  AsyncStorage,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

import Auth0Lock from 'react-native-lock';
import userContainer from '../containers/userContainer';
var credentials = require('../../authO');
var lock = new Auth0Lock(credentials);

export default class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <TouchableHighlight
        onPress = { this.onLogin.bind(this) }>
          <Text>LOGIN</Text>
        </TouchableHighlight>
      </View>
    )
  }

  onLogin() {
    const { getUser } = this.props

    lock.show({
      }, (err, profile, token) => {
        if (err) {
          console.log(err);
          return;
        }
        this.props.navigator.push({
          title: 'Search for products',
          token: token
        })
        getUser(profile)
    })
  }
}

export default userContainer(Login);
