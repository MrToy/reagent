import { createBottomTabNavigator, createStackNavigator,createSwitchNavigator } from 'react-navigation';
import Home from './pages/Home'
import Material from './pages/Material'
import User from './pages/User'
import Login from './pages/Login'
import AuthLoading from './pages/AuthLoading'
import AddReagent from './pages/Material/AddReagent'
import AddInstrument from './pages/Material/AddInstrument'
import AddMaterial from './pages/Material/AddMaterial'
import MemberGroup from './pages/MemberGroup'
import MemberInfo from './pages/MemberInfo'
import UserInfo from './pages/UserInfo'
import InstrumentInfo from './pages/Material/InstrumentInfo'
import MaterialInfo from './pages/Material/MaterialInfo'
import ReagentInfo from './pages/Material/ReagentInfo'
import Annocement from './pages/Annocement'
import AddAnnocement from './pages/Annocement/AddAnnocement'
import { scale } from './utils/dimension'


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
			style:{
				paddingVertical:scale(2),
				height:scale(50)
			}
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
	Main: TabScreens,
	AddReagent,
	ReagentInfo,
	AddInstrument,
	InstrumentInfo,
	AddMaterial,
	MaterialInfo,
	MemberGroup,
	MemberInfo,
	UserInfo,
	Annocement,
	AddAnnocement,
},{
	navigationOptions:{
		headerStyle: {
			backgroundColor: '#58ADFF',
		},
		headerTintColor: '#fff',
	}
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