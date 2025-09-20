import React from 'react';

function CartPage({ cart, updateQuantity, addToCart }) {
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountedPrice = totalPrice * 0.9; // 10% discount

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map(item => (
            <div key={item.id} className="flex items-center justify-between bg-white p-4 rounded shadow">
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.title} className="h-20 w-20 object-contain"/>
                <div>
                  <h2 className="font-bold">{item.title}</h2>
                  <p>${item.price}</p>
                  <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => updateQuantity(item.id, -1)} className="px-2 py-1 bg-gray-300 rounded">-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, 1)} className="px-2 py-1 bg-gray-300 rounded">+</button>
                <button onClick={() => addToCart(item)} className="px-2 py-1 bg-red-500 text-white rounded">Remove</button>
              </div>
            </div>
          ))}

          <div className="text-right mt-4">
            <p className="text-lg">Subtotal: ${totalPrice.toFixed(2)}</p>
            <p className="text-xl font-bold">Total after 10% discount: ${discountedPrice.toFixed(2)}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
