import React, { useEffect, useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { UserProvider } from './src/utils/context/UserContext';
import { CardProvider } from './src/utils/context/CardContext';
import AppLoading from 'expo-app-loading';
import Routes from './src/routes/index';
import { loadFonts } from './src/assets/fonts/fonts';
import PaymentStack from './src/routes/paymentroutes';


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
    <CardProvider>
      <NavigationContainer>
        <PaymentStack/>
      </NavigationContainer>
    </CardProvider>
	</UserProvider>
  );
};