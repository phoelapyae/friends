import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Divider = ({text}) => {
  return (
    <View style={styles.orLayout}>
      <View style={styles.labelLine} />
      <Text style={styles.dividerText}>{text}</Text>
      <View style={styles.labelLine} />
    </View>
  );
};

const styles = StyleSheet.create({
  orLayout: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 20,
  },

  labelLine: {
    flex: 1,
    height: 1,
    marginTop: 4,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(13, 44, 204, 0.1)',
  },
  dividerText: {
    color: '#000',
    fontSize: 16,
    marginLeft: 15,
    marginRight: 15,
  },
});

export default Divider;
