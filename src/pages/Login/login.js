import React, { useState } from 'react';
import {
  Text
} from 'react-native';
import {
  Container,
  LogoContainer,
  LogoText,
  TextHighlight,
  Subtitle,
  Input,
  RememberMeContainer,
  RememberMeText,
  LoginButton,
  LoginButtonText,
  FooterText,
  CreateAccountText,
} from './styles.js';
import { CheckBox } from '@react-native-community/checkbox';

const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    return (
        <Container>
          <LogoContainer>
            <LogoText>Compas<TextHighlight>S</TextHighlight>hop</LogoText>
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
            <RememberMeText>Lembrar senha</RememberMeText>
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