import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image
} from 'react-native';
import { CheckBox } from '@react-native-community/checkbox';

const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    return (
        <View>
            <Text>Compas<Text>Shop</Text></Text>

            <Text>Entre com seu email e senha para usar o app</Text>

            <TextInput 
            value={username}
            placeholder='Nome de Usuário'
            onChangeText={setUsername}
            ></TextInput>

            <TextInput 
            value={password}
            placeholder='Senha'
            onChangeText={setPassword}
            ></TextInput>

            <View>
            <CheckBox
                value={rememberMe}
                onValueChange={setRememberMe}
            />
            <Text>Lembrar senha</Text>
            </View>

            <TouchableOpacity >
                <Text>Entrar</Text>
            </TouchableOpacity>

            <Text>Ainda não possui uma conta?<Text>Criar conta</Text></Text>



        </View>
    )



}