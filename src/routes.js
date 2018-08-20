import { createBottomTabNavigator, createStackNavigator,createSwitchNavigator } from 'react-navigation';
import Home from './pages/home'
import Material from './pages/material'
import User from './pages/user'
import Login from './pages/login'
import AuthLoading from './pages/AuthLoading'

const TabScreens = createBottomTabNavigator({
	Home,
	Material,
	User
}, {
		tabBarOptions: {
			activeTintColor: "#58ADFF",
			inactiveTintColor: "#666",
			labelStyle: {
				fontSize: 12,
				marginBottom: 2
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

const AppStack = createStackNavigator({
	Main: TabScreens
})

const AuthStack = createStackNavigator({
	Login
})

const Routes = createSwitchNavigator(
	{
		AuthLoading: AuthLoading,
		App: AppStack,
		Auth: AuthStack,
	},
	{
		initialRouteName: 'AuthLoading',
	}
);


export default Routes