import React from "react";
import { useEffect, useState} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = (props) => {

  const [items, setItems] = useState ([]);

  useEffect(() => {
    new Promise((success, failure) => {
      setTimeout(() => {
        success({id:1});
      }, 2000);
    }).then((resultado) => setItems(resultado));
  }, []);

  return (
  <ItemDetail />
  );

};

export default ItemDetailContainer;
