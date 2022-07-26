import {memo} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import tw from 'twrnc';
import {Bookmarks} from '../screens/bookmarks';
import {Search} from '../screens/search';
import {PokemonStack} from './PokemonStack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export const HomeTabs = memo(() => {
	return (
		<Tab.Navigator
			initialRouteName='PokemonStack'
			screenOptions={{
				headerStyle: tw`bg-slate-500`,
				headerTitleStyle: tw`text-white`,
				tabBarStyle: tw`bg-slate-500`,
				tabBarShowLabel: false,
				tabBarInactiveTintColor: 'rgb(30, 41, 59)',
				tabBarActiveTintColor: 'white',
			}}
		>
			<Tab.Screen
				name='Search'
				component={Search}
				options={{
					tabBarIcon: ({color}) => (
						<Icon color={color} size={40} name='card-search' />
					),
				}}
			/>
			<Tab.Screen
				name='PokemonStack'
				component={PokemonStack}
				options={{
					title: 'Pokemons',
					tabBarIcon: ({color}) => (
						<Icon color={color} size={40} name='pokemon-go' />
					),
				}}
			/>
			<Tab.Screen
				name='Bookmarks'
				component={Bookmarks}
				options={{
					tabBarIcon: ({color}) => (
						<Icon color={color} size={40} name='bookmark-multiple' />
					),
				}}
			/>
		</Tab.Navigator>
	);
});
