import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, Pressable} from 'react-native';
import tw from 'twrnc';

export const PokemonCard: React.NamedExoticComponent<PokemonCardProps> =
	React.memo(({pokemon}) => {
		const {navigate} = useNavigation<UseNavigation>();
		return (
			<Pressable
				onPress={() => navigate('Pokemon', {pokemon})}
				style={tw`mx-auto my-1.5 pb-2 justify-evenly items-center rounded-lg bg-slate-500`}
			>
				<Image source={{uri: pokemon.image}} style={tw`w-48 h-36`} />
				<Text style={tw`text-white font-semibold`}>
					{pokemon.name.toUpperCase()}
				</Text>
			</Pressable>
		);
	});
