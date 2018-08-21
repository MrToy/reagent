import React, { Component } from 'react';
import Routes from './src/routes';
import SplashScreen from 'react-native-splash-screen'
// console.disableYellowBox = true;
export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide()
  }
  render() {
    return (
      <Routes />
    )
  }
}