import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

const WelcomeScreen = () => {
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
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.authBtnText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signUpBtn}>
          <Text style={styles.authBtnText}>Sign Up</Text>
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
    fontWeight: 'bold',
    fontSize: 16,
  },
  socialLayout: {
    flex: 1,
    marginHorizontal: 12,
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
    backgroundColor: '#a8c0ff',
    marginVertical: 12,
    padding: 16,
    borderRadius: 20,
  },
  authBtnText: {
    alignSelf: 'center',
  },
});
export default WelcomeScreen;
