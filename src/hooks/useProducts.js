// src/hooks/useProducts.js
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useProducts(category = '') {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const fetchUrl = category
      ? `https://dummyjson.com/products/category/${category}`
      : 'https://dummyjson.com/products';

    axios.get(fetchUrl)
      .then(res => {
        setProducts(res.data.products || res.data); // category endpoint returns {products: []}, general returns products array
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to fetch products');
        setLoading(false);
      });
  }, [category]);

  return { products, loading, error };
}
