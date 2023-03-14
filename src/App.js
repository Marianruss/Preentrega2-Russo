import { Navbar } from './components/header';
import { ItemListContainer } from './components/itemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greetings={"Novedades destacadas"}/>
    </div>
  );
}

export default App;
