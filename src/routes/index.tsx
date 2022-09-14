import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeStack from './HomeStack';

function RootNavigation() {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
}

export default RootNavigation;
