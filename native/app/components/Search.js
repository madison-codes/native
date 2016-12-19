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
  ListView,
  Linking
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

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
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

  fetchPosts() {
    const { posts, getPosts } = this.props;
    fetch(`${endPoint}posts/all?search[topic]=${this.state.searchTerm.toLowerCase()}`, {
      method: "GET",
      headers: {
        headerInfo,
        authorization: `Bearer ${this.state.credentials.access_token}`
      }
    })
    .then((res) => { return res.json(); })
    .then((response) => getPosts(response.posts))
    .catch((err) => { alert(err); })
  }

  loadPosts() {
    return this.props.posts.map((post, i) => {
      return(
        <View
          key={i}
          style={{width: 300, height: 50, borderColor: 'gray', borderWidth: 1}}
          >
            <Image
              style={{width: 50, height: 50, marginLeft: 10 }}
              source={{uri: `${post.thumbnail.image_url}`}}
            />
            <Text
              style={{width: 50, height: 50, marginLeft: 100 }}
            >
            { post.name }
            </Text>
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
          onPress={() => this.fetchPosts()}
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

export default postsContainer(
                userContainer(Search)
              )

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
