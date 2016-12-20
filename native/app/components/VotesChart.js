import React, { Component } from 'react'

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Alert,
  TextInput,
  ScrollView,
  Switch,
  Animated,
  Easing
} from 'react-native'

export default class VotesChart extends Component{
  constructor (props) {
   super(props)
 }

 render() {
   return (
     <View style={styles.postChart}>
     {this.props.posts.sort(function(a,b) {
       let aScore = a.votes_count
       let bScore = b.votes_count
       return aScore - bScore
     }).map(function(post, i) {
       let score = post.votes_count
       if(score >= 100) {
         scoreColor = '#E55223'
       }
       if(score > 75 && score < 100) {
         scoreColor = '#004E64'
       }
       if(score > 50 && score < 75) {
         scoreColor = '#25A18E'
       }
       if(score > 25 && score < 50) {
         scoreColor = '#7F2E14'
       }
       if(score < 25) {
         scoreColor = '#40170A'
       }
       return (
         <View style={styles.postChart} key={i}>
          <Animated.View
            style={[{height: score, backgroundColor:scoreColor}, styles.bar, styles.barRating]} />
         </View>
       )}
     )}
     </View>
   )
 }
}

const styles = StyleSheet.create({
  postChart: {
    top: 10,
    height: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 1,
  },
  bar: {
    width: 4,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginLeft: 1,
  },
  barRating: {
  }
});
