/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import ScreenA from './src/screens/ScreenA';
import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import ScreenB from './src/screens/ScreenB';
import ScreenC from './src/screens/ScreenC';

export const navigationRef = createNavigationContainerRef();
function App(): React.JSX.Element {
  const StackA = createNativeStackNavigator();

  return (
    <NavigationContainer ref={navigationRef}>
      <StackA.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <StackA.Screen name="ScreenA" component={ScreenA} />
        <StackA.Screen name="ScreenB" component={ScreenB} />
        <StackA.Screen name="ScreenC" component={ScreenC} />
      </StackA.Navigator>
    </NavigationContainer>
  );
}

export default App;
