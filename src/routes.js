import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Home from './pages/home'
import Material from './pages/material'
import User from './pages/user'

const TabScreens = createBottomTabNavigator({
	Home,
	Material,
	User
},{
	tabBarOptions: {
		activeTintColor: "#58ADFF",
		inactiveTintColor: "#666",
		labelStyle: {
			fontSize: 12,
			marginBottom:2
		},
	}
})

TabScreens.navigationOptions = ({ navigation }) => {
	const component = TabScreens.router.getComponentForState(navigation.state);
	if (typeof component.navigationOptions === 'function') {
		return component.navigationOptions({ navigation });
	}
	return component.navigationOptions;
}

const Routes = createStackNavigator({
	Main: TabScreens,
	// Login
})


export default Routes