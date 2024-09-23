import './app.scss';

import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Main from './components/pages/Main.jsx';
import Cart from './components/pages/Cart.jsx';

export const CartContext = React.createContext('');

function App() {
  const [counter, setCounter] = useState(0);
  const [cart, setCart] = useState([]);

  const incrementCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const decrementCounter = () => {
    setCounter((prevCounter) => Math.max(prevCounter - 1, 0));
  };

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem,
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((cartItem) => cartItem.id !== itemId));
  };

  const incrementItem = (itemId) => {
    setCart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.id === itemId ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem,
      ),
    );
  };

  const decrementItem = (itemId) => {
    setCart((prevCart) =>
      prevCart
        .map((cartItem) =>
          cartItem.id === itemId
            ? { ...cartItem, quantity: Math.max(cartItem.quantity - 1, 0) }
            : cartItem,
        )
        .filter((cartItem) => cartItem.quantity > 0),
    );
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        counter,
        incrementCounter,
        decrementCounter,
        cart,
        addToCart,
        removeFromCart,
        incrementItem,
        decrementItem,
        getTotalPrice,
      }}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </CartContext.Provider>
  );
}

function NotFound() {
  return <div>Page not found</div>;
}

export default App;
