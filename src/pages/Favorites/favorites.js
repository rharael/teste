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

export default Favorite;