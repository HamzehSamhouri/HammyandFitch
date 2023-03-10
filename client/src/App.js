import './static/css/App.css';

import React from 'react';
import { Routes, Route } from 'react-router-dom';

// CLIENT IMPORTS
import Homepage from './views/Homepage';
import Promotion from './views/Promotion';
import MensClothing from './views/MensClothing';
import WomensClothing from './views/WomensClothing';
import Detail from './views/Detail';
import Cart from './views/Cart';
import Login from './views/Login';
import Register from './views/Register';

// MANAGER IMPORTS
import ManagerLogin from './views/ManagerLogin';
import ManagerSite from './views/AllProducts';
import Create from './views/Create';
import UpdateProduct from './views/UpdateProduct';


function App() {

  return (
    <div className="App">
      <Routes>
        {/* CLIENT ROUTES */}
        <Route element={<Homepage />} path="/" />
        <Route element={<Promotion />} path="/promotion" />
        <Route element={<MensClothing />} path="/mensclothing" />
        <Route element={<WomensClothing/>} path="/womensclothing" />
        <Route element={<Detail />} path="/product/:id" />
        <Route element={<Cart />} path="/cart" />
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/register" />
        {/* MANAGER ROUTES */}
        <Route element={<ManagerLogin />} path="/managerlogin" />
        <Route element={<ManagerSite />} path="/managersite" />
        <Route element={<Create />} path="/create" />
        <Route element={<UpdateProduct />} path="/product/edit/:id" />
      </Routes>
    </div>
  );
}


export default App;