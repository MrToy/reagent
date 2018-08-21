import React, { Component } from 'react';
import Routes from './src/routes';
import SplashScreen from 'react-native-splash-screen'
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';


class App extends Component {
    componentDidMount() {
      SplashScreen.hide()
    }
    render() {
      return (
        <Routes />
      )
    }
  }

AppRegistry.registerComponent(appName, () => App);
