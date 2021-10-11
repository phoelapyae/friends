import React, {useState, useContext} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import {teaser} from '@utils/index';
import BottomSlideMenu from '@components/BottomSlideMenu';
import {Text, Box, Image, Avatar} from 'native-base';
import {ThemeContext} from '@/libs/ThemeProvider';

/**
 * This Component is used in homescreen as story card
 */
const StoryCard = ({navigation, stories, me}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPost, setSelectedPost] = useState({});
  const {dark, theme, toggle} = useContext(ThemeContext);

  const lists = [
    {
      id: 'edit',
      name: 'Edit Post',
      icon: 'md-create-outline',
      route: 'StoryEditScreen',
    },
    {
      id: 'save',
      name: 'Bookmark',
      icon: 'md-bookmark-outline',
      route: 'StoryEditScreen',
    },
    {
      id: 'delete',
      name: 'Delete',
      icon: 'trash-outline',
      route: 'StoryEditScreen',
    },
  ];

  return (
    <React.Fragment>
      {stories &&
        stories.map(story => (
          <Box key={story._id} bg={theme.backgroundColor} mb={4}>
            <Box
              flexDir="row"
              alignItems="center"
              justifyContent="space-between"
              m={3}>
              <Box flexDir="row" alignItems="center">
                {story.user.avatar ? (
                  <Avatar
                    source={{
                      uri: story.user.avatar,
                    }}
                    size="md"
                  />
                ) : (
                  <Avatar
                    source={require('@assets/images/profile.png')}
                    size="md"
                  />
                )}
                <Box ml={3} flexDir="column">
                  <Text color={theme.color}>{story.user.fullName}</Text>
                  <Text color={theme.secondaryText}>
                    {moment(story.createdAt).format('MMM D [,] h:mm a ')}
                  </Text>
                </Box>
              </Box>

              {/* Bottom Slide up menu for profile */}
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(true);
                  setSelectedPost(story);
                }}>
                <Icon name="md-ellipsis-vertical" color={theme.color} size={19} />
              </TouchableOpacity>
            </Box>
            {story.coverPhoto ? (
              <Image
                source={{uri: story.coverPhoto}}
                size="2xl"
                width="full"
                alt={`${story._id}-image`}
              />
            ) : (
              <Box />
            )}

            <TouchableOpacity
              onPress={() =>
                navigation.navigate('FeedDetailScreen', {
                  id: story._id,
                  me,
                })
              }>
              <Text color={dark ? '#fff' : '#000'} p={4} noOfLines={3}>
                {story.content}
              </Text>
            </TouchableOpacity>
          </Box>
        ))}

      <BottomSlideMenu
        lists={lists}
        auth={me}
        navigation={navigation}
        selectedPost={selectedPost}
        visible={modalVisible}
        onChange={visible => {
          setModalVisible(visible);
        }}
      />
    </React.Fragment>
  );
};

export default StoryCard;
