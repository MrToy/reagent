import React from 'react';
import { View ,ScrollView} from 'react-native';
import FormButton from '../../lib/FormButton';
import FormInput from '../../lib/FormInput';


export default class extends React.Component {
    static navigationOptions = {
        title: '添加新试剂'
    };
    render() {
        return (
            <ScrollView style={{ padding: 20,backgroundColor:"#fff"}}>
                <FormInput label="中文名称" />
                <FormInput label="英文名称" />
                <FormInput label="名称缩写" />
                <FormInput label="分子式" />
                <FormInput label="分子量" />
                <FormInput label="纯度" />
                <FormInput label="分类" />
                <FormInput label="规格" />
                <FormInput label="贮存方式" />
                <FormInput label="贮存位置" />
                <FormInput label="贮存情况" />
                <FormInput label="备注" />
            </ScrollView>
        )
    }
}