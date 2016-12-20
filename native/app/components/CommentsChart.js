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

export default class RatingChart extends Component{
  constructor (props) {
   super(props)
   this.state = {
   }
 }

 render() {
   const {books} = this.props
   return (
     <View style={styles.bookChart}>
     {this.props.posts.sort(function(a,b) {
       let aScore = a.comments_count
       let bScore = b.comments_count
       return aScore - bScore
     }).map(function(post, i) {
       let score = post.comments_count
       if(score >= 25) {
         scoreColor = 'blue'
       }
       if(score > 20 && score < 25) {
         scoreColor = 'green'
       }
       if(score > 15 && score < 20) {
         scoreColor = 'yellow'
       }
       if(score > 10 && score < 15) {
         scoreColor = 'orange'
       }
       if(score < 10) {
         scoreColor = '#E55223'
       }
       return (
         <View style={styles.bookChart} key={i}>
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
  bookChart: {
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
