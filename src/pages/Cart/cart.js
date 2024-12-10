import React, { useState, useContext,} from 'react';
import { Container, Cupom, TitleCupom, TextInput,
       SubTotalPrice, Discount, Total, TextSub, PriceSub, TextDisc, PriceDisc, Line, TextTotal, PriceTotal, PaymentBtn, TextBt, BtnCupom, EmptyCart, CartContainer, EmptyImage, EmptyTitle, TextMessageCoupon, ViewTextCoupon} from './styles'
import Icons from '../../assets/icons';
import { ProductsCartContext } from '../../utils/context/ProductsCartContext';
import ItemProducts from './itemproducts';
import { FlatList } from 'react-native';

export default function Cart ({navigation}){
    const [cupom, setCupom] = useState('');
    const { productsCart, subtotalPrice, discount, applyCoupon, total  } = useContext(ProductsCartContext);
    const [message, setMessage] = useState('');
    const handleCouponChange = (code) => {
        setCupom(code);
        if (applyCoupon(code)) {
          setMessage('Cupom aplicado com sucesso!');
        } else if (code) {
          setMessage('Cupom inválido ou já usado.');
        } else {
          setMessage('');
        }
      };
    return (
        <Container showsVerticalScrollIndicator={false}>
        {productsCart.length === 0 ? (
            <EmptyCart>
                <EmptyImage source={require('../../assets/images/empty-cart.png')}/>
                <EmptyTitle>Seu carrinho está vazio</EmptyTitle>
            </EmptyCart>
        ) : (

          <CartContainer>
            <FlatList
                 data = {productsCart}
                 keyExtractor = {(item, index) => index.toString()}
                 renderItem = {({item}) => <ItemProducts data ={item}/>}
                 scrollEnabled={false}
                 />
 
             <Cupom>
                 <TitleCupom>Você Possui algum CUPOM?</TitleCupom>
                 <BtnCupom>
                     <TextInput placeholder="CUPOM" value={cupom} onChangeText={handleCouponChange}/>
                     <Icons.CheckFill />
                 </BtnCupom>
                 <ViewTextCoupon>
                 {message ? <TextMessageCoupon> {message}</TextMessageCoupon> : null}
                 </ViewTextCoupon>
               
             </Cupom>
             <SubTotalPrice>
                 <TextSub>Subtotal</TextSub>
                 <PriceSub>$ {subtotalPrice.toFixed(2)}</PriceSub>
             </SubTotalPrice>
             <Discount> 
                 <TextDisc>Desconto</TextDisc>
                 <PriceDisc>-$ {discount.toFixed(2)} </PriceDisc>
             </Discount>
             <Line></Line>
             <Total> 
                 <TextTotal>Total</TextTotal>
                 <PriceTotal>$ {total.toFixed(2)}</PriceTotal>
             </Total>
             <PaymentBtn onPress={() => navigation.navigate("Payment")}>
                 <Icons.CardPayment />
                 <TextBt> Pagamento</TextBt>
             </PaymentBtn>
         </CartContainer>
        )}
        </Container>

    );
}