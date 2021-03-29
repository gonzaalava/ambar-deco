const ItemDetail = ({item}) => {

	return (
        <ul>
            <li>Id:{item.id}</li>
            <li>Titulos:{item.title}</li>
            <li>Descripción:{item.description}</li>
            <li>Precio{item.price}</li>
            <li><img src={item.pictureUrl} alt="prducto" height="100" width="auto" /></li>
        </ul>
    )

}

export default ItemDetail;