import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserContext } from "./UserContext";

export const BuyContext = createContext();

export const BuyProvider = ({ children }) => {
  const { activeUserId } = useContext(UserContext)
  const [buys, setBuys] = useState([]);
  const [lastSubtotalPrice, setLastSubtotalPrice] = useState(0);

  const saveBuys = async (updatedBuys) => {
    try{
      await AsyncStorage.setItem(`userBuys_${activeUserId}`, JSON.stringify(updatedBuys));
      setBuys(updatedBuys);
    } catch(error){
      console.error("Erro ao salvar compras: ", error);
    }
  }

  const loadBuys = async () => {
    try{
      const storedBuys = await AsyncStorage.getItem(`userBuys_${activeUserId}`);
      if(storedBuys){
        setBuys(JSON.parse(storedBuys));
      }
    } catch(error){
      console.error("Erro ao carregar compras: ", error);
    }
  }

  const generateBuy = (products, subtotalPrice) => {
    const id = Math.floor(100000 + Math.random() * 900000).toString();
    const currentDate = new Date();
    const months = [
      "janeiro",
      "fevereiro",
      "março",
      "abril",
      "maio",
      "junho",
      "julho",
      "agosto",
      "setembro",
      "outubro",
      "novembro",
      "dezembro",
    ];
    const dateFormatted = `${currentDate.getDate()} de ${
      months[currentDate.getMonth()]
    } de ${currentDate.getFullYear()}`;
    const newBuy = {
      id,
      date: dateFormatted,
      product: products,
    };
    const updatedBuys = [newBuy, ...buys];
    saveBuys(updatedBuys);
    setLastSubtotalPrice(subtotalPrice);
  };

  useEffect(() => {
    if(activeUserId){
      loadBuys();
    }
  }, [activeUserId]);

  return (
    <BuyContext.Provider value={{ buys, generateBuy, lastSubtotalPrice }}>
      {children}
    </BuyContext.Provider>
  );
};
