import { Navbar } from './components/header/header';
import { ItemListContainer } from './components/itemListContainer/itemListContainer';
import { useState } from 'react';
import { ItemDetails } from './components/itemDetailsContainer/itemDetailsContainer';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Index } from './components/index';


function App() {
  return (

    <BrowserRouter>



      <Navbar />

      <Routes>
        <Route path='/detail/:id' element={<ItemDetails/>}/>
        <Route path='/' element={<Index/>} />
        <Route path='/:category' element={<ItemListContainer/>}/>
        <Route path='/:category/:subcategory' element={<ItemListContainer/>}/>
        <Route path='*' element={<Navigate to={"/"} />}/>
      </Routes>
      
    </BrowserRouter>
  );
}


export default App;
