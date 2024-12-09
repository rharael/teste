import styled from 'styled-components/native';
import Icons from '../../assets/icons/index';

const Container = styled.View`
  flex: 1;
  background-Color: #fff;
  width: 100%;
  margin: 0 auto;
`;

const Header = styled.View`
  flex-direction: row;
  height: 40px;
  margin: 50px auto 0px;
  align-items: center;
  width: 90%;
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
  width: 90%;
  margin: 0 auto;
`;

const BuysContainer = styled.View`
  padding: 12px;
  background-color: #F0F1F2;
  border-radius: 8px;
  margin-top: 25px;
`;

const BuysHeader = styled.View`
  flex-direction: row;
`;

const BuyData = styled.Text`
  font-size: 14px;
  font-family: 'Urbanist-Medium';
  color: #0F100D;
  width: 70%;
`;

const BuyCode = styled.Text`
  font-size: 14px;
  font-family: 'Urbanist-Medium';
  color: #7C7C7C;
  width: 30%;
  text-align: right;
`;

const BuyedProductsContainer = styled.View`
`;

const BuyedProduct = styled.View`
  flex-direction: row;
  height: 74px;
  gap: 9px;
  margin-top: 12px;
`;

const ProductImageArea = styled.View`
  width: 74px;
  height: 100%;
  padding: 10px;
  background-color: #FFF;
  border-radius: 4px;
  overflow: hidden;
`;

const ProductImage = styled.Image`
  height: 100%;
  width: 100%;
  resize-mode: contain;
`;

const ProductInformation = styled.View`
  justify-content: space-between;
`;

const ProductInformationWrapper = styled.View`
`;

const ProductInformationTitle = styled.Text`
  font-size: 14px;
  font-family: 'Urbanist-Medium';
  color: #000;
`;

const ProductInformationText = styled.Text`
  font-size: 12px;
  font-family: 'Urbanist-Regular';
  color: #7C7C7C;
`;

const MoreProductText = styled.Text`
  font-size: 14px;
  font-family: 'Urbanist-Medium';
  color: #FC8002;
  margin-top: 12px;
  text-align: right;
`;

const MoreProductQuantity = styled.Text`
  font-size: 14px;
  font-family: 'Urbanist-Bold';
  color: #FC8002;
`;

const EmptyBuyContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const EmptyBuyImage = styled.Image`
`;

const EmptyBuyText = styled.Text`
  font-size: 16px;
  font-family: 'Urbanist-SemiBold';
  color: #2A2A2A;
`;

const Styles = {
  Container, Header, BackButton, BackIcon, HeaderText, Main, BuysContainer, BuysHeader, BuyData, BuyCode, BuyedProductsContainer, BuyedProduct, ProductImageArea, ProductImage, ProductInformation, ProductInformationWrapper, ProductInformationTitle, ProductInformationText, MoreProductText, MoreProductQuantity, EmptyBuyContainer, EmptyBuyImage, EmptyBuyText
}

export default Styles;