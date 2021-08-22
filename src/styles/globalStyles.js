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
});
