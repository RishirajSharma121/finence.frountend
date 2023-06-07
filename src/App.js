import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/SideBar';
import Dashboard from './Pages/Dashboard';
import Incomes from './Pages/Incomes';
import Expeses from './Pages/Expeses';
import Comment from './Pages/Comment.js';
import Budget from './Pages/Budget';
import ProductList from './Pages/ProductList';
// import Login from './Login'
const App = () => {
  return ( 
    
    <BrowserRouter>
      <Sidebar>
        <Routes>
          {/* <Route path="/" element={<Login />} /> */}
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/Incomes" element={<Incomes />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/Exp" element={<Expeses />} />
          <Route path="/Bud" element={<Budget />} />
          <Route path="/productList" element={<ProductList />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;

