import './App.css';
import ItemLIstContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/Navbar/NavBar';
import ItemCount from './components/ItemCount/ItemCount';
import {React, useEffect, useState } from 'react';

//Fotos productos
import cuadromujer from "./assets/cuadros/cuadromujer.svg";
import figuramujer from "./assets/cuadros/figuramujer.svg";
import geometria from "./assets/cuadros/geometria.svg";


function App() {

  const itemsMockData = [
    {
        id: 1,
        title: "Cara Mujer Pincel",
        description: "Cuadro Ilustrado",
        price: 27000,
        pictureUrl: {cuadromujer},
    },
    {
        id: 2,
        title: "Power Geometry",
        description: "Cuadro Ilustrado",
        price: 25000,
        pictureUrl: {geometria},
    },
    {
        id: 3,
        title: "Silueta Mujer Trazo Grueso",
        description: "Cuadro Ilustrado",
        price: 27000,
        pictureUrl: {figuramujer},
    }
  
  ];

  v
  
  useEffect(() => {
    new Promise((success, failure) => {
      setTimeout(() => {
        success([itemsMockData]);
      }, 2000);
    }).then((resultado) => setItems(resultado));
  });

  return (
    <>
    <NavBar />
    <ItemLIstContainer 
      title="Catalogo"
      items={items} />
    <ItemCount stock={5} initial={1} />
    </>
  );
};

export default App;
