import React, { useEffect, useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { UserProvider } from './src/utils/context/UserContext';
import AppLoading from 'expo-app-loading';
import AuthRoutes from './src/routes/AuthRoutes';
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
	<UserProvider>
      <NavigationContainer> 
        <AuthRoutes/>
      </NavigationContainer>
	</UserProvider>
  );
};
