import Styles from "./styles";
import {useNavigation} from '@react-navigation/native';

export default function ProductFavorite({ data }) {
  const navigation = useNavigation();

  return (
    <Styles.ProductItem onPress={() => navigation.navigate('FavoriteDetails', {product: data})}>
      <Styles.ProductAreaImage>
        <Styles.ProductImage
          source={{uri:data.image}}
        />
      </Styles.ProductAreaImage>

      <Styles.ProductName numberOfLines={2}>{data.title}</Styles.ProductName>

      <Styles.ProductInformation>
        <Styles.ProductPrice>$ {data.price.toFixed(2)}</Styles.ProductPrice>
        
        <Styles.ProductStars>
          <Styles.ProductStarIcon />
          <Styles.ProductStarValue>{data.rating.rate}</Styles.ProductStarValue>
        </Styles.ProductStars>
      </Styles.ProductInformation>
    </Styles.ProductItem>
  );
}
