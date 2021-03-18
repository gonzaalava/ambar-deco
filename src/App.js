import './App.css';
import './App.css';
import ItemLIstContainer from './components/ItemListContainer.js';
import NavBar from './components/NavBar.js';
import ItemCount from './components/ItemCount.js';
import { useEffect, useState } from 'react';


function App() {
  const [items, setItems] = useState (["Marco Perla","Marco Gris","Marco Liso","Marco Espejo"])
  
  useEffect(() => {
    new Promise ((todoBien, todoMal) => {
      todo bien (["Marco Perla","Marco Gris","Marco Liso","Marco Espejo"])
    })
  })
  
  return (
    <div>
    <NavBar />
    <ItemLIstContainer items={} />
    <ItemCount stock={9} initial={1} />
    </div>
  );
}

export default App;
