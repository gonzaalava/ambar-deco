import './App.css';
import ItemLIstContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/Navbar/NavBar';
import ItemCount from './components/ItemCount/ItemCount';
import {React, useEffect, useState } from 'react';
import Products from "./components/Data/products";
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

  const [items, setItems] = useState([]);
  
  useEffect(() => {
    new Promise((success, failure) => {
      setTimeout(() => {
        success(Products);
      }, 2000);
    }).then((resultado) => setItems(resultado));
  },
  []
  );

  return (
    <BrowserRouter>
      <NavBar />
        <Switch>
          <Route exact path="/"> 
          <ItemLIstContainer items={props.items} />
          </Route>
        
      <ItemCount stock={5} initial={1} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
