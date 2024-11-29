import React, { useState } from 'react';
import {
  Container, 
  Header,
  BackButton,
  BackIcon,
  Product,
  ProductImageArea,
  ProductImage,
  ProductTitle,
  ProductHeader,
  IconsArea,
  IconButton,
  ShareIcon,
  FavoriteIcon,
  Description,
  ReadMore,
  ReviewContainer,
  Stars,
  Reviews,
  StarIcon,
  StarContent,
  ReviewValue,
  ReviewContent,
  DiscountPrice,
  ProductPrice,
  Actions,
  QuantityControl,
  QuantityButton,
  QuantityText,
  QuantityUp,
  QuantityDown,
  AddCartButtom,
  AddCartIcon,
  AddCartText,
} from './style';

export default function Details(){
  const [expandedDescription, setExpandedDescription] = useState(false);
  const [visibleModal, setVisibleModal] = useState(false);

  return(
    <Container>
      <Header>
        <BackButton>
          <BackIcon/>
        </BackButton>
      </Header>

      <Product showsVerticalScrollIndicator={false}>
        <ProductImageArea>
          <ProductImage source={require('../../assets/images/iphone.png')}/>
        </ProductImageArea>

        <ProductHeader>
          <ProductTitle>Apple iPhone 14 Pro</ProductTitle>

          <IconsArea>
            <IconButton>
              <ShareIcon/>
            </IconButton>
            <IconButton>
              <FavoriteIcon/>
            </IconButton>
          </IconsArea>
        </ProductHeader>

        <Description numberOfLines={expandedDescription ? 0 : 2}>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Torquent consectetur justo dictumst; suspendisse aliquam duis tellus. Lacinia netus orci aptent amet fames, platea pulvinar. Dignissim commodo non himenaeos eget; dignissim quis.
        </Description>
        <ReadMore onPress={() => setExpandedDescription(!expandedDescription)}>
          {expandedDescription ? "Ler menos" : "Ler mais"}
        </ReadMore>

        <ReviewContainer>
          <Stars>
            <StarIcon/>
            <StarContent>5.0</StarContent>
          </Stars>
          <Reviews>
            <ReviewValue>23</ReviewValue>
            <ReviewContent>avaliações</ReviewContent>
          </Reviews>
        </ReviewContainer>

        <DiscountPrice>R$ 6.999,00</DiscountPrice>
        <ProductPrice>R$ 6.999,00</ProductPrice>
      </Product>

      <Actions>
        <QuantityControl>
          <QuantityButton><QuantityUp/></QuantityButton>
          <QuantityText>1</QuantityText>
          <QuantityButton><QuantityDown/></QuantityButton>
        </QuantityControl>

        <AddCartButtom>
          <AddCartIcon/>
          <AddCartText onPress={() => setVisibleModal(true)}>Adicionar ao carrinho</AddCartText>
        </AddCartButtom>
      </Actions>
    </Container>
  );
}