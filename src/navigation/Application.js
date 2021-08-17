import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar, SafeAreaView, StyleSheet} from 'react-native';

const Stack = createStackNavigator();

// screens
import WelcomeScreen from '@screens/WelcomeScreen';
import LoginScreen from '@screens/auth/Login';
import RegisterScreen from '@screens/auth/Register';

const Application = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <Stack.Navigator screenOptions={{headerShown: false}}>
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
