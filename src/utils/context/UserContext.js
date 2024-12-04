import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Api from "../../services/Api";
import { Alert } from "react-native";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({
	name: "",
	birthDate: "",
	email: "",
	phone: "",
	address: {
		zipcode: "",
		street: "",
		district: "",
		state: "",
		city: "",
	}
  });

  const loadData = async () => {
    try {
      const storedData = await AsyncStorage.getItem("userData");
      if (storedData) {
        setUserData(JSON.parse(storedData));
      } else {
        const response = await Api.get("users/1");
        const fetchedData = {
			name: `${response.data.name.firstname} ${response.data.name.lastname}`,
			birthDate: "08/08/2000",
			email: response.data.email,
			phone: response.data.phone,
			address: {
			  zipcode: response.data.address.zipcode || "",
			  street: response.data.address.street || "",
			  district: response.data.address.street || "",
			  state: response.data.address.city || "",
			  city: response.data.address.city || "",
		  }
		  };
        setUserData(fetchedData);
        await AsyncStorage.setItem("userData", JSON.stringify(fetchedData));
      }
    } catch (error) {
      Alert.alert("Erro", "Não foi possível carregar os dados.");
    }
  };

	const updateUserData = async (updatedData) => {
		try {
			setUserData(updatedData);
			await AsyncStorage.setItem("userData", JSON.stringify(updatedData));
		} catch (error) {
			console.error("Erro ao salvar dados:", error);
			}
	};

  useEffect(() => {
    loadData();
  }, []);

  return (
    <UserContext.Provider value={{ userData, updateUserData}}>
      {children}
    </UserContext.Provider>
  );
};
