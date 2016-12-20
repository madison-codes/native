import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Alert,
  TextInput,
  Animated
} from 'react-native';

import { Bar } from 'react-native-pathjs-charts';

class VotesChart extends Component {
  constructor(props){
    super(props);
    this.state = {
      toRender: []
    };
  }

  filterData(){
    const { posts } = this.props;
      (this.props.posts).map((post) => {
        this.state.toRender.push([{
        id: post.id,
        votes: post.votes_count
      }]);
    });
  }

 render(){
  let options = {
    width: 300,
    height: 300,
    margin: {
      top: 100,
      left: 25,
      bottom: 50,
      right: 20
    },
    color: '#2980B9',
    gutter: 20,
    animate: {
      type: 'oneByOne',
      duration: 200,
      fillTransition: 3
    },
    axisX: {
      showAxis: true,
      showLines: true,
      showLabels: true,
      showTicks: true,
      zeroAxis: false,
      orient: 'bottom',
      label: {
        fontFamily: 'Arial',
        fontSize: 8,
        fontWeight: true,
        fill: '#34495E'
      }
    },
    axisY: {
      showAxis: true,
      showLines: true,
      showLabels: true,
      showTicks: true,
      zeroAxis: false,
      orient: 'left',
      label: {
        fontFamily: 'Arial',
        fontSize: 8,
        fontWeight: true,
        fill: '#34495E'
      }
    }
  };

  return(
    <View>
      <Bar
        data={ this.props.posts.map(post => {
              return [[{ "id": post.id, "votes": post.votes_count }]];
            })
          }
        options={ options }
        accessorKey= 'id'
      />
    </View>
  )
 }
}

export default VotesChart;
