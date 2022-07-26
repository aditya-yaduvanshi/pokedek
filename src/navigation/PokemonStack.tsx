import {memo, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../screens/home';
import tw from 'twrnc';
import {Bookmarks} from '../screens/bookmarks';
import {Pokemon} from '../screens/pokemon';

const Stack = createNativeStackNavigator();

export const PokemonStack = memo(() => {
	return (
		<Stack.Navigator
			initialRouteName='Home'
			screenOptions={{
				headerShown: false,
				contentStyle: tw`bg-slate-800`,
			}}
		>
			<Stack.Screen name='Pokemons' component={Home} />
			<Stack.Screen name='Bookmarks' component={Bookmarks} />
			<Stack.Screen name='Pokemon' component={Pokemon} />
		</Stack.Navigator>
	);
});
