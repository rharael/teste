import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../pages/Login/login";
import Routes from "./index";
import AuthCheckScreen from "../pages/Splash_Screen/AuthCheckScreen";
import CreateAccountScreen from "../pages/Create_Account/createAccount"

const Stack = createNativeStackNavigator();

export default function AuthRoutes() {

	return (
	<Stack.Navigator screenOptions={{ headerShown: false }}>
		<Stack.Screen name="AuthCheck" component={AuthCheckScreen} />
		<Stack.Screen name="AppRoutes" component={Routes} />
		<Stack.Screen name="Login" component={LoginScreen} />
		<Stack.Screen name="Criar Conta" component={CreateAccountScreen} />
	</Stack.Navigator>
	);
}