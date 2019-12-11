import React, { useState } from 'react';
import { useFuzzy } from 'react-use-fuzzy';
import './App.css';

interface Product {
  id: number;
  name: string;
}

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return <li>{product.name}</li>;
}

interface ProductsListProps {
  products: Product[];
}

const ProductsList: React.FC<ProductsListProps> = ({ products }) => {
  return (
    <ul>
    {
      products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))
    }
    </ul>
  )
}

const App: React.FC = () => {
  const productsData: Product[] = [
    {
      id: 1,
      name: 'T-shirt',
    },
    {
      id: 2,
      name: 'Short',
    },
  ]
  const [products, setProducts] = useState<Product[]>(productsData);

  const { result, keyword, search } = useFuzzy<Product>(products, {
    keys: ['name'],
  });

  return (
    <div className='App'>
      <header className='App-header'>
        <input
          type='text'
          placeholder='Search products'
          value={keyword}
          onChange={(e) => search(e.target.value)}
          />
        <ProductsList products={result} />
      </header>
    </div>
  );
}

export default App;
