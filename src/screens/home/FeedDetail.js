import React from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import globalStyles from '@styles/globalStyles';
import {useQuery} from 'react-query';
import {fetchStoryById} from '@hooks/useStory';

const FeedDetail = ({route, navigation}) => {
  const {id} = route.params;

  const {
    isLoading,
    isError,
    data: story,
  } = useQuery(['storyById', id], fetchStoryById, {
    // The query will not execute until the userId exists
    enabled: !!id,
  });

  return (
    <View style={styles.root}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack(null)}>
          <Icon name="md-chevron-back" size={30} />
        </TouchableOpacity>
        {isLoading ? (
          <Text>Loading...</Text>
        ) : (
          <Text
            style={[globalStyles.themeTextBold, globalStyles.mdText]}
            numberOfLines={1}>
            {story.user.fullName}
          </Text>
        )}
      </View>
      <View style={styles.container}>
        {isLoading ? (
          <Text>Loading...</Text>
        ) : isError ? (
          <Text>Error</Text>
        ) : (
          <ScrollView showsVerticalScrollIndicator={false}>
            {story.coverPhoto && (
              <Image source={{uri: story.coverPhoto}} style={styles.cardImg} />
            )}
            <View style={styles.content}>
              <Text style={styles.contentText}>{story.content}</Text>
            </View>
          </ScrollView>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  container: {
    paddingHorizontal: 12,
    marginTop: 12,
  },
  cardImg: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 20,
  },
  content: {
    paddingTop: 12,
    paddingBottom: 50,
  },
  contentText: {
    fontFamily: 'Nunito-Regular',
  },
});
export default FeedDetail;
