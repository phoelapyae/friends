import React from 'react';
import {Bubble, Send} from 'react-native-gifted-chat';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function renderLoading() {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color="#6646ee" />
    </View>
  );
}

function renderBubble(props) {
  return (
    <Bubble
      {...props}
      wrapperStyle={{
        right: {
          // Here is the color change
          backgroundColor: '#12558a',
        },
      }}
      textStyle={{
        right: {
          color: '#fff',
        },
      }}
    />
  );
}

function renderSendButton(props) {
  return (
    <Send {...props}>
      <View style={styles.sendingContainer}>
        <Icon name="md-send" size={32} color="#6646ee" />
      </View>
    </Send>
  );
}

function scrollToBottomComponent() {
  return (
    <View style={styles.bottomComponentContainer}>
      <Icon name="chevron-down" size={36} color="#6646ee" />
    </View>
  );
}

const styles = StyleSheet.create({
  sendingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomComponentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export {renderBubble, renderSendButton, scrollToBottomComponent, renderLoading};
