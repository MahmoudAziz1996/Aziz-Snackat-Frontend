import {SafeAreaView} from 'react-native';
import React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import HomeScreen from './src/screens/HomeStory';

const queryClient = new QueryClient();

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <QueryClientProvider client={queryClient}>
        <HomeScreen />
      </QueryClientProvider>
    </SafeAreaView>
  );
};

export default App;
