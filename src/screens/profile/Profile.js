import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import globalStyles from '@styles/globalStyles';
import StoryCard from '@components/story/StoryCard';
import gTheme from '@/theme';
import Icon from 'react-native-vector-icons/Ionicons';
import {useAuth} from '@hooks/useAuth';
import Menu, {
  MenuOptions,
  MenuOption,
  MenuTrigger,
  renderers,
} from 'react-native-popup-menu';
import {useQuery} from 'react-query';
import {fetchStories} from '@hooks/useStory';
import {fetchProfile} from '@hooks/useProfile';

const {SlideInMenu} = renderers;

const SlideMenu = ({navigation, auth}) => (
  <Menu name="numbers" renderer={SlideInMenu}>
    <MenuTrigger>
      <Icon name="md-ellipsis-vertical" color="#333" size={19} />
    </MenuTrigger>
    <MenuOptions
      customStyles={{
        optionText: [globalStyles.menuItemText, globalStyles.slideInOption],
      }}>
      <MenuOption
        onSelect={() => navigation.navigate('ProfileEdit')}
        value="edit"
        text="Edit"
      />
      <MenuOption value={2} text="Setting" />
      <MenuOption value={3} text="Option three" />
      <MenuOption value={4} text="Option four" />
      {null /* conditional not rendered option */}
      <MenuOption value="logout" onSelect={() => auth.logout()} text="Logout" />
    </MenuOptions>
  </Menu>
);

const Profile = ({navigation}) => {
  const {auth} = useAuth();

  const {isLoading, isError, data: stories} = useQuery('stories', fetchStories);

  const {
    isLoading: profileLoading,
    isError: profileError,
    data: me,
  } = useQuery('profile', fetchProfile);

  return (
    <View style={styles.root}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <View style={[styles.container, globalStyles.mt5]}>
        <View
          style={[
            globalStyles.flexRow,
            globalStyles.justifySpaceBetween,
            globalStyles.flexRowAlignCenter,
          ]}>
          {profileLoading ? (
            <Text>Loading</Text>
          ) : (
            <View style={[globalStyles.flexRow, globalStyles.justifyFlexStart]}>
              <Image
                source={{
                  uri: me.avatar
                    ? me.avatar
                    : 'https://envato-shoebox-0.imgix.net/8f00/9244-65d5-4144-8e64-a1c87e927e5e/DSC02545.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=500&s=bc2097abaf77d272ba8d3d84cae417f5',
                }}
                style={globalStyles.avatarNm}
              />
              <View
                style={[
                  globalStyles.flexColumn,
                  globalStyles.ml8,
                  globalStyles.flexRowJustifyCenter,
                ]}>
                <Text style={[globalStyles.themeTextBold, globalStyles.lgText]}>
                  {me.fullName}
                </Text>
                <Text style={globalStyles.themeTextLight}>
                  <Icon name="location" color="#ddd" size={19} />
                  Yangon
                </Text>
              </View>
            </View>
          )}

          {/* Bottom Slide up menu for profile */}
          <SlideMenu navigation={navigation} auth={auth} />
        </View>

        {/* Profile Data */}
        <View
          style={[
            globalStyles.flexRow,
            globalStyles.justifySpaceBetween,
            globalStyles.mv10,
          ]}>
          <View style={globalStyles.flexColumn}>
            <Text style={[globalStyles.themeTextLight]}>Likes</Text>
            <Text
              style={[
                globalStyles.themeTextBold,
                globalStyles.textAlignCenter,
              ]}>
              34
            </Text>
          </View>
          <View style={globalStyles.flexColumn}>
            <Text style={[globalStyles.themeTextLight]}>Followers</Text>
            <Text
              style={[
                globalStyles.themeTextBold,
                globalStyles.textAlignCenter,
              ]}>
              1 K
            </Text>
          </View>
          <View style={globalStyles.flexColumn}>
            <Text style={[globalStyles.themeTextLight]}>Followings</Text>
            <Text
              style={[
                globalStyles.themeTextBold,
                globalStyles.textAlignCenter,
              ]}>
              140
            </Text>
          </View>
        </View>
        {/* Profile Data */}

        {/* Profile Bio */}
        {profileLoading ? (
          <Text>Loading</Text>
        ) : (
          <View style={styles.bio}>
            {me.bio && <Text style={globalStyles.themeText}>{me.bio}</Text>}
          </View>
        )}

        {/* Profile Bio */}

        <TouchableOpacity style={styles.followBtn}>
          <Text
            style={[
              globalStyles.themeTextBold,
              globalStyles.textAlignCenter,
              globalStyles.textWhite,
            ]}>
            Follow
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <StoryCard navigation={navigation} stories={stories} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    paddingHorizontal: 20,
  },
  bio: {
    marginVertical: 12,
  },
  followBtn: {
    backgroundColor: gTheme.primaryColor,
    borderRadius: 20,
    padding: 14,
  },
});
export default Profile;
