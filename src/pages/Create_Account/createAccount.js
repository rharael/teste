import React, { useState } from 'react';
import {
    Text
} from 'react-native';
import { SubmitButton } from './styles';

const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Container>
            <LogoContainer>
                <LogoText>Compas<TextHighlight>S</TextHighlight>hop</LogoText>
            </LogoContainer>

            <Input
                value={username}
                placeholder="Nome de Usuário"
                onChangeText={setUsername}
            />

            <Input
                value={email}
                placeholder="Email"
                onChangeText={setEmail}
                keyboardType="email-address"
            />

            <Input
                value={password}
                placeholder="Senha"
                secureTextEntry
                onChangeText={setPassword}
            />

            <RememberMeContainer>
                value={rememberMe}
                onValueChange={setRememberMe}
                <Text>Lembrar senha</Text>
            </RememberMeContainer>

            <LoginButton onPress={handleLogin}>
                <LoginButtonText>Entrar</LoginButtonText>
            </LoginButton>

            <FooterText>
                Ainda não possui uma conta?
                <SubmitButton onPress={() => Alert.alert('Criar Conta')}>
                    Criar conta
                </SubmitButton>
            </FooterText>
        </Container>
    );




}

export default LoginScreen;