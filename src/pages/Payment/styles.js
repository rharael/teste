import styled from 'styled-components/native';
import Icons from '../../assets/icons/index';

const Container = styled.View`
  flex: 1;
  background-Color: #fff;
  width: 393px;
  margin: 20px auto 0px;
`;

const Header = styled.View`
  flex-direction: row;
  height: 40px;
  margin: 30px auto 0px;
  align-items: center;
  width: 353px;
`;

const BackButton = styled.TouchableOpacity`
  width: 18%;
  height: 100%;
  justify-content: center;
`;

const BackIcon = styled(Icons.Back)`
`;

const HeaderText = styled.Text`
  font-size: 15px;
  font-family: 'Urbanist-SemiBold';
  color: #000;
`;

const Main = styled.ScrollView`
  width: 353px;
  margin: 0 auto;
`;

const CardContainer = styled.View`
  width: 100%;
  height: 192px;
  background-color: #5A5A5A;
  border-radius: 20px;
`;

const LogoCardContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 353;
`;

const LogoCardOption = styled.TouchableOpacity`
  border: 1px solid #E3E3E3;
  border-radius: 6px;
  width: 88px;
  height: 34px;
  justify-content: center;
  align-items: center;
`;

const LogoCard = styled.Image`
`;

const Styles = {
  Container, Header, BackButton, BackIcon, HeaderText, Main, CardContainer, LogoCardContainer, LogoCardOption, LogoCard,
};

export default Styles;