import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { HomeStack } from './HomeStack';
import { memo } from 'react';
import { useSafeAreaFrame } from 'react-native-safe-area-context';

export const Navigation = memo(() => {
  const frame = useSafeAreaFrame();
  return (
    <View style={{flex: 1, width: frame.width, height: frame.height}}>
      <NavigationContainer>
        <HomeStack />
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
})
