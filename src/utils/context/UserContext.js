import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Api from "../../services/Api";
import { Alert } from "react-native";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const [userData, setUserData] = useState(null);
	const [activeUserId, setActiveUserId] = useState(null);
	const [cards, setCards] = useState([]);
	const [buys, setBuys] = useState([]);

	const loadUserData = async (id) => {
		try {
			const storedData = await AsyncStorage.getItem(`user_${id}`);
			if (storedData) {
			setUserData(JSON.parse(storedData));
			} else {
			const response = await Api.get(`users/${id}`);
			const fetchedData = {
				id: id,
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
			await AsyncStorage.setItem(`user_${id}`, JSON.stringify(fetchedData));
			}
		} catch (error) {
		Alert.alert("Erro", "Não foi possível carregar os dados.");
		}
	};

	const updateUserData = async (updatedData) => {
		try {
			setUserData(updatedData);
			await AsyncStorage.setItem(`user_${updatedData.id}`, JSON.stringify(updatedData));
		} catch (error) {
			console.error("Erro ao salvar dados:", error);
			}
	};


	const setActiveUser = async (id) => {
		try {
			setActiveUserId(id);
			await AsyncStorage.setItem("activeUserId", id.toString());
			await loadUserData(id);
		} catch (error) {
			console.error("Erro ao definir usuário ativo:", error);
		}
	};

	const loadActiveUser = async () => {
		try {
			const storedId = await AsyncStorage.getItem("activeUserId");
			if (storedId) {
			setActiveUserId(parseInt(storedId, 10));
			await loadUserData(parseInt(storedId, 10));
			}
		} catch (error) {
			console.error("Erro ao carregar usuário ativo:", error);
		}
	};

	const logout = async () => {
		try {
		  await AsyncStorage.removeItem("activeUserId");
		  setUserData(null);
		  setActiveUserId(null);
		} catch (error) {
		  console.error("Erro ao fazer logout:", error);
		}
	  };
	
	useEffect(() => {
		loadActiveUser();
	}, []);

	return (
		<UserContext.Provider value={{ userData, updateUserData, setActiveUser, activeUserId, logout, cards, setCards}}>
			{children}
		</UserContext.Provider>
	);
};
