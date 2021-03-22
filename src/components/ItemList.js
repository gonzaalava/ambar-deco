import Item from "../components/Item.js";

const ItemList = (props) => (
<>
    <h1>Lista</h1>
    <ul>
        {props.items.map((x, index) => (
            <Item key={index} item={x}/>       
        ))}   
    </ul>
</>
);

export default ItemList;