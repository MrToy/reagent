import React from 'react';
import { Text, View, FlatList, Image, TextInput} from 'react-native'
import Touchable from 'react-native-platform-touchable';
import { scale } from '../utils/dimension'

const StateMap={
    0:'Normal',
    1:'Low',
    2:'Run Out'
}

const MaterialItem = ({ uri, name, enName, status, shortname, mf, mw }) => (
    <Touchable>
        <View style={{ flexDirection: "row", padding: 10,alignItems:"center" }}>
            <Image source={{ uri }} style={{ width: scale(80), height: scale(80),marginRight:10 }} />
            <View style={{flex:1}}>
                <Text style={{fontSize:scale(14),color:"#000"}}>{name}</Text>
                <Text style={{fontSize:scale(12),color:"#515151",lineHeight:18}}>{enName}</Text>
                <View style={{ flexDirection: "row",marginBottom:5 }}>
                    <Text style={{color:"#2A56C6",flex:1}}>{shortname}</Text>
                    <Text>{StateMap[status]}</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{flex:1}}>{mf}</Text>
                    <Text>{mw}</Text>
                </View>
            </View>
        </View>
    </Touchable>
)

const testData = [
    {
        uri: "https://img11.360buyimg.com/mobilecms/s280x280_jfs/t23890/162/1397024416/200944/94ccd923/5b603518N45e95118.jpg",
        name: "试剂A",
        enName: "xxx",
        status: 0,
        shortname: "试剂a",
        mf: "H2O",
        mw: "18.00"
    },
    {
        uri: "https://img11.360buyimg.com/mobilecms/s280x280_jfs/t23890/162/1397024416/200944/94ccd923/5b603518N45e95118.jpg",
        name: "试剂A",
        enName: "xxx",
        status: 0,
        shortname: "试剂a",
        mf: "H2O",
        mw: "18.00"
    },
    {
        uri: "https://img11.360buyimg.com/mobilecms/s280x280_jfs/t23890/162/1397024416/200944/94ccd923/5b603518N45e95118.jpg",
        name: "试剂A",
        enName: "xxx",
        status: 0,
        shortname: "试剂a",
        mf: "H2O",
        mw: "18.00"
    },
]

const MeterialIcon = ({ onPress, image }) => (
    <Touchable onPress={onPress}>
        <View style={{ width: scale(64), height: scale(64), borderRadius: scale(32), borderWidth: scale(4), borderColor: "#6e6464", justifyContent: "center", alignItems: "center", backgroundColor: "#fff" }}>
            <Image style={{width:scale(35),height:scale(35),resizeMode:"contain"}} source={image} />
        </View>
    </Touchable>
)


export default class extends React.Component {
    static navigationOptions = {
        header: null,
        tabBarLabel: "实验用品",
        tabBarIcon: ({ focused }) => (
            <Image style={{width:25,height:25}} source={focused ? require('../images/lab1.png') : require('../images/lab.png')} />
        )
    };
    render() {
        return (
            <View>
                <View style={{ backgroundColor: "#58ADFF",paddingTop:40}}>
                    <View style={{ flexDirection: "row",paddingHorizontal:20,alignItems:"center" }}>
                        <Touchable style={{marginRight:20}}>
                            <Image style={{width:scale(25),height:scale(25)}} source={require('../images/plus.png')} />
                        </Touchable>
                        <TextInput placeholder="Search" returnKeyType="search" style={{color:"#fff",flex:1,fontSize:18}} placeholderTextColor="#fff" />
                        <Touchable>
                            <Image style={{width:scale(25),height:scale(25)}} source={require('../images/search.png')} />
                        </Touchable>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-around", paddingVertical: 15 }}>
                        <MeterialIcon
                            image={require('../images/a1.png')} />
                        <MeterialIcon
                            image={require('../images/a2.png')} />
                        <MeterialIcon
                            image={require('../images/a3.png')} />
                    </View>
                </View>
                <FlatList
                    data={testData}
                    renderItem={({ item }) => <MaterialItem {...item} />} />
            </View>
        )
    }
}