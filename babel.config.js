module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@api': './src/api',
          '@components': './src/components',
          '@screens': './src/screens',
          '@store': './src/store',
          '@assets': './src/assets',
          '@hooks': './src/hooks',
          '@utils': './src/utils',
          '@styles': './src/styles',
          '@': './src',
        },
      },
    ],
  ],
};
