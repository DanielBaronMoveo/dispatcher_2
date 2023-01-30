import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthScreen from '../features/auth/AuthScreen';
import TabNavigation from './TabNavigation';
import {Screens} from '../constants/screens';
import {NavigationContainer} from '@react-navigation/native';
import {navigationReadiness, navigationRef} from './RootNavigation';
const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        navigationReadiness.setIsReady(true);
      }}>
      <Stack.Navigator initialRouteName={Screens.AuthScreen}>
        <Stack.Screen
          name={Screens.AuthScreen}
          component={AuthScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={Screens.TabScreens}
          component={TabNavigation}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
