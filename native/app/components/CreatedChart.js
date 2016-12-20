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
     {this.props.posts.map(function(post, i) {
       if(post.maker_inside) {
         scoreColor = 'blue'
       } else {
         scoreColor = 'green'
       }
       return (
         <View style={styles.bookChart} key={i}>
          <Animated.View
            style={[{height: 20, backgroundColor:scoreColor}, styles.bar, styles.barRating]} />
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
  },
  barRating: {
  }
});
