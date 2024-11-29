import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
`;

export const LogoContainer = styled.View`
  width: 221px;
  height: 43px;
`;

export const LogoText = styled.Text`
  font-size: 36px;
  font-weight: 900;
  color: #0F100D;
`;

export const TextHighlight = styled.Text`
  color: #FE724C;
`;

export const Subtitle = styled.Text`
  width: 204px;
  height: 38px;
  font-size: 16px;
  color: #7C7C7C;
`;

export const Input = styled.TextInput`
  width: 353px;
  height: 56px;
  padding: 20px;
  background-color: #EEF0F5;
`;

export const RememberMeContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const RememberMeText = styled.Text`
  color: #7C7C7C;
  font-size: 16px;
`;

export const LoginButton = styled.TouchableOpacity`
  background-color: #FE724C;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

export const LoginButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 600;
`;

export const FooterText = styled.Text`
  font-size: 16px;
  color: #0F100D;
  font-weight: 600;
`;

export const CreateAccountText = styled.Text`
  color: #FE724C;
`;
