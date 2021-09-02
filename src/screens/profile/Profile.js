import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import globalStyles from '../../styles/globalStyles';
import gTheme from '@/theme';
import Icon from 'react-native-vector-icons/Ionicons';
import {useAuth} from '@hooks/useAuth';
import Menu, {
  MenuOptions,
  MenuOption,
  MenuTrigger,
  renderers,
} from 'react-native-popup-menu';

const {SlideInMenu} = renderers;

const YourComponent = ({selectNumber}) => (
  <Menu
    name="numbers"
    renderer={SlideInMenu}
    onSelect={value => selectNumber(value)}>
    <MenuTrigger style={styles.trigger}>
      <TouchableOpacity>
        <Icon name="md-ellipsis-vertical" color="#333" size={19} />
      </TouchableOpacity>
    </MenuTrigger>
    <MenuOptions
      customStyles={{
        optionText: [styles.menuItemText, styles.slideInOption],
      }}>
      <MenuOption value={1} text="Edit" />
      <MenuOption value={2} text="Setting" />
      <MenuOption value={3} text="Option three" />
      <MenuOption value={4} text="Option four" />
      {null /* conditional not rendered option */}
      <MenuOption value={5} text="Logout" />
    </MenuOptions>
  </Menu>
);

const Profile = ({navigation}) => {
  const {auth} = useAuth();

  const onOptionSelect = value => {
    const v = typeof value === 'object' ? JSON.stringify(value) : value;
    return value !== 'Do not close';
  };

  const selectNumber = value => {
    console.log('selecting number', value);
  };

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
          <View style={[globalStyles.flexRow, globalStyles.justifyFlexStart]}>
            <Image
              source={{
                uri: 'https://envato-shoebox-0.imgix.net/8f00/9244-65d5-4144-8e64-a1c87e927e5e/DSC02545.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=500&s=bc2097abaf77d272ba8d3d84cae417f5',
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
                Nay Yaung Lin Lakk
              </Text>
              <Text style={globalStyles.themeTextLight}>
                <Icon name="location" color="#ddd" size={19} />
                Yangon
              </Text>
            </View>
          </View>

          <YourComponent selectNumber={selectNumber} />
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
        <View style={styles.bio}>
          <Text style={globalStyles.themeText}>
            19 yo | Professional Web developer {'\n'}3 years experience {'\n'}
            Contact to me -{' '}
            <Text style={globalStyles.themeColorText}>
              nayyaung.developer@gmail.com
            </Text>
          </Text>
        </View>
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

        <TouchableOpacity
          style={[styles.followBtn, globalStyles.mv10]}
          onPress={() => auth.logout()}>
          <Text
            style={[
              globalStyles.themeTextBold,
              globalStyles.textAlignCenter,
              globalStyles.textWhite,
            ]}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
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

  trigger: {
    padding: 5,
    margin: 5,
  },
  triggerText: {
    color: 'white',
  },
  disabled: {
    color: '#ccc',
  },
  divider: {
    marginVertical: 5,
    marginHorizontal: 2,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },

  slideInOption: {
    padding: 5,
  },
  menuItemText: {
    fontSize: 18,
    fontFamily: 'Nunito-Regular',
  },
});
export default Profile;
