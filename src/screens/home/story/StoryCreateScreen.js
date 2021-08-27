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
import {storyStore} from '@store/storyStore';
import shallow from 'zustand/shallow';

const CurrentUserProfile = () => {
  return (
    <View
      style={[
        globalStyles.flexRow,
        globalStyles.justifyFlexStart,
        globalStyles.mv10,
      ]}>
      <Image
        source={{
          uri: 'https://envato-shoebox-0.imgix.net/8f00/9244-65d5-4144-8e64-a1c87e927e5e/DSC02545.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=500&s=bc2097abaf77d272ba8d3d84cae417f5',
        }}
        style={globalStyles.avatarMd}
      />
      <View
        style={[
          globalStyles.flexColumn,
          globalStyles.ml8,
          globalStyles.flexRowJustifyCenter,
        ]}>
        <Text style={[globalStyles.themeTextBold, globalStyles.lgText]}>
          Nay Yaung Lin Lakk
        </Text>
      </View>
    </View>
  );
};

const StoryCreateScreen = ({navigation}) => {
  const [createStory, loading] = storyStore(
    state => [state.createStory, state.loading],
    shallow,
  );
  const [content, setContent] = useState('');

  const onSubmitStory = async () => {
    const payload = {content};
    await createStory(payload)
      .then(() => {
        ToastAndroid.show('Story Created Successfully', ToastAndroid.SHORT);
      })
      .catch(e => {
        ToastAndroid.show('Posting Story Failed!', ToastAndroid.SHORT);
      });
  };

  const hasNull = () => {
    if (!content) return false;
    return true;
  };

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
            Create Story
          </Text>
        </View>
        <TouchableOpacity
          style={!hasNull() ? styles.disableBtn : styles.submitBtn}
          disabled={!hasNull()}
          onPress={onSubmitStory}>
          {loading ? (
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
          <CurrentUserProfile />
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
          />
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

export default StoryCreateScreen;
