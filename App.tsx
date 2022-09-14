import {SafeAreaView} from 'react-native';
import React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import CartScreen from './src/screens/CartStory';

const queryClient = new QueryClient();

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <QueryClientProvider client={queryClient}>
        <CartScreen />
      </QueryClientProvider>
    </SafeAreaView>
  );
};

export default App;
