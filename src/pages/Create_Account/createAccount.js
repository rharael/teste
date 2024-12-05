import React, { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import {
  Container,
  LogoContainer,
  LogoText,
  TextHighlight,
  Subtitle,
  Input,
  LoginButton,
  LoginButtonText,
  FooterText,
  CreateAccountText,
} from './styles.js';

const CreateAccountScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCreateAccount = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!username) {
      Alert.alert('Erro', 'Por favor, insira um nome de usuário.');
      return;
    }

    if (!email) {
      Alert.alert('Erro', 'Por favor, insira um email.');
      return;
    }

    if (!emailRegex.test(email)) {
      Alert.alert('Erro', 'Por favor, insira um email válido.');
      return;
    }

    if (!password) {
      Alert.alert('Erro', 'Por favor, insira uma senha.');
      return;
    }

    if (password.length < 8) {
      Alert.alert('Erro', 'A senha deve ter pelo menos 8 caracteres.');
      return;
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Container>
          <LogoContainer>
            <LogoText>
              Compas<TextHighlight>S</TextHighlight>hop
            </LogoText>
          </LogoContainer>

          <Subtitle>
            Informe suas informações para criar uma conta e entrar no app
          </Subtitle>

          <Input
            value={username}
            placeholder="Nome de Usuário"
            onChangeText={setUsername}
            autoCapitalize="none"
          />

          <Input
            value={email}
            placeholder="Email"
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />

          <Input
            value={password}
            placeholder="Senha"
            secureTextEntry
            onChangeText={setPassword}
          />

          <LoginButton onPress={handleCreateAccount}>
            <LoginButtonText>Criar conta</LoginButtonText>
          </LoginButton>

          <FooterText>
            Já possui uma conta?{' '}
            <CreateAccountText onPress={() => navigation.navigate('Login')}>
              Entrar
            </CreateAccountText>
          </FooterText>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default CreateAccountScreen;
