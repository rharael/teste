import React, { createContext, useState } from "react";

export const ProductsCartContext = createContext()

export const ProductsCartProvider = ({ children })=> {
	const [productsCart, setProductsCart] = useState([]);
	const [coupon, setCoupon] = useState(null);


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

  const applyCoupon = (code) => {
    if (code === 'PRIMEIRACOMPRA' && !coupon) {
      setCoupon({ code, discount: 0.20 });
      return true;
    }
    if (!code) {
      setCoupon(null);
    }
    return false;
  };
  const subtotalPrice = productsCart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = coupon ? subtotalPrice * coupon.discount : 0;
  const total = subtotalPrice - discount;

	const removeProductCart = (name) => {
		setProductsCart((prevItems) =>
		  prevItems.filter((item) => item.name !== name)
		);
	  };

		const clearCart = () => {
			setProductsCart([]);
		}

	

	return(
		<ProductsCartContext.Provider value={{ productsCart, addProductCart, updatedQuantity, subtotalPrice, removeProductCart, clearCart, total, discount, applyCoupon, coupon, setCoupon }}>
			{children}
		</ProductsCartContext.Provider>
	)
};