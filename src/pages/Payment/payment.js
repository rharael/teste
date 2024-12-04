import React from 'react';
import Styles from './styles';
import {useNavigation} from '@react-navigation/native';

export default function Payment(){
  return(
    <Styles.Container>
      <Styles.Header>
        <Styles.BackButton>
         <Styles.BackIcon/>
        </Styles.BackButton>

        <Styles.HeaderText>Novo Cartão</Styles.HeaderText>
      </Styles.Header>

      <Styles.Main>
        <Styles.CardContainer>
        </Styles.CardContainer>

        <Styles.LogoCardContainer>
          <Styles.LogoCardOption>
            <Styles.LogoCard source={require('../../assets/images/logos_mastercard.png')}/>
          </Styles.LogoCardOption>

          <Styles.LogoCardOption>
            <Styles.LogoCard source={require('../../assets/images/logos_visaelectron.png')}/>
          </Styles.LogoCardOption>

          <Styles.LogoCardOption>
            <Styles.LogoCard source={require('../../assets/images/logos_paypal.png')}/>
          </Styles.LogoCardOption>
        </Styles.LogoCardContainer>
      </Styles.Main>
    </Styles.Container>
  );
}