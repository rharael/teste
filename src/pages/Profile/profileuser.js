import React, { useEffect, useState, useContext } from "react";
import { UserContext } from '../../utils/context/UserContext';
import Styles from "./styles";

export default function ProfileUser(){
	const { userData, updateUserData } = useContext(UserContext);
	return (
		<Styles.Container>
			<Styles.HeaderUser>
				<Styles.ProfileName>{userData.name}</Styles.ProfileName>
				<Styles.ProfileEmail>{userData.email}</Styles.ProfileEmail>
			</Styles.HeaderUser>
			<Styles.Label>Nome</Styles.Label>
			<Styles.Input value={userData.name} onChangeText={(text) => updateUserData({ ...userData, name: text })} />

			<Styles.Label>Data de nascimento</Styles.Label>
			<Styles.Input value={userData.birthDate} onChangeText={(text) => updateUserData({ ...userData, birthDate: text })} />

			<Styles.Label>Email</Styles.Label>
			<Styles.Input value={userData.email} onChangeText={(text) => updateUserData({ ...userData, email: text })} />

			<Styles.Label>Telefone</Styles.Label>
			<Styles.Input value={userData.phone} onChangeText={(text) => updateUserData({ ...userData, phone: text })}/>
		</Styles.Container>
	);
};

