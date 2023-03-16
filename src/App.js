import { Navbar } from './components/header';
import { ItemListContainer } from './components/itemListContainer';
import { Product } from './components/utils/product-card';
// import "/Coder React/src/index.css"



function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greetings={"Novedades destacadas"} />
      <div>
        
      </div>
    </div>
  );
}

export default App;
