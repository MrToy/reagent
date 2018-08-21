import React from 'react';
import { View ,ScrollView} from 'react-native';
import FormButton from '../lib/FormButton';
import FormInput from '../lib/FormInput';


export default class extends React.Component {
    static navigationOptions = {
        title: '添加新耗材'
    };
    render() {
        return (
            <ScrollView style={{ padding: 20,backgroundColor:"#fff"}}>
                <FormInput label="中文名称" />
                <FormInput label="英文名称" />
                <FormInput label="名称缩写" />
                <FormInput label="型号/规格" />
                <FormInput label="储藏位置" />
                <FormInput label="储量" />
                <FormInput label="备注" />
            </ScrollView>
        )
    }
}