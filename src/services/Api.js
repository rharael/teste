import axios from 'axios';

// > Rota para buscar as categorias dos produtos: products/categories
// > Rota para buscar os produtos: products

const Api = axios.create({
  baseURL: 'https://fakestoreapi.com/'
});

export default Api;