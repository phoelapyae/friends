import React from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import globalStyles from '@styles/globalStyles';

const BottomSlideMenu = ({
  onChange,
  visible,
  selectedPost,
  lists,
  onPick,
  navigation,
  auth,
}) => {
  const isOwner = selectedPost && selectedPost?.user?._id === auth?._id;

  const renderItems = items => {
    let getFilterItems = items.filter(item => {
      // We check here if auth user is not admin, we except edit-group menu
      if (selectedPost) {
        if (!isOwner) {
          return item.id !== 'edit' && item.id !== 'delete';
        }
      }

      return item;
    });

    return (
      <React.Fragment>
        {getFilterItems &&
          getFilterItems.map((menu, i) => (
            <TouchableOpacity
              style={[
                globalStyles.flexRow,
                globalStyles.flexRowAlignCenter,
                globalStyles.justifyFlexStart,
                globalStyles.mb20,
              ]}
              key={menu.id}
              onPress={() => {
                navigation.navigate(menu.route, {id: selectedPost._id});
                onChange(!visible);
              }}>
              <Ionicons name={menu.icon} color="#000" size={20} />

              <Text
                style={[
                  styles.modalText,
                  styles.list,
                  i == 0 && styles.active,
                ]}>
                {menu.name}
              </Text>
            </TouchableOpacity>
          ))}
      </React.Fragment>
    );
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      backgroundColor="rgba(0, 0, 0, 0.5)"
      visible={visible}
      onRequestClose={() => {
        onChange(!visible);
      }}>
      <View
        activeOpacity={1}
        onPress={() => {
          onChange(!visible);
        }}
        style={styles.centeredView}>
        <View style={styles.modalView}>
          <ScrollView style={styles.lists}>{renderItems(lists)}</ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    flex: 1,
    alignContent: 'center',
    justifyContent: 'flex-end',
  },
  modalView: {
    backgroundColor: 'white',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  modalText: {
    fontFamily: 'Nunito-Regular',
    fontSize: 16,
  },
  list: {
    paddingTop: 5,
    paddingLeft: 12,
    color: '#414B67',
  },
});

export default BottomSlideMenu;
