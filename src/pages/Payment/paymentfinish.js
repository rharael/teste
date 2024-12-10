import { useContext } from 'react';
import Styles from './styles';
import { BuyContext } from '../../utils/context/BuyContext';

export default function PaymentFinish({ navigation }){
  const { buys, lastSubtotalPrice } = useContext(BuyContext);
  const lastBuy = buys[0];

  return(
    <Styles.Container>
      <Styles.Main vertical showsVerticalScrollIndicator={false}>
        <Styles.PaymentFinishImage source={require('../../assets/images/paymentfinish.png')}/>

        <Styles.PaymentFinishText>Pagamento realizado com sucesso!</Styles.PaymentFinishText>

        <Styles.PurchaseValuesContainer>
          <Styles.PurchaseValuesContent>
            <Styles.PurchaseValuesTitle>Subtotal</Styles.PurchaseValuesTitle>
            <Styles.PurchaseValue>$ {lastSubtotalPrice.toFixed(2)}</Styles.PurchaseValue>
          </Styles.PurchaseValuesContent>

          <Styles.PurchaseValuesContent>
            <Styles.PurchaseValuesTitle>Desconto</Styles.PurchaseValuesTitle>
            <Styles.PurchaseValue>-$ --------</Styles.PurchaseValue>
          </Styles.PurchaseValuesContent>

          <Styles.LineDivPurchase/>
   
          <Styles.PurchaseValuesContent>
            <Styles.PurchaseValuesTitle>Total</Styles.PurchaseValuesTitle>
            <Styles.PurchaseValue>$ --------</Styles.PurchaseValue>
          </Styles.PurchaseValuesContent>
        </Styles.PurchaseValuesContainer>

        <Styles.IdBuy>ID da compra: #{lastBuy?.id}</Styles.IdBuy>

        <Styles.MyPurchasesButton onPress={() => 
          navigation.reset({index: 0, routes:[{name: 'BuyPayment'}]})}>
          <Styles.MyPurchasesText>Minhas compras</Styles.MyPurchasesText>
        </Styles.MyPurchasesButton>
      </Styles.Main>

      <Styles.Footer>
        <Styles.Button onPress={() => 
          navigation.reset({index: 0, routes:[{name: 'HomeStack'}]})}
        >
          <Styles.ButtonText>Continuar na loja</Styles.ButtonText>
        </Styles.Button>
      </Styles.Footer>
    </Styles.Container>
  );
}