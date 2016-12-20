import React, { Component } from 'react';
import {
  AsyncStorage,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

import postsContainer from '../containers/postsContainer';
import VotesChart from './VotesChart';
import CommentsChart from './CommentsChart';
import CreatedChart from './CreatedChart';

class Visualization1 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={ styles.loginMain }>
        <Text style={ styles.font }>Votes</Text>
        <VotesChart posts={ this.props.posts } />
        <Text style={ styles.font }>Comments</Text>
        <CommentsChart posts={ this.props.posts } />
        <Text style={ styles.font }>Made by User</Text>
        <CreatedChart posts={ this.props.posts } />
      </View>
    )
  }
}

export default postsContainer(Visualization1)

const styles = StyleSheet.create({
  loginMain: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  font: {
    color: 'white',
    fontSize: 32
  },
  description: {
    color: 'white',
    fontSize: 16
  }
});
