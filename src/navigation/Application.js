import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar, SafeAreaView, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NonAuthRoutes} from './routes';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Screens
import WelcomeScreen from '@screens/WelcomeScreen';
import LoginScreen from '@screens/auth/Login';
import RegisterScreen from '@screens/auth/Register';

import HomeScreen from '@screens/home/HomeScreen';

function HomeScreenTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Navigator>
  );
}

const Application = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {/* {NonAuthRoutes &&
            NonAuthRoutes.map((route, i) => (
              <React.Fragment key={i}>
                <Stack.Screen
                  name={route.name}
                  component={route.component}
                  options={{
                    animationEnabled: false,
                  }}
                />
              </React.Fragment>
            ))} */}

          <Stack.Screen
            name="WelcomeScreen"
            component={WelcomeScreen}
            options={{
              animationEnabled: false,
            }}
          />
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{
              animationEnabled: false,
            }}
          />

          <Stack.Screen
            name="RegisterScreen"
            component={RegisterScreen}
            options={{
              animationEnabled: false,
            }}
          />

          <Stack.Screen
            name="HomeScreenTabs"
            component={HomeScreenTabs}
            options={{
              animationEnabled: false,
            }}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
});

export default Application;
