import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/SideBar';
import Dashboard from './Pages/Dashboard';
import About from './Pages/About';
import Analytics from './Pages/Analeics';
import Comment from './Pages/Comment.js';
import Product from './Pages/Product';
import ProductList from './Pages/ProductList';
import Login from './Login'
const App = () => {
  return ( 
    
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productList" element={<ProductList />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;

