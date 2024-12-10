import styled from 'styled-components/native';
import Icons from '../../assets/icons/index';
import { LinearGradient } from 'expo-linear-gradient';

const Container = styled.View`
  flex: 1;
  background-Color: #FFFFFF;
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

const Payment = styled.View`
`;

const PaymentContainer = styled.View`
  flex-direction: row;
  height: 60px;
  margin-top: 20px;
`;

const PaymentType = styled.View`
  height: 100%;
  width: 60px;
  background-color: #F0F1F2;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

const PaymentInformation = styled.View`
  height: 100%;
  justify-content: space-between;
  padding: 2px 11px;
`;

const PaymentInformationTitle = styled.Text`
  font-size: 15px;
  font-family: 'Urbanist-Regular';
  color: #0F100D;
`;

const PaymentInformationText = styled.Text`
  font-size: 15px;
  font-family: 'Urbanist-Medium';
  color: #7C7C7C;
`;

const PaymentInformationRadio = styled.TouchableOpacity`
  border-width: 1px;
  border-radius: 12px;
  border-color: ${({ isSelected }) => (isSelected ? '#FE724C' : '#E3E3E3')};
  position: absolute;
  right: 0;
  top: 18.5;
  width: 23px;
  height: 23px;
  background-color: ${({ isSelected }) => (isSelected ? '#FE724C' : 'transparent')};
  justify-content: center;
  align-items: center;
`;

const RadioCircle = styled.View`
  width: 12px;
  height: 12px;
  border-radius: 6px;
  background-color: #FFFFFF;
`;

const LineDiv = styled.View`
  border: 1px solid #E3E3E3;
  margin: 20px 0 0;
`;

const AddCardButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
  height: 40px;
  width: 100%;
  border: 1px solid #7C7C7C;
  border-radius: 12px;
  margin: 47px 0 15px;
`;

const AddCardButtonIcon = styled(Icons.Plus)`
`;

const AddCardButtonText = styled.Text`
  font-size: 14px;
  font-family: 'Urbanist-Medium';
  color: #7C7C7C;
  width: 145px;
  height: 17px;
`;

const PurchaseValuesContainer = styled.View`
  height: 122px;
  justify-content: space-between;
  margin: 22px 0;
`;

const PurchaseValuesContent = styled.View`
  flex-direction: row;
  height: 17px;
`;

const PurchaseValuesTitle = styled.Text`
  font-size: 14px;
  font-family: 'Urbanist-Medium';
  color: #7C7C7C;
  width: 50%;
`;

const PurchaseValue = styled.Text`
  font-size: 14px;
  font-family: 'Urbanist-SemiBold';
  color: #2A2A2A;
  text-align: right;
  width: 50%;
`;

const LineDivPurchase = styled.View`
  border: 1px dashed #7C7C7C;
`;

const Footer = styled.View`
  width: 90%;
  margin: 0 auto;
`;

const CardPreview = styled(LinearGradient).attrs(() => ({
  colors: ['#2A2A2A', '#5A5A5A'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 }
}))`
  width: 100%;
  height: 192px;
  border-radius: 20px;
  padding: 25px;
  margin-top: 18px;
`;

const CardPreviewHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const CardPreviewNumber = styled.Text`
  font-size: 20px;
  font-family: 'Urbanist-SemiBold';
  color: #FFFFFF;
  margin: 23px 0 25px;
`;

const CardPreviewFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const CardPreviewFooterDiv1 = styled.View`
  width: 55%;
`;

const CardPreviewFooterDiv2 = styled.View`
  gap: 7px;
`;

const CardPreviewWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 40%;
`;

const CardPreviewTitle = styled.Text`
  font-size: 14px;
  font-family: 'Urbanist-SemiBold';
  color: #7C7C7C;
`;

const CardPreviewName = styled.Text`
  font-size: 20px;
  font-family: 'Urbanist-SemiBold';
  color: #FFFFFF;
`;

const CardPreviewValue = styled.Text`
  font-size: 15px;
  font-family: 'Urbanist-Light';
  color: #FFFFFF;
`;

const LogoCardContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 22px;
`;

const LogoCardOption = styled.TouchableOpacity`
  border: ${(props) => (props.seleted ? '1px solid #FE724C' : '1px solid #E3E3E3')};
  border-radius: 6px;
  width: 88px;
  height: 34px;
  justify-content: center;
  align-items: center;
