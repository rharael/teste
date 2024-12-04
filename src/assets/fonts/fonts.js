import * as Font from 'expo-font';

export const loadFonts = () => {
    return Font.loadAsync({
      'Urbanist-Black':require('./Urbanist-Black.ttf'),
      'Urbanist-Bold':require('./Urbanist-Bold.ttf'),
      'Urbanist-SemiBold':require('./Urbanist-SemiBold.ttf'),
      'Urbanist-Medium':require('./Urbanist-Medium.ttf'),
      'Urbanist-Regular':require('./Urbanist-Regular.ttf'),
      'Urbanist-Light':require('./Urbanist-Light.ttf'),
    });
  };