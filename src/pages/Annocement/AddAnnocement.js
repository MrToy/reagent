import React from 'react';
import { Alert, Button, ScrollView, TextInput,Text } from 'react-native';
import { scale } from '../../utils/dimension';


export default class extends React.Component {
    static navigationOptions = {
        title: '发布实验室通告',
        headerRight: (
            <Button
                onPress={() => Alert.alert('后面保存成功的～')}
                title="保存"
                color="#fff"
            />
        )
    };
    render() {
        return (
            <ScrollView style={{ padding: 30,backgroundColor:"#FCF8F8"}}>
                <Text style={{fontSize:scale(20)}}>标题</Text>
                <TextInput
                    autoCapitalize="none"
                    style={{borderColor:"#555",borderWidth:1,marginTop:scale(10),marginBottom:scale(25),lineHeight:scale(30),height:scale(30),paddingHorizontal:scale(10),backgroundColor:"#fff"}} />
                <Text style={{fontSize:scale(20)}}>内容</Text>
                <TextInput
                    autoCapitalize="none"
                    style={{borderColor:"#555",borderWidth:1,marginTop:scale(10),marginBottom:scale(25),lineHeight:scale(30),height:scale(270),paddingHorizontal:scale(10),backgroundColor:"#fff"}}
                    multiline={true} />
            </ScrollView>
        )
    }
}