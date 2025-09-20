import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProductPage({ cart, addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map(product => (
        <div key={product.id} className="bg-white p-4 rounded shadow">
          <img src={product.image} alt={product.title} className="h-40 w-full object-contain mb-4"/>
          <h2 className="font-bold text-lg">{product.title}</h2>
          <p className="text-gray-700">${product.price}</p>
          <p className="text-sm mt-2">{product.description.substring(0, 100)}...</p>
          <button
            onClick={() => addToCart(product)}
            className={`mt-4 w-full py-2 rounded ${cart.find(item => item.id === product.id) ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'} text-white`}
          >
            {cart.find(item => item.id === product.id) ? 'Remove from Cart' : 'Add to Cart'}
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductPage;
