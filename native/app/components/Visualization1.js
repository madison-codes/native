import React, { Component } from 'react';
import {
  AsyncStorage,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  ScrollView
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
        <ScrollView style={ styles.scroll }>
          <Text style={ styles.font }>Made by User</Text>
          <CreatedChart
          posts={ this.props.posts }
          style={ styles.chart }
          />
          <Text style={ styles.font }>Comments</Text>
          <CommentsChart
            posts={ this.props.posts }
            style={ styles.chart }
          />
          <Text style={ styles.font }>Votes</Text>
          <VotesChart
          posts={ this.props.posts }
          style={ styles.chart }
          />
        </ScrollView>
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
    backgroundColor: 'white'
  },
  font: {
    color: '#000',
    fontSize: 32,
    marginTop: 50,
  },
  scroll: {
    marginTop: 50
  }
});
