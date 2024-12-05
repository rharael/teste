import React, { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
  Text,
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
  CustomCheckbox
} from './styles';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!username) {
      Alert.alert('Erro', 'Por favor, insira seu email.');
      return;
    }

    if (!emailRegex.test(username)) {
      Alert.alert('Erro', 'Por favor, insira um email válido.');
      return;
    }

    if (!password) {
      Alert.alert('Erro', 'Por favor, insira sua senha.');
      return;
    }

    if (password.length < 8) {
      Alert.alert('Erro', 'A senha deve ter pelo menos 8 caracteres.');
      return;
    }

    Alert.alert('Sucesso', 'Login realizado com sucesso!');
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

          <Subtitle>Entre com seu email e senha para usar o app</Subtitle>

          <Input
            value={username}
            placeholder="Email"
            onChangeText={setUsername}
            autoCapitalize="none"
          />

          <Input
            value={password}
            placeholder="Digite sua senha"
            secureTextEntry
            onChangeText={setPassword}
          />

          <RememberMeContainer>
            <TouchableOpacity
              style={[CustomCheckbox, rememberMe && { backgroundColor: '#fe724c' }]}
              onPress={() => setRememberMe(!rememberMe)}
            >
              {rememberMe && <Text style={{ color: '#fff', fontWeight: 'bold' }}>✔</Text>}
            </TouchableOpacity>
            <RememberMeText>Lembrar senha</RememberMeText>
          </RememberMeContainer>

          <LoginButton onPress={handleLogin}>
            <LoginButtonText>Entrar</LoginButtonText>
          </LoginButton>

          <FooterText>
            Ainda não possui uma conta?{' '}
            <CreateAccountText onPress={() => navigation.navigate('Criar Conta')}>
              Criar conta
            </CreateAccountText>
          </FooterText>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
