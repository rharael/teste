import React from "react";
import { Container, Title, Image} from "./styles";


function Favorite(){
    return (
    <Container>
        <Image 
            source={require('../../assets/image 2.png')}
        />
        <Title>Seus produtos favoritos ficarão aqui</Title>
    </Container>
    );
}

function FavoriteItems(){
    <ContainerItems>
        <Title>Apple Iphone 14 Pro</Title>
        <Text>R$6999,00</Text>
    </ContainerItems>
}

export default Favorite;