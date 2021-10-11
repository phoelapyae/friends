import React, {useContext} from 'react';
import {StatusBar, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useQuery} from 'react-query';
import {fetchProfile} from '@libs/query';
import {Text, Box, Avatar, HStack} from 'native-base';
import {ThemeContext} from '@/libs/ThemeProvider';

const Profile = ({navigation}) => {
  const {dark, theme, toggle} = useContext(ThemeContext);

  const {
    isLoading: profileLoading,
    isError: profileError,
    data: me,
  } = useQuery('profile', fetchProfile);

  return (
    <Box flex={1} bg={theme.backgroundColor}>
      <StatusBar
        animated
        barStyle={dark ? 'light-content' : 'dark-content'}
        backgroundColor={theme.backgroundColor}
      />

      <Box flexDir="row" alignItems="center" m={3}>
        {me.avatar ? (
          <Avatar
            size="md"
            source={{
              uri: me.avatar,
            }}
          />
        ) : (
          <Avatar
            size="md"
            source={require('@assets/images/default-profile-image.png')}
          />
        )}

        <Text ml={3} color={dark ? '#fff' : '#000'}>
          {profileLoading ? <Text>Loading...</Text> : me.fullName}
        </Text>
      </Box>

      <TouchableOpacity onPress={toggle}>
        <Box
          p={3}
          mb={4}
          flexDir="row"
          alignItems="center"
          justifyContent="space-between">
          <HStack>
            <Icon
              color={dark ? 'white' : 'gray'}
              size={20}
              name={dark ? 'md-moon' : 'md-sunny'}
            />
            <Text pl={3} color={dark ? '#fff' : '#000'}>
              Dark Mode
            </Text>
          </HStack>
        </Box>
      </TouchableOpacity>

      {profileMenuItems.map((item, i) => (
        <TouchableOpacity
          key={i}
          onPress={() =>
            item.id == 0 ? signout() : navigation.navigate(item.href)
          }>
          <Box
            p={3}
            mb={4}
            flexDir="row"
            alignItems="center"
            justifyContent="space-between">
            <HStack>
              <Icon name={item.icon} size={22} color={dark ? '#fff' : 'gray'} />
              <Text pl={3} color={dark ? '#fff' : '#000'}>
                {item.name}
              </Text>
            </HStack>
          </Box>
        </TouchableOpacity>
      ))}
    </Box>
  );
};

const profileMenuItems = [
  {
    id: 2,
    name: 'Saved Posts',
    lang_id: 'saved_post_text',
    href: 'Saved',
    icon: 'md-bookmark',
  },
  {
    id: 3,
    name: 'Languages',
    href: 'LanguageChangeScreen',
    lang_id: 'lang_text',
    icon: 'md-language',
  },
  // {
  //   id: 0,
  //   name: 'Logout',
  //   href: 'GuestLogin',
  //   lang_id: 'logout_text',
  //   icon: 'md-log-out',
  // },
];

export default Profile;
