import axios from 'axios';
import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import './HomePage.css';
import { ProductsGrid } from './ProductsGrid';

export function HomePage({ cart, loadCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getHomeData = async () => {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/products`)
        setProducts(response.data);
    };

    getHomeData();
  }, []);

  return (
    <>
      <Header cart={cart} />

      <title>Ecommerce Page</title>

      <div className="home-page">
        <ProductsGrid products={products} loadCart={loadCart} />
      </div>
    </>
  );
}