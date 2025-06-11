import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../Redux/cartSlice';
import CartItem from './CartItem';


export default function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleQuantityChange = (productId, quantity) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ productId, quantity }));
    }
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return <div className="p-4 text-center text-gray-600">Your cart is empty.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6">Shopping Cart</h2>
      <div className="flex flex-col gap-4">
        {cartItems.map((item) => (
          <CartItem
            key={item.productId}
            item={item}
            onRemove={() => handleRemove(item.productId)}
            onQuantityChange={(qty) => handleQuantityChange(item.productId, qty)}
          />
        ))}
      </div>
      <div className="mt-6 text-right text-xl font-semibold">
        Total: ₹ {totalPrice.toFixed(2)}
      </div>
    </div>
  );
}
