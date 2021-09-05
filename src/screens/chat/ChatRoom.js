import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import globalStyles from '@styles/globalStyles';
import {GiftedChat} from 'react-native-gifted-chat';
import {
  renderBubble,
  renderSendButton,
  scrollToBottomComponent,
  renderLoading,
} from '@elements/ChatElements';

const ChatRoom = ({navigation}) => {
  const [messages, setMessages] = useState([
    {
      _id: 0,
      text: 'New room created.',
      createdAt: new Date().getTime(),
      system: true,
    },
    // example of chat message
    {
      _id: 1,
      text: 'Henlo!',
      createdAt: new Date().getTime(),
      user: {
        _id: 2,
        name: 'Test User',
      },
    },
  ]);

  // helper method that is sends a message
  function handleSend(newMessage = []) {
    setMessages(GiftedChat.append(messages, newMessage));
  }

  return (
    <View style={styles.root}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      {/* Header */}
      <View style={[styles.header, globalStyles.flexRowAlignCenter]}>
        <TouchableOpacity onPress={() => navigation.goBack(null)}>
          <Icon name="md-chevron-back" size={30} />
        </TouchableOpacity>

        <Text
          style={[globalStyles.themeTextBold, globalStyles.mdText]}
          numberOfLines={1}>
          Raymond
        </Text>
      </View>

      {/* <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={renderMessages}
          keyExtractor={item => item.id}
        />
        <ChatInput />
      </View> */}

      <GiftedChat
        messages={messages}
        onSend={newMessage => handleSend(newMessage)}
        user={{_id: 1}}
        alwaysShowSend
        renderBubble={renderBubble}
        renderSend={renderSendButton}
        placeholder="Type your message here..."
        showUserAvatar
        scrollToBottom
        scrollToBottomComponent={scrollToBottomComponent}
        renderLoading={renderLoading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 20,
  },
  container: {
    flex: 1,
    paddingHorizontal: 12,
  },

  // container: {
  //   flex: 1,
  //   marginTop: 60,
  //   marginBottom: 50,
  // },
});

export default ChatRoom;
