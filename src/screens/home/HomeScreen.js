import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import StoryCard from '@components/story/StoryCard';
import gStyles from '@/theme';
import Icon from 'react-native-vector-icons/Ionicons';
import globalStyles from '@styles/globalStyles';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.root}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <View
        style={[
          styles.header,
          globalStyles.justifySpaceBetween,
          globalStyles.flexRow,
        ]}>
        <Text style={[globalStyles.themeTextBold, globalStyles.lgText]}>
          Friends
        </Text>
        <TouchableOpacity>
          <Icon name="md-notifications-outline" color="#333" size={20} />
        </TouchableOpacity>
      </View>
      <View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <StoryCard navigation={navigation} />
        </ScrollView>

        {/* Fab for Story Create */}
        <TouchableOpacity
          style={styles.storyCreateBtn}
          onPress={() => navigation.navigate('StoryCreateScreen')}>
          <Icon name="md-add" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom: 30,
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#fff',
  },

  storyCreateBtn: {
    backgroundColor: gStyles.primaryColor,
    position: 'absolute',
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
    borderRadius: 100,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 100,
    elevation: 4,
  },
});
export default HomeScreen;
