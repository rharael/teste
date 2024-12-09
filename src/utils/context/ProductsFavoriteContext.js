import React, { createContext, useState } from "react";

export const ProductsFavoriteContext = createContext()

export const ProductsFavoriteProvider = ({ children })=> {
	const [favoriteProducts, setFavoriteProducts] = useState([]);

  const toggleFavorite = (product) => {
    setFavoriteProducts((prevFavorites) => {
      const isFavorited = prevFavorites.some((item) => item.id === product.id);
      if(isFavorited){
        return prevFavorites.filter((item) => item.id !== product.id);
      }
      return [product, ...prevFavorites];
    });
  };

  const isFavorite = (productId) => {
    return favoriteProducts.some((item) => item.id === productId);
  };

	return(
		<ProductsFavoriteContext.Provider value={{ favoriteProducts, toggleFavorite, isFavorite }}>
			{children}
		</ProductsFavoriteContext.Provider>
	)
};