import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PlatformTouchable from 'react-native-platform-touchable';
import { withUser } from '../lib/User';
import { scale } from '../utils/dimension';


const GradientButton = ({children,onPress,colors}) => (
    <PlatformTouchable onPress={onPress}>
        <LinearGradient colors={colors} style={{width:"100%",height: scale(34),justifyContent:"center",alignItems:"center",borderRadius:scale(8) }}>
            <Text style={{color:"#000",fontSize:scale(20)}}>{children}</Text>
        </LinearGradient>
    </PlatformTouchable>
)

class UserInfoPage extends React.Component {
    static navigationOptions = {
        title: '个人资料'
    }
    async logout(){
        await this.props.user.logout()
        this.props.navigation.navigate('Login')
    }
    render() {
        return (
            <ScrollView style={{ padding: 20, backgroundColor: "#fff" }}>
                <View style={{ marginBottom: 15 }}>
                    <View style={{ flexDirection: "row", marginBottom: 5 }}>
                        <View style={{ width: scale(110), height: scale(110), borderRadius: scale(55), marginRight: scale(40), backgroundColor: "#ccc" }}>
                        </View>
                        <View style={{ justifyContent: "center",flex:1 }}>
                            <Text style={{ fontSize: scale(24), lineHeight: scale(32) }}>小轩</Text>
                            <Text style={{ fontSize: scale(18), lineHeight: scale(23), color: "#515151" }}>SA17008003</Text>
                            <Text style={{ fontSize: scale(18), lineHeight: scale(23), color: "#515151" }}>Grade 1 PhD</Text>
                            <GradientButton colors={['#EFC934', '#C12724']}>修改密码</GradientButton>
                        </View>
                    </View>
                </View>
                <GradientButton colors={['#F38B8B', '#C12724']} onPress={this.logout.bind(this)}>注销</GradientButton>
            </ScrollView>
        )
    }
}

export default withUser(UserInfoPage)