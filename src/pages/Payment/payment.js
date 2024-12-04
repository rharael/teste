import React, { useState } from 'react';
import Styles from './styles';
import Images from '../../assets/images/images';
import {useNavigation} from '@react-navigation/native';

export default function Payment(){
  const [newCard, setNewCard] = useState({
    name: '',
    number: '',
    expiry: '',
    cvv: '',
    isPrincipal: false,
    brand: 'Mastercard',
  });

  const formatCardNumber = (value) => {
    const clearData = value.replace(/[^0-9]/g, '');
    return clearData.replace(/(\d{4})(?=\d)/g, '$1 ');
  };

  const maskCardNumber = (value) => {
    const maskNumber = value.replace(/ /g, '');
    return maskNumber.replace(/\d(?=\d{4})/g, '*').replace(/(\*{4})/g, '$1 ');
  };

  const formatCardName = (value) => {
    if(!value) return '';

    const nameParts = value.trim().split(' ');
    if(nameParts.length === 1){
      return nameParts[0];
    }

    const firtName = nameParts[0];
    const lastName = nameParts[nameParts.length - 1];
    const middleName = nameParts.slice(1, -1).map((initial) => 
      initial[0].toUpperCase()
    ).join(' ');

    return `${firtName} ${middleName} ${lastName}`.trim();
  }

  const formatCardCvv = (value) => {
    return value.replace(/[^0-9]/g, '');
  };

  const formatCardExpiry = (value) => {
    const clearData = value.replace(/[^0-9]/g, '');
    if(clearData.length >= 3) return `${clearData.slice(0, 2)}/${clearData.slice(2)}`;
  };

  return(
    <Styles.Container>
      <Styles.Header>
        <Styles.BackButton>
         <Styles.BackIcon/>
        </Styles.BackButton>

        <Styles.HeaderText>Novo Cartão</Styles.HeaderText>
      </Styles.Header>

      <Styles.Main  vertical showsVerticalScrollIndicator={false}>
        <Styles.CardPreview>
          <Styles.CardPreviewHeader>
            <Images.ChipCard/>
            {newCard.brand === 'Mastercard' && <Images.MasterCard/>}
            {newCard.brand === 'Visa' && <Images.Visa/>}
            {newCard.brand === 'PayPal' && <Images.PayPal/>}
          </Styles.CardPreviewHeader>
          
          <Styles.CardPreviewNumber>
            {newCard.number ? maskCardNumber(newCard.number) : '**** **** **** ****'}
          </Styles.CardPreviewNumber>

          <Styles.CardPreviewFooter>
            <Styles.CardPreviewFooterDiv1>
              <Styles.CardPreviewTitle>Nome</Styles.CardPreviewTitle>
              <Styles.CardPreviewName>
                {formatCardName(newCard.name) || '---------'}
              </Styles.CardPreviewName>
            </Styles.CardPreviewFooterDiv1>

            <Styles.CardPreviewWrapper>
              <Styles.CardPreviewFooterDiv2>
               <Styles.CardPreviewTitle>CVV</Styles.CardPreviewTitle>
                <Styles.CardPreviewValue>
                  {newCard.cvv || '000'}
                </Styles.CardPreviewValue>
              </Styles.CardPreviewFooterDiv2>

              <Styles.CardPreviewFooterDiv2>
                <Styles.CardPreviewTitle>Vencimento</Styles.CardPreviewTitle>
                <Styles.CardPreviewValue>
                  {newCard.expiry || 'MM/AA'}
                </Styles.CardPreviewValue>
              </Styles.CardPreviewFooterDiv2>

            </Styles.CardPreviewWrapper>
          </Styles.CardPreviewFooter>

        </Styles.CardPreview>

        <Styles.LogoCardContainer>
          <Styles.LogoCardOption onPress={() => 
            setNewCard({...newCard, brand: 'Mastercard'})}
            seleted = {newCard.brand === 'Mastercard'}
          >
            <Images.MasterCard/>
          </Styles.LogoCardOption>

          <Styles.LogoCardOption onPress={() =>
            setNewCard({...newCard, brand: 'Visa'})}
            seleted = {newCard.brand === 'Visa'}
          >
            <Images.Visa/>
          </Styles.LogoCardOption>

          <Styles.LogoCardOption onPress={() => 
            setNewCard({...newCard, brand: 'PayPal'})}
            seleted = {newCard.brand === 'PayPal'}
          >
            <Images.PayPal/>
          </Styles.LogoCardOption>
        </Styles.LogoCardContainer>

        <Styles.InfomationCardContainer>
          <Styles.InformationCardDiv>
            <Styles.InformationCardTitle>Nome no cartão</Styles.InformationCardTitle>
            <Styles.InformationCardInput1
              value={newCard.name}
              maxLength={(35)}
              onChangeText={(text) => setNewCard(
                {...newCard, name: text})
              }
            />
          </Styles.InformationCardDiv>

          <Styles.InformationCardDiv>
            <Styles.InformationCardTitle>Número do cartão</Styles.InformationCardTitle>
            <Styles.InformationCardInput1 
              keyboardType='Numeric' 
              value={newCard.number}
              maxLength={(19)}
              onChangeText={(text) => setNewCard(
                {...newCard, number: formatCardNumber(text)}
              )}
              />
          </Styles.InformationCardDiv>

          <Styles.InformationCardWrapper>
            <Styles.InformationCardDiv>
              <Styles.InformationCardTitle>Vencimento</Styles.InformationCardTitle>
              <Styles.InformationCardInput2 
                keyboardType='Numeric'
                maxLength={(5)}
                value={newCard.expiry}
                onChangeText={(text) => setNewCard(
                  {...newCard, expiry: formatCardExpiry(text)}
                )}
              />
            </Styles.InformationCardDiv>

            <Styles.InformationCardDiv>
              <Styles.InformationCardTitle>Código de Segurança</Styles.InformationCardTitle>
              <Styles.InformationCardInput2 
                keyboardType='Numeric'
                value={newCard.cvv}
                maxLength={(3)}
                onChangeText={(text) => setNewCard(
                  {...newCard, cvv: formatCardCvv(text)}
                )}
              />
            </Styles.InformationCardDiv>
          </Styles.InformationCardWrapper>

          <Styles.InformationCardDiv>
            <Styles.SetPaymentWrapper>
              <Styles.SetPaymentCheckbox onPress={() =>
                setNewCard({...newCard, isPrincipal: !newCard.isPrincipal})}
                selected = {newCard.isPrincipal}
              />
              <Styles.SetPaymentTitle>Definir como principal</Styles.SetPaymentTitle>
            </Styles.SetPaymentWrapper>

            <Styles.SetPaymentText>
              Esse cartão será salvo como cartão principal em compras futuras
            </Styles.SetPaymentText>
          </Styles.InformationCardDiv>
        </Styles.InfomationCardContainer>

        <Styles.SaveCard>
          <Styles.SaveCardText>Salvar cartão</Styles.SaveCardText>
        </Styles.SaveCard>
      </Styles.Main>
    </Styles.Container>
  );
}