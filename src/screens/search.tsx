import {
	ActivityIndicator,
	FlatList,
	SectionList,
	Text,
	TextInput,
	View,
} from 'react-native';
import React, {useState} from 'react';
import tw from 'twrnc';
import useSearchPokemons from '../hooks/useSearchPokemons';

export const Search = React.memo(() => {
	const [query, setQuery] = useState('');
	const [search, setSearch] = useState('');
	const {pokemon, loading, error} = useSearchPokemons(search);

	return (
		<>
			<View style={tw`bg-slate-800 flex-1 py-2 px-0.5`}>
				<View style={tw`p-3`}>
					<TextInput
						style={tw`border border-white h-10 bg-slate-100 px-2 text-lg`}
						value={query}
						onChangeText={setQuery}
						placeholder='Search Pokemons...'
						placeholderTextColor='black'
						clearButtonMode='while-editing'
						onSubmitEditing={() => setSearch(query.trim())}
					/>
				</View>
				<View>
					<Text style={tw`text-center text-white text-lg`}>Search Results</Text>
					<View>
						{pokemon ? (
							<>
								
								<View>
									<Text style={tw`text-white text-center`}>Abilities</Text>
									{pokemon.abilities.map((ability, index) => (
										<Text key={ability.ability.name + index}>
											{ability.ability.name}
										</Text>
									))}
								</View>
								<View>
									<Text style={tw`text-white text-center`}>Forms</Text>
									{pokemon.forms.map((form, index) => (
										<Text key={form.name + index}>{form.name}</Text>
									))}
								</View>
							</>
						) : null}
					</View>
				</View>
			</View>
		</>
	);
});
