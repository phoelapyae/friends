import React, {useState} from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import ListPicker from './ListPicker';

const lists = [
  {id: 'camera', name: 'Take picture with camera'},
  {id: 'gallery', name: 'Get picture from gallery'},
];

export default ({onPick, multiple, name, type}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const [currentImage, setCurrentImage] = useState(null);

  const cameraOptions = {
    title: 'Select Image',
    includeBase64: true,
    selectionLimit: multiple ? 0 : 1,
  };

  function callback(data) {
    if (data.assets && data.assets.length > 0) {
      let base64Images = data.assets.map(asset => {
        return `data:${asset.type};base64,${asset.base64}`;
      });
      if (multiple) {
        onPick(base64Images);
      } else {
        onPick(base64Images[0]);
      }
      setCurrentImage(base64Images[0] ?? null);
    }
  }

  function onTypePick(state) {
    if (state.id == 'camera') {
      launchCamera(cameraOptions, callback);
    } else {
      launchImageLibrary(cameraOptions, callback);
    }
  }

  return (
    <>
      <ListPicker
        lists={lists}
        title="Select Image"
        visible={modalVisible}
        onChange={visible => {
          setModalVisible(visible);
        }}
        onPick={state => {
          onTypePick(state);
        }}
      />
      <TouchableOpacity
        style={styles.upload}
        onPress={() => {
          setModalVisible(true);
        }}>
        {!currentImage ? (
          <View style={{alignItems: 'center'}}>
            <Text style={styles.uploadText1}>+</Text>
            <Text style={styles.uploadText2}>Upload Photo</Text>
          </View>
        ) : (
          <Image style={styles.image} source={{uri: currentImage}} />
        )}
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  upload: {
    backgroundColor: '#F8F8FA',
    height: 200,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  uploadText1: {
    color: '#414B67',
    fontSize: 22,
    fontFamily: 'Nunito-Bold',
  },
  uploadText2: {
    fontFamily: 'Nunito-Bold',
    color: '#414B67',
  },
  image: {
    height: 200,
    width: '100%',
    borderRadius: 15,
  },
});
