import ItemList from "../ItemList/ItemList";
import ItemCount from "../ItemCount/ItemCount";
import { Fragment, useState } from "react";

const ItemListContainer = ({items}) => { 

  //Decla Stock
  const cantStock = 5;
  const uniIni = 1;

  const [stockActual, setStockNow] = useState (cantStock);
  
  const updateStock = (e, stockNuevo) => {
    setStockNow((stockActual) => stockActual - stockNuevo);
  };
  
  return (
      <Fragment>
        <div>
          <ItemList items={items} />
        </div>
        <br />
        <ItemCount
            stock={stockActual}
            initial={uniIni}
            onAdd={updateStock}
        />
      </Fragment>
  );
};

export default ItemListContainer;