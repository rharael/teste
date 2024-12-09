import React, { useContext, createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserContext } from "./UserContext";

export const CardContext = createContext()

export const CardProvider = ({ children })=> {
	const { activeUserId } = useContext(UserContext);
	const [cards, setCards] = useState([]);

	const saveCards = async (updatedCards) =>{
		try {
			setCards(updatedCards);
			await AsyncStorage.setItem(`userCard_${activeUserId}`, JSON.stringify(updatedCards));
			} catch (error) { console.error("Erro ao salvar os cartões", error)}
	}

	const loadCards = async () => {
		try{
			const storedCards = await AsyncStorage.getItem(`userCard_${activeUserId}`)
			if (storedCards) {
				setCards(JSON.parse(storedCards));
			}
		} catch (error){ console.error("Erro ao carregar os cartões", error)}
	}

	const getNextIdCard = async () => {
		try {
			const idKey = `idCardCounter_${activeUserId}`;
			const currentId = await AsyncStorage.getItem(idKey);
			const nextId = currentId ? parseInt(currentId, 10) + 1 : 1;
			await AsyncStorage.setItem(idKey, nextId.toString());
			return nextId;
		} catch (error) {
			console.error("Erro ao gerar idCard:", error);
			return null;
		}
	};

	const addCard = async (newCard) => {
		const idCard = await getNextIdCard();
		if (!idCard) return;

		const cardWithId = { ...newCard, idCard };
		const updatedCards = [...cards, cardWithId];
		console.log(cardWithId)
		saveCards(updatedCards);
		};

	const setPrincipalCard = (card) => {
		const updatedCards = cards.map((c) =>
			c.number === card.number && c.expiry === card.expiry ?
			{ ...c, isPrincipal: true} : {...c, isPrincipal: false} )
		saveCards(updatedCards); 
		};

	useEffect(() => {
		loadCards();
	}, [activeUserId]);

	return(
		<CardContext.Provider value={{ cards, addCard, setPrincipalCard }}>
			{children}
		</CardContext.Provider>
	)
};