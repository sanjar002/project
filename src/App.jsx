import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import {  Route, Routes } from "react-router-dom";
import Productinfo from "./pages/productinfo/Productinfo";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from "./pages/cart/Cart";
import Like from "./pages/like/Like";
import SignUp from "./components/signUp/SignUp";
import SignIn from "./components/signIn/SignIn";


const App = () => {
  const [visible3, setisVisible3] = useState(false);
  
  return (
    <div>
      <ToastContainer/>
      <Header visible3={visible3} setisVisible3={setisVisible3}/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info/:id" element={<Productinfo />} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/like" element={<Like/>}/>
        <Route path="/signUp" element={<SignUp/>}/>
        <Route path="/signIn" element={<SignIn/>}/>
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
