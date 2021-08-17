// screens
import WelcomeScreen from '@screens/WelcomeScreen';
import LoginScreen from '@screens/auth/Login';
import RegisterScreen from '@screens/auth/Register';

const NonAuthRoutes = [
  {name: WelcomeScreen, component: WelcomeScreen},
  {name: LoginScreen, component: LoginScreen},

  {name: RegisterScreen, component: RegisterScreen},
];

// const authRoutes = [{name: HomeScreen, component: HomeScreen}];

export {NonAuthRoutes};
