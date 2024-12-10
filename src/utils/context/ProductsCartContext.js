import React, { createContext, useState } from "react";

export const ProductsCartContext = createContext()

export const ProductsCartProvider = ({ children })=> {
	const [productsCart, setProductsCart] = useState([]);

	const addProductCart = (newProduct) => {
		const updatedProductsCart = [...productsCart, newProduct];
    setProductsCart(updatedProductsCart);
	};

	const updatedQuantity = (name, delta) => {
		setProductsCart((prevItems) => 
			prevItems.map((item) => item.name === name ? 
			{...item, quantity : Math.max(1, item.quantity + delta)} : item
			)
		);
	};

	const removeProductCart = (name) => {
		setProductsCart((prevItems) =>
		  prevItems.filter((item) => item.name !== name)
		);
	  };

	const totalPrice = productsCart.reduce((sum, item) => sum + item.price * item.quantity, 0);

	return(
		<ProductsCartContext.Provider value={{ productsCart, addProductCart, updatedQuantity, totalPrice, removeProductCart }}>
			{children}
		</ProductsCartContext.Provider>
	)
};