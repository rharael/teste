import { useContext, useState } from "react";
import { FlatList } from "react-native";
import Styles from "./styles";
import ProductFavorite from "./productfavorite";
import { ProductsFavoriteContext } from "../../utils/context/ProductsFavoriteContext";

export default function Favorite() {
  const { favoriteProducts } = useContext(ProductsFavoriteContext);
  const [columns, setColumns] = useState(2);

  return (
    <Styles.Container>
      <Styles.Main>
        {favoriteProducts.length !== 0 ? (
          <Styles.Products>
            <FlatList
              data={favoriteProducts}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => <ProductFavorite data={item} />}
              numColumns={columns}
              columnWrapperStyle={{ justifyContent: "space-between" }}
              scrollEnabled={false}
            />
          </Styles.Products>
        ) : (
          <Styles.EmptyContainer>
            <Styles.EmptyImage
              source={require("../../assets/images/favorite.png")}
            />
            <Styles.EmptyTitle>
              Seus produtos favoritos ficarão aqui
            </Styles.EmptyTitle>
          </Styles.EmptyContainer>
        )}
      </Styles.Main>
    </Styles.Container>
  );
}