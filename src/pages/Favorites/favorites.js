
import React, { useState } from 'react';
import { FavoritesScreen, Title, Image} from "./styles";


function Favorite(){
    return (
    <FavoritesScreen>
          <Image 
              source={require('../../assets/image 2.png')}
          />
          <Title>Seus produtos favoritos ficarão aqui</Title> 
    </FavoritesScreen>
    );
}


export default Favorite;
