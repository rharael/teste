import styled from 'styled-components/native';
import Icons from '../../assets/icons/index';

export const Container = styled.View`
  flex: 1;
  background-Color: #fff;
  width: 353px;
  margin: 0 auto;
`;

export const Header = styled.View`
  height: 60px;
  justify-content: center;
`;

export const BackButton = styled.TouchableOpacity`
  width: 18%;
  height: 100%;
  justify-content: center;
`;

export const BackIcon = styled(Icons.Arrow)`
`;

export const Product = styled.ScrollView`
`;

export const ProductImageArea = styled.View`
  width: 100%;
  height: 350px;
  justify-content: center;
  align-items: center;
`;

export const ProductImage = styled.Image`
  width: 229px;
  height: 295px;
`;

export const ProductHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ProductTitle = styled.Text`
  font-size: 22px;
`;

export const IconsArea = styled.View`
  flex-direction: row;
  gap: 2px;
`;

export const IconButton = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
`;

export const ShareIcon = styled(Icons.Share)`
`;

export const FavoriteIcon = styled(Icons.Heart)`
`;

export const Description = styled.Text`
  font-size: 14px;
  width: 90%;
  color: #333;
`;

export const ReadMore = styled.Text`
  font-size: 14px;
  font-weight: bold;
  text-decoration: underline;
  text-align: right;
  width: 90%;
  color: #000;
`;

export const ReviewContainer = styled.View`
  flex-direction: row;
  width: 50%;
  justify-content: space-between;
`;

export const Stars = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  border: 1px solid #e3e3e3; 
  width: 68px;
  height: 30px;
  gap: 5px;
`;

export const StarIcon = styled(Icons.Star)`
`;

export const StarContent = styled.Text`
  font-size: 13px;
`;

export const Reviews = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid #e3e3e3; 
  border-radius: 15px;
  width: 102px;
  height: 30px;
  gap: 5px;
`;

export const ReviewValue = styled.Text`
  font-size: 13px;
`;

export const ReviewContent = styled.Text`
  font-size: 13px;
`;

export const DiscountPrice = styled.Text`
  font-size: 14px;
  text-decoration-line: line-through;
  color: #888;
`;

export const ProductPrice = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #000;
`;

export const Actions = styled.View`
  flex-direction: row;
  justify-content: space-between;
  height: 10%;
`;

export const QuantityControl = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-Color: #f5f5f5;
  border-radius: 8px;
  width: 96px;
  height: 48px;
  gap: 2px;
`;

export const QuantityButton = styled.TouchableOpacity`
  background-Color: #fff;
  width: 27px;
  height: 27px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

export const QuantityUp = styled(Icons.Search)`
`;

export const QuantityDown = styled(Icons.Search)`
`;

export const QuantityText = styled.Text`
  font-size: 14px;
`;

export const AddCartButtom = styled.TouchableOpacity`
  background-Color: #fe724c;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  width: 204px;
  height: 48px;
  gap: 5px;
`;

export const AddCartIcon = styled(Icons.CartAdd)`
`;

export const AddCartText = styled.Text`
  font-size: 14px;
  color: #fff;
`;
