/* eslint-disable prettier/prettier */
// AppNavigator.js
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Hello from './Hello';
import Appi from './Welcome';
import HomeScreen from './HomeScreen';
import Rest from './Rest';
const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Appi" component={Appi} options={{ headerShown: false }}  />
      <Stack.Screen name="Hello" component={Hello} options={{ headerShown: false }}  />
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}  />
      <Stack.Screen name="Rest" component={Rest} options={{ headerShown: false }}  />
    </Stack.Navigator>
  );
};

export default AppNavigator;
