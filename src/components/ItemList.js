import Item from "../components/Item.js";

const ItemList = (props) => (
    <div>
        {props.items.map((x) => (
            <Item item={x} />       
        ))}   
    </div>
);

export default ItemList;