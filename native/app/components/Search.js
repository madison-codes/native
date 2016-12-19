import React, { Component } from 'react';
import {
  AsyncStorage,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Button,
  ScrollView,
} from 'react-native';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      credentials: {}
    }
  }

  authenticate() {
    console.log('called');
    fetch('https://api.producthunt.com/v1/oauth/token', {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        host: "api.producthunt.com"
      },
      body: JSON.stringify({
        client_id: "76818cdee518ea2e11a731872d29fd98cdda7df202d8a6ab39ec01364b480885",
        client_secret: "817c7d4e863a80918f77691530fe6cf8cf0a6d980bbd01a3d3971cdcafc8ce97",
        grant_type: "client_credentials",
      })
    })
    .then((res) => {
      return res.json()
    })
    .then((response) => {
      this.setState({credentials: response})
    })
    .catch((err) => { console.log(err) })
  }

  getPosts() {
    fetch('https://api.producthunt.com/v1/posts', {
      method: "GET",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        authorization: `Bearer ${this.state.credentials.access_token}`,
        host: "api.producthunt.com"
      }
    })
    .then((res) => {
      return res.json()
    })
    .then((response) => {
      this.setState({posts: response.posts})
    })
    .catch((err) => { console.log(err) })
  }

  loadPosts() {
    return this.state.posts.map((post, i) => {
      return(
        <Text key={i}>{post.name}</Text>
      )
    })
  }

  render() {
    return (
      <View style={ styles.loginMain }>
        <Text>Search</Text>
        <Button
          onPress={() => this.authenticate()}
          title='Authenticate'
          color='blue'
        />
        <Button
          onPress={() => this.getPosts()}
          title='Get Posts'
          color='blue'
        />
        {this.loadPosts()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  loginMain: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink'
  }
});
