import React from 'react';
import {Bubble, Send, InputToolbar} from 'react-native-gifted-chat';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
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
    <Send
      {...props}
      disabled={!props.text}
      containerStyle={styles.sendBtnContainer}>
      <View>
        <Icon name="md-send" size={30} color="#6646ee" />
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

function renderInputToolbar(props) {
  return (
    <>
      <InputToolbar
        {...props}
        containerStyle={{
          backgroundColor: '#f0f2f5',
          borderTopWidth: 0,
          marginHorizontal: 10,
          marginLeft: '14%',
          borderRadius: 80,
        }}
        textInputProps={{
          style: {
            color: '#000',
            flex: 1,
            alignItems: 'center',
            paddingHorizontal: 20,
          },
          // multiline: false,
          returnKeyType: 'go',
          // onSubmitEditing: () => {
          //   if (props.text && props.onSend) {
          //     let text = props.text;
          //     props.onSend({text: text.trim()}, true);
          //   }
          // },
        }}
      />
      <TouchableOpacity
        style={{
          position: 'absolute',
          marginLeft: '4%',
          marginBottom: '1%',
          bottom: 0,
        }}
        // onPress={this.handleChoosePhoto}
      >
        <Icon
          name="md-image"
          style={{
            color: '#12558a',
          }}
          size={32}
        />
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  sendBtnContainer: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 4,
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

export {
  renderBubble,
  renderSendButton,
  scrollToBottomComponent,
  renderLoading,
  renderInputToolbar,
};
