import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
  padding: 16px;
`;

export const LogoContainer = styled.View`
  width: 221px;
  height: 43px;
  margin-bottom: 20px;
`;

export const LogoText = styled.Text`
  font-size: 36px;
  font-weight: 900;
  color: #0f100d;
`;

export const TextHighlight = styled.Text`
  color: #fe724c;
`;

export const Subtitle = styled.Text`
  text-align: center;
  font-size: 16px;
  color: #7c7c7c;
  margin-bottom: 20px;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 56px;
  margin-bottom: 16px;
  padding: 16px;
  background-color: #eef0f5;
  border-radius: 8px;
`;

export const LoginButton = styled.TouchableOpacity`
  background-color: #fe724c;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 56px;
  margin-bottom: 16px;
`;

export const LoginButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 600;
`;

export const FooterText = styled.Text`
  font-size: 16px;
  color: #0f100d;
  font-weight: 600;
`;

export const CreateAccountText = styled.Text`
  color: #fe724c;
  margin-left: 4px;
`;
