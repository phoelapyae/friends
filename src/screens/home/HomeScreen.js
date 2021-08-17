import React from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.root}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />

      <Text style={styles.title}>Best Social App to make new friends</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    alignSelf: 'center',
    fontSize: 18,
    fontFamily: 'Nunito-SemiBold',
    marginBottom: 12,
  },
});
export default HomeScreen;
