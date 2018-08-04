import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Home from './pages/home'

const TabScreens = createBottomTabNavigator({
	Home
})
// TabScreens.navigationOptions = ({ navigation }) => {
// 	const component = TabScreens.router.getComponentForState(navigation.state);
// 	if (typeof component.navigationOptions === 'function') {
// 		return component.navigationOptions({ navigation });
// 	}
// 	return component.navigationOptions;
// }

const Routes = createStackNavigator({
	Main: TabScreens,
	// Login
})


export default Routes