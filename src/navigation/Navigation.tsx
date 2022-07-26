import {StatusBar} from 'expo-status-bar';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {HomeTabs} from './HomeTabs';
import {memo} from 'react';
import {useSafeAreaFrame} from 'react-native-safe-area-context';

export const Navigation = memo(() => {
	const frame = useSafeAreaFrame();
	return (
		<>
			<View style={{flex: 1, width: frame.width, height: frame.height}}>
				<NavigationContainer>
					<HomeTabs />
				</NavigationContainer>
				<StatusBar style='auto' />
			</View>
		</>
	);
});
