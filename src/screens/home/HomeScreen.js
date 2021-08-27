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
import {storyStore} from '@store/storyStore';

const HomeScreen = ({navigation}) => {
  const fetchStories = storyStore(state => state.fetchStories);
  const stories = storyStore(state => state.stories);

  React.useEffect(() => {
    fetchStories();
  }, []);

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
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <StoryCard navigation={navigation} stories={stories} />
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
    backgroundColor: '#f0f2f5',
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
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
