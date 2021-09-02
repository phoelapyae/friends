import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {View} from 'react-native';

const StorySkeleton = () => {
  return (
    <View
      style={{backgroundColor: 'white', marginBottom: 12, paddingBottom: 10}}>
      <SkeletonPlaceholder>
        {/* User profile with name */}
        <SkeletonPlaceholder.Item
          flexDirection="row"
          alignItems="center"
          margin={12}>
          <SkeletonPlaceholder.Item width={40} height={40} borderRadius={50} />
          <SkeletonPlaceholder.Item marginLeft={8}>
            <SkeletonPlaceholder.Item
              width={150}
              height={12}
              borderRadius={4}
            />
            <SkeletonPlaceholder.Item
              marginTop={6}
              width={80}
              height={12}
              borderRadius={4}
            />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>
        {/* User profile with name */}

        {/* Story Image Mask */}
        <SkeletonPlaceholder.Item marginVertical={8} marginHorizontal={12}>
          <SkeletonPlaceholder.Item
            width="100%"
            height={200}
            borderRadius={20}
          />
        </SkeletonPlaceholder.Item>
        {/* Story Image Mask */}

        {/* Story Content Mask */}
        <SkeletonPlaceholder.Item marginVertical={8} marginHorizontal={12}>
          <SkeletonPlaceholder.Item width="100%" height={12} borderRadius={4} />
          <SkeletonPlaceholder.Item
            marginTop={6}
            width="100%"
            height={12}
            borderRadius={4}
          />
          <SkeletonPlaceholder.Item
            marginTop={6}
            width={150}
            height={12}
            borderRadius={4}
          />
        </SkeletonPlaceholder.Item>
        {/* Story Content Mask */}
      </SkeletonPlaceholder>
    </View>
  );
};

export default StorySkeleton;
