import Styles from './styles';
import Images from '../../assets/images/images';

export default function PaymentTypes({ data, selectedOption , setSelectedOption }){
  const isSelected = selectedOption === data.number;
  return(
    <Styles.Payment>
      <Styles.PaymentContainer>
        <Styles.PaymentType>
          {data.brand === 'Mastercard' && <Images.MasterCard/>}
          {data.brand === 'Visa' && <Images.Visa/>}
          {data.brand === 'PayPal' && <Images.PayPal/>}
        </Styles.PaymentType>
  
        <Styles.PaymentInformation>
          <Styles.PaymentInformationTitle>{data.brand}</Styles.PaymentInformationTitle>
          <Styles.PaymentInformationText>{'******** ' + data.number.slice(-9)}</Styles.PaymentInformationText>
        </Styles.PaymentInformation>

        <Styles.PaymentInformationRadio 
          isSelected={isSelected}
          onPress={() => setSelectedOption(data.number)}
        >
          {isSelected && <Styles.RadioCircle/>}
        </Styles.PaymentInformationRadio>
      </Styles.PaymentContainer>

      <Styles.LineDiv/>
    </Styles.Payment>
  );
}