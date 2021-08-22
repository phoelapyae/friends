import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import gStyles from '@/theme';
import Icon from 'react-native-vector-icons/Ionicons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import globalStyles from '@styles/globalStyles';

const HomeScreen = ({navigation}) => {
  let items = [
    {
      key: 1,
      content:
        'Friends ဆိုတဲ့ App လေးတစ်ခုရေးနေတယ်ဗျ။ ပါမယ့် Feature တွေက \n Real time chatting ရယ်၊\n nearby friends ရှာတာရယ်၊\n post တွေတင်လိုရတာရယ်ပေါ့ \n\n Backend ကတော့ Nodejs ကိုသုံးထားတယ်။ Database က Mongo ပေါ့။ app ကတော့ React Native နဲ့ရေးထားပါတယ်။',
      imageSrc:
        'https://res.cloudinary.com/dcx5aeaaz/image/upload/v1629632563/IMG_20210822_175737_919_z2tddy.jpg',
      profileSrc:
        'https://envato-shoebox-0.imgix.net/8f00/9244-65d5-4144-8e64-a1c87e927e5e/DSC02545.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=500&s=bc2097abaf77d272ba8d3d84cae417f5',
      fullName: 'Mr, Smiith',
      createDate: '3 days ago',
      reaction: [
        {type: 'wow', count: 50},
        {type: 'love', count: 20},
      ],
    },
    {
      key: 2,
      content: 'Check out my new work',
      profileSrc:
        'https://envato-shoebox-0.imgix.net/8f00/9244-65d5-4144-8e64-a1c87e927e5e/DSC02545.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=500&s=bc2097abaf77d272ba8d3d84cae417f5',
      imageSrc:
        'https://envato-shoebox-0.imgix.net/381b/1994-9ac0-4a57-b65c-315e22aec13a/lyubimovka+26_1+.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=800&s=6ec3390abc4991c96bdcddfdb774114a',

      fullName: 'Mr, Smiith',
      createDate: '3 days ago',
      reaction: [
        {type: 'love', count: 35},
        {type: 'peaceful', count: 15},
      ],
    },
    {
      key: 3,
      content: 'Look! It really cool.',
      profileSrc:
        'https://envato-shoebox-0.imgix.net/8f00/9244-65d5-4144-8e64-a1c87e927e5e/DSC02545.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=500&s=bc2097abaf77d272ba8d3d84cae417f5',
      imageSrc:
        'https://envato-shoebox-0.imgix.net/6511/44e4-1042-46cf-ad26-c236b80328ce/Village+in+Palawan_190609160638_0.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=800&s=0983214819c141162075a652935217e0',

      fullName: 'Mr, Smiith',
      createDate: '3 days ago',
      reaction: [
        {type: 'peaceful', count: 8},
        {type: 'love', count: 37},
      ],
    },
    {
      key: 4,
      content:
        'We have travelled alot in amazaon forest!. But we had such a great thing, This cound never forget in my life!',
      profileSrc:
        'https://envato-shoebox-0.imgix.net/8f00/9244-65d5-4144-8e64-a1c87e927e5e/DSC02545.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=500&s=bc2097abaf77d272ba8d3d84cae417f5',
      imageSrc:
        'https://envato-shoebox-0.imgix.net/72a9/db87-232b-459e-afd7-007e5328fff9/Sam_Kladska_18-06-19_165_retus_final2.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=800&s=e2982ec7f2d92a11fceb3fb2ba47cdb4',

      fullName: 'Mr, Smiith',
      createDate: '3 days ago',
      reaction: [
        {type: 'love', count: 85},
        {type: 'wow', count: 8},
      ],
    },
  ];

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
    <View style={styles.root}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <View
        style={[
          styles.header,
          globalStyles.justifySpaceBetween,
          globalStyles.flexRow,
        ]}>
        <Text style={[globalStyles.themeTextBold, globalStyles.xlText]}>
          Friends
        </Text>
        <TouchableOpacity>
          <Icon name="md-notifications-outline" color="#333" size={20} />
        </TouchableOpacity>
      </View>
      <View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {items.reverse().map(item => (
            <View key={item.key} style={styles.card}>
              <View style={styles.profileRow}>
                <Image source={{uri: item.profileSrc}} style={styles.avatar} />

                <View style={styles.profile}>
                  <Text style={styles.fullName}>{item.fullName}</Text>
                  <Text style={styles.dateTimeText}>{item.createDate}</Text>
                </View>
              </View>
              <View style={styles.cardImgProvider}>
                <Image source={{uri: item.imageSrc}} style={styles.cardImg} />
              </View>

              <View style={styles.content}>
                <Text style={styles.contentText}>{item.content}</Text>
              </View>
              <View style={styles.reactionRow}>
                <View style={styles.flexRow}>
                  {item.reaction[0] && renderFirstReactBtn(item.reaction[0])}
                  {item.reaction[1] && renderSecondReactBtn(item.reaction[1])}
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
        </ScrollView>
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
    color: gStyles.primaryColor,
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
export default HomeScreen;
