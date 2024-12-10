import React, { useContext, useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../../utils/context/UserContext";
import { Container } from "./styles";

const AuthCheckScreen = () => {
	const { activeUserId } = useContext(UserContext);
	const navigation = useNavigation();
	
	useEffect(() => {
		if (activeUserId) {
		navigation.navigate("AppRoutes");
		} else {
		navigation.navigate("Login");
		}
	}, [activeUserId]);

	return (
		<Container>
			<ActivityIndicator size="large" color="#FE724C" />
		</Container>
	);
};

export default AuthCheckScreen;
