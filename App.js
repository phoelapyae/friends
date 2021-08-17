import 'react-native-gesture-handler';
import React from 'react';
import ApplicationNavigator from '@/navigation/Application';
import {LogBox} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

LogBox.ignoreLogs([
  'VirtualizedLists should never be nested',
  'Setting a timer',
  'Did not retain recoil value on render',
]);

const App = () => {
  return (
    <SafeAreaProvider>
      <ApplicationNavigator />
    </SafeAreaProvider>
  );
};

export default App;
