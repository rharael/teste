import React, {useState, useEffect} from 'react'
import { Keyboard, FlatList } from 'react-native';
import Styles from './styles';
import ProductCard from './productcard';
import Api from '../../services/Api';
import { ActivityIndicator } from 'react-native';

export default function Home(){
  const [columns, setColumns] = useState(2);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [searchProduct, setSearchProduct] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect( () => {
    fetchCategories();
    fetchProducts();
  }, []);

  const fetchCategories = async () => {
    try{
      const response = await Api.get('products/categories');
      setCategories(response.data);
    }
    catch(error){
      console.error('Error when searching categories: ', error);
    }
  };

  const fetchProducts = async () => {
    setLoading(true);
    try{
      const response = await Api.get('products');
      setProducts(response.data);
      setFilterProducts(response.data);
    }
    catch(error){
      console.error('Error when searching for products: ', error);
    }
    finally{
      setLoading(false);
    }
  };

  const handleCategory = async (category) => {
    const filter = products.filter((product) => 
      product.category === category
    );
    setFilterProducts(filter);
  };

  const handleSearch = async (search) => {
    setSearchProduct(search);
    
    if(search.trim() === ''){
      setFilterProducts(products);
    }
    else{
      const filter = products.filter((product) => 
        product.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilterProducts(filter);
    }
  };

  if(loading){
    return(
      <Styles.LoadingContainer>
        <ActivityIndicator
          color='#121212'
          size={45}
        />
      </Styles.LoadingContainer>
    )
  }

  else{
    return(
      <Styles.Container>
      <Styles.Header>
        <Styles.HeaderDiv>
          <Styles.WelcomeDiv>
            <Styles.WelcomeText>Bem-vindo</Styles.WelcomeText>
            <Styles.UserName>Nome do Usuário</Styles.UserName>
          </Styles.WelcomeDiv>

          <Styles.ShoppingCart>
            <Styles.ShoppingCartImage/>
          </Styles.ShoppingCart>
        </Styles.HeaderDiv>
        
        <Styles.SearchProductWrapper>
          <Styles.SearchIcon/>
            <Styles.SearchProduct 
              placeholder='Buscar Produto'
              value={searchProduct}
              onChangeText={handleSearch}
              onSubmitEditing={Keyboard.dismiss}
            />
        </Styles.SearchProductWrapper>
      </Styles.Header>

      {filterProducts.length === 0 ? (
        <Styles.EmptyContainer>
          <Styles.EmptyImage source={require('../../assets/images/search.png')}/>
          <Styles.EmptyTitle>Nenhum produto encontrado</Styles.EmptyTitle>
          <Styles.EmptySubitle>Tente novamente</Styles.EmptySubitle>
        </Styles.EmptyContainer>
        
        ) : (

        <Styles.Main showsVerticalScrollIndicator={false}>
          <Styles.SectionTitle>Categorias</Styles.SectionTitle>
        
          <Styles.Categories horizontal showsHorizontalScrollIndicator={false}>
            {categories.map((category) => (
              <Styles.CategoryItem key={category} onPress={() => handleCategory(category)}>
                <Styles.CategoryImage>
                  <Styles.CategoryIcon />
                </Styles.CategoryImage>
                <Styles.CategoryText>{category}</Styles.CategoryText>
              </Styles.CategoryItem>
            ))}
          </Styles.Categories>

          <Styles.LineDiv/>
          <Styles.SectionTitle>Produtos</Styles.SectionTitle>
        
          <Styles.Products>      
            <FlatList
              data={filterProducts}
              keyExtractor={(item) => String(item.id)}
              renderItem={({item}) => <ProductCard data={item}/>}
              numColumns={columns}
              columnWrapperStyle = {{justifyContent:'space-between'}}
              scrollEnabled={false}
            />
          </Styles.Products>
        </Styles.Main>
      )}
    </Styles.Container>
  )
}}