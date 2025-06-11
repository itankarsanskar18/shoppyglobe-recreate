import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setError('');
      })
      .catch(() => {
        setError('Failed to load product details.');
        setProduct(null);
      });
  }, [id]);

  if (error) {
    return (
      <div className="p-4 text-center text-red-600 font-semibold">
        {error}
      </div>
    );
  }

  if (!product) {
    return (
      <div className="p-4 text-center">
        Loading product details...
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">{product.title}</h2>
      <div className="flex flex-wrap gap-6">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full max-w-md rounded shadow"
        />
        <div className="flex flex-col justify-between">
          <p className="text-lg mb-2">{product.description}</p>
          <p className="text-xl font-semibold text-green-700">₹ {product.price}</p>
          <p className="text-sm text-gray-500 mt-2">Category: {product.category}</p>
        </div>
      </div>
    </div>
  );
}
