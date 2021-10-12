import React, {useState, useContext} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import BottomSlideMenu from '@components/BottomSlideMenu';
import {Text, Box, Image, Avatar, HStack} from 'native-base';
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
                  <Text
                    color={theme.color}
                    fontFamily="Nunito-Bold"
                    fontSize="md">
                    {story.user.fullName}
                  </Text>
                  <Text color={theme.secondaryText} fontSize="xs">
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
                <Icon
                  name="md-ellipsis-vertical"
                  color={theme.color}
                  size={19}
                />
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

            <Box
              flexDir="row"
              justifyContent="space-between"
              alignItems="center"
              p={4}>
              <HStack space={2}>
                <TouchableOpacity>
                  <HStack bgColor="#F36B7E" px={2} py={1} borderRadius={20}>
                    <Icon name="ios-heart" size={20} color="white" />

                    <Text pl={1} color="white" fontFamily="Nunito-Regular">
                      100
                    </Text>
                  </HStack>
                </TouchableOpacity>

                <TouchableOpacity>
                  <HStack px={2} py={1} borderRadius={20}>
                    <Icon name="ios-star" size={20} color="#fbba08" />

                    <Text
                      pl={1}
                      color={theme.color}
                      fontFamily="Nunito-Regular">
                      25
                    </Text>
                  </HStack>
                </TouchableOpacity>

                <TouchableOpacity>
                  <HStack px={2} py={1} borderRadius={100}>
                    <Icon name="md-add" size={20} color={theme.color} />
                  </HStack>
                </TouchableOpacity>
              </HStack>

              <TouchableOpacity>
                <HStack alignItems="center">
                  <Text
                    fontSize="md"
                    color={theme.color}
                    fontFamily="Nunito-Regular">
                    view
                  </Text>
                  <Icon name="chevron-forward" size={17} color={theme.color} />
                </HStack>
              </TouchableOpacity>
            </Box>
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
