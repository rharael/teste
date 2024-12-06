import React, { useEffect, useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
<<<<<<< HEAD
import { UserProvider } from './src/utils/context/UserContext';
import AppLoading from 'expo-app-loading';
import AuthRoutes from './src/routes/AuthRoutes';
import { loadFonts } from './src/assets/fonts/fonts';
import AppLoading from 'expo-app-loading';
import Cart from './src/pages/Cart/cart';

=======
import Routes from './src/routes/index';
import { loadFonts } from './src/assets/fonts/fonts';
import AppLoading from 'expo-app-loading';
import Cart from './src/pages/Cart/cart';
>>>>>>> 898fdd9f4bf38a499053a7d83faff86a04e65330

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
<<<<<<< HEAD
	<UserProvider>
      <NavigationContainer> 
        <AuthRoutes/>
      </NavigationContainer>
	</UserProvider>
=======
    <Cart />
      // <NavigationContainer>
      //   <Routes/>
      // </NavigationContainer>
>>>>>>> 898fdd9f4bf38a499053a7d83faff86a04e65330
  );
};
