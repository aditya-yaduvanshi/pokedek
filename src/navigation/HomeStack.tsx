import {memo} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../screens/home';
import tw from 'twrnc';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Bookmarks } from '../screens/bookmarks';
import { Pokemon } from '../screens/pokemon';

const Stack = createNativeStackNavigator();

export const HomeStack = memo(() => {
	const {navigate} = useNavigation();
	return (
		<Stack.Navigator
			initialRouteName='Home'
			screenOptions={{
				headerStyle: tw`bg-slate-500 text-slate-500`,
				headerTitleStyle: tw`text-white`,
				contentStyle: tw`bg-slate-800`,
				headerRight: (_props) => <Button title='Bookmarks' onPress={() => navigate('Bookmarks')} />
			}}
		>
			<Stack.Screen name='Pokemons' component={Home} />
			<Stack.Screen name='Bookmarks' component={Bookmarks} />
			<Stack.Screen name='Pokemon' component={Pokemon} />
		</Stack.Navigator>
	);
});
