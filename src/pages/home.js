import React from 'react';
import { Text,View,ScrollView,Image } from 'react-native'


export default class extends React.Component {
    static navigationOptions = {
        title: '小轩的实验室app',
        tabBarLabel:"主页",
        tabBarIcon: ({ focused }) => (
            <Image style={{width:25,height:25}} source={focused ? require('../images/home31.png') : require('../images/home3.png')} />
        )
    };
    render() {
        return (
            <ScrollView>
                <Text>欢迎您，小轩～</Text>
                <Text>信息公告:</Text>
                <View>
                    <Text>xxxx添加了xxxxxxxx储量低</Text>
                </View>
                <View>
                    <Text>More</Text>
                </View>
            </ScrollView>
        )
    }
}