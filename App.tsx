import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {PokemonProvider} from './src/contexts/pokemon';
import {Navigation} from './src/navigation/Navigation';

const App = () => {
	return (
		<SafeAreaProvider>
			<PokemonProvider>
				<Navigation />
			</PokemonProvider>
		</SafeAreaProvider>
	);
};

export default React.memo(App);
