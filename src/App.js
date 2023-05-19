import { Navbar } from './components/header/header';
import { ItemListContainer } from './components/itemListContainer/itemListContainer';
import { ItemDetails } from './components/itemDetailsContainer/itemDetailsContainer';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { CartPage } from './components/cartListContainer/finalCart';
import { Index } from './components/index/index';
import 'alertifyjs/build/css/alertify.css';
import { PurchaseFinished } from './components/checkout/checkoutSuccess';
import { Footer } from './components/footer/footer';
import { Checkout } from './components/checkout/checkout';
import { ModalSorteo } from './components/utils/modalSorteo';


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
        <Route path='/cart' element={<CartPage/>} />
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/purchase_finished' element={<PurchaseFinished/>}/>
        <Route path='/rafle' element={<ModalSorteo/>}/>
      </Routes>

      <Footer />

    </BrowserRouter>

  );
}


export default App;
