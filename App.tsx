import React from 'react';
import {SafeAreaView} from 'react-native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import RootNavigation from './src/routes';
import {Provider} from 'react-redux';
import store from './src/redux/store';

const queryClient = new QueryClient();

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <RootNavigation />
        </QueryClientProvider>
      </Provider>
    </SafeAreaView>
  );
};

export default App;
