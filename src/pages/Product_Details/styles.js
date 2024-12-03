import styled from 'styled-components/native';
import Icons from '../../assets/icons/index';

const Container = styled.View`
  flex: 1;
  background-Color: #fff;
  width: 393px;
  margin: 20px auto 0px;
`;

const Header = styled.View`
  height: 40px;
  margin: 30px auto 0px;
  justify-content: center;
  background-color: #fff;
  width: 353px;
`;

const BackButton = styled.TouchableOpacity`
  width: 18%;
  height: 100%;
  justify-content: center;
`;

const BackIcon = styled(Icons.Back)`
`;

const Product = styled.ScrollView`
  width: 353px;
  margin: 0 auto;
`;

const ProductImageArea = styled.View`
  width: 100%;
  height: 330px;
  padding: 35px;
  justify-content: center;
  align-items: center;
`;

const ProductImage = styled.Image`
  height: 100%;
  width: 100%;
  resize-mode: contain;
`;

const ProductHeader = styled.View`
  flex-direction: row;
  flex-shrink: 1;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0 10px;
`;

const ProductTitle = styled.Text`
  font-size: 20px;
  font-family: 'Urbanist-SemiBold';
  color: #0F100D;
  width: 75%;
`;

const IconsArea = styled.View`
  flex-direction: row;
  gap: 15px;
`;

const IconButton = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
`;

const ShareIcon = styled(Icons.Share)`
`;

const FavoriteIcon = styled(Icons.Heart)`
`;

const Description = styled.Text`
  font-size: 13px;
  font-family: 'Urbanist-Medium';
  width: 90%;
  text-align: justify;
  color: #7C7C7C;
`;

const ReadMore = styled.Text`
  font-size: 13px;
  font-family: 'Urbanist-SemiBold';
  text-decoration: underline;
  text-align: right;
  width: 90%;
  color: #0F100D;
`;

const ReviewContainer = styled.View`
  flex-direction: row;
  width: 50%;
  justify-content: space-between;
  margin: 18px 0 24px;
`;

const Stars = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  border: 1px solid #e3e3e3; 
  width: 68px;
  height: 30px;
  gap: 4px;
`;

const StarIcon = styled(Icons.Star)`
`;

const StarContent = styled.Text`
  font-size: 13px;
  font-family: 'Urbanist-Medium';
  color: #0F100D;
`;

const Reviews = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid #e3e3e3; 
  border-radius: 15px;
  width: 102px;
  height: 30px;
  gap: 3px;
`;

const ReviewValue = styled.Text`
  font-size: 13px;
  font-family: 'Urbanist-Medium';
  color: #2A2A2A;
`;

const ReviewContent = styled.Text`
  font-size: 13px;
  font-family: 'Urbanist-Medium';
  color: #2A2A2A;
`;

const DiscountPrice = styled.Text`
  font-size: 14px;
  font-family: 'Urbanist-Medium';
  text-decoration-line: line-through;
  color: #7C7C7C;
`;

const ProductPrice = styled.Text`
  font-size: 20px;
  font-family: 'Urbanist-Bold';
  color: #0F100D;
  margin-bottom: 25px;
`;

const Actions = styled.View`
  flex-direction: row;
  justify-content: space-between;
  height: 8.5%;
  width: 353px;
  margin: 0 auto;
`;

const QuantityControl = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-Color: #f5f5f5;
  border-radius: 8px;
  width: 96px;
  height: 48px;
  gap: 2px;
`;

const QuantityButton = styled.TouchableOpacity`
  background-Color: #fff;
  width: 27px;
  height: 27px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

const QuantityUp = styled(Icons.Plus)`
`;

const QuantityDown = styled(Icons.Minus)`
`;

const QuantityText = styled.Text`
  font-size: 14px;
  font-family: 'Urbanist-Black';
  color: #0F100D;
`;

const AddCartButtom = styled.TouchableOpacity`
  background-Color: #fe724c;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  width: 204px;
  height: 48px;
  gap: 5px;
`;

const AddCartIcon = styled(Icons.CartAdd)`
`;

const AddCartText = styled.Text`
  font-size: 14px;
  font-family: 'Urbanist-SemiBold';
  color: #fff;
`;

const ModalOpacity = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: flex-end;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

const ModalContainer = styled.View`
  background-color: #fff;
  width: 100%;
  height: 214px;
  padding: 15px;
  position: absolute;
  bottom: 0;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  elevation: 5;
`;

const CloseButton = styled.TouchableOpacity`
  position: absolute;
  right: 15px;
  top: 15px;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  z-index: 1;
`;

const CloseIcon = styled(Icons.Close)`
`;

const AddedCartTitle = styled.Text`
  text-align: center;
  font-size: 15px;
  font-family: 'Urbanist-SemiBold';
  color: #0F100D;
`;

const AddedCartSubtitle = styled.Text`
  text-align: center;
  font-size: 15px;
  font-family: 'Urbanist-Regular';
  color: #7C7C7C;
  margin: 9px 0 30px;
`;

const KeepShoppingButton = styled.TouchableOpacity`
  width: 353px;
  height: 40px;
  border-radius: 10px;
  background-Color: #fe724c;
  justify-content: center;
`;

const KeepShoppingText = styled.Text`
  text-align: center;
  font-size: 14px;
  font-family: 'Urbanist-SemiBold';
  color: #fff;
`;

const GoToCartButton = styled.TouchableOpacity`
  width: 353px;
  height: 40px;
  border: 1px solid #fe724c;
  border-radius: 10px;
  justify-content: center;
  margin-top: 13px;
`;

const GoToCartText = styled.Text`
  text-align: center;
  font-size: 14px;
  font-family: 'Urbanist-SemiBold';
  color: #FE724C;
`;

const Styles = {
  Container, Header, BackButton, BackIcon, Product, ProductImageArea, ProductImage, ProductTitle, ProductHeader, IconsArea, IconButton, ShareIcon, FavoriteIcon, Description, ReadMore, ReviewContainer, Stars, Reviews, StarIcon, StarContent, ReviewValue, ReviewContent, DiscountPrice, ProductPrice, Actions, QuantityControl, QuantityButton, QuantityText, QuantityUp, QuantityDown, AddCartButtom, AddCartIcon, AddCartText, ModalContainer, ModalOpacity, CloseButton, CloseIcon, AddedCartTitle, AddedCartSubtitle, KeepShoppingButton, KeepShoppingText, GoToCartButton, GoToCartText
}

export default Styles;