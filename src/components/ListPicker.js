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

const ListPicker = ({onChange, visible, title, lists, onPick}) => {
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
          <View style={styles.headerRow}>
            <Text style={styles.headerTitle}>{title}</Text>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => {
                onChange(!visible);
              }}>
              <Ionicons name="md-close" size={20} />
            </TouchableOpacity>
          </View>

          <ScrollView style={styles.lists}>
            {lists.map((list, index) => (
              <TouchableOpacity
                key={list.id}
                onPress={() => {
                  onChange(!visible);
                  onPick(list);
                }}>
                <Text
                  style={[
                    styles.modalText,
                    styles.list,
                    index == 0 && styles.active,
                  ]}>
                  {list.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    alignContent: 'center',
    justifyContent: 'flex-end',
  },
  modalView: {
    backgroundColor: 'white',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
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
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Nunito-Bold',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontFamily: 'Nunito-Bold',
    fontSize: 16,
  },
  headerRow: {
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconButton: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 5,
    borderRadius: 10,
  },
  headerTitle: {
    fontSize: 17,
    fontFamily: 'Nunito-Bold',
  },
  list: {
    width: 'auto',
    paddingTop: 5,
    color: '#414B67',
    textAlign: 'center',
    height: 38,
  },
});

export default ListPicker;
