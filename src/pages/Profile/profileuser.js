import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import Styles from "./styles";

export default function ProfileUser(){

	return (
		<Styles.Container>
			<Styles.HeaderUser>
				<Styles.ProfileName>João das Neves</Styles.ProfileName>
				<Styles.ProfileEmail>joao.neves@gemail.com</Styles.ProfileEmail>
			</Styles.HeaderUser>
			<Styles.Label>Nome</Styles.Label>
			<Styles.Input />

			<Styles.Label>Data de nascimento</Styles.Label>
			<Styles.Input />

			<Styles.Label>Email</Styles.Label>
			<Styles.Input />

			<Styles.Label>Telefone</Styles.Label>
			<Styles.Input />
		</Styles.Container>
	);
};

