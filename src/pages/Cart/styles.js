import styled from 'styled-components/native';

export const Container = styled.ScrollView`
width: 100%;
justify-contente: center;
background-color: #FFF;
font-family: 'Urbanist-Regular';
`;
export const ItemProduct = styled.View`
flex-direction: row;
margin-top: 74px;
margin-left: 17px;
`;

export const Image = styled.Image`
width: 84px;
height: 109px;
`;
export const Title = styled.Text``;
export const Price = styled.Text`
margin-top: 11px;
`;
export const QuantityWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 81px;
  height: 27px;
  margin-top: 38.95px;
`;

export const QuantityButton = styled.TouchableOpacity``;

export const Quantity = styled.Text`
  font-size: 16px;
  font-family: 'Urbanist-SemiBold';
  color: #0F100D;
`;
export const RemoveItem = styled.TouchableOpacity`
margin-left: 138px;
`;

export const Content = styled.View`
margin-left: 26px;
`;

export const Cupom = styled.View`
margin-top: 90px;
width:90%;
margin-left: 20px;
`;
export const TitleCupom = styled.Text`
color: #7C7C7C;
font-size: 14px;
font-style: normal;
margin-bottom: 13px;
font-weight: 500;
`;
export const BtnCupom = styled.View`
flex: 1;
flex-direction: row;
justify-content: space-between;
border-radius: 12px;
border: 1px solid #E3E3E3;
align-items: center;
padding-right: 14px;
`;

export const TextInput = styled.TextInput`
color: #7C7C7C;
padding: 20px;
font-size: 14px;
font-style: normal;
font-weight: 500;
`;

export const SubTotalPrice = styled.View`
margin: 20px;
width: 90%;
flex-direction: row;
justify-content: space-between;
`;
export const TextSub = styled.Text`
color: #7C7C7C;
font-size: 14px;
font-style: normal;
font-style: normal;
font-weight: 500;
`;
export const PriceSub = styled.Text`
color: #2A2A2A;
font-size: 16px;
font-style: normal;
font-weight: 600;
`;
export const Discount = styled.View`
margin: 18px;
width: 90%;
flex-direction: row;
justify-content: space-between;
`;
export const Line = styled.View`
flex: 1;
marginHorizontal: 20px;
border: 1px solid #7C7C7C;
borderStyle: dotted;
margin-top: 18px;
`;
export const TextDisc = styled.Text`
color: #7C7C7C;
font-size: 14px;
font-style: normal;
font-style: normal;
font-weight: 500;
`;
export const PriceDisc = styled.Text``;
export const Total = styled.View`
margin: 18px;
width: 90%;
flex-direction: row;
justify-content: space-between;`;
export const TextTotal = styled.Text`
color: #7C7C7C;
font-size: 14px;
font-style: normal;
font-weight: 500;
`;
export const PriceTotal = styled.Text`
color: #2A2A2A;
font-size: 16px;
font-style: normal;
font-weight: 600;
`;
export const PaymentBtn = styled.TouchableOpacity`
width: 90%;
padding: 15px;
background-color: #FE724C;
height: 48px;
border-radius: 12px;
margin-left:20px;
align-items: center;
flex-direction: row;
justify-content: center;
`;
export const TextBt = styled.Text`
font-size: 16px;
font-style: normal;
font-weight: 600;
justify-content: center;
color: #FFF;
`;
