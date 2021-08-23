import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import globalStyles from '@styles/globalStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import gStyles from '@/theme';
import Uploader from '@components/Uploader';

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
  return (
    <View style={styles.root}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      {/* Header */}
      <View style={[styles.header, globalStyles.justifySpaceBetween]}>
        <View style={[globalStyles.flexRow, globalStyles.flexRowAlignCenter]}>
          <TouchableOpacity onPress={() => navigation.goBack(null)}>
            <Icon
              name="md-chevron-back"
              color={gStyles.primaryColor}
              size={22}
            />
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
        <TouchableOpacity style={styles.disableBtn}>
          <Text>POST</Text>
        </TouchableOpacity>
      </View>
      {/* Header */}

      {/* Body */}
      <View style={styles.container}>
        <CurrentUserProfile />

        <Uploader
          onPick={files => {
            console.log(files);
          }}
        />
        <TextInput
          placeholder="Write down your story..."
          multiline
          style={styles.textField}
        />
      </View>
      {/* Body */}
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
    alignItems: 'center',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    backgroundColor: '#fff',
  },
  title: {
    marginLeft: 12,
  },
  disableBtn: {
    backgroundColor: '#F8F8FA',
    borderRadius: 15,
    paddingVertical: 8,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    paddingHorizontal: 12,
  },
  textField: {
    fontSize: 19,
    fontFamily: 'Nunito-Regular',
  },
  uploadSpace: {
    backgroundColor: '#F8F8FA',
    height: 200,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default StoryCreateScreen;
