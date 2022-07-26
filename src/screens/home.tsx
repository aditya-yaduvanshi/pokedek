import React, {memo, useMemo} from 'react';
import {
	ActivityIndicator,
	FlatList,
	ListRenderItemInfo,
	View,
} from 'react-native';
import tw from 'twrnc';
import {PokemonCard} from '../components/PokemonCard';
import {usePokemons} from '../contexts/pokemon';

export const Home = memo(() => {
	const {pokemons, fetchNextPage} = usePokemons();

	const renderItem = useMemo(
		() =>
			({item}: ListRenderItemInfo<PokemonCardProps['pokemon']>) => {
				return <PokemonCard pokemon={item} />;
			},
		[]
	);

	return (
		<>
			<View style={tw`flex-1 justify-start items-center py-2 px-0.5`}>
				<FlatList
					style={tw`w-full`}
					maxToRenderPerBatch={20}
					updateCellsBatchingPeriod={25}
					onEndReached={fetchNextPage}
					initialNumToRender={10}
					ListFooterComponent={() => (
						<ActivityIndicator color='white' size='large' style={tw`my-3`} />
					)}
					onEndReachedThreshold={0.5}
					numColumns={2}
					data={pokemons}
					renderItem={renderItem}
					keyExtractor={(item, index) => item.name + index}
				/>
			</View>
		</>
	);
});