`;


const InfomationCardContainer = styled.View`
`;

const InformationCardDiv = styled.View`
  margin-top: 21px;
`;

const InformationCardTitle = styled.Text`
  font-size: 14px;
  font-family: 'Urbanist';
  color: #7C7C7C;
  margin-bottom: 5px;
`;

const InformationCardInput1 = styled.TextInput`
  height: 56px;
  width: 100%;
  border-radius: 8px;
  background-color: #EEF0F5;
  padding: 18px;
  font-size: 16px;
  font-family: 'Urbanist-SemiBold';
  color: #0F100D;
`;

const InformationCardInput2 = styled.TextInput`
  height: 56px;
  width: 149px;
  border-radius: 8px;
  background-color: #EEF0F5;
  padding: 18px;
  font-size: 16px;
  font-family: 'Urbanist-SemiBold';
  color: #0F100D;
`;

const InformationCardWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const SetPaymentWrapper = styled.View`
  flex-direction: row;
  gap: 10px;
  margin: 11px 0 8px;
`;

const SetPaymentCheckbox = styled.TouchableOpacity`
  border-width: 1px;
  border-color: ${(props) => (props.selected ? '#FE724C' : '#E3E3E3')};
  border-radius: 2px;
  background-color: ${(props) => (props.selected ? '#FE724C' : 'transparent')};
  width: 20px;
  height: 20px;
  justify-content: center;
  align-items: center;
`; 

const ConfirmCheckbox = styled(Icons.Confirm)``;

const SetPaymentTitle = styled.Text`
  font-size: 14px;
  font-family: 'Urbanist-Medium';
  color: #0F100D;
`;

const SetPaymentText = styled.Text`
  font-size: 14px;
  font-family: 'Urbanist-Medium';
  color: #7C7C7C;
`;

const Button = styled.TouchableOpacity`
  height: 56px;
  width: 100%;
  border-radius: 12px;
  background-color: #FE724C;
  justify-content: center;
  align-items: center;
  margin: 32px 0 28px;
`;

const ButtonText = styled.Text`
  font-size: 16px;
  font-family: 'Urbanist-SemiBold';
  color: #FFFFFF;
`;

const PaymentFinishImage = styled.Image`
  margin-top: 48px;
`;

const PaymentFinishText = styled.Text`
  font-size: 16px;
  font-family: 'Urbanist-SemiBold';
  color: #0F100D;
  text-align: center;
  margin: 17px 0 30px;
`;

const IdBuy = styled.Text`
  font-size: 14px;
  font-family: 'Urbanist-Medium';
  color: #7C7C7C;
  text-align: center;
  margin: 9px 0 31px;
`;

const MyPurchasesButton = styled.TouchableOpacity`
  width: 243px;
  height: 40px;
  background-color: #3A6BEB;
  border-radius: 8px;
  justify-content: center;
  margin: 0 auto 124px;
`;

const MyPurchasesText = styled.Text`
  font-size: 14px;
  font-family: 'Urbanist-SemiBold';
  color: #FFFFFF;
  text-align: center;
`;

const Styles = {
  Container, Header, BackButton, BackIcon, HeaderText, Main, Payment, PaymentContainer, PaymentType, PaymentInformation, PaymentInformationTitle, PaymentInformationText, PaymentInformationRadio, RadioCircle, LineDiv, AddCardButton, AddCardButtonIcon, AddCardButtonText, PurchaseValuesContainer, PurchaseValuesContent, PurchaseValuesTitle, PurchaseValue, LineDivPurchase, Footer,  CardPreview, CardPreviewHeader, CardPreviewNumber, CardPreviewFooter, CardPreviewFooterDiv1, CardPreviewFooterDiv2, CardPreviewWrapper, CardPreviewTitle, CardPreviewName, CardPreviewValue, LogoCardContainer, LogoCardOption, InfomationCardContainer, InformationCardDiv, InformationCardTitle,InformationCardInput1, InformationCardInput2, InformationCardWrapper, SetPaymentWrapper, SetPaymentCheckbox, ConfirmCheckbox, SetPaymentTitle, SetPaymentText, Button, ButtonText, PaymentFinishImage, PaymentFinishText, IdBuy, MyPurchasesButton, MyPurchasesText,
};

export default Styles;