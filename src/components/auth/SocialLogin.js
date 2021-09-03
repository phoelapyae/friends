import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import globalStyles from '@styles/globalStyles';
import {BackSvg, FacebookSvg} from '@assets/svg';

const SocialLogin = () => {
  return (
    <View style={[globalStyles.flexRow, globalStyles.flexRowJustifyCenter]}>
      <View style={[styles.footer]}>
        <FacebookSvg />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: 'white',
    borderRadius: 1,
  },
});

export default SocialLogin;
