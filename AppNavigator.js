/* eslint-disable prettier/prettier */
// AppNavigator.js
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Hello from './Hello';
import Appi from './Welcome';
const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Appi" component={Appi} />
      <Stack.Screen name="Hello" component={Hello} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
