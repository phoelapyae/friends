import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import globalStyles from '@styles/globalStyles';
import CustomCallout from './CustomCallout';
import Icon from 'react-native-vector-icons/Ionicons';

const items = [
  {
    id: 1,
    profile:
      'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80',
    name: 'Nay Yaung Lin Lakk',
    distance: '3 kilos',
    latitude: 16.841933,
    longitude: 96.183345,
  },
  {
    id: 2,
    profile:
      'https://images.unsplash.com/photo-1536612461104-405653880f45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    name: 'Moe Ei Shwe Sin',
    distance: '5 miles',
    latitude: 16.825739,
    longitude: 96.159167,
  },
  {
    id: 3,
    profile:
      'https://images.unsplash.com/photo-1623950851918-116ba38150d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    name: 'Ko Gyi Mal',
    distance: '3 kilos',
    latitude: 16.806184,
    longitude: 96.178007,
  },
  {
    id: 4,
    profile:
      'https://images.unsplash.com/photo-1527105829986-f55628ee9c13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    name: 'Moe Ei Shwe Sin',
    distance: '3 kilos',
    latitude: 16.835597,
    longitude: 96.197577,
  },

  {
    id: 5,
    profile:
      'https://images.unsplash.com/photo-1627829133977-8b3bec7b1c2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    name: 'Raymond',
    distance: '3 kilos',
    latitude: 16.830175,
    longitude: 96.172342,
  },

  {
    id: 6,
    profile:
      'https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    name: 'Ko Htut',
    distance: '3 kilos',
    latitude: 16.811443,
    longitude: 96.161184,
  },

  {
    id: 7,
    profile:
      'https://images.unsplash.com/photo-1520155707862-5b32817388d6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    name: 'Lin Lakk Ko',
    distance: '3 kilos',
    latitude: 16.800597,
    longitude: 96.170797,
  },
  {
    id: 8,
    profile:
      'https://envato-shoebox-0.imgix.net/8f00/9244-65d5-4144-8e64-a1c87e927e5e/DSC02545.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=500&s=bc2097abaf77d272ba8d3d84cae417f5',
    name: 'Ngwe Pu',
    distance: '3 kilos',
    latitude: 16.814319,
    longitude: 96.192384,
  },
];
const FriendMap = ({navigation}) => {
  const [pickPerson, setPickPerson] = useState({});
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />

      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        loadingEnabled={true}
        initialRegion={{
          latitude: 16.805312353924744,
          longitude: 96.15919476831377,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        {items.map(item => (
          <Marker
            key={item.id}
            zIndex={0}
            calloutOffset={{x: -8, y: 28}}
            calloutAnchor={{x: 0.5, y: 2.9}}
            onPress={() => setPickPerson(item)}
            coordinate={{
              latitude: item.latitude,
              longitude: item.longitude,
            }}>
            <Image
              source={{uri: item.profile}}
              style={{width: 35, height: 35, borderRadius: 100}}
            />

            <Callout
              alphaHitTest
              tooltip
              onPress={e => {
                if (
                  e.nativeEvent.action === 'marker-inside-overlay-press' ||
                  e.nativeEvent.action === 'callout-inside-press'
                ) {
                  return;
                }
              }}
              style={styles.customView}>
              <CustomCallout>
                <Text style={[globalStyles.themeTextBold]}>{item.name}</Text>
                <Text style={[globalStyles.themeTextLight]}>5 kilo away</Text>
              </CustomCallout>
            </Callout>
          </Marker>
        ))}
      </MapView>
      <View style={styles.friendListLayout}>
        <Text
          style={[
            globalStyles.themeTextBold,
            globalStyles.mdText,
            globalStyles.textAlignCenter,
            // globalStyles.mb12,
          ]}>
          Nearby Friends
        </Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          {Object.keys(pickPerson).length > 1 ? (
            <View>
              <Text style={[globalStyles.themeText, globalStyles.mb8]}>
                About Nay Yaung Lin Lakk
              </Text>
              <View
                style={[
                  globalStyles.flexRow,
                  globalStyles.justifySpaceBetween,
                  globalStyles.flexRowAlignCenter,
                ]}>
                <View
                  style={[globalStyles.flexRow, globalStyles.justifyFlexStart]}>
                  <Image
                    source={{
                      uri: pickPerson?.profile,
                    }}
                    style={globalStyles.avatarMd}
                  />
                  <View
                    style={[
                      globalStyles.flexColumn,
                      globalStyles.ml8,
                      globalStyles.flexRowJustifyCenter,
                    ]}>
                    <Text
                      style={[globalStyles.themeTextBold, globalStyles.lgText]}>
                      {pickPerson?.name}
                    </Text>
                  </View>
                </View>

                <TouchableOpacity onPress={() => setPickPerson({})}>
                  <Icon name="md-close" color="#333" size={19} />
                </TouchableOpacity>
              </View>
              <View style={{marginTop: 10}}>
                <Text style={globalStyles.themeText}>
                  {pickPerson?.name} is single for 2 years.Zoë Kravitz is the
                  only child of actress Lisa Bonet and musician Lenny Kravitz.
                  She knew from a young age that she wanted to be an actress.
                  Her career took off with films such as Mad Max: Fury Road and
                  the TV series "Big Little Lies." She also starred in and
                  executive produced the series "High Fidelity." Kravitz is also
                  a musician who has been in two bands. She married actor Karl
                  Glusman in 2019, but filed for divorce the next year. {'\n'}{'\n'}
                  Early Life and Parents {'\n'}{'\n'}
                  Zoë Isabella Kravitz was born on December 1, 1988, in Venice,
                  California. Kravitz's parents are musician and actor Lenny
                  Kravitz and actress Lisa Bonet. Her stepfather is actor Jason
                  Momoa. Kravitz has two younger half-siblings from Bonet and
                  Momoa's relationship: Lola and Wolf.
                </Text>
              </View>
            </View>
          ) : (
            <React.Fragment>
              {items.map(item => (
                <View
                  key={item.id}
                  style={[
                    globalStyles.flexRow,
                    globalStyles.justifySpaceBetween,
                    globalStyles.flexRowAlignCenter,
                  ]}>
                  <View
                    style={[
                      globalStyles.flexRow,
                      globalStyles.justifyFlexStart,
                      globalStyles.mb12,
                    ]}>
                    <Image
                      source={{
                        uri: item.profile,
                      }}
                      style={globalStyles.avatarMd}
                    />
                    <View
                      style={[
                        globalStyles.flexColumn,
                        globalStyles.ml8,
                        globalStyles.flexRowJustifyCenter,
                      ]}>
                      <Text
                        style={[
                          globalStyles.themeTextBold,
                          globalStyles.lgText,
                        ]}>
                        {item.name}
                      </Text>
                      <Text style={globalStyles.themeTextLight}>
                        {item.distance}
                      </Text>
                    </View>
                  </View>
                  <TouchableOpacity style={styles.waveSignBtn}>
                    <Image
                      source={require('@assets/images/wave-sign.png')}
                      style={styles.waveSignImg}
                    />
                  </TouchableOpacity>
                </View>
              ))}
            </React.Fragment>
          )}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  friendListLayout: {
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position: 'absolute',
    top: 400,
    left: 0,
    right: 0,
    bottom: 0,
    padding: 20,

    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowColor: '#000000',
    elevation: 6,
  },
  waveSignBtn: {
    borderWidth: 1,
    borderColor: '#f0f2f5',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  waveSignImg: {
    width: 30,
    height: 30,
  },
  customView: {
    width: 180,
    height: 180,
  },
});
export default FriendMap;
