import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import ProductDetail from './components/ProductDetail';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-blue-600">ShoppyGlobe</Link>
          <nav>
            <Link to="/cart" className="text-lg font-semibold text-gray-700 hover:text-blue-600">
              Cart
            </Link>
          </nav>
        </header>

        <main className="max-w-6xl mx-auto p-6">
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            {/* Add more routes if needed */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}


