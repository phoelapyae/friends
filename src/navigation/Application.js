import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar, SafeAreaView, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NonAuthRoutes, BottomAuthRoutes, AuthStackRoutes} from './routes';
import Icon from 'react-native-vector-icons/Ionicons';
import {useAuth} from '@store/useAuth';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

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
  const isAuth = useAuth(state => state.isAuth);

  console.log('isAuth', isAuth);
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          {Object.keys(isAuth).length < 1 ? (
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
