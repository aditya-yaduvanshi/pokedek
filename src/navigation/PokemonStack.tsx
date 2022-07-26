import {memo} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../screens/home';
import tw from 'twrnc';
import {Pokemon} from '../screens/pokemon';

const Stack = createNativeStackNavigator();

export const PokemonStack = memo(() => {
	return (
		<Stack.Navigator
			initialRouteName='Home'
			screenOptions={{
				contentStyle: tw`bg-slate-800`,
				headerStyle: tw`bg-slate-500`,
				headerTitleStyle: tw`text-white`,
			}}
		>
			<Stack.Screen name='Pokemons' component={Home} />
			<Stack.Screen name='Pokemon' component={Pokemon} />
		</Stack.Navigator>
	);
});
