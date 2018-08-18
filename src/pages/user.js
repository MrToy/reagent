import React from 'react';
import { Text,View,ScrollView,Image } from 'react-native'


export default class extends React.Component {
    static navigationOptions = {
        header:null,
        tabBarLabel:"我",
        tabBarIcon: ({ focused }) => (
            <Image style={{width:25,height:25}} source={focused ? require('../images/user1.png') : require('../images/user.png')} />
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