import React from 'react';

export default function CartItem({ item, onRemove, onQuantityChange }) {
  const { title, price, quantity, thumbnail } = item;

  const handleQtyChange = (e) => {
    const newQty = parseInt(e.target.value, 10);
    if (!isNaN(newQty) && newQty > 0) {
      onQuantityChange(newQty);
    }
  };

  return (
    <div className="flex items-center gap-4 p-3 border rounded shadow-sm bg-white">
      <img src={thumbnail} alt={title} className="w-20 h-20 object-cover rounded" />
      <div className="flex-1">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-red-600 font-bold">₹ {price}</p>
      </div>
      <input
        type="number"
        min="1"
        value={quantity}
        onChange={handleQtyChange}
        className="w-16 p-1 border rounded"
      />
      <button
        onClick={onRemove}
        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
      >
        Remove
      </button>
    </div>
  );
}
