import React, { useContext, useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import Styles from './styles';
import Images from '../../assets/images/images';
import PaymentTypes from './paymenttypes';
import { CardContext } from '../../utils/context/CardContext';
import { ProductsCartContext } from '../../utils/context/ProductsCartContext';
import { BuyContext } from '../../utils/context/BuyContext';

export default function Payment({ navigation }){
  const { cards } = useContext(CardContext);
  const { productsCart, subtotalPrice, clearCart } = useContext(ProductsCartContext);
  const { generateBuy } = useContext(BuyContext);
  const [ selectedOption, setSelectedOption ] = useState('');

  useEffect(() => {
    if(cards.length === 0){
      setSelectedOption('Pix');
    }
    else{
      const principalCard = cards.find(card => card.isPrincipal);
      setSelectedOption(principalCard ? principalCard.number : 'Pix');
    }
  }, [cards]);

  const handlePayment = () => {
    if(productsCart.length > 0){
      generateBuy(productsCart, subtotalPrice);
      clearCart();
      navigation.reset({index: 0, routes:[{name: 'PaymentFinish'}]});
    }
  }

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
          renderItem={({item}) => 
            <PaymentTypes 
              data={item} 
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />}
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

          <Styles.PaymentInformationRadio
            isSelected={selectedOption === 'Pix'}
            onPress={() => setSelectedOption('Pix')}
          >
            {selectedOption === 'Pix' && <Styles.RadioCircle />}
          </Styles.PaymentInformationRadio>
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
            <Styles.PurchaseValue>$ {subtotalPrice.toFixed(2)}</Styles.PurchaseValue>
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

        <Styles.Button onPress={handlePayment}>
          <Styles.ButtonText>Confirmar compra</Styles.ButtonText>
        </Styles.Button>
      </Styles.Footer>
    </Styles.Container>
  );
}