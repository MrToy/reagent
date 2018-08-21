import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import FormButton from '../../lib/FormButton';
import FormInput from '../../lib/FormInput';
import { scale } from '../../utils/dimension';


export default class extends React.Component {
    static navigationOptions = {
        title: '试剂详情'
    };
    render() {
        return (
            <ScrollView style={{ padding: 20, backgroundColor: "#fff" }}>
                <View style={{ alignItems: "center" }}>
                    <Text style={{marginBottom:10}}>名称</Text>
                    <View style={{ width: scale(233), height: scale(233), backgroundColor: "#ccc" }}></View>
                </View>
            </ScrollView>
        )
    }
}