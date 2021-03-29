
const ItemDetail = (props) => {

	return (
        <ul>
            <li>{props.item.id}</li>
            <li>{props.item.title}</li>
            <li>{props.item.description}</li>
            <li>{props.item.price}</li>
            <li><img src={props.item.pictureUrl} alt="prducto" height="100" width="auto" /></li>
        </ul>
    )

}

export default ItemDetail;