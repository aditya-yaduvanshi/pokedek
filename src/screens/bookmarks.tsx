import {FlatList, ListRenderItemInfo, View, Text} from 'react-native';
import {useBookmarks} from '../contexts/bookmark';
import tw from 'twrnc';
import React, {useMemo} from 'react';
import {PokemonCard} from '../components/PokemonCard';

export const Bookmarks = () => {
	const {bookmarks} = useBookmarks();
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
				style={tw`flex-1 justify-start items-center py-2 px-0.5 bg-slate-800`}
			>
				<FlatList
					style={tw`w-full`}
					ListEmptyComponent={() => <Text>No Bookmarks Yet.</Text>}
					maxToRenderPerBatch={20}
					updateCellsBatchingPeriod={25}
					initialNumToRender={10}
					onEndReachedThreshold={0.5}
					numColumns={2}
					data={bookmarks}
					renderItem={renderItem}
					keyExtractor={(item, index) => item.name + index}
				/>
			</View>
		</>
	);
};
