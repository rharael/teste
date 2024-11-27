import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image
} from 'react-native';

const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View>
            <Text>Compas<Text>Shop</Text></Text>

            <Text>Entre com seu email e senha para usar o app</Text>

            <TextInput 
            value={username}
            placeholder='Nome de Usuário'
            onChangeText={setUsername}
            ></TextInput>

            <View>
                <TextInput
                value={email}
                placeholder='Email'
                onChangeText={setEmail}
                ></TextInput>
            </View>

            <TextInput 
            value={password}
            placeholder='Senha'
            onChangeText={setUsername}
            ></TextInput>

            

            <TouchableOpacity >
                <Text>Entrar</Text>
            </TouchableOpacity>

            <Text>Já possui uma conta?<Text>Entrar</Text></Text>



        </View>
    )



}