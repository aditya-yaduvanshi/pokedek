import {Button, Text, View} from 'react-native';
import React from 'react';
import {useBookmarks} from '../contexts/bookmark';

export const Pokemon: React.NamedExoticComponent<PokemonProps> = React.memo(
	({navigation, route}) => {
		const {bookmarks, bookmark, bookunmark} = useBookmarks();
		const bookmarked = bookmarks.find(
			(b) => b.name === route.params.pokemon.name
		);
		return (
			<View>
				<Text>Pokemon Detail</Text>
				<Button
					title={bookmarked ? 'Bookunmark' : 'Bookmark'}
					onPress={() => {
						if (bookmarked) bookunmark(route.params.pokemon);
						else bookmark(route.params.pokemon);
					}}
				/>
			</View>
		);
	}
);
