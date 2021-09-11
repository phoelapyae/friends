import React from 'react';
import {FlatList, Text, TouchableOpacity, Image} from 'react-native';
import globalStyles from '@styles/globalStyles';

const ActiveUserList = () => {
  const data = new Array(6).fill({
    avatar:
      'https://envato-shoebox-0.imgix.net/8f00/9244-65d5-4144-8e64-a1c87e927e5e/DSC02545.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=500&s=bc2097abaf77d272ba8d3d84cae417f5',
    name: 'Nay Yaung Lin Lakk',
  });

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={[
          globalStyles.flexColumn,
          globalStyles.flexRowAlignCenter,
          globalStyles.mr12,
        ]}>
        <Image
          source={{uri: item.avatar}}
          style={[globalStyles.avatarMd, globalStyles.mb4]}
        />
        <Text
          style={{
            maxWidth: 80,
            textAlign: 'center',
            fontFamily: 'Nunito-Bold',
          }}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      horizontal
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.title}
    />
  );
};

export default ActiveUserList;
