import React, { Component } from 'react';
import {
  AsyncStorage,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

export default class Visualization1 extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.loginMain}>
        <Text >Visualization1</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  loginMain: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red'
  }
});
