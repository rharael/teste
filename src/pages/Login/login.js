import React, { useState } from 'react';
import {
  Text,
  Image
} from 'react-native';
import { CheckBox } from '@react-native-community/checkbox';

const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    return (
        <Container>
          <LogoContainer>
            <LogoText>Compas<TextHighlight>Shop</TextHighlight></LogoText>
          </LogoContainer>
    
          <Subtitle>Entre com seu email e senha para usar o app</Subtitle>
    
          <Input
            value={username}
            placeholder="Nome de Usuário"
            onChangeText={setUsername}
          />
    
          <Input
            value={password}
            placeholder="Senha"
            secureTextEntry
            onChangeText={setPassword}
          />
    
          <RememberMeContainer>
            <CheckBox
              value={rememberMe}
              onValueChange={setRememberMe}
            />
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