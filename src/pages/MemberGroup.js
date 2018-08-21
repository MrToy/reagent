import React from 'react';
import { ScrollView, View, FlatList, Text } from 'react-native';
import { scale } from '../utils/dimension';
import PlatformTouchable from 'react-native-platform-touchable';


const testData = [
    {
        key: "1",
        name: "小轩1号",
        id: "001",
    },
    {
        key: "2",
        name: "小轩2号",
        id: "002",
    },
    {
        key: "3",
        name: "小轩3号",
        id: "003",
    },
]

const UserItem = ({ name, id,onPress }) => (
    <PlatformTouchable onPress={onPress}>
        <View style={{ marginBottom: 15 }}>
            <View style={{ flexDirection: "row",marginBottom:5 }}>
                <View style={{ width: scale(60), height: scale(60), borderRadius: scale(30), marginRight: scale(16), backgroundColor: "#ccc" }}>
                </View>
                <View style={{ justifyContent: "center" }}>
                    <Text>{name}</Text>
                    <Text>{id}</Text>
                </View>
            </View>
            <View>
                <Text>当前课题</Text>
            </View>
        </View>
    </PlatformTouchable>
)


export default class extends React.Component {
    static navigationOptions = {
        title: '实验室成员信息'
    };
    render() {
        return (
            <ScrollView style={{ padding: 20, backgroundColor: "#fff" }}>
                <FlatList
                    data={testData}
                    renderItem={({ item }) => <UserItem {...item} onPress={()=>this.props.navigation.navigate('MemberInfo',{id:item.id})} />} />
            </ScrollView>
        )
    }
}