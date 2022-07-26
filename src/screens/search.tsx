import {ActivityIndicator, FlatList, SectionList, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import tw from 'twrnc';
import useSearchPokemons from '../hooks/useSearchPokemons';

export const Search = React.memo(() => {
	const [query, setQuery] = useState('');
	const [search, setSearch] = useState('');
	const {pokemon, loading, error} = useSearchPokemons(search);

	return (
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
				
				{/*<FlatList data={pokemons} />*/}
				<Text style={tw`text-white text-center`}></Text>
				<View>
				{pokemon ? pokemon.abilities.map((ability,index) => <Text key={ability.ability.name + index}>{ability.ability.name}</Text>) : null}
				{pokemon ? pokemon.forms.map((form,index) => <Text key={form.name + index}>{form.name}</Text>) : null}
				</View>
			</View>
		</View>
	);
});
