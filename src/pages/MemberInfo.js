import React from 'react';
import { View, ScrollView,Text } from 'react-native';
import FormButton from '../lib/FormButton';
import FormInput from '../lib/FormInput';
import { scale } from '../utils/dimension';

export default class extends React.Component {
    static navigationOptions = {
        title: '成员个人资料'
    };
    render() {
        return (
            <ScrollView style={{ padding: 20, backgroundColor: "#fff" }}>
                <View style={{ marginBottom: 15 }}>
                    <View style={{ flexDirection: "row", marginBottom: 5 }}>
                        <View style={{ width: scale(110), height: scale(110), borderRadius: scale(55), marginRight: scale(40), backgroundColor: "#ccc" }}>
                        </View>
                        <View style={{ justifyContent: "center" }}>
                            <Text style={{fontSize:scale(24),lineHeight:scale(32)}}>小轩</Text>
                            <Text style={{fontSize:scale(18),lineHeight:scale(23),color:"#515151"}}>SA17008003</Text>
                            <Text style={{fontSize:scale(18),lineHeight:scale(23),color:"#515151"}}>Grade 1 PhD</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}