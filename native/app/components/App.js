import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight
} from 'react-native';

import Login from './Login';
import Profile from './Profile';
import Search from './Search';
import Visualization1 from './Visualization1';

const routes = [
  { component: Login, title: 'Login'},
  { component: Search, title:  'Search'},
  { component: Visualization1, title: 'Visualization1'},
  { component: Profile, title: 'Profile'}
];

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
        <Navigator style={styles.navigator}
          initialRoute={ routes[0] }
          initialRouteStack={ routes }
          renderScene={ (route, navigator) => {
            let RouteComponent = route.component;
            return (
              <RouteComponent {...route} navigator={ navigator } />
            )
          }}
          navigationBar={
             <Navigator.NavigationBar
               style={ styles.nav }
               routeMapper={ NavigationBarRouteMapper } />
             }
        />
    );
  }
}

var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    if(index > 0) {
      return (
        <TouchableHighlight onPress={ () => navigator.pop() }>
          <Text style={ styles.prevButton }>Prev</Text>
        </TouchableHighlight>
      )
    }
    else { return null }
  },

  RightButton(route, navigator, index, navState) {
    if(index > 0 && index < 3) {
      return (
        <TouchableHighlight onPress={ () => navigator.push(routes[index + 1]) }>
          <Text style={ styles.nextButton }>Next</Text>
        </TouchableHighlight>
      )
    }
    else { return null }
  },

  Title(route, navigator, index, navState) {
    return <Text style={ styles.navTitle }>Native Hunt</Text>
  }
};

const styles = StyleSheet.create({
  navigator: {
    flex: 1,
  },
  navTitle: {
    marginTop:4,
    fontSize:16,
  },
  prevButton: {
   	fontSize: 16,
    marginLeft:15,
    marginTop:2,
  },
  nextButton: {
    fontSize: 16,
    marginRight:15,
    marginTop:2,
  },
  nav: {
    height: 50,
    backgroundColor: '#4285F4',
  }
});
