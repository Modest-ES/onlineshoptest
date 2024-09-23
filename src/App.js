import './app.scss';

import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Main from './components/pages/Main.jsx';
import Cart from './components/pages/Cart.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default App;
