import React, { useEffect, useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/routes/index';
import { loadFonts } from './src/assets/fonts/fonts';
import AppLoading from 'expo-app-loading';
import Cart from './src/pages/Cart/cart';

export default function App(){
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    await loadFonts();
    setFontsLoaded(true);
  }

  if(!fontsLoaded){
    return <AppLoading/>
  }

  return(
    <Cart />
      // <NavigationContainer>
      //   <Routes/>
      // </NavigationContainer>
  );
};
