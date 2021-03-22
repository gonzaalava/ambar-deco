import ItemList from "../components/ItemList.js";

const ItemListContainer = (props) => ( 
  <div>
    <h1>CUADROS</h1>
    <ItemList items={props.items} />
  </div>
);

export default ItemListContainer;