import React from 'react';
import ProductItem from './ProductItem';
import useProducts from '../hooks/useProducts';

export default function ProductList() {
  const { products, loading, error } = useProducts();

  if (loading) return <p className="text-center">Loading products...</p>;
  if (error) return <p className="text-center text-red-500">Failed to load products.</p>;

  return (
    <div className="flex flex-col gap-6">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}