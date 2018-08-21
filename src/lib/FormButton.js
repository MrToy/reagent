
import React from 'react';
import { Text, View } from 'react-native';
import PlatformTouchable from 'react-native-platform-touchable';
import { scale } from '../utils/dimension';




const FormButton = ({ children,style,onPress }) => (
    <PlatformTouchable onPress={onPress}>
        <View style={[{borderColor:"#fff",borderWidth:scale(1),borderRadius:scale(17),height:scale(34),alignItems:"center",justifyContent:"center"},style]}>
            <Text style={{fontSize:scale(20),color:"#fff"}}>{children}</Text>
        </View>
    </PlatformTouchable>
)

export default FormButton