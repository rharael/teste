import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Api from "../../services/Api";
import Styles from "./styles";

export default function ProfileAddress(){
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
			const response = await Api.get("users/2");
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

	  useEffect(() => {
		loadData();
	  }, []);

  return (
    <Styles.Container>
      <Styles.Label>CEP</Styles.Label>
	  <Styles.Input value={userData.address.zipcode} />

      <Styles.Label>Logradouro</Styles.Label>
      <Styles.Input value={userData.address.street}/>

      <Styles.Label>Bairro</Styles.Label>
      <Styles.Input value={userData.address.district}/>

      <Styles.Label>Estado</Styles.Label>
      <Styles.Input value={userData.address.state}/>

	  <Styles.Label>Cidade</Styles.Label>
      <Styles.Input value={userData.address.city}/>
    </Styles.Container>
  );
};