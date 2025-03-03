import React, { useState } from 'react';
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
  LoginButton,
  LoginButtonText,
  FooterText,
  CreateAccountText,
} from './styles.js';

const CreateAccountScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Controle de visibilidade da senha

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

    Alert.alert('Conta criada com Sucesso!', '', [
      {
        text: 'OK',
        onPress: () => {
          Alert.alert('Você foi redirecionado(a) à Tela de Login!', '', [
            { text: 'OK', onPress: () => navigation.navigate('Login') },
          ]);
        },
      },
    ]);
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

          <View style={{ position: 'relative', width: '100%' }}>
            <Input
              value={password}
              placeholder="Senha"
              secureTextEntry={!showPassword} // Alterna visibilidade da senha
              onChangeText={setPassword}
              style={{ paddingRight: 40 }} // Espaço para o botão
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
