import { Navbar } from './components/header/header';
import { ItemListContainer } from './components/itemListContainer/itemListContainer';
import { useState } from 'react';
import { Cart } from './contexts/CartContext';
import { ItemDetails } from './components/itemDetailsContainer/itemDetailsContainer';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Index } from './components/index';
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';
import { Footer } from './components/footer/footer';


function App() {


  return (
    <BrowserRouter>



      <Navbar />

      <Routes>
        <Route path='/detail/:id' element={<ItemDetails />} />
        <Route path='/' element={<Index />} />
        <Route path='/:category' element={<ItemListContainer />} />
        <Route path='/:category/:subcategory' element={<ItemListContainer />} />
        <Route path='*' element={<Navigate to={"/"} />} />
      </Routes>

      <Footer />

    </BrowserRouter>

  );
}


export default App;
