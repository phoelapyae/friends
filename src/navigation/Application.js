import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar, SafeAreaView, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NonAuthRoutes, BottomAuthRoutes, AuthStackRoutes} from './routes';
import Icon from 'react-native-vector-icons/Ionicons';
import {useAuth} from '@libs/useAuth';
import {ThemeContext} from '@/libs/ThemeProvider';
import gStyles from '@/theme';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const screenOptions = (route, color, focused) => {
  let iconName;
  switch (route.name) {
    case 'HomeScreen':
      iconName = 'md-home-outline';
      break;
    case 'FriendMap':
      iconName = 'map-outline';
      break;
    case 'ChatScreen':
      iconName = 'chatbubbles-outline';
      break;
    case 'ProfileScreen':
      iconName = 'md-person-outline';
      break;
    default:
      break;
  }

  return <Icon name={iconName} color={focused ? gStyles.primaryColor : color} size={24} />;
};

function HomeScreenTabs() {
  const {dark, theme, toggle} = useContext(ThemeContext);

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: theme.backgroundColor,
        },
        tabBarIcon: ({color, focused}) => screenOptions(route, color, focused),
      })}>
      {BottomAuthRoutes &&
        BottomAuthRoutes.map(bRoute => (
          <Tab.Screen
            name={bRoute.name}
            component={bRoute.component}
            key={bRoute.name}
          />
        ))}
    </Tab.Navigator>
  );
}

const Application = () => {

  const {authState} = useAuth();
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
       
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          {!authState.token ? (
            <React.Fragment>
              {NonAuthRoutes &&
                NonAuthRoutes.map(route => (
                  <Stack.Screen
                    key={route.name}
                    name={route.name}
                    component={route.component}
                    options={{
                      animationEnabled: false,
                    }}
                  />
                ))}
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Stack.Screen
                name="HomeScreenTabs"
                component={HomeScreenTabs}
                options={{
                  animationEnabled: false,
                }}
              />
              {AuthStackRoutes.map(asRoute => (
                <Stack.Screen
                  key={asRoute.name}
                  name={asRoute.name}
                  component={asRoute.component}
                  options={{
                    animationEnabled: false,
                  }}
                />
              ))}
            </React.Fragment>
          )}
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
