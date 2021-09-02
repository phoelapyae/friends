import 'react-native-gesture-handler';
import React from 'react';
import ApplicationNavigator from '@/navigation/Application';
import {LogBox} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {MenuProvider} from 'react-native-popup-menu';

LogBox.ignoreLogs([
  'VirtualizedLists should never be nested',
  'Setting a timer',
  'Did not retain recoil value on render',
]);

const App = () => {
  return (
    <SafeAreaProvider>
      <MenuProvider>
        <ApplicationNavigator />
      </MenuProvider>
    </SafeAreaProvider>
  );
};

export default App;
