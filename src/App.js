import './App.css';
import './App.css';
import ItemLIstContainer from './components/ItemListContainer';
import NavBar from './components/NavBar.js';
import ItemCount from './components/ItemCount.js';

function App() {
  return (
    <div>
    <NavBar />
    <ItemLIstContainer />
    <ItemCount stock={9} initial={1} />
    </div>
  );
}

export default App;
