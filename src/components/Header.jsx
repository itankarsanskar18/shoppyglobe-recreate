import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useSelector } from 'react-redux';

export default function Header() {
  // Get total quantity from cart in redux store
  const totalItems = useSelector(state =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="max-w-[1320px] mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link to="/">ShoppyGlobe</Link>
        </h1>
        <nav className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/cart" className="hover:underline">Cart</Link>
        </nav>
        <Link to="/cart" className="relative">
          <ShoppingCart size={24} />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}
