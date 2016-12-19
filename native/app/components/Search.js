import React, { Component } from 'react';
import connect from 'react-redux';
import {
  AsyncStorage,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Button,
  ScrollView,
  TextInput,
  Image,
  WebView,
  ListView
} from 'react-native';

import { client_id, client_secret, grant_type } from '../../env.json';
let endPoint = "https://api.producthunt.com/v1/";
const headerInfo = {
  accept: "application/json",
  "content-type": "application/json",
  host: "api.producthunt.com"
};

import postsContainer from '../containers/postsContainer';
import userContainer from '../containers/userContainer';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      posts: [],
      credentials: {}
    }
  }

  componentWillMount(){
    this.authenticate();
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
    fetch(`${endPoint}posts/all?search[topic]=${this.state.searchTerm.toLowerCase()}`, {
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
        <View key={i}>
          <Image source={{uri: post.thumbnail.image_url}} />
          <Text>{ post.name }</Text>
          <Text>{ post.tagline }</Text>
        </View>
      )
    })
  }

  render() {
    return (
      <View style={ styles.loginMain }>
        <Text>Search</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(searchTerm) => this.setState({searchTerm})}
          value={this.state.searchTerm}
        />
        <Button
          onPress={() => this.getPosts()}
          title='Get Posts'
          color='blue'
        />
        <ScrollView style={styles.ScrollView}>
          { this.loadPosts() }
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  loginMain: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'pink',
    margin: 20,
  },
  postName: {
    width: 100,
    height: 100,
  },
  scrollView: {
    top: 20,
    backgroundColor: 'purple',
    height: 400
  }
});
