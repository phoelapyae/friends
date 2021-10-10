import React from 'react';
import {StatusBar, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useAuth} from '@libs/useAuth';
import {useQuery} from 'react-query';
import {fetchProfile} from '@libs/query';
import {Box, Avatar, Text} from 'native-base';

const Profile = ({navigation}) => {
  const {
    isLoading: profileLoading,
    isError: profileError,
    data: me,
  } = useQuery('profile', fetchProfile);

  return (
    <Box flex={1} bg="#fff">
      <StatusBar barStyle="dark-content" backgroundColor="white" />

      <Box flexDir="row" alignItems="center" m={3}>
        <Avatar
          size="md"
          source={{
            uri: me.avatar
              ? me.avatar
              : 'https://envato-shoebox-0.imgix.net/8f00/9244-65d5-4144-8e64-a1c87e927e5e/DSC02545.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=500&s=bc2097abaf77d272ba8d3d84cae417f5',
          }}
        />
        <Text ml={3}>
          {profileLoading ? <Text>Loading...</Text> : me.fullName}
        </Text>
      </Box>
    </Box>
  );
};

export default Profile;
