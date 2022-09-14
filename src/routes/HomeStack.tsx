import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {commonScreenOptions} from './screenOptions';
import HomeScreen from '../screens/HomeStory';
import Cart from '../screens/CartStory';
import {MainStackParamList} from './types/params';
import {CartHeader} from '../screens/CartStory/components';

const Stack = createNativeStackNavigator<MainStackParamList>();

function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={commonScreenOptions}>
      <Stack.Screen
        component={HomeScreen}
        name={'Home'}
        options={{
          headerRight: () => <CartHeader />,
          title: 'Products List',
        }}
      />
      <Stack.Screen
        component={Cart}
        name={'Cart'}
        options={{
          gestureDirection: 'horizontal',
          gestureEnabled: true,
          fullScreenGestureEnabled: true,
        }}
      />
    </Stack.Navigator>
  );
}

export default AuthStack;
