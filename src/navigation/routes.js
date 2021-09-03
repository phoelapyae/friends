// screens
import WelcomeScreen from '@screens/WelcomeScreen';
import LoginScreen from '@screens/auth/Login';
import RegisterScreen from '@screens/auth/Register';

import HomeScreen from '@screens/home/HomeScreen';
import FriendMap from '@screens/friends/FriendMap';
import ChatScreen from '@screens/chat/Chat';
import ProfileScreen from '@screens/profile/Profile';
import FeedDetailScreen from '@screens/home/FeedDetail';
import StoryCreateScreen from '@screens/home/story/StoryCreateScreen';
import ProfileEdit from '@screens/profile/ProfileEdit';

const NonAuthRoutes = [
  {name: 'WelcomeScreen', component: WelcomeScreen},
  {name: 'LoginScreen', component: LoginScreen},

  {name: 'RegisterScreen', component: RegisterScreen},
];

const BottomAuthRoutes = [
  {name: 'HomeScreen', component: HomeScreen},
  {name: 'FriendMap', component: FriendMap},
  {name: 'ChatScreen', component: ChatScreen},
  {name: 'ProfileScreen', component: ProfileScreen},
];

const AuthStackRoutes = [
  {name: 'FeedDetailScreen', component: FeedDetailScreen},
  {name: 'StoryCreateScreen', component: StoryCreateScreen},
  {name: 'ProfileEdit', component: ProfileEdit},
];

export {NonAuthRoutes, BottomAuthRoutes, AuthStackRoutes};
