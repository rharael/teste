import React from "react";
import { Container, Image, ItemProduct, Content, Title, Price, Cupom, TitleCupom } from './styles'

function Cart (){
    return (
        <Container>
            <ItemProduct>
                <Image
                    source={require('../../assets/images/iphone.png')}
                />
                <Content>
                    <Title>Apple Iphone 14 pro</Title>
                    <Price>R$ 6.999,00</Price>
                </Content>
            </ItemProduct>
            <Cupom>
                <TitleCupom>Você Possui algum CUPOM?</TitleCupom>
            </Cupom>
        </Container>
    );
}

export default Cart;
