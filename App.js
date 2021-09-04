import 'react-native-gesture-handler';
import React from 'react';
import ApplicationNavigator from '@/navigation/Application';
import {LogBox} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {MenuProvider} from 'react-native-popup-menu';
import {QueryClient, QueryClientProvider} from 'react-query';

LogBox.ignoreLogs([
  'VirtualizedLists should never be nested',
  'Setting a timer',
  'Did not retain recoil value on render',
]);

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <MenuProvider>
          <ApplicationNavigator />
        </MenuProvider>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
};

export default App;
