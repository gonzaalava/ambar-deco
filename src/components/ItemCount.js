const ItemCount = ({stock, initial, onAdd}) => {
    return (
        <form>
            Stock: {stock}
            <br />
            <input id="cantidad" type="number" placeholder={initial} />
            <br />
            <button onClick={() => onAdd(9)}> Agregar al carrito</button>
        </form>
    );
};

export default ItemCount;
