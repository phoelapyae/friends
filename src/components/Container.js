/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  Text,
} from 'react-native';

const {width} = Dimensions.get('window');
const aspectRation = 600 / 1125;
const height = width * aspectRation;

const Container = ({children, footer}) => {
  return (
    <View style={styles.root}>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={{backgroundColor: 'white'}}>
        <View
          style={{
            borderBottomLeftRadius: 60,
            overflow: 'hidden',
          }}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1560263816-d704d83cce0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            }}
            style={{
              width,
              height,
              borderBottomLeftRadius: 75,
            }}
          />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          borderRadius: 60,
          borderTopLeftRadius: 0,
        }}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1560263816-d704d83cce0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          }}
          style={{
            ...StyleSheet.absoluteFillObject,
            width,
            height,
          }}
        />
        <View style={styles.containerChildren}>{children}</View>
      </View>
      <View style={styles.footer}>
        {footer}
        <View style={styles.hrefLayout}>
          <Text style={styles.hrefTextLight}>Are you a new member?</Text>
          <TouchableOpacity>
            <Text style={styles.hrefTextBold}>Register Here</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#0e0c25',
  },
  containerChildren: {
    backgroundColor: 'white',
    borderRadius: 80,
    borderTopLeftRadius: 0,
    flex: 1,
  },
  footer: {
    backgroundColor: '#0e0c25',
    paddingVertical: 20,
  },
  hrefLayout: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hrefTextLight: {
    fontFamily: 'Nunito-Light',
    marginRight: 12,
    color: 'white',
  },
  hrefTextBold: {
    fontFamily: 'Nunito-Bold',
    color: '#234b59',
  },
});

export default Container;
