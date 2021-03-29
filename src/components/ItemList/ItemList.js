import Item from "../Item/Item";

const ItemList = ({items}) => {
    <>
        <h1>Listado de Cuadros</h1>
        <ul>
            {items.map((x, i) => (
                <Item key={i} item={x} />
            ))} 
        </ul>
    </>
};

export default ItemList;