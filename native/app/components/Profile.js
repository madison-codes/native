import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';

import userContainer from '../containers/userContainer';

class Profile extends Component{
  constructor (props) {
   super(props);
 }

 render() {
    return (
      <View style={ styles.container }>
        <Image style={ styles.avatar } source={{ uri: this.props.user.toJS().picture }} />
        <Text style={ styles.title }>{ this.props.user.toJS().name }</Text>
        <Text style={ styles.info }>{ this.props.user.toJS().email }</Text>
      </View>
    )
  }
}

export default userContainer(Profile)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 200,
  },
  title: {
    fontSize: 42,
    margin: 20,
    fontWeight: '300',
  },
  info: {
    fontSize: 18,
    margin: 20,
    fontWeight: '100',
  },
  avatar: {
    height: 150,
    width: 150,
    borderRadius: 75,
  }
});
