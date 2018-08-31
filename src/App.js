import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen';
import Routes from './routes';
import { AuthProvider } from './lib/User'

export default class App extends Component {
    componentDidMount() {
        SplashScreen.hide()
    }
    render() {
        return (
            <AuthProvider>
                <Routes />
            </AuthProvider>
        )
    }
}

