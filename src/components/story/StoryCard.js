import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import gStyles from '@/theme';
import Icon from 'react-native-vector-icons/Ionicons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import moment from 'moment';
/**
 * This Component is used in homescreen as story card
 */
const StoryCard = ({navigation, stories}) => {
  console.log('story card', stories);
  const renderFirstReactBtn = reactType => {
    switch (reactType.type) {
      case 'love':
        return (
          <TouchableOpacity style={[styles.flexRow, styles.loveReactionBtn]}>
            <Icon name="ios-heart" size={17} color="white" />

            <Text style={styles.reactBtnText}>{reactType.count}</Text>
          </TouchableOpacity>
        );
      case 'wow':
        return (
          <TouchableOpacity style={[styles.flexRow, styles.starReactionBtn]}>
            <Icon name="md-star" size={17} color="white" />

            <Text style={styles.reactBtnText}>36</Text>
          </TouchableOpacity>
        );
      case 'peaceful':
        return (
          <TouchableOpacity style={[styles.flexRow, styles.LinkReactionBtn]}>
            <EntypoIcon name="emoji-flirt" size={17} color="white" />

            <Text style={styles.reactBtnText}>36</Text>
          </TouchableOpacity>
        );
    }
  };

  const renderSecondReactBtn = reactType => {
    switch (reactType.type) {
      case 'love':
        return (
          <TouchableOpacity style={[styles.flexRow, styles.secondaryReactBtn]}>
            <Icon name="ios-heart" size={17} color="red" />

            <Text style={styles.secondaryReactBtnText}>{reactType.count}</Text>
          </TouchableOpacity>
        );
      case 'wow':
        return (
          <TouchableOpacity style={[styles.flexRow, styles.secondaryReactBtn]}>
            <Icon name="md-star" size={17} color="#fbba08" />

            <Text style={styles.secondaryReactBtnText}>36</Text>
          </TouchableOpacity>
        );
      case 'peaceful':
        return (
          <TouchableOpacity style={[styles.flexRow, styles.secondaryReactBtn]}>
            <EntypoIcon name="emoji-flirt" size={17} color="#3972d3" />

            <Text style={styles.secondaryReactBtnText}>36</Text>
          </TouchableOpacity>
        );
    }
  };

  return (
    <React.Fragment>
      {stories &&
        stories.map(story => (
          <View key={story.key} style={styles.card}>
            <View style={styles.profileRow}>
              {/* <Image source={{uri: story.profileSrc}} style={styles.avatar} /> */}

              <View style={styles.profile}>
                <Text style={styles.fullName}>{story.user.fullName}</Text>
                <Text style={styles.dateTimeText}>
                  {moment(story.createdAt).fromNow()}
                </Text>
              </View>
            </View>
            {story.imageSrc && (
              <View style={styles.cardImgProvider}>
                <Image source={{uri: story.imageSrc}} style={styles.cardImg} />
              </View>
            )}

            <View style={styles.content}>
              <Text style={styles.contentText}>{story.content}</Text>
            </View>
            <View style={styles.reactionRow}>
              {/* <View style={styles.flexRow}>
                {story.reaction[0] && renderFirstReactBtn(story.reaction[0])}
                {story.reaction[1] && renderSecondReactBtn(story.reaction[1])}
              </View> */}
              <TouchableOpacity
                style={styles.visitBtn}
                onPress={() => navigation.navigate('FeedDetailScreen')}>
                <Text style={styles.visitText}>View</Text>
                <Icon name="chevron-forward" size={17} color="#333" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: 12,
    paddingHorizontal: 20,
  },
  profile: {
    marginLeft: 8,
  },
  cardImgProvider: {
    shadowColor: '#F0F0F0',
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.5,
    shadowRadius: 100,
    elevation: 20,
    paddingHorizontal: 20,
  },
  cardImg: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
    borderRadius: 20,
  },
  content: {
    paddingVertical: 12,
    paddingHorizontal: 20,
  },

  fullName: {
    fontFamily: 'Nunito-Bold',
    fontSize: 16,
  },
  dateTimeText: {
    fontFamily: 'Nunito-Light',
    color: '#ddd',
    opacity: 0.7,
  },
  contentText: {
    fontFamily: 'Nunito-Regular',
  },

  reactionRow: {
    paddingHorizontal: 12,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  LinkReactionBtn: {
    backgroundColor: '#3972d3',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  reactBtnText: {
    color: 'white',
    fontFamily: 'Nunito-Bold',
    paddingLeft: 8,
  },
  secondaryReactBtn: {
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginLeft: 6,
  },
  secondaryReactBtnText: {
    color: gStyles.primaryColor,
    fontFamily: 'Nunito-Bold',
    paddingLeft: 8,
  },
  visitBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  visitText: {
    fontFamily: 'Nunito-Regular',
  },

  // reaction
  starReactionBtn: {
    backgroundColor: '#fbba08',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  loveReactionBtn: {
    backgroundColor: 'red',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
export default StoryCard;
