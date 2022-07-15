import {useEffect, useState, memo, useMemo} from 'react';
import {
	ActivityIndicator,
	FlatList,
	Text,
	View,
	ListRenderItem,
	ListRenderItemInfo,
} from 'react-native';
import tw from 'twrnc';
import {PokemonCard, PokemonCardProps} from '../components/PokemonCard';

export const Home = memo(() => {
	const [pokemons, setPokemons] = useState<Set<PokemonCardProps['pokemon']>>(
		new Set()
	);
	const [totalCount, setTotalCount] = useState(0);
	const [totalFetched, setTotalFetched] = useState(0);
	const [prevPage, setPrevPage] = useState<string>('');
	const [nextPage, setNextPage] = useState<string>('');
	const [currentPage, setCurrentPage] = useState<string>(
		'https://pokeapi.co/api/v2/pokemon?offset=0&limit=10'
	);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		fetch(currentPage)
			.then((res) => res.json())
			.then((data) => {
				if (!totalCount) setTotalCount(data.count);
				const results = data.results.map(
					(item: {name: string; url: string}) => ({
						...item,
						image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
							item.url.split('/')[item.url.split('/').length - 2]
						}.png`,
					})
				);
				setPokemons((prev) => new Set([...prev, ...results]));
				if (data.next) setNextPage(data.next);
				if (data.previous) setPrevPage(data.previous);
				setTotalFetched((prev) => prev + data.results.length);
			})
			.catch((err) => console.log(err));
		setLoading(false);
	}, [currentPage]);

	const renderItem = useMemo(
		() =>
			({item}: ListRenderItemInfo<PokemonCardProps['pokemon']>) => {
				return <PokemonCard pokemon={item} />;
			},
		[]
	);

	return (
		<>
			<View
				style={tw`flex-1 justify-start items-center py-2 px-0.5`}
			>
				<FlatList
					style={tw`w-full`}
					maxToRenderPerBatch={20}
					updateCellsBatchingPeriod={25}
					onEndReached={() => setCurrentPage(nextPage)}
					initialNumToRender={10}
					ListFooterComponent={() => (
						<ActivityIndicator color='white' size='large' style={tw`my-3`} />
					)}
					onEndReachedThreshold={0.5}
					numColumns={2}
					data={[...pokemons.values()]}
					renderItem={renderItem}
					keyExtractor={(item, index) => item.name + index}
				/>
			</View>
		</>
	);
});
