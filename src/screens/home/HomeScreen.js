import React, {useContext} from 'react';
import {
  StyleSheet,
  View,
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
import {ThemeContext} from '@/libs/ThemeProvider';
import {Text, Box, HStack} from 'native-base';

import {useQuery} from 'react-query';
import {fetchStories, fetchProfile} from '@libs/query';

const HomeScreen = ({navigation}) => {
  const {dark, theme} = useContext(ThemeContext);

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
    <Box flex={1} bg={theme.secondaryColor}>
      <StatusBar
        animated
        barStyle={dark ? 'light-content' : 'dark-content'}
        backgroundColor={theme.backgroundColor}
      />
      <Box
        bg={theme.backgroundColor}
        flexDir="row"
        alignItems="center"
        justifyContent="space-between"
        px={2}
        py={4}>
        <Text color={theme.color} fontSize="xl" fontFamily="Nunito-SemiBold">
          Friends
        </Text>
        <HStack space={5}>
          <TouchableOpacity>
            <Icon
              name="md-search-outline"
              color={theme.color}
              size={20}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
              name="md-notifications-outline"
              color={theme.color}
              size={20}
            />
          </TouchableOpacity>
        </HStack>
      </Box>
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
    </Box>
  );
};

const styles = StyleSheet.create({
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
