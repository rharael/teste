import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { UserContext } from "../utils/context/UserContext";
import LoginScreen from "../pages/Login/login";
import Routes from "./";

const Stack = createStackNavigator();

export default function AuthRoutes() {
	const { activeUserId } = useContext(UserContext);

	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			{ activeUserId ? ( <Stack.Screen name="AppRoutes" component={Routes} /> )
			: ( <Stack.Screen name="Login" component={LoginScreen} /> ) }
		</Stack.Navigator>
	);
}
