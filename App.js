import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { UserProvider } from "./src/utils/context/UserContext";
import AppLoading from "expo-app-loading";
import AuthRoutes from "./src/routes/AuthRoutes";
import { loadFonts } from "./src/assets/fonts/fonts";
import { ProductsCartProvider } from "./src/utils/context/ProductsCartContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ProductsFavoriteProvider } from "./src/utils/context/ProductsFavoriteContext";

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    await loadFonts();
    setFontsLoaded(true);
  };

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <UserProvider>
      <ProductsFavoriteProvider>
        <ProductsCartProvider>
          <NavigationContainer>
            <AuthRoutes />
          </NavigationContainer>
        </ProductsCartProvider>
      </ProductsFavoriteProvider>
    </UserProvider>
  );
}