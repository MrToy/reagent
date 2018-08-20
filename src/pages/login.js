import React from 'react';
import { Text, View, StyleSheet, Image, TextInput,Alert,AsyncStorage } from 'react-native'
import { scale } from '../utils/dimension';
import LinearGradient from 'react-native-linear-gradient'
import PlatformTouchable from 'react-native-platform-touchable';


const FormInput = ({ label,style,...props}) => (
    <View style={[{borderColor:"#fff",borderBottomWidth:1,flexDirection:"row"},style]}>
        <Text style={{fontSize:scale(18),lineHeight:scale(28),color:"#fff"}}>{label}</Text>
        <TextInput style={{flex:1,paddingHorizontal:10,color:"#fff"}} {...props} autoCapitalize="none" underlineColorAndroid='transparent' />
    </View>
)

const FormButton = ({ children,style,onPress }) => (
    <PlatformTouchable onPress={onPress}>
        <View style={[{borderColor:"#fff",borderWidth:1,borderRadius:scale(17),height:scale(34),alignItems:"center",justifyContent:"center"},style]}>
            <Text style={{fontSize:scale(20),color:"#fff"}}>{children}</Text>
        </View>
    </PlatformTouchable>
)

export default class extends React.Component {
    static navigationOptions = {
        header: null,
    }
    state={
        id:"",
        password:""
    }
    async login(){
        if(this.state.id!="xiaoxuan"||this.state.password!="xiaoxuan"){
            Alert.alert("账号或密码错误")
            return
        }
        await AsyncStorage.setItem('userToken',"xiaoxuan");
        this.props.navigation.navigate('App')
    }
    render() {
        return (
            <LinearGradient colors={['#58ADFF','#5ECFEE']} style={{ flex: 1, paddingTop: 30, alignItems: "center" }}>
                <View style={{ width: scale(160), height: scale(160), borderRadius: scale(80), backgroundColor: "#fff", marginTop: 93 }}></View>
                <View style={{width:scale(254),marginTop:scale(70)}}>
                    <FormInput label="Student ID" style={{marginBottom:scale(40)}} value={this.state.id} onChangeText={str=>this.setState({id:str})} />
                    <FormInput label="Password" secureTextEntry style={{marginBottom:scale(50)}} value={this.state.password} onChangeText={str=>this.setState({password:str})} />
                    <FormButton onPress={this.login.bind(this)}>Log In</FormButton>
                </View>
            </LinearGradient>
        )
    }
}