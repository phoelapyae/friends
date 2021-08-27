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
  const renderFirstReactBtn = reactType => {
    switch (reactType.type) {
      case 'love':
        return (
          <TouchableOpacity style={[styles.flexRow, styles.loveReactionBtn]}>
            <Icon name="ios-heart" size={17} color="white" />

            <Text style={styles.reactBtnText}>100</Text>
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

  const profileDefaultImg =
    'https://images.unsplash.com/photo-1608889175123-8ee362201f81?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80';
  const imageSrc =
    'https://envato-shoebox-0.imgix.net/72a9/db87-232b-459e-afd7-007e5328fff9/Sam_Kladska_18-06-19_165_retus_final2.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=800&s=e2982ec7f2d92a11fceb3fb2ba47cdb4';
  return (
    <React.Fragment>
      {stories &&
        stories.map(story => (
          <View key={story._id} style={styles.card}>
            <View style={styles.profileRow}>
              <Image
                source={{
                  uri: story.user.avatar
                    ? story.user.avatar
                    : profileDefaultImg,
                }}
                style={styles.avatar}
              />

              <View style={styles.profile}>
                <Text style={styles.fullName}>{story.user.fullName}</Text>
                <Text style={styles.dateTimeText}>
                  {moment(story.createdAt).fromNow()}
                </Text>
              </View>
            </View>
            {/* {story.imageSrc && (
              <View style={styles.cardImgProvider}>
                <Image source={{uri: story.imageSrc}} style={styles.cardImg} />
              </View>
            )} */}
            <View style={styles.cardImgProvider}>
              <Image source={{uri: imageSrc}} style={styles.cardImg} />
            </View>

            <View style={styles.content}>
              <Text style={styles.contentText}>{story.content}</Text>
            </View>
            <View style={styles.reactionRow}>
              {/* <View style={styles.flexRow}>
                {story.reaction[0] && renderFirstReactBtn(story.reaction[0])}
                {story.reaction[1] && renderSecondReactBtn(story.reaction[1])}
              </View> */}
              <View style={styles.flexRow}>
                {renderFirstReactBtn({type: 'love'})}
                {renderSecondReactBtn({type: 'wow'})}
              </View>
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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.1,
    shadowRadius: 100,
    elevation: 10,
    paddingHorizontal: 20,
  },
  cardImg: {
    width: '100%',
    height: 200,
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
    color: '#333',
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
    width: 60,
    height: 26,
  },
  loveReactionBtn: {
    backgroundColor: 'red',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 26,
  },
});
export default StoryCard;
