import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import Styles from "./styles";

export default function ProfileAddress(){

  return (
    <Styles.Container>
      <Styles.HeaderUser>Endereço</Styles.HeaderUser>
      <Styles.Label>CEP</Styles.Label>
	  <Styles.Input />

      <Styles.Label>Logradouro</Styles.Label>
      <Styles.Input />

      <Styles.Label>Bairro</Styles.Label>
      <Styles.Input />

      <Styles.Label>Estado</Styles.Label>
      <Styles.Input />

	  <Styles.Label>Cidade</Styles.Label>
      <Styles.Input />
    </Styles.Container>
  );
};