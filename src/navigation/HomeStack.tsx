import {memo} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../screens/home';
import tw from 'twrnc';

const Stack = createNativeStackNavigator();

export const HomeStack = memo(() => {
	return (
		<Stack.Navigator
			initialRouteName='Home'
			screenOptions={{
				headerStyle: tw`bg-slate-500 text-slate-500`,
				headerTitleStyle: tw`text-white`,
			}}
		>
			<Stack.Screen name='Pokemons' component={Home} />
		</Stack.Navigator>
	);
});
