import './App.css';
import ItemLIstContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/Navbar/NavBar';
import ItemCount from './components/ItemCount/ItemCount';
import {React, useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";
import Home from "./components/Home/home";
import About from "./components/About/about";
import Topics from "./components/Topics/Topics";
import PageError from "./components/ErrorPage/ErrorPage.js";

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

  const [items, setItems] = useState([]);
  
  useEffect(() => {
    new Promise((success, failure) => {
      setTimeout(() => {
        success(itemsMockData);
      }, 2000);
    }).then((resultado) => setItems(resultado));
  },
  []
  );



  return (
    <Router>
      <NavBar />
      <ItemLIstContainer items={props.items} />
      <ItemCount stock={5} initial={1} />
    </Router>
  );
};

export default App;
