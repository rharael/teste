import Styles from './styles';
import Images from '../../assets/images/images';

export default function PaymentTypes({ data }){
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

        <Styles.PaymentInformationRadio/>
      </Styles.PaymentContainer>

      <Styles.LineDiv/>
    </Styles.Payment>
  );
}