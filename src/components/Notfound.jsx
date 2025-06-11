import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="text-center mt-20">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Oops! The page you are looking for does not exist.</p>
      <Link 
        to="/" 
        className="text-blue-600 underline hover:text-blue-800"
      >
        Go back to Home
      </Link>
    </div>
  );
}
