import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
  ActivityIndicator,
  ToastAndroid,
} from 'react-native';
import globalStyles from '@styles/globalStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import gStyles from '@/theme';
import Uploader from '@components/Uploader';
import {useQuery} from 'react-query';
import {fetchStoryById} from '@hooks/useStory';
import {fetchProfile} from '@hooks/useProfile';

const CurrentUserProfile = ({me}) => {
  return (
    <View
      style={[
        globalStyles.flexRow,
        globalStyles.justifyFlexStart,
        globalStyles.mv10,
      ]}>
      {me.avatar ? (
        <Image
          source={{
            uri: me.avatar,
          }}
          style={globalStyles.avatarMd}
        />
      ) : (
        <Image
          source={require('@assets/images/default-profile-image.png')}
          style={globalStyles.avatarMd}
        />
      )}

      <View
        style={[
          globalStyles.flexColumn,
          globalStyles.ml8,
          globalStyles.flexRowJustifyCenter,
        ]}>
        <Text style={[globalStyles.themeTextBold, globalStyles.lgText]}>
          {me?.fullName}
        </Text>
      </View>
    </View>
  );
};

const StoryEditScreen = ({route, navigation}) => {
  const {id} = route.params;

  const {
    isLoading,
    isError,
    data: story,
  } = useQuery(['storyById', id], fetchStoryById, {
    enabled: !!id,
  });

  console.log(story);
  const {
    isLoading: profileLoading,
    isError: profileError,
    data: me,
  } = useQuery('profile', fetchProfile);

  const [content, setContent] = useState('');
  const [image, setImage] = useState('');

  React.useEffect(() => {
    setContent(story?.content);
    setImage(story?.coverPhoto);
  }, [story]);

  const onSubmitStory = async () => {
    const payload = {content};
    // await createStory(payload)
    //   .then(() => {
    //     ToastAndroid.show('Story Created Successfully', ToastAndroid.SHORT);
    //   })
    //   .catch(e => {
    //     ToastAndroid.show('Posting Story Failed!', ToastAndroid.SHORT);
    //   });
  };

  const hasNull = () => {
    if (!content) return false;
    return true;
  };

  console.log(content);
  return (
    <View style={styles.root}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      {/* Header */}
      <View style={[styles.header, globalStyles.justifySpaceBetween]}>
        <View style={[globalStyles.flexRow, globalStyles.flexRowAlignCenter]}>
          <TouchableOpacity onPress={() => navigation.goBack(null)}>
            <Icon name="md-chevron-back" color="#333" size={22} />
          </TouchableOpacity>
          <Text
            style={[
              globalStyles.themeTextBold,
              globalStyles.lgText,
              styles.title,
            ]}>
            Edit Story
          </Text>
        </View>
        <TouchableOpacity
          style={!hasNull() ? styles.disableBtn : styles.submitBtn}
          disabled={!hasNull()}
          onPress={onSubmitStory}>
          {isLoading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text style={styles.btnText}>POST</Text>
          )}
        </TouchableOpacity>
      </View>
      {/* Header */}

      {/* Body */}
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {profileLoading ? (
            <Text>Loading...</Text>
          ) : (
            <CurrentUserProfile me={me} />
          )}
          {isLoading ? (
            <Text>Loading...</Text>
          ) : (
            <React.Fragment>
              <TextInput
                placeholder="Write down your story..."
                multiline
                editable
                textAlignVertical="top"
                style={styles.textField}
                value={content}
                onChangeText={txt => setContent(txt)}
              />
              <Uploader
                onPick={files => {
                  console.log(files);
                }}
                image={image}
                setImage={setImage}
              />
            </React.Fragment>
          )}
        </ScrollView>
      </View>
      {/* Body */}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom: 10,
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 8,
    alignItems: 'center',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    backgroundColor: '#fff',
  },
  title: {
    marginLeft: 12,
  },
  disableBtn: {
    backgroundColor: '#ddd',
    borderRadius: 10,
    height: 35,
    width: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitBtn: {
    backgroundColor: gStyles.primaryColor,
    borderRadius: 10,
    height: 35,
    width: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    paddingHorizontal: 12,
  },
  textField: {
    fontSize: 18,
    fontFamily: 'Nunito-Regular',
    flex: 2,
    justifyContent: 'flex-start',
  },
  uploadSpace: {
    backgroundColor: '#F8F8FA',
    height: 200,
    flex: 1,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: '#fff',
  },
});

export default StoryEditScreen;
