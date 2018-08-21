import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { scale } from '../utils/dimension';


const FormInput = ({ label,style,color,...props}) => (
    <View style={[{borderColor:color||"#666",borderBottomWidth:1,flexDirection:"row",marginBottom:20},style]}>
        <Text style={{fontSize:scale(18),lineHeight:scale(28),color:color||"#666"}}>{label}</Text>
        <TextInput style={{flex:1,paddingHorizontal:10,color:color||"#666",fontSize:scale(18)}} {...props} autoCapitalize="none" underlineColorAndroid='transparent' />
    </View>
)

export default FormInput