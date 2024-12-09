import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserContext } from "./UserContext";

export const ProductsFavoriteContext = createContext();

export const ProductsFavoriteProvider = ({ children }) => {
  const { activeUserId } = useContext(UserContext);
  const [favoriteProducts, setFavoriteProducts] = useState([]);

  const saveFavorites = async (updatedFavorites) => {
    try {
      setFavoriteProducts(updatedFavorites);
      await AsyncStorage.setItem(
        `userFavorites_${activeUserId}`,
        JSON.stringify(updatedFavorites)
      );
    } catch (error) {
      console.error("Erro ao salvar favoritos:", error);
    }
  };

  const loadFavorites = async () => {
    try {
      const storedFavorites = await AsyncStorage.getItem(
        `userFavorites_${activeUserId}`
      );
      if (storedFavorites) {
        setFavoriteProducts(JSON.parse(storedFavorites));
      }
    } catch (error) {
      console.error("Erro ao carregar favoritos:", error);
    }
  };

  const toggleFavorite = (product) => {
    const isAlreadyFavorited = favoriteProducts.some(
      (item) => item.id === product.id
    );

    let updatedFavorites;
    if (isAlreadyFavorited) {
      updatedFavorites = favoriteProducts.filter(
        (item) => item.id !== product.id
      );
    } else {
      updatedFavorites = [product, ...favoriteProducts];
    }

    saveFavorites(updatedFavorites);
  };

  useEffect(() => {
    loadFavorites();
  }, [activeUserId]);

  return (
    <ProductsFavoriteContext.Provider
      value={{ favoriteProducts, toggleFavorite }}
    >
      {children}
    </ProductsFavoriteContext.Provider>
  );
};