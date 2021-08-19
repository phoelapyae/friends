import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar, SafeAreaView, StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NonAuthRoutes} from './routes';
import gStyles from '@/theme';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Screens
import WelcomeScreen from '@screens/WelcomeScreen';
import LoginScreen from '@screens/auth/Login';
import RegisterScreen from '@screens/auth/Register';

import HomeScreen from '@screens/home/HomeScreen';
import FriendMap from '@screens/friends/FriendMap';
import ChatScreen from '@screens/chat/Chat';
import ProfileScreen from '@screens/profile/Profile';
import FeedDetailScreen from '@screens/home/FeedDetail';

import Icon from 'react-native-vector-icons/Ionicons';

const screenOptions = (route, color) => {
  let iconName;

  switch (route.name) {
    case 'Home':
      iconName = 'md-home-outline';
      break;
    case 'Map':
      iconName = 'map-outline';
      break;
    case 'Chat':
      iconName = 'chatbubbles-outline';
      break;
    case 'Profile':
      iconName = 'md-person-outline';
      break;
    default:
      break;
  }

  return <Icon name={iconName} color={color} size={24} />;
};

function HomeScreenTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,

        tabBarIcon: ({color}) => screenOptions(route, color),
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Map" component={FriendMap} />
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const Application = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
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

          {/* <Stack.Screen
            name="WelcomeScreen"
            component={WelcomeScreen}
            options={{
              animationEnabled: false,
            }}
          /> */}
          {/* <Stack.Screen
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
          /> */}

          <Stack.Screen
            name="HomeScreenTabs"
            component={HomeScreenTabs}
            options={{
              animationEnabled: false,
            }}
          />
          <Stack.Screen
            name="FeedDetailScreen"
            component={FeedDetailScreen}
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
