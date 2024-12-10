import React, { useState, useEffect, useContext } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
  Text,
  View,
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
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const { setActiveUser } = useContext(UserContext);

  useEffect(() => {
    const loadCredentials = async () => {
      try {
        const savedUsername = await AsyncStorage.getItem('username');
        const savedPassword = await AsyncStorage.getItem('password');
        const savedRememberMe = await AsyncStorage.getItem('rememberMe');

        if (savedRememberMe === 'true') {
          setUsername(savedUsername || '');
          setPassword(savedPassword || '');
          setRememberMe(true);
        }
      } catch (error) {
        console.error('Erro ao carregar credenciais:', error);
      }
    };

    loadCredentials();
  }, []);

  const saveCredentials = async () => {
    try {
      if (rememberMe) {
        await AsyncStorage.setItem('username', username);
        await AsyncStorage.setItem('password', password);
        await AsyncStorage.setItem('rememberMe', 'true');
      } else {
        await AsyncStorage.removeItem('username');
        await AsyncStorage.removeItem('password');
        await AsyncStorage.setItem('rememberMe', 'false');
      }
    } catch (error) {
      console.error('Erro ao salvar credenciais:', error);
    }
  };

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

  const handleLogin = async () => {
    if (!isValidLogin()) {
      return;
    }

    const userId = username;
    setActiveUser(userId);

    await saveCredentials();

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

          <View style={{ position: 'relative', width: '100%' }}>
            <Input
              value={password}
              placeholder="Senha"
              secureTextEntry={!showPassword}
              onChangeText={setPassword}
              style={{ paddingRight: 40 }}
            />
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              style={{
                position: 'absolute',
                right: 10,
                top: '35%',
                transform: [{ translateY: -10 }],
              }}
            >
              <Text style={{ fontSize: 14 }}>
                {showPassword ? 'Ocultar' : 'Mostrar'}
              </Text>
            </TouchableOpacity>
          </View>

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
