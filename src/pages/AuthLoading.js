import React from 'react';
import { ActivityIndicator, AsyncStorage, StatusBar, View } from 'react-native';
import { withUser } from '../lib/User';

class AuthLoadingScreen extends React.Component {
	constructor(props) {
		super(props);
		this.bootstrapAsync()
	}
	async bootstrapAsync(){
		let ok=await this.props.user.init()
		this.props.navigation.navigate(ok ? 'App' : 'Auth');
	}
	render() {
		return (
			<View>
				<ActivityIndicator />
				<StatusBar barStyle="default" />
			</View>
		);
	}
}

export default withUser(AuthLoadingScreen)