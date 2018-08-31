import { Alert } from 'react-native';
export default async function (url, data,options={}) {
    let formdata = new FormData()
    for (let key in data) {
        formdata.append(key, data[key]);
    }
    var res = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        body: formdata
    })
    var data = await res.json()
    if (!data.result) {
        if(data.code==451&&options.navigation){
            Alert.alert("您的登录信息已失效，请重新登录")
            navigation.navigate('Login')
        }
        throw new Error(data.reason)
    }
    return data
}