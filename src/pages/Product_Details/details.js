import React, { useContext, useState } from 'react';
import { Modal, TouchableWithoutFeedback } from 'react-native';
import Styles from './styles';
import {useNavigation} from '@react-navigation/native';
import { ProductsCartContext } from '../../utils/context/ProductsCartContext';
import { ProductsFavoriteContext } from '../../utils/context/ProductsFavoriteContext';

export default function Details({ route, nav }){
  const navigation = useNavigation();
  const { product }  = route?.params;
  const [expandedDescription, setExpandedDescription] = useState(false);
  const [visibleModal, setVisibleModal] = useState(false);
  const [quantityProduct, setQuantityProduct] = useState(1);
  const { addProductCart } = useContext(ProductsCartContext);
  const [productCart, setProductCart] = useState({
    id: product.id,
    image: product.image,
    name: product.title,
    price: product.price,
    quantity: '',
  });
  const { favoriteProducts, toggleFavorite } = useContext(ProductsFavoriteContext);
  const isFavorited = favoriteProducts.some((item) => item.id === product.id);

  const handleIncrement = () => {
    setQuantityProduct((count) => count + 1);
  };

  const handleDecrement = () => {
    setQuantityProduct((count) => ( count > 1 ? count - 1 : count ));
  }

  const handleProductCart = () => {
    setProductCart(productCart.quantity = quantityProduct);
    addProductCart(productCart);
  }

  return(
    <Styles.Container>
      <Styles.Header>
        <Styles.BackButton 
        onPress={() => navigation.goBack()}>
          <Styles.BackIcon/>
        </Styles.BackButton>
      </Styles.Header>

      <Styles.Product showsVerticalScrollIndicator={false}>
        <Styles.ProductImageArea>
          <Styles.ProductImage source={{uri: product.image}}/>
        </Styles.ProductImageArea>

        <Styles.ProductHeader>
          <Styles.ProductTitle>{product.title}</Styles.ProductTitle>

          <Styles.IconsArea>
            <Styles.IconButton>
              <Styles.ShareIcon/>
            </Styles.IconButton>
            <Styles.IconButton onPress={() => toggleFavorite(product)}>
              {isFavorited ? (
                <Styles.FavoriteIconSelected/>
              ) : (
                <Styles.FavoriteIcon/>
              )}
            </Styles.IconButton>
          </Styles.IconsArea>
        </Styles.ProductHeader>

        <Styles.Description numberOfLines={expandedDescription ? 0 : 2}>
          { product.description }
        </Styles.Description>
        <Styles.ReadMore onPress={ () => setExpandedDescription(!expandedDescription) }>
          { expandedDescription ? "Ler menos" : "Ler mais" }
        </Styles.ReadMore>

        <Styles.ReviewContainer>
          <Styles.Stars>
            <Styles.StarIcon/>
            <Styles.StarContent>{product.rating.rate}</Styles.StarContent>
          </Styles.Stars>
          <Styles.Reviews>
            <Styles.ReviewValue>{product.rating.count}</Styles.ReviewValue>
            <Styles.ReviewContent>avaliações</Styles.ReviewContent>
          </Styles.Reviews>
        </Styles.ReviewContainer>

        <Styles.DiscountPrice>
          $ {(product.price + (product.price * 0.2)).toFixed(2)}
        </Styles.DiscountPrice>
        <Styles.ProductPrice>$ {product.price.toFixed(2)}</Styles.ProductPrice>
      </Styles.Product>

      <Styles.Actions>
        <Styles.QuantityControl>
          <Styles.QuantityButton onPress={handleDecrement}>
            <Styles.QuantityDown/>
          </Styles.QuantityButton>

          <Styles.QuantityText> {quantityProduct} </Styles.QuantityText>

          <Styles.QuantityButton onPress={handleIncrement}>
            <Styles.QuantityUp/>
          </Styles.QuantityButton>
        </Styles.QuantityControl>

        <Styles.AddCartButtom>
          <Styles.AddCartIcon/>
          <Styles.AddCartText 
            onPress={() => {setVisibleModal(true); handleProductCart()}}
          >Adicionar ao carrinho</Styles.AddCartText>
        </Styles.AddCartButtom>
      </Styles.Actions>


      <Modal transparent={true} animationType='fade' visible={visibleModal}>
        <TouchableWithoutFeedback onPress={() => setVisibleModal(false)}>
          <Styles.ModalOpacity>
            <Styles.ModalContainer onStartShouldSetResponder={() => true}>

              <Styles.CloseButton onPress={() => setVisibleModal(false)}>
                <Styles.CloseIcon/>
              </Styles.CloseButton>

              <Styles.AddedCartTitle>Adicionado ao carrinho</Styles.AddedCartTitle>
              <Styles.AddedCartSubtitle>Já é quase seu!</Styles.AddedCartSubtitle>

              <Styles.KeepShoppingButton>
                <Styles.KeepShoppingText 
                onPress={() => navigation.reset({index: 0, routes:[{name: 'Home'}]})}>
                  Continuar comprando
                </Styles.KeepShoppingText>
              </Styles.KeepShoppingButton>

              <Styles.GoToCartButton 
                onPress={() => navigation.reset({index: 0, routes:[{name: 'Cart'}]})}>
                <Styles.GoToCartText>Ir para o carrinho</Styles.GoToCartText>
              </Styles.GoToCartButton>

            </Styles.ModalContainer>  
          </Styles.ModalOpacity>
        </TouchableWithoutFeedback>
      </Modal>
    </Styles.Container>
  );
}