import React, { useState } from 'react';
import {
    Text
} from 'react-native';

const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Container>
            <LogoContainer>
                <LogoText>Compas<TextHighlight>Shop</TextHighlight></LogoText>
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
                <CreateAccountText onPress={() => Alert.alert('Criar Conta')}>
                    Criar conta
                </CreateAccountText>
            </FooterText>
        </Container>
    );




}

export default LoginScreen;