import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';

function App() {
  const [cart, setCart] = useState([]);

  // Add product to cart
  const addToCart = (product) => {
    const exists = cart.find(item => item.id === product.id);
    if (!exists) {
      setCart([...cart, { ...product, quantity: 1 }]);
    } else {
      // Remove if already in cart
      setCart(cart.filter(item => item.id !== product.id));
    }
  };

  // Update quantity
  const updateQuantity = (id, amount) => {
    setCart(cart.map(item => item.id === id 
      ? { ...item, quantity: Math.max(1, item.quantity + amount) } 
      : item
    ));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow p-4 flex justify-between">
        <Link to="/" className="font-bold text-xl">React Store</Link>
        <Link to="/cart" className="font-semibold text-lg">
          Cart ({cart.length})
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<ProductPage cart={cart} addToCart={addToCart} />} />
        <Route path="/cart" element={<CartPage cart={cart} updateQuantity={updateQuantity} addToCart={addToCart} />} />
      </Routes>
    </div>
  );
}

export default App;
