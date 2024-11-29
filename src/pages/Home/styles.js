import styled from 'styled-components/native';
import Icons from '../../assets/icons/index';

export const Container = styled.View`
  flex: 1;
  background-Color: #fff;
  width: 353px;
  margin: 0 auto;
`;

export const Header = styled.View`
  padding: 60px 0 0;
`;

export const HeaderDiv = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const WelcomeDiv = styled.View`
`;

export const WelcomeText = styled.Text`
  font-size: 11px;
  color: #7c7c7c;
  margin-bottom: 3px;
`;

export const UserName = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: #000;
`;

export const ShoppingCart = styled.TouchableOpacity`
  width: 35px;
  height: 35px;
  border: 1px solid #000;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

export const ShoppingCartImage = styled(Icons.ShopCart)`
`;

export const SearchProductWrapper = styled.View`
  flex-direction: row;
  background-Color: #f0f1f2;
  width: 353px;
  height: 46px;
  border-radius: 12px;
  margin: 16px 0 10px 0;
  padding: 0 10px;
  align-items: center;
`;

export const SearchProduct = styled.TextInput`
  font-size: 12px;
  padding-left: 10px;
`; 

export const SearchIcon = styled(Icons.Search)`
`;

export const Main = styled.ScrollView`
`;

export const SectionTitle = styled.Text`
  font-size: 16px;
  color: #07100D;
  margin: 18px 0 13px 0;
`;

export const Categories = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    gap: 20
  },
}))`
  max-height: 76px;
  width: 100%;
`;

export const CategoryItem = styled.TouchableOpacity`
  width: 56px;
  height: 76px;
`;

export const CategoryImage = styled.View`
  width: 55px;
  height: 55px;
  margin: 0 auto;
  border-radius: 50%;
  background-Color: #f5f5f5;
  justify-content: center;
  align-items: center;
`;

export const CategoryIcon1 = styled(Icons.CatPhone)`
`;

export const CategoryIcon2 = styled(Icons.CatBed)`
`;

export const CategoryIcon3 = styled(Icons.CatToy)`
`;

export const CategoryIcon4 = styled(Icons.CatGames)`
`;

export const CategoryIcon5 = styled(Icons.CatLaptops)`
`;

export const CategoryText = styled.Text`
  font-size: 10px;
  color: #0f100d;
  text-align: center;
  margin-top: 9px;
`;

export const LineDiv = styled.View`
  border: 1px solid #f5f5f5;
  margin-top: 27px;
`;

export const Products = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const ProductItem = styled.TouchableOpacity`
  width: 168px;
  height: 243px;
  border-radius: 8px;
`;

export const ProductAreaImage = styled.View`
  background-Color: #f5f5f5;
  height: 167px;
  width: 167px;
  border-radius: 8px;
`;

export const ProductImage = styled.Image`
  margin: auto;
`;

export const ProductName = styled.Text`
  font-size: 14px;
  color: #0f100d;
  margin: 8px 0;
`;

export const ProductPrice = styled.Text`
  font-size: 13px;
  color: #0f100d;
`;

export const ProductInformation = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;

export const ProductStars = styled.View`
  flex-direction: row;
  gap: 4px;
`;

export const ProductStarIcon = styled(Icons.Star)`
`;

export const ProductStarValue = styled.Text`
  font-size: 13px;
  color: #0f100d;
`;