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

export default class CommentsChart extends Component{
  constructor (props) {
   super(props);
 }

 render() {
   return (
     <View style={styles.postChart}>
     { this.props.posts.sort(function(a,b) {
       let aScore = a.comments_count
       let bScore = b.comments_count
       return aScore - bScore
     }).map(function(post, i) {
       let score = post.comments_count
       if(score >= 10) {
         scoreColor = '#40170A'
       }
       if(score > 5 && score < 10) {
         scoreColor = '#7F2E14'
       }
       if(score < 5) {
         scoreColor = '#E55223'
       }
       return (
         <View style={ styles.postChart } key={ i }>
          <Animated.View
            style={[{ height: score, backgroundColor:scoreColor }, styles.bar, styles.barRating]} />
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
  }
});
