import React from 'react';
import { View ,ScrollView} from 'react-native';
import FormButton from '../lib/FormButton';
import FormInput from '../lib/FormInput';


export default class extends React.Component {
    static navigationOptions = {
        title: '仪器详情'
    };
    render() {
        return (
            <ScrollView style={{ padding: 20,backgroundColor:"#fff"}}>
                <FormInput label="中文名称" />
                <FormInput label="英文名称" />
                <FormInput label="名称缩写" />
                <FormInput label="公司&型号" />
                <FormInput label="位置" />
                <FormInput label="分析内容" />
                <FormInput label="进样方式" />
                <FormInput label="状态" />
                <FormInput label="备注" />
            </ScrollView>
        )
    }
}