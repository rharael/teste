import { View, Text } from 'react-native';
import {
  Container,
  Header,
  HeaderDiv,
  WelcomeDiv,
  WelcomeText,
  UserName,
  ShoppingCart,
  ShoppingCartImage,
  Main,
  SearchProductWrapper,
  SearchProduct,
  SearchIcon,
  SectionTitle,
  Categories,
  CategoryItem,
  CategoryImage,
  CategoryIcon1,
  CategoryIcon2,
  CategoryIcon3,
  CategoryIcon4,
  CategoryIcon5,
  CategoryText,
  Products,
  ProductItem,
  ProductAreaImage,
  ProductImage,
  ProductName,
  ProductInformation,
  ProductPrice,
  ProductStars,
  ProductStarIcon,
  ProductStarValue,
  LineDiv
} from './styles';

export default function Home(){
  return(
    <Container>
      <Header>
        <HeaderDiv>
          <WelcomeDiv>
            <WelcomeText>Bem-vindo</WelcomeText>
            <UserName>Nome do Usuário</UserName>
          </WelcomeDiv>

          <ShoppingCart>
            <ShoppingCartImage/>
          </ShoppingCart>
        </HeaderDiv>
        
        <SearchProductWrapper>
          <SearchIcon/>
          <SearchProduct placeholder='Buscar Produto'/>
        </SearchProductWrapper>
      </Header>

      <Main showsVerticalScrollIndicator={false}>
        <SectionTitle>Categorias</SectionTitle>
        <Categories horizontal showsHorizontalScrollIndicator={false}>
          <CategoryItem>
            <CategoryImage>
              <CategoryIcon1/>
            </CategoryImage>
            <CategoryText>Smartphone</CategoryText>
          </CategoryItem>

          <CategoryItem>
            <CategoryImage>
              <CategoryIcon2/>
            </CategoryImage>
            <CategoryText>Cama</CategoryText>
          </CategoryItem>

          <CategoryItem>
            <CategoryImage>
              <CategoryIcon3/>
            </CategoryImage>
            <CategoryText>Brinquedos</CategoryText>
          </CategoryItem>

          <CategoryItem>
            <CategoryImage>
              <CategoryIcon4/>
            </CategoryImage>
            <CategoryText>Games</CategoryText>
          </CategoryItem>

          <CategoryItem>
            <CategoryImage>
              <CategoryIcon5/>
            </CategoryImage>
            <CategoryText>Notebooks</CategoryText>
          </CategoryItem>
        </Categories>

        <LineDiv/>

        <SectionTitle>Produtos</SectionTitle>
        <Products>      
          <ProductItem>
            <ProductAreaImage>
              <ProductImage source={require('../../assets/images/iphone.png')}/>
            </ProductAreaImage>
            <ProductName>Apple IPhone 14 Pro</ProductName>

            <ProductInformation>
              <ProductPrice>R$ 6.999,00</ProductPrice>
              
              <ProductStars>
                <ProductStarIcon/>
                <ProductStarValue>5.0</ProductStarValue>
              </ProductStars>
            </ProductInformation>
          </ProductItem>

          <ProductItem>
            <ProductAreaImage>
              <ProductImage source={require('../../assets/images/iphone.png')}/>
            </ProductAreaImage>
            <ProductName>Apple IPhone 14 Pro</ProductName>

            <ProductInformation>
              <ProductPrice>R$ 6.999,00</ProductPrice>

              <ProductStars>
                <ProductStarIcon/>
                <ProductStarValue>5.0</ProductStarValue>
              </ProductStars>
            </ProductInformation>
          </ProductItem>

          <ProductItem>
            <ProductAreaImage>
              <ProductImage source={require('../../assets/images/iphone.png')}/>
            </ProductAreaImage>
            <ProductName>Apple IPhone 14 Pro</ProductName>

            <ProductInformation>
              <ProductPrice>R$ 6.999,00</ProductPrice>

              <ProductStars>
                <ProductStarIcon/>
                <ProductStarValue>5.0</ProductStarValue>
              </ProductStars>
            </ProductInformation>
          </ProductItem>

          <ProductItem>
            <ProductAreaImage>
              <ProductImage source={require('../../assets/images/iphone.png')}/>
            </ProductAreaImage>
            <ProductName>Apple IPhone 14 Pro</ProductName>

            <ProductInformation>
              <ProductPrice>R$ 6.999,00</ProductPrice>

              <ProductStars>
                <ProductStarIcon/>
                <ProductStarValue>5.0</ProductStarValue>
              </ProductStars>
            </ProductInformation>
          </ProductItem>

        </Products>
      </Main>
    </Container>
  );
}