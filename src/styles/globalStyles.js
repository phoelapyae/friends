import {StyleSheet} from 'react-native';
import gTheme from '@/theme';

export default StyleSheet.create({
  // Layout
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  flexRowAlignCenter: {
    alignItems: 'center',
  },

  flexRowJustifyCenter: {
    justifyContent: 'center',
  },
  justifySpaceBetween: {
    justifyContent: 'space-between',
  },
  justifyFlexStart: {
    justifyContent: 'flex-start',
  },
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
  },
  // Layout

  mr4: {
    marginRight: 8,
  },
  ml8: {
    marginLeft: 8,
  },
  mt5: {
    marginTop: 5,
  },
  mv10: {
    marginVertical: 10,
  },
  mb8: {
    marginBottom: 8,
  },
  mb12: {
    marginBottom: 12,
  },

  mb20: {
    marginBottom: 20,
  },
  mh8: {
    marginHorizontal: 8,
  },

  themeText: {
    fontFamily: 'Nunito-Regular',
  },
  themeTextLight: {
    fontFamily: 'Nunito-Light',
  },
  themeTextBold: {
    fontFamily: 'Nunito-Bold',
  },
  themeColorText: {
    color: gTheme.primaryColor,
  },
  // avatar
  avatarMd: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  avatarNm: {
    width: 65,
    height: 65,
    borderRadius: 100,
  },
  avatarLg: {
    width: 80,
    height: 80,
    borderRadius: 100,
  },

  // font
  mdText: {
    fontSize: 16,
  },
  lgText: {
    fontSize: 18,
  },
  xlText: {
    fontSize: 20,
  },
  textAlignCenter: {
    alignSelf: 'center',
  },
  textVerticalCenter: {
    justifyContent: 'center',
  },
  textWhite: {
    color: 'white',
  },
  errorText: {
    color: 'red',
    fontFamily: 'Nunito-Regular',
    fontSize: 15,
  },
  infoText: {
    color: '#0275d8',
    fontFamily: 'Nunito-Regular',
    fontSize: 15,
  },

  // slide menu

  slideInOption: {
    padding: 5,
  },
  menuItemText: {
    fontSize: 18,
    fontFamily: 'Nunito-Regular',
  },
});
