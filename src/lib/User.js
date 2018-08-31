import React from 'react';
import {AsyncStorage } from 'react-native';
import hoistNonReactStatics from 'hoist-non-react-statics'
import request from '../utils/request';

const defaultState = {
    token: "",
    isLogin: false,
}

const AuthContext = React.createContext(defaultState)

export class AuthProvider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ...defaultState,
            login: this.login.bind(this),
            logout: this.logout.bind(this),
            init:this.init.bind(this),
        }
    }
    async init(){
        const token = await AsyncStorage.getItem('userToken')
        if(token){
            this.setState({
                isLogin: true,
                token
            })
            return true
        }else{
            return false
        }
    }
    async login(id, pass) {
        var res = await request("http://47.93.216.141:8080/chemanager/ajax_login.action", {
            id,
            pass
        })
        let token = res.data
        await AsyncStorage.setItem("userToken", token)
        this.setState({
            isLogin: true,
            token
        })
    }
    async logout() {
        await AsyncStorage.removeItem("userToken")
        this.setState({
            isLogin: false,
            token: ""
        })
    }
    render() {
        return <AuthContext.Provider value={this.state}>{this.props.children}</AuthContext.Provider>
    }
}

export const AuthConsumer = AuthContext.Consumer

export function withUser(Component) {
    const withUserComponent = (props) => (
        <AuthConsumer>
            {(UserState) => (
                <Component {...props} user={UserState} />
            )}
        </AuthConsumer>
    )
    hoistNonReactStatics(withUserComponent, Component)
    return withUserComponent
}