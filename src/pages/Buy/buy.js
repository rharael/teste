import React, { useState } from "react";
import { FlatList } from "react-native";
import Styles from "./styles";

export default function Buy({ navigation }) {
  const buys = [
    {
      id: "#999999",
      data: "20 de novembro de 2024",
      product: [
        {
          image: require("../../assets/images/iphone.png"),
          name: "Apple iPhone Pro",
          quantity: "2",
        },
        {
          image: require("../../assets/images/iphone.png"),
          name: "Samsung Galaxy A15",
          quantity: "1",
        },
        {
          image: require("../../assets/images/iphone.png"),
          name: "PlayStation 5 Slim",
          quantity: "3",
        },
        {
          image: require("../../assets/images/iphone.png"),
          name: "Apple iPhone Pro",
          quantity: "2",
        },
      ],
    },
    {
      id: "#888888",
      data: "18 de novembro de 2024",
      product: [
        {
          image: require("../../assets/images/iphone.png"),
          name: "Apple iPhone Pro",
          quantity: "3",
        },
      ],
    },
  ];

  const [expandedBuys, setExpandedBuys] = useState({});

  const handleExpand = (buyId) => {
    setExpandedBuys((prevState) => ({
      ...prevState,
      [buyId]: !prevState[buyId],
    }));
  };

  return (
    <Styles.Container>
      <Styles.Header>
        <Styles.BackButton onPress={() => 
          navigation.reset({index: 0, routes:[{name: 'HomeStack'}]})}>
          <Styles.BackIcon />
        </Styles.BackButton>

        <Styles.HeaderText>Suas compras</Styles.HeaderText>
      </Styles.Header>

      {buys.length === 0 ? (
        <Styles.EmptyBuyContainer>
          <Styles.EmptyBuyImage source={require('../../assets/images/buy.png')}/>
          <Styles.EmptyBuyText>Não há histórico de compras</Styles.EmptyBuyText>
        </Styles.EmptyBuyContainer>
      ) : (
        <Styles.Main vertical showsVerticalScrollIndicator={false}>
          <FlatList
            data={buys}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
            renderItem={({ item }) => {
              const isExpanded = expandedBuys[item.id];
              const productsToShow = isExpanded
                ? item.product
                : item.product.slice(0, 3);
              const remainingProducts = item.product.length - 3;

              return (
                <Styles.BuysContainer>
                  <Styles.BuysHeader>
                    <Styles.BuyData>{item.data}</Styles.BuyData>
                    <Styles.BuyCode>{item.id}</Styles.BuyCode>
                  </Styles.BuysHeader>

                  {productsToShow.map((product, index) => (
                    <Styles.BuyedProductsContainer key={index}>
                      <Styles.BuyedProduct>
                        <Styles.ProductImageArea>
                          <Styles.ProductImage source={product.image} />
                        </Styles.ProductImageArea>

                        <Styles.ProductInformation>
                          <Styles.ProductInformationWrapper>
                            <Styles.ProductInformationTitle numberOfLines={1}>
                              {product.name}
                            </Styles.ProductInformationTitle>
                            <Styles.ProductInformationText>
                              Quantidade: {product.quantity}
                            </Styles.ProductInformationText>
                          </Styles.ProductInformationWrapper>
                          <Styles.ProductInformationWrapper>
                            <Styles.ProductInformationTitle>
                              Chegará em breve
                            </Styles.ProductInformationTitle>
                            <Styles.ProductInformationText>
                              Em até 10 dias úteis
                            </Styles.ProductInformationText>
                          </Styles.ProductInformationWrapper>
                        </Styles.ProductInformation>
                      </Styles.BuyedProduct>
                    </Styles.BuyedProductsContainer>
                  ))}

                  {!isExpanded && remainingProducts > 0 && (
                    <Styles.MoreProductText
                      onPress={() => handleExpand(item.id)}
                    >
                      MAIS{" "}
                      <Styles.MoreProductQuantity>
                        {remainingProducts}
                      </Styles.MoreProductQuantity>{" "}
                      {remainingProducts === 1 ? "PRODUTO" : "PRODUTOS"}
                    </Styles.MoreProductText>
                  )}

                  {isExpanded && (
                    <Styles.MoreProductText
                      onPress={() => handleExpand(item.id)}
                    >
                      MOSTRAR MENOS
                    </Styles.MoreProductText>
                  )}
                </Styles.BuysContainer>
              );
            }}
          />
        </Styles.Main>
      )}
    </Styles.Container>
  );
}
