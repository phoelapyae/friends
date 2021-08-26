import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import gStyles from '@/theme';
import {CoupleSvg, LoveSvg} from '@assets/svg';

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.root}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />

      <View style={styles.imageRow}>
        <View style={{position: 'absolute', top: 120}}>
          <LoveSvg />
        </View>

        <View style={{position: 'absolute', top: 50, right: 0}}>
          <CoupleSvg />
        </View>
      </View>

      <Text style={styles.greyTextSm}>Let’s get closer ☺</Text>
      <Text style={styles.title}>
        The best place to meet your future partner.
      </Text>

      <View style={styles.socialLayout}>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={[styles.authBtnText, styles.primaryTextColor]}>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signUpBtn}
          onPress={() => navigation.navigate('RegisterScreen')}>
          <Text style={[styles.authBtnText, styles.textWhite]}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageRow: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 50,
  },
  image: {
    alignSelf: 'flex-end',
  },
  greyTextSm: {
    alignSelf: 'center',
    fontSize: 16,
    marginBottom: 10,
    fontFamily: 'Nunito-Regular',
  },
  title: {
    alignSelf: 'center',
    fontSize: 20,
    fontFamily: 'Nunito-Bold',
    marginBottom: 12,
  },
  socialLayout: {
    flex: 1,
    marginHorizontal: 20,
  },
  loginBtn: {
    backgroundColor: 'white',
    marginVertical: 12,
    padding: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#333',
  },
  signUpBtn: {
    backgroundColor: gStyles.primaryColor,
    marginVertical: 12,
    padding: 16,
    borderRadius: 20,
  },
  authBtnText: {
    alignSelf: 'center',
    fontFamily: 'Nunito-Bold',
    fontSize: 15,
  },
  primaryTextColor: {
    color: gStyles.primaryColor,
  },
  textWhite: {
    color: 'white',
  },
});
export default WelcomeScreen;
