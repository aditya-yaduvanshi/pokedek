import React from 'react';
import {View, Image, Text} from 'react-native';
import tw from 'twrnc';

export type PokemonCardProps = {
	pokemon: {
		name: string;
		url: string;
		image: string;
	};
};

export const PokemonCard: React.NamedExoticComponent<PokemonCardProps> =
	React.memo(({pokemon}) => {
		return (
			<View style={tw`mx-auto my-1.5 justify-evenly items-center rounded-lg bg-slate-500`}>
				<Image source={{uri: pokemon.image}} style={tw`w-48 h-36`} />
				<Text style={tw`text-white mb-2 font-semibold`}>{pokemon.name.toUpperCase()}</Text>
			</View>
		);
	});
