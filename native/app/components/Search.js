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
    };
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
    fetch(`${endPoint}posts/all?search[topic]=${this.state.searchTerm.toLowerCase()}`, {
      method: "GET",
      headers: {
        headerInfo,
        authorization: `Bearer ${this.state.credentials.access_token}`
      }
    })
    .then((res) => { return res.json(); })
    .then((response) => this.props.getPosts(response.posts))
    .then(this.setState({ searchTerm: ''}))
    .catch(() => { alert('Please try a different search term'); })
  }

  loadPosts() {
    return this.props.posts.toJS().map((post, i) => {
      return(
        <View
          key={i}
          style={{ height: 70 }}>
            <Image
              style={ styles.searchItemImg }
              source={{ uri: `${post.thumbnail.image_url}` }}/>
            <Text
              style={ styles.searchItemTitle}>
            { post.name }
            </Text>
        </View>
      )
    })
  }

  render() {
    return (
      <View style={ styles.searchMain }>
        <Text>Search for Products</Text>
        <TextInput
          style={ styles.searchInput }
          onChangeText={ (searchTerm) => this.setState({ searchTerm })}
          value={ this.state.searchTerm }
        />
        <Button
          onPress={ () => this.fetchPosts() }
          title='Get Posts'
        />
        <ScrollView style={ styles.ScrollView }>
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
  searchMain: {
    backgroundColor: '#fff',
    margin: 20,
    marginTop: 75,
  },
  searchInput: {
    height: 55,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#999999',
    marginTop: 10
  },
  postName: {
    width: 100,
    height: 100,
  },
  scrollView: {
    top: 20,
    height: 400
  },
  searchItemImg: {
    width: 50,
    height: 50,
    marginLeft: 10
  },
  searchItemTitle: {
    width: 300,
    height: 50,
    marginLeft: 70,
    marginTop: -35,
  }
});
