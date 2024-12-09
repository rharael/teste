import { useContext } from "react";
import { ItemProduct, Image, Content, Title, Price, QuantityWrapper, QuantityButton, Quantity } from "./styles";
import Icons from "../../assets/icons";
import { ProductsCartContext } from "../../utils/context/ProductsCartContext";

export default function ItemProducts({ data }) {
  const { updatedQuantity } = useContext(ProductsCartContext);

  return (
    <ItemProduct>
      <Image source={{uri: data.image}}/>
      <Content>
        <Title numberOfLines={1}>{data.name}</Title>
        <Price>$ {(data.price * data.quantity).toFixed(2)}</Price>
        <QuantityWrapper>
          <QuantityButton onPress={() => updatedQuantity(data.name, -1)}>
            <Icons.Minusfill />
          </QuantityButton>

          <Quantity>{data.quantity}</Quantity>

          <QuantityButton onPress={() => updatedQuantity(data.name, 1)}>
            <Icons.Plusfill />
          </QuantityButton>
        </QuantityWrapper>
      </Content>
    </ItemProduct>
  );
}
