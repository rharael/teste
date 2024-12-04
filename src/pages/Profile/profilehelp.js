import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import Styles from "./styles";

export default function ProfileHelp(){

  return (
    <Styles.Container>
      <Styles.Label>Busca</Styles.Label>
	  <Styles.Input />
    </Styles.Container>
  );
};