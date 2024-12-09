import styled from 'styled-components/native';
import Icons from '../../assets/icons/index';

const Container = styled.View`
  flex: 1;
  background-Color: #fff;
  width: 100%;
  margin: 0 auto;
`;

const Main = styled.ScrollView`
  width: 90%;
  margin: 0 auto;
`;

const Products = styled.View`
  width: 100%;
  margin: 60px auto;
`;

const ProductItem = styled.TouchableOpacity`
  width: 168px;
  border-radius: 8px;
  margin-bottom: 27px;
`;

const ProductAreaImage = styled.View`
  border: 1px solid #E3E3E3;
  height: 167px;
  width: 167px;
  padding: 30px;
  border-radius: 8px;
  overflow: hidden;
`;

const ProductImage = styled.Image`
  height: 100%;
  width: 100%;
  resize-mode: contain;
`;

const ProductName = styled.Text`
  font-size: 14px;
  font-family: 'Urbanist-Medium';
  color: #0f100d;
  margin: 8px 0;
`;

const ProductPrice = styled.Text`
  font-size: 13px;
  font-family: 'Urbanist-SemiBold';
  color: #0f100d;
`;

const ProductInformation = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 10px;
`;

const ProductStars = styled.View`
  flex-direction: row;
  gap: 4px;
`;

const ProductStarIcon = styled(Icons.Star)`
`;

const ProductStarValue = styled.Text`
  font-size: 13px;
  font-family: 'Urbanist-Medium';
  color: #0f100d;
`;

const EmptyContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 230px;
`;

const EmptyImage = styled.Image`
`;

const EmptyTitle = styled.Text`
  font-size: 16px;
  font-family: 'Urbanist-SemiBold';
  text-align: center;
  color: #2A2A2A;
`;

const Styles = {
    Container, Main, Products, ProductItem, ProductAreaImage, ProductImage, ProductName, ProductInformation, ProductPrice, ProductStars, ProductStarIcon, ProductStarValue, EmptyContainer, EmptyImage, EmptyTitle,
};

export default Styles;