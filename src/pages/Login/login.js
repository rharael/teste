import React, { useState, useContext } from 'react';
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
  CustomCheckbox,
} from './styles';
import { UserContext } from '../../utils/context/UserContext';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const { setActiveUser } = useContext(UserContext);

  const isValidLogin = () => {
    if (!username) {
      Alert.alert('Erro', 'Por favor, insira seus dados.');
      return false;
    }

    if (!password) {
      Alert.alert('Erro', 'Por favor, insira sua senha.');
      return false;
    }

    if (password.length < 8) {
      Alert.alert('Erro', 'A senha deve ter pelo menos 8 caracteres.');
      return false;
    }

    return true;
  };

  const handleLogin = () => {
    if (!isValidLogin()) {
      return;
    }

    const userId = username;
    setActiveUser(userId);

    Alert.alert('Sucesso', 'Login realizado com sucesso!');
    navigation.navigate('AppRoutes');
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
            placeholder="Nome de Usuário"
            onChangeText={setUsername}
            autoCapitalize="none"
          />

          <Input
            value={password}
            placeholder="Senha"
            secureTextEntry
            onChangeText={setPassword}
          />

          <RememberMeContainer>
            <TouchableOpacity
              onPress={() => setRememberMe(!rememberMe)}
              style={{ flexDirection: 'row', alignItems: 'center' }}
            >
              <CustomCheckbox selected={rememberMe}>
                {rememberMe && (
                  <Text style={{ color: '#fff', fontWeight: 'bold' }}>✔</Text>
                )}
              </CustomCheckbox>
              <RememberMeText>Lembrar senha</RememberMeText>
            </TouchableOpacity>
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
