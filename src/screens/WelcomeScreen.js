import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import gStyles from '@/theme';

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.root}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />

      <Image
        source={require('@assets/images/welcome.jpg')}
        resizeMode="center"
        style={styles.image}
      />

      <Text style={styles.title}>Best Social App to make new friends</Text>

      <View style={styles.socialLayout}>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={[styles.authBtnText, styles.primaryTextColor]}>Login</Text>
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
  image: {
    alignSelf: 'center',
    flex: 2,
  },
  title: {
    alignSelf: 'center',
    fontSize: 18,
    fontFamily: 'Nunito-SemiBold',
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
    borderWidth: 2,
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
