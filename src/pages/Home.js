import React from 'react';
import { Image, StatusBar, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PlatformTouchable from 'react-native-platform-touchable';
import { withUser } from '../lib/User';
import { scale } from '../utils/dimension';
import request from '../utils/request';


class HomePage extends React.Component {
    static navigationOptions = {
        title: '化学发光与电化学发光实验室',
        tabBarLabel: "主页",
        tabBarIcon: ({ focused }) => (
            <Image style={{ width: scale(24), height: scale(24) }} source={focused ? require('../images/home31.png') : require('../images/home3.png')} />
        )
    };
    state={
        notices:[]
    }
    componentDidMount(){
        this.fetchNotice()
    }
    async fetchNotice(){
        let res=await request("http://47.93.216.141:8080/chemanager/ajax_getNotice.action",{
            token:this.props.user.token,
            num:5
        })
        console.log(res)
    }
    render() {
        return (
            <View style={{ padding: 20,flex:1,backgroundColor:"#fff" }}>
                <StatusBar backgroundColor="#58ADFF" />
                <Text style={{ fontSize: scale(24), lineHeight: scale(32) }}>欢迎您，小轩～</Text>
                <Text style={{ fontSize: scale(24), lineHeight: scale(32), marginTop: scale(11) }}>信息公告:</Text>
                <View style={{ height:300,marginVertical: 10, padding: 10, borderRadius: 4,  backgroundColor: "#fff", shadowOpacity: 0.2, shadowRadius: 10 }}>
                    <Text>xxxx添加了xxxxxxxx储量低</Text>
                </View>
                <PlatformTouchable onPress={() => this.props.navigation.navigate('Annocement')}>
                    <LinearGradient colors={['#40B9E8', '#41A8EC', '#319ABC',]} style={{ backgroundColor: "#58ADFF",paddingVertical:3, paddingHorizontal: 10, marginTop: 10, borderRadius: 8, alignItems: "flex-end" }}>
                        <Text style={{ color: "#fff",fontSize: scale(24), lineHeight: scale(32) }}>More</Text>
                    </LinearGradient>
                </PlatformTouchable>
            </View>
        )
    }
}

export default withUser(HomePage)