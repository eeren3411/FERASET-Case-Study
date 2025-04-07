import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import InputScreen from './screens/InputScreen';

const Stack = createNativeStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="InputScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="InputScreen" component={InputScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};