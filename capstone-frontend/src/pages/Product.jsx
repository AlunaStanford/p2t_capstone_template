import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../services/ProductService';
import { useCartStore } from '../store/CartStore';

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addItem } = useCartStore();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} width="300" />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <h3>${product.price}</h3>
      <button onClick={() => addItem(product)}>Add to Cart</button>
    </div>
  );
};

export default Product;