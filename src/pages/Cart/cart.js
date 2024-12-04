import React from "react";
import { Container, Image, } from './styles'

function Cart (){
    return (
        <Container>
            <Image>
                 source={require('../../assets/images/iphone.png')}
            </Image>
        </Container>
    );
}

export default Cart;
