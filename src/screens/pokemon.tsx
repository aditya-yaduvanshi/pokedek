import {ActivityIndicator, Button, Text, View, Image} from 'react-native';
import React from 'react';
import {useBookmarks} from '../contexts/bookmark';
import useSearchPokemons from '../hooks/useSearchPokemons';
import tw from 'twrnc';

export const Pokemon: React.NamedExoticComponent<PokemonProps> = React.memo(
	({navigation, route}) => {
		const {bookmarks, bookmark, bookunmark, status} = useBookmarks();
		const {pokemon, loading, error} = useSearchPokemons(
			route.params.pokemon.name
		);
		const bookmarked = bookmarks.find(
			(b) => b.name === route.params.pokemon.name
		);
		return (
			<>
				<View>
					{loading && <ActivityIndicator animating size={50} color='white' />}
					{error || status.error ? <Text>{error || status.error}</Text> : null}
					{pokemon && (
						<>
							<Text>Pokemon Detail</Text>
							<View>
								<Image
									source={{uri: `${pokemon.sprites.front_default}`}}
									style={tw`w-48 h-48`}
								/>
								<Text>{pokemon.name}</Text>
							</View>
							{bookmarked ? (
								<Button
									title='Bookunmark'
									onPress={() => bookunmark(route.params.pokemon)}
								/>
							) : (
								<Button
									title='Bookmark'
									onPress={() => bookmark(route.params.pokemon)}
								/>
							)}
						</>
					)}
				</View>
			</>
		);
	}
);
