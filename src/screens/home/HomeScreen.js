import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import StoryCard from '@components/story/StoryCard';
import gStyles from '@/theme';
import Icon from 'react-native-vector-icons/Ionicons';
import globalStyles from '@styles/globalStyles';
import StorySkeleton from '@components/skeleton/StorySkeleton';

import {useQuery} from 'react-query';
import {fetchStories} from '@hooks/useStory';
import {fetchProfile} from '@hooks/useProfile';

const HomeScreen = ({navigation}) => {
  const {
    isLoading,
    isError,
    data: stories,
    refetch,
  } = useQuery('stories', fetchStories);

  const {
    isLoading: profileLoading,
    isError: profileError,
    data: me,
  } = useQuery('profile', fetchProfile);

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
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
        {isLoading && profileLoading ? (
          <React.Fragment>
            <StorySkeleton />
            <StorySkeleton />
            <StorySkeleton />
          </React.Fragment>
        ) : isError ? (
          <View style={styles.errorLayout}>
            <Text style={globalStyles.errorText}>
              There was an error. Turn wifi or VPN on and off.
            </Text>
          </View>
        ) : (
          <ScrollView
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
            <StoryCard navigation={navigation} stories={stories} me={me} />
          </ScrollView>
        )}

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
    right: 20,
    bottom: 20,
    borderRadius: 100,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 100,
    elevation: 4,
  },
  errorLayout: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
export default HomeScreen;
