import Styles from './styles';

export default function PaymentFinish({ navigation }){
  return(
    <Styles.Container>
      <Styles.Main vertical showsVerticalScrollIndicator={false}>
        <Styles.PaymentFinishImage source={require('../../assets/images/paymentfinish.png')}/>

        <Styles.PaymentFinishText>Pagamento realizado com sucesso!</Styles.PaymentFinishText>

        <Styles.PurchaseValuesContainer>
          <Styles.PurchaseValuesContent>
            <Styles.PurchaseValuesTitle>Subtotal</Styles.PurchaseValuesTitle>
            <Styles.PurchaseValue>R$ 13.998,00</Styles.PurchaseValue>
          </Styles.PurchaseValuesContent>

          <Styles.PurchaseValuesContent>
            <Styles.PurchaseValuesTitle>Desconto</Styles.PurchaseValuesTitle>
            <Styles.PurchaseValue>-R$ 2.800,00</Styles.PurchaseValue>
          </Styles.PurchaseValuesContent>

          <Styles.LineDivPurchase/>
   
          <Styles.PurchaseValuesContent>
            <Styles.PurchaseValuesTitle>Total</Styles.PurchaseValuesTitle>
            <Styles.PurchaseValue>R$ 11.198,00</Styles.PurchaseValue>
          </Styles.PurchaseValuesContent>
        </Styles.PurchaseValuesContainer>

        <Styles.IdBuy>ID da compra: #34930943</Styles.IdBuy>

        <Styles.MyPurchasesButton>
          <Styles.MyPurchasesText>Minhas compras</Styles.MyPurchasesText>
        </Styles.MyPurchasesButton>
      </Styles.Main>

      <Styles.Footer>
        <Styles.Button onPress={() => 
          navigation.reset({index: 0, routes:[{name: 'Home'}]})}
        >
          <Styles.ButtonText>Continuar na loja</Styles.ButtonText>
        </Styles.Button>
      </Styles.Footer>
    </Styles.Container>
  );
}