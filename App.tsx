import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {BookmarkProvider} from './src/contexts/bookmark';
import {PokemonProvider} from './src/contexts/pokemon';
import {Navigation} from './src/navigation/Navigation';

const App = () => {
	return (
		<SafeAreaProvider>
			<PokemonProvider>
				<BookmarkProvider>
					<Navigation />
				</BookmarkProvider>
			</PokemonProvider>
		</SafeAreaProvider>
	);
};

export default React.memo(App);
