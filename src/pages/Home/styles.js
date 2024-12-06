import styled from 'styled-components/native';
import Icons from '../../assets/icons/index';

const Container = styled.View`
  flex: 1;
  background-Color: #fff;
  width: 100%;
  margin: 20px auto 0px;
`;

const Header = styled.View`
  width: 353px;
  padding: 60px 0 0;
  margin: 0 auto;
`;

const HeaderDiv = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const WelcomeDiv = styled.View`
`;

const WelcomeText = styled.Text`
  font-size: 11px;
  font-family: 'Urbanist-Regular';
  color: #7c7c7c;
  margin-bottom: 3px;
`;

const UserName = styled.Text`
  font-size: 14px;
  font-family: 'Urbanist-SemiBold';
  color: #0F100D;
`;

const ShoppingCart = styled.TouchableOpacity`
  width: 35px;
  height: 35px;
  border: 1px solid #000;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

const ShoppingCartImage = styled(Icons.ShopCart)`
`;

const SearchProductWrapper = styled.View`
  flex-direction: row;
  background-Color: #f0f1f2;
  width: 353px;
  height: 46px;
  border-radius: 12px;
  margin: 16px 0 10px 0;
  padding: 0 10px;
  align-items: center;
`;

const SearchProduct = styled.TextInput`
  font-size: 12px;
  font-family: 'Urbanist-Regular';
  padding-left: 10px;
  width: 90%;
`; 

const SearchIcon = styled(Icons.Search)`
`;

const Main = styled.ScrollView`
`;

const SectionTitle = styled.Text`
  font-size: 16px;
  font-family: 'Urbanist-Bold';
  color: #07100D;
  margin: 18px auto 13px;
  width: 353px;
`;

const Categories = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    gap: 20
  },
}))`
  max-height: 76px;
  width: 353px;
  margin: 0 auto;
`;

const CategoryItem = styled.TouchableOpacity`
  width: 56px;
  height: 76px;
`;

const CategoryImage = styled.View`
  width: 55px;
  height: 55px;
  margin: 0 auto;
  border-radius: 50%;
  background-Color: #f5f5f5;
  justify-content: center;
  align-items: center;
`;

const CategoryIcon = styled(Icons.CatToy)`
`;

const CategoryText = styled.Text`
  font-size: 10px;
  font-family: 'Urbanist-SemiBold';
  color: #0f100d;
  text-align: center;
  margin-top: 9px;
`;

const LineDiv = styled.View`
  border: 1px solid #f5f5f5;
  margin: 27px auto 0;
  width: 353px;
`;

const Products = styled.View`
  width: 353px;
  margin: 0 auto;
`;

const ProductItem = styled.TouchableOpacity`
  width: 168px;
  border-radius: 8px;
  margin-bottom: 27px;
`;

const ProductAreaImage = styled.View`
  background-Color: #f5f5f5;
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
  align-items: center;
`;

const EmptyImage = styled.Image`
  margin-top: 120px
`;

const EmptyTitle = styled.Text`
  font-size: 18px;
  font-family: 'Urbanist-SemiBold';
  color: #2a2a2a;
  text-align: center;
  margin: 14px 0 14px;
`;

const EmptySubitle = styled.Text`
  font-size: 14px;
  font-family: 'Urbanist-Regular';
  color: #7c7c7c;
  text-align: center;
`;

const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Styles = {
  Container, Header, HeaderDiv, WelcomeDiv, WelcomeText, UserName, ShoppingCart, ShoppingCartImage, Main, SearchProductWrapper, SearchProduct, SearchIcon, SectionTitle, Categories, CategoryItem, CategoryImage, CategoryIcon, CategoryText, Products, ProductItem, ProductAreaImage, ProductImage, ProductName, ProductInformation, ProductPrice, ProductStars, ProductStarIcon, ProductStarValue, LineDiv, EmptyContainer, EmptyImage, EmptyTitle, EmptySubitle, LoadingContainer
};

export default Styles;