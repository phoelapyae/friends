import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import ApplicationNavigator from '@/navigation/Application';
import {LogBox, Platform} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {MenuProvider} from 'react-native-popup-menu';
import {QueryClient, QueryClientProvider} from 'react-query';
import Geolocation from 'react-native-geolocation-service';
import {check, PERMISSIONS, RESULTS, request} from 'react-native-permissions';
import {NativeBaseProvider} from 'native-base';

LogBox.ignoreLogs([
  'VirtualizedLists should never be nested',
  'Setting a timer',
  'Did not retain recoil value on render',
]);

const queryClient = new QueryClient();

function trackLocation() {
  Geolocation.watchPosition(
    position => {
      // send it to server
      console.log(position);
    },
    error => {
      console.log(error.code, error.message);
    },
    // change the interval before publishing app
    {
      enableHighAccuracy: true,
      interval: 3000,
      fastestInterval: 3000,
      showLocationDialog: true,
      forceRequestLocation: true,
    },
  );
}

function requestPermission() {
  request(
    Platform.OS == 'ios'
      ? PERMISSIONS.IOS.LOCATION_ALWAYS
      : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
  ).then(result => {
    console.log('permission result', result);
    if (result == RESULTS.GRANTED) {
      trackLocation();
    }
  });
}

const App = () => {
  useEffect(() => {
    check(
      Platform.OS == 'ios'
        ? PERMISSIONS.IOS.LOCATION_ALWAYS
        : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
    )
      .then(result => {
        if (result == RESULTS.GRANTED) {
          trackLocation();
        } else {
          console.log('permission not given', result);
          requestPermission();
        }
      })
      .catch(error => {
        console.log({error});
      });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <NativeBaseProvider>
          <MenuProvider>
            <ApplicationNavigator />
          </MenuProvider>
        </NativeBaseProvider>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
};

export default App;
