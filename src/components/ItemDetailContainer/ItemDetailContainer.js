import React from "react";
import {useEffect} from React;
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = ({items}) => {

  useEffect(() => {
    new Promise((success, failure) => {
      setTimeout(() => {
        success({ id, title, description, price, pictureUrl});
      }, 2000);
    }).then((resultado) => setItems(resultado));
  }, []);

  return (
  <ItemDetail />
  );

};

export default ItemDetailContainer;
