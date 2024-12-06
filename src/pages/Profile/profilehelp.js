import React, { useContext } from "react";
import { Button } from "react-native";
import Styles from "./styles";
import { UserContext } from "../../utils/context/UserContext";

export default function ProfileHelp({ navigation }){
	const { logout } = useContext(UserContext);
	const handleLogout = () => {
		logout();
		navigation.reset({
			index: 0,
			routes: [{ name: "Login" }],
		});
	};

	return (
		<Styles.Container>
			<Styles.Label>Busca</Styles.Label>
			<Styles.Input />
			<Button title="Logout" onPress={handleLogout} />
		</Styles.Container>
	);
};