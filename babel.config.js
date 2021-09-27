module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@libs': './src/libs',
          '@components': './src/components',
          '@screens': './src/screens',
          '@store': './src/store',
          '@assets': './src/assets',
          '@elements': './src/elements',
          '@utils': './src/utils',
          '@styles': './src/styles',
          '@': './src',
        },
      },
    ],
  ],
};
