
import React, { useState } from 'react';
import { Container, Image, ItemProduct, Content, Title, Price, Cupom, TitleCupom, TextInput,
       SubTotalPrice, Discount, Total, TextSub, PriceSub, BtnAdd, TextDisc, PriceDisc, Line, TextTotal, PriceTotal, PaymentBtn, TextBt, BtnCupom,} from './styles'
import Icons from '../../assets/icons';


function Cart (){
    const [cupom, setCupom] = useState('');
    return (
        <Container>
            <ItemProduct>
                <Image
                    source={require('../../assets/images/iphone.png')}
                />
                <Content>
                    <Title>Apple Iphone 14 pro</Title>
                    <Price>R$ 6.999,00</Price>
                    <BtnAdd>
                        <Icons.Minusfill />
                        <Icons.Plusfill />
                    </BtnAdd>
                </Content>
            </ItemProduct>
            <Cupom>
                <TitleCupom>Você Possui algum CUPOM?</TitleCupom>
                <BtnCupom>
                    <TextInput placeholder="Cupom" value={cupom} onChangeText={setCupom}  />
                    <Icons.CheckFill />
                </BtnCupom>
            </Cupom>
            <SubTotalPrice>
                <TextSub>Subtotal</TextSub>
                <PriceSub>R$13.998,00</PriceSub>
            </SubTotalPrice>
            <Discount> 
                <TextDisc>Desconto</TextDisc>
                <PriceDisc> - </PriceDisc>
            </Discount>
            <Line></Line>
            <Total> 
                <TextTotal>Total</TextTotal>
                <PriceTotal>R$13.998,00</PriceTotal>
            </Total>
            <PaymentBtn>
                <Icons.CardPayment />
                <TextBt> Pagamento</TextBt>
            </PaymentBtn>
        </Container>
    );
}

export default Cart;
