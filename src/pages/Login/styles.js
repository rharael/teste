import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  padding: 20px;
`;

export const LogoContainer = styled.View`
  width: 100%;
  height: 53px;
  margin-top: 118px;
  margin-bottom: 76px;
`;

export const LogoText = styled.Text`
  font-size: 36px;
  font-weight: 900;
  color: #0f100d;
  text-align: center;
`;

export const TextHighlight = styled.Text`
  color: #fe724c;
`;

export const Subtitle = styled.Text`
  width: 204px;
  heigth: 38px;
  text-align: left;
  font-size: 16px;
  color: #7c7c7c;
  margin-bottom: 47px;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 56px;
  margin-bottom: 18px;
  padding: 20px;
  background-color: #eef0f5;
  border-radius: 8px;
`;

export const RememberMeContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 29px;
  margin-top: -2px;
`;

export const CustomCheckbox = styled.View`
  width: 18px;
  height: 18px;
  border-width: 1px;
  border-color: #ccc;
  background-color: ${({ selected }) => (selected ? '#fe724c' : '#fff')};
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  margin-right: 8px;
`;

export const RememberMeText = styled.Text`
  color: #7c7c7c;
  font-size: 16px;
`;

export const LoginButton = styled.TouchableOpacity`
  background-color: #fe724c;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 56px;
  margin-bottom: 202px;
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
  text-align: center;
  margin-bottom: 44px;
`;

export const CreateAccountText = styled.Text`
  color: #fe724c;
  margin-left: 8px;
  font-weigth: 700;
`;
