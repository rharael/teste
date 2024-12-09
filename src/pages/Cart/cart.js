import React, { useState, useContext } from 'react';
import { Container, Cupom, TitleCupom, TextInput,
       SubTotalPrice, Discount, Total, TextSub, PriceSub, TextDisc, PriceDisc, Line, TextTotal, PriceTotal, PaymentBtn, TextBt, BtnCupom,} from './styles'
import Icons from '../../assets/icons';
import { ProductsCartContext } from '../../utils/context/ProductsCartContext';
import ItemProducts from './itemproducts';
import { FlatList } from 'react-native';

export default function Cart ({navigation}){
    const [cupom, setCupom] = useState('');
    const { productsCart, totalPrice } = useContext(ProductsCartContext);

    return (
        <Container showsVerticalScrollIndicator={false}>
           <FlatList
                data = {productsCart}
                keyExtractor = {(item, index) => index.toString()}
                renderItem = {({item}) => <ItemProducts data ={item}/>}
                scrollEnabled={false}
                />

            <Cupom>
                <TitleCupom>Você Possui algum CUPOM?</TitleCupom>
                <BtnCupom>
                    <TextInput placeholder="Cupom" value={cupom} onChangeText={setCupom}/>
                    <Icons.CheckFill />
                </BtnCupom>
            </Cupom>
            <SubTotalPrice>
                <TextSub>Subtotal</TextSub>
                <PriceSub>$ {totalPrice.toFixed(2)}</PriceSub>
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
            <PaymentBtn onPress={() => navigation.navigate("Payment")}>
                <Icons.CardPayment />
                <TextBt> Pagamento</TextBt>
            </PaymentBtn>
        </Container>
    );
}