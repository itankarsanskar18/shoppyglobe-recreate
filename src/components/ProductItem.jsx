import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/cartSlice';
import { Link } from 'react-router-dom';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  // ✅ Guard: Don't render if product is missing
  if (!product || !product.id || !product.title || !product.price || !product.thumbnail) {
    return <div className="p-4 text-red-500">Invalid product data</div>;
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="w-full flex items-center shadow-lg p-4 rounded-lg bg-white">
      <Link to={`/product/${product.id}`} className="flex-shrink-0">
        <img
          className="w-32 h-32 object-cover rounded mr-6"
          src={product.thumbnail}
          alt={product.title}
        />
      </Link>

      <div className="flex flex-col flex-grow">
        <Link to={`/product/${product.id}`}>
          <h4 className="text-lg font-semibold mb-2 hover:underline">{product.title}</h4>
        </Link>
        <p className="text-red-600 font-bold text-base mb-4">₹ {product.price}</p>

        <button
          onClick={handleAddToCart}
          className="self-start px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
