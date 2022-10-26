import React from 'react';
import { View } from 'react-native';
import 'react-native-gesture-handler';
import { DrawerNavigator } from './src/navigation/DrawerNavigator';
import { NavigationContainer } from '@react-navigation/native';

export const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  )
}
