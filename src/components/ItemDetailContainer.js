import ItemDetail from "../components/ItemDetail.js";
import { useEffect, useState } from 'react';

const ItemDetailContainer = (props) => ( 
    
    useEffect(() => {
    new Promise ((todoBien, todoMal) => {
      setTimeout(() => {
        todoBien (["Marco Perla","Marco Gris","Marco Liso","Marco Espejo"]);
      }, 2000); 
    }).then(resultado => setItems(resultado));
  });
);

export default ItemDetailContainer;