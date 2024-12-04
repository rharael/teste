import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../utils/context/UserContext";
import Styles from "./styles";

export default function ProfileAddress(){
	const { userData, updateUserData } = useContext(UserContext)

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