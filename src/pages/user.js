import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native'
import { scale } from '../utils/dimension';
import LinearGradient from 'react-native-linear-gradient'
import PlatformTouchable from 'react-native-platform-touchable';

const styles = StyleSheet.create({
    btnBox: {
        position: "absolute", alignItems: "center", justifyContent: "center", borderRadius: 10
    },
    btnText: {
        color:"#fff",fontSize:scale(18)
    }
})

export default class extends React.Component {
    static navigationOptions = {
        header: null,
        tabBarLabel: "我",
        tabBarIcon: ({ focused }) => (
            <Image style={{ width: 25, height: 25 }} source={focused ? require('../images/user1.png') : require('../images/user.png')} />
        )
    };
    render() {
        return (
            <View>
                <View style={{ backgroundColor: "#58ADFF", paddingTop: 30, paddingBottom: 15, alignItems: "center" }}>
                    <View style={{ width: scale(100), height: scale(100), borderRadius: scale(50), backgroundColor: "#fff", marginTop: 20 }}>

                    </View>
                    <Text style={{ color: "#fff", fontSize: scale(24), lineHeight: scale(32), marginTop: 10 }}>小轩</Text>
                    <Text style={{ color: "#fff", fontSize: scale(18), lineHeight: scale(24) }}>SA17008003</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <PlatformTouchable>
                        <LinearGradient colors={['#C66CD6', '#7024AE']} style={[styles.btnBox, { top: scale(65), left: scale(30), width: scale(121), height: scale(117) }]}>
                            <Text style={styles.btnText}>实验室通知与用品修改记录</Text>
                        </LinearGradient>
                    </PlatformTouchable>
                    <PlatformTouchable>
                        <LinearGradient colors={['#01D9DE', '#2C9EE5']} style={[styles.btnBox, { top: scale(37), left: scale(209), width: scale(121), height: scale(86) }]}>
                            <Text style={styles.btnText}>实验室成员信息</Text>
                        </LinearGradient>
                    </PlatformTouchable>
                    <PlatformTouchable>
                        <LinearGradient colors={['#EFC934', '#C15224']} style={[styles.btnBox, { top: scale(139), left: scale(191), width: scale(161), height: scale(90) }]}>
                            <Text style={styles.btnText}>发布实验室通告</Text>
                        </LinearGradient>
                    </PlatformTouchable>
                </View>
            </View>
        )
    }
}