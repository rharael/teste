import React, { useContext } from 'react';
import { FlatList } from 'react-native';
import Styles from './styles';
import Images from '../../assets/images/images';
import PaymentTypes from './paymenttypes';
import { CardContext } from '../../utils/context/CardContext';

export default function Payment({ navigation }){
  const { cards } = useContext(CardContext)

  return(
    <Styles.Container>
      <Styles.Header>
       <Styles.BackButton onPress={() => navigation.goBack()}>
          <Styles.BackIcon/>
       </Styles.BackButton>
       <Styles.HeaderText>Pagamento</Styles.HeaderText>
      </Styles.Header>

      <Styles.Main vertical showsVerticalScrollIndicator={false}>

        <FlatList
          data={cards}
          keyExtractor={(item) => `${item.idCard}`}
          renderItem={({item}) => <PaymentTypes data={item}/>}
          scrollEnabled={false}
        />

        <Styles.PaymentContainer>
          <Styles.PaymentType>
            <Images.Pix/>
          </Styles.PaymentType>

          <Styles.PaymentInformation>
            <Styles.PaymentInformationTitle>PIX</Styles.PaymentInformationTitle>
            <Styles.PaymentInformationText>Aprovação imediata</Styles.PaymentInformationText>
          </Styles.PaymentInformation>

          <Styles.PaymentInformationRadio/>
        </Styles.PaymentContainer>
        
        <Styles.AddCardButton onPress={() => navigation.navigate('NewCard')}>
          <Styles.AddCardButtonIcon/>
          <Styles.AddCardButtonText>Adicionar Novo Cartão</Styles.AddCardButtonText>
        </Styles.AddCardButton>
      </Styles.Main>
      
      <Styles.Footer>
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

        <Styles.Button onPress={() => 
          navigation.reset({index: 0, routes:[{name: 'PaymentFinish'}]})}
        >
          <Styles.ButtonText>Confirmar compra</Styles.ButtonText>
        </Styles.Button>
      </Styles.Footer>
    </Styles.Container>
  );
}