import React from 'react';
import { Alert, AsyncStorage, View, ScrollView,StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { scale } from '../utils/dimension';
import FormButton from '../lib/FormButton';
import FormInput from '../lib/FormInput';

export default class extends React.Component {
    static navigationOptions = {
        header: null,
    }
    state = {
        id: "",
        password: ""
    }
    async login() {
        if (this.state.id != "xiaoxuan" || this.state.password != "xiaoxuan") {
            Alert.alert("账号或密码错误")
            return
        }
        await AsyncStorage.setItem('userToken', "xiaoxuan");
        this.props.navigation.navigate('App')
    }
    render() {
        return (
            <LinearGradient colors={['#58ADFF', '#5ECFEE']} style={{ flex: 1 }}>
                <StatusBar translucent={true} backgroundColor="transparent" />
                <ScrollView >
                    <View style={{ paddingVertical: scale(40), alignItems: "center" }}>
                        <View style={{ width: scale(160), height: scale(160), borderRadius: scale(80), backgroundColor: "#fff" }}></View>
                        <View style={{ width: scale(254), marginTop: scale(70) }}>
                            <FormInput label="Student ID" color="#fff" style={{ marginBottom: scale(20) }} value={this.state.id} onChangeText={str => this.setState({ id: str })} />
                            <FormInput label="Password" color="#fff" secureTextEntry style={{ marginBottom: scale(50) }} value={this.state.password} onChangeText={str => this.setState({ password: str })} />
                            <FormButton onPress={this.login.bind(this)}>Log In</FormButton>
                        </View>
                    </View>
                </ScrollView>
            </LinearGradient>
        )
    }
}