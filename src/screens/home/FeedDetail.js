import React from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import globalStyles from '@styles/globalStyles';

const Content = () => {
  return (
    <React.Fragment>
      <Text style={styles.contentText}>
        Nearly four years after moving to Portugal my feet finally set foot on
        the rugged, volcanic island of Madeira. Over the next few days and
        weeks, as I explored, I’d quickly realise what a mistake it had been
        waiting so long to visit. The photos of Madeira I’d seen online before
        had either been moody and foggy or cruise-ships and crowded. In reality,
        it’s a perfect paradise that packs a lot in.
        {'\n'}
        {'\n'} The archipelago of Madeira consists of the main island, the
        golden-sand beach escape of Porto Santo, and a few other islands that
        serve as uninhabited nature reserves.
        {'\n'}
        {'\n'}
        An autonomous region of Portugal, Madeira’s location at the same
        latitude as Casablanca and just above the Canary Islands give it warm
        weather, while the topography brings four micro-climates to the island.
        This is what makes it so diverse.
        {'\n'}
        {'\n'}
        From the sunny south, with banana plantations and cities that climb up
        cliffs and mountains, to the rugged north, where waterfalls tumble down
        lush green cliffs coated in ferns towards natural swimming pools below.
        In her interior, dramatic mountain peaks dance in the clouds, and a
        network of walking-routes follow irrigation channels.
        {'\n'}
      </Text>
      <Image
        source={{
          uri: 'https://www.danflyingsolo.com/wp-content/uploads/2020/12/The-view-Cabo-Girao-across-to-Funchal-Daniel-Clarke-1500x1000.jpg',
        }}
        style={styles.cardImg}
      />
      <Text style={styles.contentText}>
        {'\n'}
        With a hectic storm rolling in, and heavy rain, all three of these trips
        were cancelled. Usually, missing out on the top things in a destination
        would be upsetting, but over the trip, I’d found so many amazing spots
        in Madeira, I knew I would be coming back.
        {'\n'}
        {'\n'}
        So, this is a work in progress, I’ll certainly be adding more photos of
        Madeira to this essay in the future – but I hope these images inspire
        you to see what an incredible island Madeira is, even when you take out
        the ‘must-visit’ and most iconic spots!
      </Text>
    </React.Fragment>
  );
};
const FeedDetail = ({navigation}) => {
  const imageSrc =
    'https://envato-shoebox-0.imgix.net/72a9/db87-232b-459e-afd7-007e5328fff9/Sam_Kladska_18-06-19_165_retus_final2.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=800&s=e2982ec7f2d92a11fceb3fb2ba47cdb4';
  return (
    <View style={styles.root}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack(null)}>
          <Icon name="md-chevron-back" size={20} />
        </TouchableOpacity>

        <Text
          style={[globalStyles.themeTextBold, globalStyles.mdText]}
          numberOfLines={1}>
          Madeira proving it’s a picture perfect destination!
        </Text>
      </View>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image source={{uri: imageSrc}} style={styles.cardImg} />
          <View style={styles.content}>
            <Content />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  container: {
    paddingHorizontal: 12,
    marginTop: 12,
  },
  cardImg: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
    borderRadius: 20,
  },
  content: {
    paddingTop: 12,
    paddingBottom: 50,
  },
  contentText: {
    fontFamily: 'Nunito-Regular',
  },
});
export default FeedDetail;
