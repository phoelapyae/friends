/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import globalStyles from '@styles/globalStyles';
import {teaser} from '@utils/index';

const data = new Array(20).fill({
  name: 'Nay Yaung Lin Lakk',
  avatar: '',
  lastSent: 'Yesterday',
  text: 'I am developing friends app now',
});

const {height} = Dimensions.get('window');

const screenTabItems = [
  {id: 1, title: 'All Messages', active: 1},
  {id: 2, title: 'Favourite', active: 0},
  {id: 3, title: 'Groups', active: 0},
];
const ChatScreen = ({navigation}) => {
  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('ChatRoomScreen')}
      style={[
        globalStyles.flexRow,
        globalStyles.justifySpaceBetween,
        globalStyles.flexRowAlignCenter,
        globalStyles.mb12,
      ]}>
      <View style={[globalStyles.flexRow, globalStyles.justifyFlexStart]}>
        <Image
          source={{
            uri: item.avatar
              ? item.avatar
              : 'https://envato-shoebox-0.imgix.net/8f00/9244-65d5-4144-8e64-a1c87e927e5e/DSC02545.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=500&s=bc2097abaf77d272ba8d3d84cae417f5',
          }}
          style={globalStyles.avatarMd}
        />
        <View
          style={[
            globalStyles.flexColumn,
            globalStyles.ml8,
            globalStyles.flexRowJustifyCenter,
          ]}>
          <Text style={[globalStyles.themeTextBold, globalStyles.mdText]}>
            {item.name}
          </Text>
          <Text style={globalStyles.themeTextLight}>
            {teaser(item.text, 27, '...')}
          </Text>
        </View>
      </View>

      {/* Bottom Slide up menu for profile */}
      <Text style={globalStyles.themeTextLight}>{item.lastSent}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="#12558a" />

      {/* Header */}
      <View style={styles.header}>
        <View style={[globalStyles.justifySpaceBetween, globalStyles.flexRow]}>
          <Text
            style={[
              globalStyles.themeTextBold,
              globalStyles.maxText,
              globalStyles.textWhite,
              globalStyles.mb12,
            ]}>
            Chat
          </Text>
          <View style={[globalStyles.flexRow]}>
            <TouchableOpacity style={globalStyles.mr12}>
              <Icon name="md-search-outline" color="#fff" size={20} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="md-notifications-outline" color="#fff" size={20} />
            </TouchableOpacity>
          </View>
        </View>
        {/* Render Screen Options Tab Here */}
        <View
          style={[
            globalStyles.justifyFlexStart,
            globalStyles.flexRow,
            globalStyles.mv10,
          ]}>
          {screenTabItems.map((item, i) => (
            <TouchableOpacity key={i}>
              <Text
                style={{
                  color: item.active === 1 ? '#12558a' : '#fff',
                  backgroundColor: item.active && '#fff',
                  fontFamily:
                    item.active === 1 ? 'Nunito-Bold' : 'Nunito-Regular',
                  borderRadius: 12,
                  paddingVertical: 6,
                  paddingHorizontal: 8,
                  marginRight: 12,
                }}>
                {item.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Header */}

      {/* Container */}
      <View style={styles.container}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            paddingHorizontal: 20,
            marginTop: 10,
          }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
      {/* Container */}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 0.15 * height,
    backgroundColor: '#12558a',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    padding: 10,
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  headerTitle: {
    fontSize: 20,
  },
  container: {
    flex: 1,
  },
});
export default ChatScreen;
