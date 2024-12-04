import React, { useEffect, useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { UserProvider } from './src/utils/context/UserContext';
import AppLoading from 'expo-app-loading';
import Routes from './src/routes/index';
import { loadFonts } from './src/assets/fonts/fonts';


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
        <Routes/>
      </NavigationContainer>
	</UserProvider>
  );
};