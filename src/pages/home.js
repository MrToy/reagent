import React from 'react';
import { Text, View, ScrollView, Image } from 'react-native'
import { scale } from '../utils/dimension';
import PlatformTouchable from 'react-native-platform-touchable';
import LinearGradient from 'react-native-linear-gradient'


export default class extends React.Component {
    static navigationOptions = {
        title: '化学发光与电化学发光实验室',
        tabBarLabel: "主页",
        tabBarIcon: ({ focused }) => (
            <Image style={{ width: 25, height: 25 }} source={focused ? require('../images/home31.png') : require('../images/home3.png')} />
        )
    };
    render() {
        return (
            <View style={{ padding: 20,flex:1 }}>
                <Text style={{ fontSize: scale(24), lineHeight: scale(32) }}>欢迎您，小轩～</Text>
                <Text style={{ fontSize: scale(24), lineHeight: scale(32), marginTop: scale(11) }}>信息公告:</Text>
                <View style={{ height:300,marginVertical: 10, padding: 10, borderRadius: 4,  backgroundColor: "#e9e9ee", shadowOpacity: 0.2, shadowRadius: 10 }}>
                    <Text>xxxx添加了xxxxxxxx储量低</Text>
                </View>
                <PlatformTouchable>
                    <LinearGradient colors={['#40B9E8', '#41A8EC', '#319ABC',]} style={{ backgroundColor: "#58ADFF",paddingVertical:3, paddingHorizontal: 10, marginTop: 10, borderRadius: 8, alignItems: "flex-end" }}>
                        <Text style={{ color: "#fff",fontSize: scale(24), lineHeight: scale(32) }}>More</Text>
                    </LinearGradient>
                </PlatformTouchable>
            </View>
        )
    }
}