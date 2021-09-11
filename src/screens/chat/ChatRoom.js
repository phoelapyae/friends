import React, {useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import globalStyles from '@styles/globalStyles';
import io from 'socket.io-client';
import {GiftedChat} from 'react-native-gifted-chat';
import {
  renderBubble,
  renderSendButton,
  scrollToBottomComponent,
  renderLoading,
  renderInputToolbar,
} from '@elements/ChatElements';
import {useQuery} from 'react-query';
import {fetchProfile} from '@hooks/useProfile';

const ChatRoom = ({navigation}) => {
  const socketRef = useRef();
  const [chatTexts, setChatTexts] = useState([]);

  const {
    isLoading: profileLoading,
    isError: profileError,
    data: me,
  } = useQuery('profile', fetchProfile);

  useEffect(() => {
    const roomId = 1;
    socketRef.current = io('https://friendsmm.herokuapp.com', {
      query: {roomId},
      secure: true,
      reconnection: true,
      rejectUnauthorized: false,
      transports: ['websocket'],
    });

    socketRef.current.on('connect', function () {
      console.log('connect');
      socketRef.current.emit('room', roomId);
    });

    // event://init-message
    socketRef.current.on('event://init-message', message => {
      setChatTexts(() => [message]);
      // scrollToBottom();
    });

    socketRef.current.on('event://push-message', message => {
      setChatTexts(items => [...items, message]);
      // scrollToBottom();
    });

    socketRef.current.on('connect_error', err => {
      console.log(`connect_error due to ${err.message}`);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  const [messages, setMessages] = useState([
    // example of chat message
    // {
    //   _id: 1,
    //   text: 'Henlo!',
    //   createdAt: new Date().getTime(),
    //   user: {
    //     _id: 2,
    //     name: 'Test User',
    //   },
    // },
  ]);

  // helper method that is sends a message
  async function handleSend(newMessage = []) {
    setMessages(prevMessages => GiftedChat.append(prevMessages, newMessage));

    const {text, user} = newMessage[0];
    const payload = {
      sender: user._id,
      message: text,
    };
    console.log(payload);
    // Send Message
    socketRef.current.emit('event://send-message', JSON.stringify(payload));

    // setMessages(GiftedChat.append(messages, newMessage));
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

      <GiftedChat
        messages={messages}
        onSend={newMessage => handleSend(newMessage)}
        user={{_id: me?._id, avatar: me?.avatar, name: 'Aaron'}} // authenticated current user
        alwaysShowSend
        renderBubble={renderBubble}
        renderSend={renderSendButton}
        placeholder="Type your message here..."
        // showUserAvatar
        // bottomOffset={-10}
        scrollToBottom
        renderAvatarOnTop
        renderUsernameOnMessage
        onPressAvatar={console.log}
        scrollToBottomComponent={scrollToBottomComponent}
        renderLoading={renderLoading}
        renderInputToolbar={renderInputToolbar}
        // messagesContainerStyle={{ backgroundColor: 'indigo' }}
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
