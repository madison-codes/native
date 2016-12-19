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

import { client_id, client_secret, grant_type } from '../../env.json';

const headerInfo = {
  accept: "application/json",
  "content-type": "application/json",
  host: "api.producthunt.com"
};

let endPoint = "https://api.producthunt.com/v1/";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      credentials: {}
    }
  }

  authenticate() {
    fetch(`${endPoint}oauth/token`, {
      method: "POST",
      headers: headerInfo,
      body: JSON.stringify({
        client_id: client_id,
        client_secret: client_secret,
        grant_type: grant_type,
      })
    })
    .then((res) => { return res.json(); })
    .then((response) => { this.setState({ credentials: response }); })
    .catch((err) => { alert(err); })
  }

  getPosts() {
    fetch(`${endPoint}posts`, {
      method: "GET",
      headers: {
        headerInfo,
        authorization: `Bearer ${this.state.credentials.access_token}`
      }
    })
    .then((res) => { return res.json(); })
    .then((response) => { this.setState({ posts: response.posts }); })
    .catch((err) => { alert(err); })
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
