import React, { Component } from 'react';
import {
  AsyncStorage,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

import userContainer from '../containers/userContainer'
import Search from './Search'
import Auth0Lock from 'react-native-lock';
var lock = new Auth0Lock({
  clientId: 'ZZg7eXSjppAb8SaO3vwHc2MOqLpnUYl5',
  domain: 'bcgodfrey91.auth0.com'
});
import grabDataContainer from '../containers/grabDataContainer';

class Login extends Component {
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
        getUser(profile)
        this.props.navigator.push({
          title: 'Search for Products',
          token: token
        })
    })
  }
}

export default userContainer(Login);
